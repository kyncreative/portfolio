//const cursor = document.querySelector(".cursor");
//var timeout;

//document.addEventListener("mousemove", (e) => {
  //  let x = e.pageX;
  //  let y = e.pageY;

    //cursor.style.top = y + "px";
   // cursor.style.left = x + "px";
   // cursor.style.display = "block";

   // function mouseStopped(){
    //    cursor.style.display="none";
    //}
    //clearTimeout(timeout);
   // timeout=setTimeout(mouseStopped, 1000);
//});

//document.addEventListener("mouseout", () => { 
   // cursor.style.display = "none";
//});

//function myFunction() { location.replace("https://www.w3schools.com")}

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}; 