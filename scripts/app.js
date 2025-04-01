function saveTask() {
  console.log("save task");

  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let color = $("#selColor").val();
  let date = $("#date").val();
  let status = $("#selStatus").val();
  let budget = $("#numBudget").val();

  let taskToSave = new Task(title, description, color, date, status, budget);
  console.log(taskToSave);

  displayTask(taskToSave);
}

function displayTask(task) {
  let syntax = `
  <div class="padding">
    <div class="task-container" style="border-color:${task.color}">
      <div class="task">
        <div class="task-information">
          <h5>${task.title}</h5>
          <p>${task.description}</p>
        </div>

        <div class="task-status">
          <p>${task.status}</p>
        </div>

        <div class="task-date-budget">
          <span>${task.date}</span>
          <span>${task.budget}</span>
        </div>
      </div>
    </div>
  </div>
  
  `;

  $("#list").append(syntax);
}

function init() {
  console.log("Init");
  $("#btnSave").click(saveTask);
}

window.onload = init;
