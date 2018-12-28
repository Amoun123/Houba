const Joi = require('joi');

const Marsupilami = Joi.object().keys({
    _id: Joi.string(),
    Nom: Joi.string(),
    famille:Joi.string(),
    age:Joi.string(),
    race:Joi.string(),
    nourriture:Joi.string(),
    username: Joi.string().required(),
    pass: Joi.string().required(),

});



module.exports = {Marsupilami};
