function changeWeapon(pic) { 
    var weapon = document.getElementById("weapon");
  weapon.src = pic.value;
}
function changeHead() {
  robotHead.setAttribute("src", "images\head 1" + event.target.value + ".jpeg");
}

function changeBody() {
  robotBody.setAttribute("src", "images\body 1" + event.target.value + ".jpeg");
}

// function changeLeg() {
//   robotLeg.setAttribute("src", "/resources/robot_leg" + event.target.value + ".png");
// }
let counter = document.getElementById("counter")
let result = document.getElementById("result")
let count = 0

counter.addEventListener("click", () => {
    count += 1
    result.innerHTML = count
    
})

