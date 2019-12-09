window.addEventListener("click", function(event) {
  console.log(document.activeElement.id === "div-id");
  console.log(document.querySelector(":focus").id);
});
