function compute() 
{ 
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value; 
var year = new Date().getFullYear() + parseInt(years);
var interest = (principal * years * rate) / 100;
var amount = parseInt(principal) + parseFloat(interest);
var result = document.getElementById("result");

//  If the user enters zero or a negative value, show an alert which says//
if (principal <= 0) {
    alert("Please use your sense and enter a positive number!");

    // The next code is for Once the user clicks on the alert “OK” button, take the user back to the “Principal” input box//
    document.getElementById("principal").focus();
}

else {
    result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
} 

}

{p = document.getElementById("principal").value;
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
    
}