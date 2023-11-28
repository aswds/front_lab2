document.addEventListener("DOMContentLoaded", function () {
  let element = document.getElementById("float-window");
  setTimeout(() => {
    element.style.right = "10%";
  }, 2000);

  document.addEventListener("click", function () {
    console.log("Hello world");
  });

  var floatWindow = document.getElementById("float-window");
  var aboutUs = document.querySelector(".float-left");
  var aboutProducts = document.querySelector(".float-right");
  let searchBar = document.querySelector("search-items");
  floatWindow.addEventListener("mouseoute", function () {
    this.style.color = "red";
    this.style.backgroundColor = "gray";
  });

  aboutUs.addEventListener("mouseover", function () {
    this.style.color = "blue";
    this.style.backgroundColor = "#f0f0f0";
  });

  aboutUs.addEventListener("mouseout", function () {
    this.style.color = "";
    this.style.backgroundColor = "";
  });

  aboutProducts.addEventListener("mouseover", function () {
    this.style.color = "green";
    this.style.backgroundColor = "#f0f0f0";
  });

  aboutProducts.addEventListener("mouseout", function () {
    this.style.color = "";
    this.style.backgroundColor = "";
  });
});
