const bcrypt = require("bcrypt")
const Joi = require("joi")
const User = require("../model/User")
const jwt = require("jsonwebtoken")

async function signup(req, res) {
    try {
        /* TODO: validate form fields */
        const signupValidationSchema = Joi.object({
            name: Joi.string().required(),
            password: Joi.string().required().min(8),
            email: Joi.string().required().email(),
            role: Joi.string().required().valid("seller", "buyer"),
        })

        let validationStatus = signupValidationSchema.validate(req.body, {
            allowUnknown: true,
            abortEarly: false,
        })

        if (validationStatus.error) {
            let errors = validationStatus.error.details.map((el) => {
                return {
                    message: el.message,
                    field: el.context.key,
                }
            })

            return res.status(400).send({
                msg: "Bad request",
                errors,
            })
        }

        let existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(400).send({
                msg: "Bad request",
                errors: [
                    {
                        message: "email aready used",
                        field: "email",
                    },
                ],
            })
        }

        let hashedPw = await bcrypt.hash(req.body.password, 10)
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPw,
            role: req.body.role,
        })
        res.send(user)
    } catch (err) {
        console.log(err)
        res.status(500).send("server error")
    }
}

async function login(req, res) {
    /* validate form fields */
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        user = user.toObject() // converting mongoose user object to normal js object
        let matched = await bcrypt.compare(req.body.password, user.password)
        if (matched) {
            delete user.password
            const JWT_SECRETE_KEY = "shhhhh"
            let token = jwt.sign(user,JWT_SECRETE_KEY)
            user.token = token
            res.send({
                data: user,
            })
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
