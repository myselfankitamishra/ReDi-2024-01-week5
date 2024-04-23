let accordion = document.getElementsByClassName("accordion");
accordion[0].addEventListener("click", function(){
    // this.classList.toggle("active");
    let panel = this.nextElementSibling;
    console.log(panel);
    console.log(panel.style.display);
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    console.log("after check :" + panel.style.display );
  });
//   accordion[1].addEventListener("click", function(){
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });