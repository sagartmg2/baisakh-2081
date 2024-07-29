const bcrypt = require("bcrypt")
const Joi = require("joi")
const User = require("../model/User")

async function signup(req, res) {
    try {
        /* TODO: validate form fields */
        const signupValidationSchema = Joi.object({
            name: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().required().email(),
        })

        let status = signupValidationSchema.validate(req.body, {
            allowUnknown: true,
            abortEarly: false,
        })

        return res.status(400).send(status.error.details)
       
        let hashedPw = await bcrypt.hash(req.body.password, 10)

        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPw,
        })
        res.send(user)
    } catch (err) {
        console.log(err);
        res.status(500).send("server error")
    }
}

async function login(req, res) {
    /* validate form fields */
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        let matched = await bcrypt.compare(req.body.password, user.password)
        if (matched) {
            res.send(user)
            return
        }
    }
    res.status(401).send({
        msg: "Invlaid credentials.",
    })
}

module.exports = {
    login: login,
    signup: signup,
}
