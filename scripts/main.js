/* var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world"; меняет заголовок на фразу */

/*let myVariable = "Bob";
комментарий */

// однострочный комментарий

/* var iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
}   
else {
    alert("Awwww, but chocolate is my favorite...");
} */

// alert("hello!"); alert=оповещ-е(выводит запись на экарн при входе)
 
/* function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
} */

/*document.querySelector("html").onclick = function ()    {
    alert("Ouch! Stop poking me!");
}; добавил событие при нажатии на экран выводит фразу*/

var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name."); // prompt дейстует как и alert выводит окно, но просит пользователя ввести некоторые данные в переменной
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};

 