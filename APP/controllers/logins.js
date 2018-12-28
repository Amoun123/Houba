const Router = require('express').Router();
const Marsupilami= require('../models/Marsupilami').model;
const Joi = require('joi');
const LoginValidation = require('../../validation').Login;

//login
Router.get("/logins/:username/:pass", (req, res) => {

    Marsupilami.findOne({
    'username': req.params.username,
    'pass': req.params.pass,
})
    .populate("logins")
    .exec((err, login) => {
    if (err) {
        console.error(err);
        res.boom.badImplementation("non");
    } else {
        if (login) {
            res.json("ok");
        } else {
            res.json("non");

}
}
});
});

//cheating on logout
Router.get('/logout', (req, res) => {
    res.redirect('');
});


module.exports = Router;