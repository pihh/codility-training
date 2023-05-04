'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const TaskRunner = require('./taskRunner.js');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PRIOR_TASKS_NOT_COMPLETED = -1;

app.post('/api/runTasks', async (req, res, next) => {
    console.log(1)
    try {
        // ...
        const taskIds = req.body.taskIds;
        const promises = []
        const timeline = []
        for (let i = 0; i < taskIds.length; i++) {
            if (!TaskRunner.hasTask(id)) {
                res.status(400).send()
                return
            }
        }
        for (let i = 0; i < taskIds.length; i++) {
            const id = taskIds[i];

            promises.push(new Promise((resolve) => {
                TaskRunner.runTask(id).then(() => {
                    timeline.push(i)
                    resolve()
                })
            }))

        }
        console.log(2)
        Promise.all(promises).then(() => {
            console.log(3, timeline)
            timeline.forEach((v, i) => {
                timeline[i] = v - i
            })

            res.status(200).send(timeline)
        }).catch(ex => {
            console.log(4)
            console.log('errpr', ex)
            throw new Error(ex)
        })

    } catch (error) {
        console.log(5)
        console.log('FAILEEED')
        console.log(error)
        next(error);
    }
}), (req, res) => {
    console.log(6)
    res.status(200)
    console.log('status', res.status, 'tl', res.locals.timeline)
    res.status(200).send(res.locals.timeline)
};

exports.default = app.listen(process.env.HTTP_PORT || 3000);
