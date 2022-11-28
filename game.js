function tabID() {
  document.body.innerHTML = "";
  document.title = "Overlords";
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = "data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAD/AKOjowAKCgoAArT6AAUFBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMAAAAAAAAAAAAAAAADAwMDAwADAAAAAAAAAwADAwMAAwMDAgAABQUAAAIDAwMAAAADAgICBQQEBQICAgMAAAADAgICBQQEBAQFAgICAwAAAAACBQQEAQEEBAUCAAAAAAAAAAUEAQEBAQQFAAAAAAAAAAAFBAEBAQEEBQAAAAAAAAAABQQBAQEBBAUAAAAAAAAAAAUEBAQEBAQFAAAAAAAAAAIFBQUFBQUFBQIAAAAAAAICAgICAAACAgICAgAAAAICAgICAAAAAAICAgICAAICAgICAAAAAAAAAgICAgICAgICAAAAAAAAAAACAgICAgICAAAAAAAAAAAAAAICAj/8AAAX6AAAhmEAAMADAACAAQAA4AcAAPAPAADwDwAA8A8AAPAPAADgBwAAwYMAAIPBAAAH4AAAD/AAAB/4AAA=";
}
tabID();
var home = document.createElement("text");
home.innerHTML = `<style>#titleDesign {text-align:center; color: #f52cbf;font-family: "monospace"; font-size: 50px; font-style: normal; font-variant: normal; font-weight: 600; line-height: 26.4px; position: fixed; left: 42%; top: 17%;}#titleDesign:hover {color: #03b7ff;}</style><div><text id = "titleDesign"> Overlords </text> </div> `;
document.body.appendChild(home);
var directions = document.createElement("text");
directions.innerHTML = `<style>#directions {text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 35%; top: 30%;}</style><div><text id = "directions"> Please choose one of the classes below !</text> </div> `;
document.body.appendChild(directions);
var asTxt = document.createElement("text");
asTxt.innerHTML = `<style>#asTxt {text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 25%; top: 90%;}</style><div><text id = "asTxt"> Assasian </text> </div> `;
document.body.appendChild(asTxt);
var mgTxt = document.createElement("text");
mgTxt.innerHTML = `<style>#mgTxt {text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 52%; top: 90%;}</style><div><text id = "mgTxt"> Mage </text> </div> `;
document.body.appendChild(mgTxt);
var wrTxt = document.createElement("text");
wrTxt.innerHTML = `<style>#wrTxt {text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 76%; top: 90%;}</style><div><text id = "wrTxt"> Warrior </text> </div> `;
document.body.appendChild(wrTxt);
var crTxt = document.createElement("text");
crTxt.innerHTML = `<style>#crTxt {text-align:center; color: white;font-family: "monospace"; font-size: 10px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed;}</style><div><text id = "crTxt"> Copyright © 2022 Overlord </text> </div> `;
document.body.appendChild(crTxt);
document.body.style.backgroundColor = "#17181f";
var assasian = document.createElement("img");
assasian.src = "https://t3.ftcdn.net/jpg/03/18/15/14/360_F_318151495_AFydsJMGazDAx4myoNdPEuZHegCzk1nk.jpg";
assasian.style.borderRadius = "40%";
assasian.className = "groupSelectClass";
assasian.style.height = '100px';
assasian.style.width = '100px';
assasian.style.position = "fixed";
assasian.style.left = "25%";
assasian.style.top = "65%";
assasian.style.cursor = "pointer";
assasian.style.boxShadow = "0px 0px 20px red";
document.body.appendChild(assasian);

var mage = document.createElement("img");
mage.src = "https://i.ibb.co/0MG0vqT/magic-wand-neon-icon-elements-260nw-1408055657.webp";
mage.style.borderRadius = "40%";
mage.className = "groupSelectClass";
mage.style.height = '100px';
mage.style.width = '100px';
mage.style.position = "fixed";
mage.style.left = "50%";
mage.style.top = "65%";
mage.style.cursor = "pointer";
mage.style.boxShadow = "0px 0px 20px purple";
document.body.appendChild(mage);

