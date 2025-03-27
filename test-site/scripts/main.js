// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello wuter";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/R-C.png") {
    myImage.setAttribute(
      "src",
      "images/firefox_nightly_browser_logo_icon_152989.png"
    );
  } else {
    myImage.setAttribute("src", "images/R-C.png");
  }
};

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");
function setUserName() {
  const myname = prompt("please enter your name:");
  if (!myname) {
    setUserName();
  } else {
    localStorage.setItem("name", myname);
    myHeading.textContent = `welcome to my website ,${myname}`;
  }
} //注册新账号

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
} //

myButton.onclick = function () {
  setUserName(); //
};
