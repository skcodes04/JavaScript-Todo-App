const input = document.getElementById("add_task");
const addTask = document.getElementById("task_button");
const task_list = document.getElementById("task_list");


const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(tasks);
  

  for (const task of tasks) {
      createTask(task);
      
  }

addTask.addEventListener("click", ()=>{

  if(input.value.trim() === ""){
    alert("please add a task");
    return;
  }

  tasks.push(input.value);

  createTask(input.value);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";

});


function createTask(task){

  const li = document.createElement("li");

  li.textContent = task;

 task_list.appendChild(li);

 const deleteBtn = document.createElement("button");
    
    deleteBtn.textContent = "✕";
    
    li.appendChild(deleteBtn);


  deleteBtn.addEventListener("click", ()=>{

    li.remove();


    const index = tasks.indexOf(task);
    console.log(index);
    
    if(index !== -1){
      tasks.splice(index, 1);


      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });

}

input.addEventListener("keydown", (e) =>{

    if(e.key === "Enter"){
     addTask.click(); 
    }
});