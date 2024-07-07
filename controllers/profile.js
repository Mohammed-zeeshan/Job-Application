const Profile = require('../models/profile');

exports.createProfile = async (req, res, next) => {
    const fname = req.body.fname;
    const email = req.body.email;
    const skills = req.body.skills;
    const degree = req.body.degree;
    const branch = req.body.branch;
    const percentage = req.body.percentage;
    const signupId = req.user.id;
    await Profile.create({fname, email, skills, degree, branch, percentage, signupId}).then((profile) => {
        return res.status(201).json({profile, message: 'profile created'});
    }).catch((err) => {
        console.log(err);
    });
};

exports.getprofile = async (req, res, next) => {
    const signupId = req.user.id;
    await Profile.findAll({where: {signupId: signupId}}).then((profile) => {
        return res.status(201).json(profile[0]);
    }).catch((err) => {
        console.log(err);
    });
};