let height
let age
let big = document.getElementById("big")
let output

function myFunction() {
    console.log("test")
    height = document.getElementById("height").value
    console.log(height)
    age = document.getElementById("age").value
    console.log(age)
    if (big.checked) {
        console.log("big")
        output = ((height - 100) + (age / 10)) * 0.9 * 1.1
        document.getElementById("output").innerHTML = output
    } else {
        console.log("thin")
        output = ((height - 100) + (age / 10)) * 0.9 * 0.9
        document.getElementById("output").innerHTML = output
    }
}


