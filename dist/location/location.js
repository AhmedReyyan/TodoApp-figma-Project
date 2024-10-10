let logoutbtn = document.getElementById('logoutbtn');
let taskBtn = document.getElementById('taskbtn');
let getlocBtn = document.getElementById('getloc');
let locationCoords = document.getElementById('loccoords');
let previousLocations = document.getElementById('previouslocations');
let previousLocationsdata = document.querySelector('currentlocation');
let currentLocationDiv = document.getElementById('currentlocation');
let currentCityName = document.getElementById('cityname');
let cityname = '';
let latitude= 0;
let longitude= 0;

logoutbtn.addEventListener('click',()=>{
    window.location.href = '../../index.html'
})
taskBtn.addEventListener('click',()=>{
    window.location.href = '../task/task.html'
})



getlocBtn.addEventListener('click',()=>{
   
    
    if (locationCoords.innerHTML== '') {
      currentLocationDiv.style.display = 'flex';
      
       return  getlocation()
    }
      creatingDivforprevLocation();

})

async function getlocation(){
    let location = navigator.geolocation.getCurrentPosition(gotlocation,failedlocation)
    
}

function gotlocation(position){
latitude =  position.coords.latitude ;
longitude = position.coords.longitude
  locationCoords.innerText =latitude + " " +longitude

  let city = fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`).then( response=>{return response.json()})
    .then((detail) =>{ console.log(detail.city)
        currentCityName.innerHTML = detail.city
    })
    .catch((err)=>{
        console.log("err" + err);
        
    })

}

function failedlocation(){
    console.log('failed to get location');
    
}


function creatingDivforprevLocation(){

    let previouslocdiv =  document.createElement('div');
    previouslocdiv.className = 'currentlocation';
    previouslocdiv.innerHTML +=  `<p class="icon">&#128205</p> `
    let locdatapre =  document.createElement('div');
    locdatapre.className = 'locdata';
    let citynamepre =  document.createElement('span');
    citynamepre.className = 'cityname';
    citynamepre.innerHTML= currentCityName.innerHTML;
    let loccoordspre =  document.createElement('span');
    loccoordspre.className = 'loccoords';
    loccoordspre.innerHTML = locationCoords.innerHTML
    locdatapre.appendChild(citynamepre)
    locdatapre.appendChild(loccoordspre)
    previouslocdiv.appendChild(locdatapre)
  
   
    
 previousLocations.appendChild(previouslocdiv)
 
}




