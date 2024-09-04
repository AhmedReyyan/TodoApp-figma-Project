
// let taskList = document.querySelector('tasklist');
let logoutbtn = document.getElementById('logoutbtn');
let locationbtn = document.getElementById('locationbtn');
let taskdiv = document.getElementById('list');
let addTask = document.getElementById('addtask');
let completedTasksList  = document.getElementById('completedtaskslist');
// let reminderDescription = document.querySelector('.getdescription');




logoutbtn.addEventListener('click',()=>{
    window.location.href = '/dist/index.html'
})
locationbtn.addEventListener('click',()=>{
    window.location.href = '/dist/location/location.html'
})

addTask.addEventListener('click' , ()=>{
   addtaskPopup()

})

taskdiv.addEventListener('click',()=>{
replacingDivOnCompletion()

})//documen event listene


function createTaskDiv(summary,description, time){
      
    let task =   document.createElement('div');
    task.className = 'tasktodo';
    let taskStatus = document.createElement('div')
    taskStatus.className = 'taskstatus';
    let taskCheck = document.createElement('input')
    taskCheck.type = 'checkbox';
    taskCheck.className = 'check';
    taskCheck.classList.add('incompletecheck');
    let taskHeading = document.createElement('h4')
    taskHeading.innerHTML = description
    taskStatus.appendChild(taskCheck);
    taskStatus.appendChild(taskHeading)
    let taskTime = document.createElement('span');
    taskTime.className = 'time';
    taskTime.innerHTML = time;
    // taskTime.style.paddingLeft = '30px'
    let taskTimeicon = document.createElement('i')
    taskTimeicon.className = 'fa-solid fa-bell';
    taskTimeicon.classList.add = 'bellicon';
    // taskTimeicon.style.marginLeft = '40px';
    // taskTimeicon.style.marginRight = '40px';
    taskTime.appendChild(taskTimeicon);
    
    task.appendChild(taskStatus);
    task.appendChild(taskTime)


  
               taskdiv.appendChild(task)

}

function addtaskPopup(){
    let background = document.createElement('div');
    background.className = 'background';
    let addtaskdiv =  document.createElement('div');
    addtaskdiv.id = 'addtaskdetails';
    addtaskdiv.innerHTML = ` <h2 id="newtask" > New Task</h2>
         <h4 id="title1">Description</h4>
         <textarea type="text" name="" class="details" id="description" ></textarea>
         <h4 id="title2">Summmary</h4>
         <textarea type="text" name="" class="details" id="summary"></textarea>
         <h4 id="title3">Time</h4>
         <input type="time" name="time" class="details" id="date">
         <h4 id="title4">Date</h4>
         <input type="date" name="time" class="details" id="day">
         <div class="buttons">
             <button type='submit' id="save">save</button>
             <button id="cancel">cancel</button>
         </div>`;
    document.body.append(background);
    background.appendChild(addtaskdiv)
    
    document.getElementById('cancel').addEventListener('click',()=>{
        document.body.removeChild(background)
    })


    document.getElementById('save').addEventListener('click',()=>{
        
    //    reminderDescription.innerHTML = "ddwrereewewdwd"
       
       let description =  document.getElementById('description').value;
       let summary = document.getElementById('summary').value;
        createTaskDiv(summary,description,(settingGetTime()));
       
        document.body.removeChild(background)
    })

}


function settingGetTime(){
    let setTime = document.getElementById('date').value;
    let timeSplit = setTime.split(":")
    let timeHours = timeSplit[0];
    let resultHours = timeHours;
    let finaltime;
    if (timeSplit[1] == undefined) {
        timeSplit = `00`
   }

    if (timeHours>12) {
        resultHours -=12
        finaltime=  resultHours + ' : ' + timeSplit[1] + '  PM'

    };
    if(timeHours == 0){
        
            resultHours = 12
            return finaltime =  resultHours + ' : ' + timeSplit[1] + '  AM'
       };

      
    if(timeHours < 12){
          resultHours = timeHours;
         finaltime= resultHours + ' : ' + timeSplit[1] + '  AM'
    }
let day = document.getElementById('day').value;
let timeLimit =` ${finaltime}     ${day} `;
return timeLimit;
}


 
function replacingDivOnCompletion(){

    let getsinglediv =   taskdiv.querySelectorAll('.tasktodo');
    getsinglediv.forEach(singlediv=>{
     let singledivcheck =  singlediv.querySelector('.incompletecheck');
     let singledivheading = singlediv.querySelector('h4').innerText;
     
     if (singledivcheck.checked) {
      setCompleteTaskList(singledivheading)
      taskdiv.removeChild(singlediv)
     }
     
      
    }) 
    
}


function setCompleteTaskList(taskheading){    
    let completedtask =  document.createElement("div");
completedtask.className = 'completedtask';
let completedtaskinput = document.createElement('input');
completedtaskinput.type = 'checkbox';
completedtaskinput.checked = true;
completedtaskinput.disabled = true;
completedtaskinput.className = 'check';
completedtaskinput.name = 'check';
let completedtaskheading = document.createElement('h4');
completedtaskheading.className = 'completedtaskheading';
completedtaskheading.innerHTML = taskheading;
completedtask.appendChild(completedtaskinput);
completedtask.appendChild(completedtaskheading);
completedTasksList.appendChild(completedtask);
}




