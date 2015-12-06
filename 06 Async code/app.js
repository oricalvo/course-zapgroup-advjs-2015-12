function runManyTasks() {
    for (var i = 0; i < 10; i++) {
        var j = i;

        runTask(function () {
            console.log("Task completed: " + j);
        });
    }
}

function runTask(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

runManyTasks();
