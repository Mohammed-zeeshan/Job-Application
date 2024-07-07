const Job = require('../models/job');
const SignUp = require('../models/signup');
const Userjob = require('../models/userjob');

exports.postjob = async (req, res, next) => {
    const cname = req.body.cname;
    const title = req.body.title;
    const salary = req.body.salary;
    const location = req.body.location;
    await Job.create({cname, title, salary, location, status: 'pending'}).then((jobs) => {
        return res.status(201).json(jobs);
    }).catch((err) => {
        console.log(err);
    });
};

exports.searchjob = async (req, res, next) => {
    const search = req.params.search;
    await Job.findAll({where: { cname:  search}}).then((jobs) => {
        if (jobs.length > 0) {
            return res.status(201).json({jobs, message: 'Found'});
        } else {
            return res.status(201).json({message: 'Not found'});
        }
    }).catch((err) => {
        console.log(err);
    });
};

exports.applyjob = async (req, res, next) => {
    const jobId = req.body.id;
    const signupId = req.user.id;
    await Userjob.create({signupId: signupId, jobId: jobId}).then((data) => {
        return res.status(200).json({data, message: 'Job Applied'});
    }).catch((err) => {
        console.log(err);
    });
};

exports.joblist = async (req, res, next) => {
    const signupId = req.user.id;
    await SignUp.findAll({
        where: {id: signupId},
        include: Job,
    }).then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        console.log(err);
    });
};