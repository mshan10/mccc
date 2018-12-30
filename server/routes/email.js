const router = require('express').Router()
const jsonParser = require('body-parser').json()
const nodemailer = require('nodemailer')

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

router.post('/', jsonParser, (req, res) => {
    const { name, email, phone, newMember, contact, message } = req.body
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mattshan10@gmail.com",
            pass: "jririshu16"
        }
    })

    let mailOptions = {
        from: 'MCCC Website <mattshan10@gmail.com>',
        to: 'mattshan10@gmail.com',
        subject: `MCCC Comment from ${name}`,
        html: `<p>New to this Church: ${newMember}<p></br>
            <p>Need contact: ${contact}<p></br>
            <p>${message}</p></br>
            <p>From: ${name}</p></br>
            <p>Email: ${email}</p>`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send({ error })
        } else {
            res.send('Email Sent')
        }
    })
})

module.exports = router
