### Money making opportunities to users. We call these opportunities Missions.
Each mission contains one or more tasks that the user has to do.
Once all the tasks of a mission are done by the user, a payment is issued.
At times, these tasks have dependencies as well.


# Example:
Consider a mission with 4 tasks(i.e tasks 0,1,2,3) wherein the requirements team wants to evaluate
if they can add the below 3 dependencies to the tasks.
Say, task 1 cannot be opened for the users, until they have completed task 0.
Task 2 cannot be opened for the users, until they have completed task 1 and task 3.

Task 0 cannot be opened for the users, until they have completed task 2.
dependencyGraph:{
 "tasks":[
 { dependency:[2] }, //task 0
 { dependency:[0] }, //task 1
 { dependency:[1,3] }, //task 2
 { dependency:[] }, //task 3
 ]
}
As you can see, the above situation forms a dependency loop and hence no task will be open for the
user.
Thus, this dependency requirement in invalid.
Your job as a developer is to create a generic API which takes a request body similar to below one.
This API returns a boolean value saying if the given task is open or not. If there's a circular
dependency in the dependencyGraph, the api throws an error. Note that the task status can be
pending or completed. Unless the task status is completed, the task remains a dependency.
