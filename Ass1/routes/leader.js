const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leaders to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader : ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leader');
    })
    .delete((req, res, next) => {
        res.end('Deleting all leaders');
    })

leaderRouter.route('/minh')
    .get((req, res, next) => {
        res.end('Will send Minh to you!');
    })   

leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end('Will send ' + req.params.leaderId + ' to you!');
    })
module.exports = leaderRouter;
