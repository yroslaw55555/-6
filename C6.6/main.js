const btn = document.querySelector('.sendMess');
//const btnOpen = document.querySelector('.Open');
const urlnn = document.querySelector('.ahoChat').getAttribute('action');
const input = document.querySelector('.messageEd');
const outTank = document.querySelector('.Out');
const btnGeoLocal = document.querySelector('.geoLoc');

let websocket;
	//position: relative;
   // bottom: 5px;
	//margin-bottom: 27px;
function MyMass (Massage){
    let pre = document.createElement("section");
    pre.style.position = "relative";
    pre.style.textAlign = "right";
    pre.innerHTML = Massage;
    outTank.appendChild(pre);
};

//btnOpen.addEventListener('click', () => {
function openlala (url){
  websocket = new WebSocket(url);
  websocket.onmessage = function(evt) {
        if (!(evt.data.substring(4,0) === 'http')){  
          let sandin = document.createElement("section");
          sandin.style.position = "relative";
          sandin.style.textAlign = "left";
          sandin.innerHTML = evt.data;
          outTank.appendChild(sandin);
        }
  };
  websocket.onerror = function(evt) {
        let errorIS = document.createElement("section");
        errorIS.style.position = "relative";
        errorIS.style.textAlign = "left";
        errorIS.innerHTML = "Ошибка";
        outTank.appendChild(errorIS);
  };
}

openlala(urlnn);

btn.addEventListener ('click', () => {
  console.log("1", input.value);
  MyMass(input.value);
  console.log("2", input.value);
  websocket.send(input.value);
  console.log("3", input.value);
});


const errorOr = () => {
  MyMass('Невозможно получить ваше местоположение');
}

const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
    
    let boxLocat = document.createElement("section");
    boxLocat.style.position = "relative";
    boxLocat.style.textAlign = "right";
  
    let aHref = document.createElement("a");
    aHref.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    aHref.innerHTML = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    
    //boxLocat.innerHTML = Massage;
    boxLocat.appendChild(aHref);
    outTank.appendChild(boxLocat);
    websocket.send(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
}

btnGeoLocal.addEventListener('click', () => {
  if (!navigator.geolocation) {
     MyMass('Geolocation не поддерживается вашим браузером');
  } else {
    MyMass('Определение местоположения…');
    navigator.geolocation.getCurrentPosition(success, errorOr);
}});