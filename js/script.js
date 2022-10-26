let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let num3 = document.getElementById("number3")
let num4 = document.getElementById("number4")
let num5 = document.getElementById("number5")
let numbers = [num1, num2, num3, num4, num5]

// variable to get the number and print to the screen at the end
let numClick;

// function to get and change classes the number the custumer clicked
function getNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            numbers[i].className = "checked mouse-pointer";
            
            for (let a = 0; a < numbers.length; a++) {
                if (a == i ) {
                    continue;
                }

                numbers[a].className = "unchecked mouse-pointer";
                numClick = i + 1;
            }

        })

    }
}

getNumbers()

// function to change screen when "SUBMIT" button is clicked
function onSubmit() {
    if (numClick == undefined) {
        alert("Please select a number...");
        return;
    }

    let mainSection = document.getElementById("mainSection");
    let secondSection = document.getElementById("secondSection");
    let numberSelected = document.getElementById("numberSelected");

    mainSection.className = "display-off";
    secondSection.className = "second-section display-on flex";

    numberSelected.textContent = numClick;
}
let btSubmit = document.getElementById("btSubmit");
btSubmit.addEventListener("click", onSubmit)

