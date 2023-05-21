function increment() 
{

    var quantity = parseInt(document.getElementById("quantity").value);
    quantity++;
    document.getElementById("quantity").value = quantity;

}

function decrement() 
{

    var quantity = parseInt(document.getElementById("quantity").value);
    if (quantity > 0) {
        quantity--;
        document.getElementById("quantity").value = quantity;
    }

}

function calculate() 
{

    var quantity = parseInt(document.getElementById("quantity").value);
    var shipping = parseFloat(document.getElementById("shipping").value);
    var shippingFee = parseFloat(document.getElementById("shipping").value);
    var totalBeforeTax = quantity * 15.97 + shipping;
    var tax = totalBeforeTax * 0.1;
    var totalOrder = totalBeforeTax + tax;

    document.getElementById("numItems").innerHTML = quantity;
    document.getElementById("totalBeforeTax").innerHTML = "$" + totalBeforeTax.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("totalOrder").innerHTML = "$" + totalOrder.toFixed(2);
    document.getElementById("shippingFee").innerHTML = "$" + shippingFee.toFixed(2);

}