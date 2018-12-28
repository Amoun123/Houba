const Router = require("express").Router();
const Marsupilami = require("../models/Marsupilami").model;
const Joi = require('joi');
const MarsupilamiValidation = require('../../validation').Marsupilami;

//get marsupilami by id
Router.get('/marsupilamis/:id', (req, res) => {
    Marsupilami.findOne({ _id: req.params.id })
    .exec((err, marsupilami) => {
    if (marsupilami) {
        if (err) {
            res.boom.badImplementation('Error occured while retreiving ');
        } else {
            res.json(marsupilami);
        }
    } else {
        res.boom.notFound('Unable to find ');
}
});
});

//get marupilami
Router.get('/marsupilamis', (req, res) => {
    Marsupilami.find({})
    .exec((err, marsupilami) => {
    if (marsupilami) {
        if (err) {
            res.boom.badImplementation('Error occured while retreiving ');
        } else {
            res.json(marsupilami);
        }
    } else {
        res.boom.notFound('Unable to find ');
}
});
});

//add a marsupilami
Router.post("/marsupilamis", (req, res) => {
    Joi.validate(req.body, MarsupilamiValidation, (err, value) => {
    Login.findOne({ _id: req.params.id })
if(err){
} else {
    let newMarsupilami= new Marsupilami(req.body);
    newMarsupilami.save(err => {
        if (err) {
            console.error(err);
            res.boom.badImplementation("Cannot save Marsupilami");
        } else {
            res.status(201).json(" Marsupilami saved successfully");
}
});
}
});
});

//remove a marsupilami
Router.delete('/marsupilamis/:id', (req, res) => {
    Marsupilami.findOne({ _id: req.params.id })
    .exec((err, marsupilami) => {
    if (marsupilami) {
        if (err) {
            res.boom.badImplementation('Error occured while retreiving ');
        } else {
            Marsupilami.remove({ _id: req.params.id }, err => {
                if (err) {
                    res.boom.badImplementation("Error occured while deleting ");
                } else {
                    res.json(" deleted successfully");
        }
        });
        }
    } else {
        res.boom.notFound("Unable to find Doc");
}
});
});


//update information of marsupilami
Router.put('/marsupilamis/:id', (req, res) => {
    Marsupilami.findOne({ _id: req.params.id })
    .exec((err, marsupilami) => {
    if (marsupilami) {
        Joi.validate(req.body, MarsupilamiValidation, (err, value) => {
            if(err){
                res.boom.badData("Invalid data", err);
            } else {
                const update = value;
        Marsupilami.findByIdAndUpdate(
            req.params.id,
            { $set: update },
            { new: true },
            (err, updatedMarsupilami) => {
            if (err) {
                res.boom.badImplementation("Error occured while updating doctor");
            } else {
                res.json(updatedMarsupilami);
    }
    }
    );
    }
    });
    } else {
        res.boom.notFound("Unable to find doctor");
}
});
});

module.exports = Router;