var warrior = document.createElement("img");
warrior.src = "https://static.vecteezy.com/system/resources/previews/005/488/384/original/white-wings-with-sword-logo-design-graphic-symbol-icon-sign-illustration-creative-idea-vector.jpg";
warrior.style.borderRadius = "40%";
warrior.className = "groupSelectClass";
warrior.style.height = '100px';
warrior.style.width = '100px';
warrior.style.position = "fixed";
warrior.style.left = "75%";
warrior.style.top = "65%";
warrior.style.cursor = "pointer";
warrior.style.boxShadow = "0px 0px 20px blue";
document.body.appendChild(warrior);

function toggle(id) {
  var div = id;
  div.style.borderRadius = div.style.borderRadius == "50%" ? "40%" : "50%";
  div.style.width = div.style.width == "90px" ? "100px" : "90px";
  div.style.height = div.style.height == "90px" ? "100px" : "90px";
}

function submitSelector(id) {
  id.onclick = function() {
    toggle(id);
    var continueBTN = document.createElement("div");
    continueBTN.innerHTML = `<style>#continue {  left: 49%; top: 45%; z-index: 9999;  border-radius: 3px;  position: fixed;  color: white; font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 500; line-height: 26.4px; position: fixed;}button { border: 2px solid #03b7ff; padding: 0.5em 0.7em;  border-radius: 3px;  box-shadow: none; ;  background-color: #14121a;  color: #e0e1f0;  cursor: pointer;}button:hover { border: 2px solid #f52cbf; background-color: #1d1c21; color: #f52cbf;}</style><div id="container">   <button aria-label="continue" id="continue"> Continue  </button></div>`;
    document.body.appendChild(continueBTN);
    continueBTN.onclick = function() {
      if (assasian.style.borderRadius === "50%") {
        document.cookie = "class=ASSASIAN";
        document.body.innerHTML = "";
        loadingScreen();
      } else {
        if (mage.style.borderRadius === "50%") {
          document.cookie = "class=MAGE";
          document.body.innerHTML = "";
          loadingScreen();
        } else {
          if (warrior.style.borderRadius === "50%") {
            document.cookie = "class=WARRIOR";
            document.body.innerHTML = "";
            loadingScreen();
          }

        }
      }
    }
  }
}
warrior.onclick = function() {
  toggle(warrior)
};
assasian.onclick = function() {
  toggle(assasian)
};
mage.onclick = function() {
  toggle(mage)
};
submitSelector(assasian);
submitSelector(mage);
submitSelector(warrior);

function loadingScreen() {
  let progress = document.createElement('div');
progress.id = "myProgress";
document.body.appendChild(progress);
let bar = document.createElement('div');
bar.id = "myBar";
document.body.appendChild(bar);
progress.innerHTML = `<style>
 #myProgress {
  width: 90%;
  height: 30px;
  background-color: transparent;
  border: 2px solid white;
  position: fixed;
  top: 50%;
  left: 5%
}
#myBar {
  width: 1%;
  height: 32px;
  background-color: white;
  border: 1px solid white;
  position: fixed;
  top: 50%;
  left: 5%
}

</style>`;
var loading = document.createElement("text");
loading.innerHTML = `<style>#loadingTxt {text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 46%; top: 40%}</style><div><text id = "loadingTxt"> Loading... </text> </div> `;
document.body.appendChild(loading);
var youAre = document.createElement("text");
youAre.innerHTML = `<style>#youAreTxt {text-align:center; color: white;font-family: "monospace"; font-size: 30px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 37%; top: 30%}</style><div><text id = "youAreTxt"> You are a </text> </div> `;
document.body.appendChild(youAre);
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
_class = getCookie("class");
var __class = document.createElement("text");
__class.innerHTML = `<style>#__classTxt {text-align:center; color: red;font-family: "monospace"; font-size: 60px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 50%; top: 30%}</style><div><text id = "__classTxt">` + _class + `</text> </div> `;
document.body.appendChild(__class);
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
        setTimeout(() => {
  document.body.innerHTML = ""
}, "2000")
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
move();

}
