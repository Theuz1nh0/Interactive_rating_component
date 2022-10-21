let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let num3 = document.getElementById("number3")
let num4 = document.getElementById("number4")
let num5 = document.getElementById("number5")
let numbers = [num1, num2, num3, num4, num5]

// console.log(numbers)

let whatNumber = function getNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            numbers[i].className = "checked";
            
            for (let a = 0; a < numbers.length; a++) {
                if (a == i ) {
                    continue;
                }

                numbers[a].className = "unchecked";
            }

        })

    }
}

whatNumber()

