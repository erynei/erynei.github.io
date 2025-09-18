function calculate() {

    // YOUR CODE GOES HERE
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);

    console.log(num1);
    console.log(num2);

    let sum = 0;

    for (let i=num1; i<=num2; i++) {
        sum += i;
    }

    console.log(sum);

    document.getElementById("result").innerText = "The sum is: " + sum;
    
}