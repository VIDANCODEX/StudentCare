const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const server = express()
server.use(bodyParser.json());
const path = require('path');
const fs = require('fs');
//Taille du fichier joint
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const cors =require('cors');
server.use(cors())

//Connexion à la base de données

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"formulaire_1",
});

db.connect(function (error){
    if (error){
        console.log("Erreur lors de la connexion à la base")
    }
    else{
        console.log("Connexion réussie")
    }
});
//Etablissement du port
server.listen(8085,function check(error){
    if (error) console.log("Erreur detectée");
    else console.log("En service sur le port 8085");
});

//Methode POST
server.post("/api/student/add", (req,res) =>{
    let details ={
        stname: req.body.stname,
        course: req.body.course,
        fee : req.body.fee,
    };
    let sql = "INSERT INTO student SET ?";
    db.query(sql,details, (error) => {
        if(error){
            res.send({status:false, message: "Error lors de la creation"});
        }
        else{
            res.send({status:true, message: "Utilisateur créee avec succes"});
        }
    });
});
//Methode GET

server.get("/api/student",(req,res)=>{
    var sql = "SELECT * from informations";
    db.query(sql,function (error,result){
        if (error)  console.log("Erreur lors de la requete");
        else res.send({status:true, data:result});
    });
});

//Methode SELECT
server.get("/api/student/:id", (req, res) => {
    const studentId = req.params.id;
    const sql = "SELECT * FROM informations WHERE id=" + studentId;

    db.query(sql, (error, result) => {
        if (error) {
            console.log("Erreur lors de la requete");
            res.status(500).send({ status: false, message: "Erreur lors de la requete" });
        } else {
            if (result.length === 0) {
                res.status(404).send({ status: false, message: "ID introuvable" });
            } else {
                res.send({ status: true, data: result });
            }
        }
    });
});


//Methode PUT
server.put("/api/student/update/:id", (req, res) => {
    const studentId = req.params.id;
    const { Arrivee, Delai, Statut } = req.body;

    const sql =
        "UPDATE informations SET Arrivee=?, Delai=?, Statut=? WHERE id=?";

    db.query(sql, [Arrivee, Delai, Statut, studentId], (error, result) => {
        if (error) {
            res.status(500).send({ status: false, message: "Echec lors de la modification" });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ status: false, message: "ID introuvable" });
            } else {
                res.send({ status: true, message: "Modification réussie" });
            }
        }
    });
});

//Methode Put pour etudiant
server.put("/api/user/update/:id", (req, res) => {
    const studentId = req.params.id;
    const {Commentaire} = req.body;

    const sql =
        "UPDATE informations SET Commentaire=? WHERE id=?";

    db.query(sql, [Commentaire, studentId], (error, result) => {
        if (error) {
            res.status(500).send({ status: false, message: "Echec lors de la modification" });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ status: false, message: "ID introuvable" });
            } else {
                res.send({ status: true, message: "Modification réussie" });
            }
        }
    });
});

//Methode Put pour dateRappel
server.put("/api/Rappel/:id", (req, res) => {
    const studentId = req.params.id;
    const {dateRappel} = req.body;

    const sql =
        "UPDATE informations SET dateRappel=? WHERE id=?";

    db.query(sql, [dateRappel, studentId], (error, result) => {
        if (error) {
            res.status(500).send({ status: false, message: "Echec lors de la modification" });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ status: false, message: "ID introuvable" });
            } else {
                res.send({ status: true, message: "Modification réussie" });
            }
        }
    });
});

server.post("/api/uploadFile", (req, res) => {
    const { fileData, fileName } = req.body;

    const userId = parseInt(fileName.split('.')[0]);
    const sql = "SELECT * FROM informations WHERE id = ?";
    db.query(sql, [userId], (error, result) => {
        if (error) {
            console.log("Error while checking user ID:", error);
            res.status(500).send({ status: false, message: "Erreur lors de la vérification de l'ID utilisateur" });
        } else {
            if (result.length === 0) {
                res.status(404).send({ status: false, message: "ID utilisateur introuvable" });
            } else {
                const binaryData = Buffer.from(fileData, 'base64');

                // On stocke les documents dans le fichier uploads
                const filePath = path.join(__dirname, 'uploads', fileName);
                fs.writeFile(filePath, binaryData, (err) => {
                    if (err) {
                        console.error(err);
                        res.send({ status: false, message: "Erreur lors du stockage du fichier" });
                    } else {
                        // File stored successfully, now update the "Statut" column
                        const sqlUpdateStatut = "UPDATE informations SET Statut='Attente' WHERE id=?";
                        db.query(sqlUpdateStatut, [userId], (error, result) => {
                            if (error) {
                                console.log("Error while updating Statut:", error);
                                res.status(500).send({ status: false, message: "Erreur lors de la mise à jour du statut" });
                            } else {
                                res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
                                res.send({ status: true, message: "Fichier stocké avec succès" });
                            }
                        });
                    }
                });
            }
        }
    });
});

server.get('/api/downloadFile/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const uploadDir = path.join(__dirname, 'uploads');

    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send({ status: false, message: "Erreur lors de la lecture du répertoire des fichiers" });
        } else {
            const matchingFiles = files.filter(file => file.startsWith(userId + '.'));

            if (matchingFiles.length === 0) {
                res.status(404).send({ status: false, message: "Fichier introuvable pour cet ID" });
            } else {
                const fileName = matchingFiles[0];
                const filePath = path.join(uploadDir, fileName);

                fs.readFile(filePath, (err, fileContent) => {
                    if (err) {
                        console.error(err);
                        res.status(500).send({ status: false, message: "Erreur lors de la lecture du fichier" });
                    } else {
                        const base64Data = fileContent.toString('base64');

                        const fileExtension = path.extname(fileName).slice(1);

                        res.send({ base64Data, fileExtension });
                    }
                });
            }
        }
    });
});

//On sauvegarde la progression
server.put("/api/step/:id", (req, res) => {
    const studentId = req.params.id;
    const {step} = req.body;

    const sql =
        "UPDATE informations SET step=? WHERE id=?";

    db.query(sql, [step, studentId], (error, result) => {
        if (error) {
            res.status(500).send({ status: false, message: "Echec lors de la sauvegarde " });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ status: false, message: "ID introuvable" });
            } else {
                res.send({ status: true, message: "Progression enregistré" });
            }
        }
    });
});



//////// Loggin 
server.post('/api/login', (req, res, userId, userStep) => {
    const { email, password } = req.body;
    const query = 'SELECT id,step FROM informations WHERE email = ? AND password = ?';
  
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Database query error: ' + err.stack);
        res.json({ success: false, message: 'Internal server error' });
        return;
      }
  
      if (results.length === 1) {
        const userId = results[0].id;
        const userStep = results[0].step;
        res.json({ success: true, message: 'Login successful' , userId, userStep});
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    });
  });