let userTaskModules = require('../modules/user_tasks.js')

module.exports = function (router) {

    router.post('/checkIfUserQalifiedForPayment', async function (req, res) {
        try {
            let dependencyGraph = req.body.dependencyGraph;
            let currentState = req.body.currentState;
            let task = req.body.task;

            let result = userTaskModules.checkForCircularDependecyInTasks(dependencyGraph, currentState, task);
            res.json({ open: result });
        } catch (e) {
            res.json({ success: false, message: "Internal Error", error: e.toString() });
            console.error(e);
        }
    })

    return router;
}