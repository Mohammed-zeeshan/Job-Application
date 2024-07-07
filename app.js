const path = require('path');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

const signup = require('./routes/signup');
const profile = require('./routes/profile');
const job = require('./routes/job');
const sequelize = require('./util/database');
const SignUp = require('./models/signup');
const Profile = require('./models/profile');
const Job = require('./models/job');
const Userjob = require('./models/userjob');

app.use(signup);

app.use(profile);

app.use(job);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, `public/${req.url}`));
});

sequelize.authenticate().then(() => {
    console.log('CONNECTION DONE');
}).catch((err) => {
    console.log(err);
});

SignUp.hasMany(Profile);
Profile.belongsTo(SignUp);

SignUp.belongsToMany(Job, {through: Userjob});
Job.belongsToMany(SignUp, {through: Userjob});

sequelize.sync()
.then(() => {
    console.log('CREATE TABLE');
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});
