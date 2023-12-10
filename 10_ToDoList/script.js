let addTaskButton=document.querySelector("#addTaskButton");

addTaskButton.addEventListener("click",addTask);


function addTask(){
    const  taskInput=document.querySelector("#taskInput");
    const  taskList=document.querySelector("#taskList");

    if(taskInput.value.trim() !== '')
    {
        let li=document.createElement("li");
        li.innerHTML=
        `
        ${taskInput.value}
        <button class="complete">Complete</button>
        <button class="remove">Remove</button>
        `

        taskList.appendChild(li);
        

        taskInput.value=" ";



         const complete=li.querySelector(".complete");
         complete.addEventListener("click",completeTask);

         const remove=li.querySelector(".remove");
         remove.addEventListener("click",removeTask);
    }
   
}

function removeTask(){
    const taskItem=this.parentElement;
    taskItem.remove();
}
function completeTask() {
    const taskItem = this.parentElement;
    taskItem.classList.toggle('completed');
}
