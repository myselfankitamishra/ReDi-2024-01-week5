//console.log("Hello World !");
/*function uppercaseFirstLetter(myString){

   let firstLetter = myString.slice(0, 1).toUpperCase();
    //console.log(myString);
    //console.log(myString.slice(0, 1));
    //console.log(myString.length);

let secondPart = myString.slice(1, myString.length);

    return firstLetter + secondPart;


};
// console.log(uppercaseFirstLetter("kasia")=="Kasia");
// console.log(uppercaseFirstLetter("kAsia")=="kAsia");
// console.log(uppercaseFirstLetter("1hello")=="1hello");
console.log(uppercaseFirstLetter("kasia"));*/
let button = document.createElement("button");
document.body.appendChild(button);
button.style = "width: 120px; height:80px; background-Color:black; color:white";
button.textContent = "Add to cart";

button.addEventListener("click", onClick)
function onClick(){
    button.style = "width: 120px; height:80px; background-color: green;";
button.textContent = "Added to cart 🥰 ";
}
    
   