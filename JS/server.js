const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;


// Middleware 
app.use(express.static("../"));
app.use(express.json());

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "../index.html")
})

app.post("/", (req, res)=>{

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "daalim377@gmail.com",
            pass: "369852741dadA"
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: "the.daali.mouhcine@gmail.com",
        subject: `Message de: ${req.body.name}`,
        text:`Message de: - ${req.body.email} .
                        - ${req.body.name} .

        ${req.body.message}`

    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.send("error");
        }else {
            res.send("success");
        }
    })
})

app.listen(PORT , ()=>{
    console.log(`Serveur fonctionnant sur le port ${PORT}`)
})