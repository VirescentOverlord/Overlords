function tabID() {
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
var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
openFullscreen();

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
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

function logout() {
  document.cookie = "OverlordUser=";
  document.body.innerHTML = "";
  loadingScreen();
}

function renderChoice() {
  document.body.innerHTML = "";
  var home = document.createElement("text");
  home.innerHTML = `<style>#titleDesign {cursor: default; text-align:center; color: #f52cbf;font-family: "monospace"; font-size: 50px; font-style: normal; font-variant: normal; font-weight: 600; line-height: 26.4px; position: fixed; left: 42%; top: 17%;}#titleDesign:hover {color: #03b7ff;}</style><div><text id = "titleDesign"> Overlords </text> </div> `;
  document.body.appendChild(home);
  var directions = document.createElement("text");
  directions.innerHTML = `<style>#directions {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 35%; top: 30%;}</style><div><text id = "directions"> Please choose one of the classes below !</text> </div> `;
  document.body.appendChild(directions);
  var asTxt = document.createElement("text");
  asTxt.innerHTML = `<style>#asTxt {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 25%; top: 90%;}</style><div><text id = "asTxt"> Assasian </text> </div> `;
  document.body.appendChild(asTxt);
  var mgTxt = document.createElement("text");
  mgTxt.innerHTML = `<style>#mgTxt {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 52%; top: 90%;}</style><div><text id = "mgTxt"> Mage </text> </div> `;
  document.body.appendChild(mgTxt);
  var wrTxt = document.createElement("text");
  wrTxt.innerHTML = `<style>#wrTxt {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 76%; top: 90%;}</style><div><text id = "wrTxt"> Warrior </text> </div> `;
  document.body.appendChild(wrTxt);
  var crTxt = document.createElement("text");
  crTxt.innerHTML = `<style>#crTxt {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 8px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px;position: fixed; left: 2%}</style><div><text id = "crTxt"> Copyright © 2022 Overlord </text> </div> `;
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
  assasian.style.boxShadow = "0px 0px 30px black";
  document.body.appendChild(assasian);
  var mage = document.createElement("img");
  mage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEKVUpYxFNDbwyKl6Vh-v26kC6KssAa--IMFQt58kKB3bUzln2FxwDVlYqUxwq0SKLqI&usqp=CAU";
  mage.style.borderRadius = "40%";
  mage.className = "groupSelectClass";
  mage.style.height = '100px';
  mage.style.width = '100px';
  mage.style.position = "fixed";
  mage.style.left = "50%";
  mage.style.top = "65%";
  mage.style.cursor = "pointer";
  mage.style.boxShadow = "0px 0px 30px black";
  document.body.appendChild(mage);
  var warrior = document.createElement("img");
  warrior.src = "https://img.freepik.com/premium-vector/knight-logo-design-vector-illustration-template_93835-237.jpg?w=360";
  warrior.style.borderRadius = "40%";
  warrior.className = "groupSelectClass";
  warrior.style.height = '100px';
  warrior.style.width = '100px';
  warrior.style.position = "fixed";
  warrior.style.left = "75%";
  warrior.style.top = "65%";
  warrior.style.cursor = "pointer";
  warrior.style.boxShadow = "0px 0px 30px black";
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
      continueBTN.innerHTML = `<style>#continue {  cursor: pointer; left: 49%; top: 45%; z-index: 9999;  border-radius: 3px;  position: fixed;  color: white; font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 500; line-height: 26.4px; position: fixed;}button { border: 2px solid #03b7ff; padding: 0.5em 0.7em;  border-radius: 3px;  box-shadow: none; ;  background-color: #14121a;  color: #e0e1f0;  cursor: pointer;}button:hover { border: 2px solid #f52cbf; background-color: #1d1c21; color: #f52cbf;}</style><div id="container">   <button aria-label="continue" id="continue"> Continue  </button></div>`;
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
    progress.innerHTML = `<style> #myProgress { width: 90%; height: 30px; background-color: transparent; border: 2px solid white; position: fixed; top: 50%; left: 5% } #myBar { width: 1%; height: 32px; background-color: white; border: 1px solid white; position: fixed; top: 50%; left: 5% } </style>`;
    var loading = document.createElement("text");
    loading.innerHTML = `<style>#loadingTxt {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 46%; top: 40%}</style><div><text id = "loadingTxt"> Loading... </text> </div> `;
    document.body.appendChild(loading);
    var youAre = document.createElement("text");
    youAre.innerHTML = `<style>#youAreTxt {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 30px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 37%; top: 30%}</style><div><text id = "youAreTxt"> You are a </text> </div> `;
    document.body.appendChild(youAre);
    _class = getCookie("class");
    var __class = document.createElement("text");
    __class.innerHTML = `<style>#__classTxt {text-align:center; color: red; cursor: default; font-family: "monospace"; font-size: 60px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 50%; top: 30%}</style><div><text id = "__classTxt">` + _class + `</text> </div> `;
    document.body.appendChild(crTxt);
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
              document.body.innerHTML = "";
              userInput("Please create a username");
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

  function userInput(prompt) {
    if (getCookie("OverlordUse") != "") {
      function userInputInner(prompt) {
        var nameInput = document.createElement("input");
        nameInput.id = "nameInput";
        nameInput.innerHTML = `<style>#nameInput {color: white; font-family: "monospace"; font-size: 25px; font-style: normal; font-variant: normal; font-weight: 450; line-height: 26.4px; background-color: transparent; outline: none; position: fixed; left:40%; top: 50%; height: 30px; width: 300px; border: 1px solid#03b6fc; border-radius: 5%}#nameInput:hover {border: 3px solid #fc03a9; cursor: pointer}</style>`;
        document.body.appendChild(nameInput);
        var inputText = document.createElement("text");
        inputText.id = "inputText";
        inputText.innerHTML = `<style>#inputText { color: white; cursor: default; font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 100; position: fixed; left:40%; top: 35%; height: 30px; width: 300px;}</style><div><text id = "inputText">` + prompt + `</text> </div>`;
        document.body.appendChild(inputText);
        document.body.appendChild(crTxt);
        var inputBTN = document.createElement("div");
        inputBTN.innerHTML = `<style>#inputBTN {  cursor: pointer; left: 47%; top: 75%; z-index: 9999;  border-radius: 3px;  position: fixed;  color: white; font-family: "monospace"; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 500; line-height: 26.4px; position: fixed;}button { border: 2px solid #f52cbf; padding: 0.5em 0.7em;  border-radius: 3px;  box-shadow: none; ;  background-color: #14121a;  color: #e0e1f0;  cursor: pointer;}button:hover { border: 2px solid #03b7ff; background-color: #1d1c21; color: #f52cbf;}</style><div id="container">   <button aria-label="continue" id="inputBTN"> Continue  </button></div>`;
        document.body.appendChild(inputBTN);
        inputBTN.onclick = function() {
          document.cookie = "OverlordUser=" + nameInput.value;
          document.body.innerHTML = "";
          start();
        }
      }
    } else {
      start()
    }
  }
}

function start() {
  var username = getCookie("OverlordUser");
  var userText = document.createElement("text");
  userText.innerHTML = `<style>#userText { color: white; cursor: pointer; font-family: "monospace"; font-size: 10px; font-style: normal; font-variant: normal; font-weight: 100; position: fixed; left:42%;  height: 30px; width: 300px;}#userText:hover {color: blue;}</style><div><text id = "userText">` + `Logged in as: ( ` + username + ` )` + `</text> </div>`;
  userText.onclick = function() {
    logout();
  }
  if (username === "administrator423") {
    document.cookie = "class=PRIEST";
  }
  document.body.appendChild(userText);
  var overTxt = document.createElement("text");
  overTxt.innerHTML = `<style>#overTxt {cursor: default; text-align:center; color: white;font-family: "monospace"; font-size: 10px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 90%;}</style><div><text id = "overTxt"> Overlord:  </text> </div> `;
  document.body.appendChild(overTxt);
  _class = getCookie("class");
  var __class1 = document.createElement("text");
  _class = getCookie("class");
  __class1.innerHTML = `<style>#__classTxt1 {text-align:center; color: white; cursor: pointer; font-family: "monospace"; font-size: 10px; font-style: normal; font-variant: normal; font-weight: 350; line-height: 26.4px; position: fixed; left: 95%;}#__classTxt1:hover {color:red}</style><div><text id = "__classTxt1">` + _class + `</text> </div> `;
  document.body.appendChild(__class1);
  __class1.onclick = function() {
    renderChoice()
  }
}
renderChoice()
