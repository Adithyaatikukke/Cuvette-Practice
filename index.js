function performCalculation(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) && isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    }
     else if (operation === 'multiplication') {
        result = num1 * num2;
    }
    else{
        result=num1/num2;
    }



    document.getElementById("result").innerHTML = result;
}