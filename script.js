const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function()){
  let task =taskInput.value;
  if(task === "") return;
  let li = document.createElement("li");
  li.innerHTML =
    ${task}
  <span class="delete"></span>`;
                        taskList.appendChild(li);
taskInput.value ="";
li.querySelector("delete").addEventListener("click", function(){
  li.remove();
});
});
