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

  $.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(taskToSave),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
      displayTask(taskToSave);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function loadTask() {
  $.ajax({
    type: "GET",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    success: function (response) {
      console.log(response);
      let data = JSON.parse(response);
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let list = data[i];
        if (list.name == "Rafael") {
          displayTask(list);
        }
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
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
          <span>$${task.budget}</span>
        </div>
      </div>
    </div>
  </div>
  
  `;

  $("#list").append(syntax);
}

function testRequest() {
  $.ajax({
    type: "get",
    url: "http://fsdiapi.azurewebsites.net",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function init() {
  console.log("Init");
  $("#btnSave").click(saveTask);
  loadTask();
}

window.onload = init;
