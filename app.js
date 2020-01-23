
$(document).ready(function () {


  let addBtn = $("#addBtn");
  let input = $("#item-input");
  let displayTask = $(".display-task");
  let randomBtn = $("#random-button")

  let taskArray = [];

  addBtn.on("click", function (event) {
    event.preventDefault();

    let task = input.val();
    taskArray.push(task);
    
    addTask(task);
    clearText();

  });


  randomBtn.on("click", function() {
    randomTask(taskArray);
  });






//  Main Functions
  function clearText() {
    input.val("");
  }

  function randomTask(array) {
    let random = array[Math.floor(Math.random() * array.length)];
    console.log(random)
    array.forEach(element => {
      if (element === random) {
        array.splice(element, 1);
      }
    });

    console.log(array);
  }

  function addTask(task) {

    if ((task === "") || (!task.replace(/\s/g, '').length)) {
      return;
    } else {

      let li = document.createElement("li");
      let checkBtn = document.createElement("button");
      let removeBtn = document.createElement("button");

      li.innerHTML = task;
      li.classList.add("li-style");

      checkBtn.innerHTML = "&#10004;";
      removeBtn.innerHTML = "&#10007";
      checkBtn.classList.add("check-btn");
      removeBtn.classList.add("remove-btn");
    
      li.prepend(removeBtn);
      li.prepend(checkBtn);
  
      displayTask.append(li);

      $(".check-btn").on("click", function() {
        let doneTask = $(this).closest("li");
        doneTask.addClass("complete-styling");

        $(this).remove();

        $(".completed-task").append(doneTask);
      });

      // remove button works
      $(".remove-btn").on("click", function() {
        $(this).closest(".li-style").remove();
      });
    };
  };

});




