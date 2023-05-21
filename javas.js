function mNumbers()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    multiply = (parseInt(num1)) * (parseInt(num2));

    document.getElementById("Output").innerHTML = "The result is " + multiply;

}

function dNumbers()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    divide = (parseInt(num1)) / (parseInt(num2));

    document.getElementById("Output").innerHTML = "The result is " + divide;

}