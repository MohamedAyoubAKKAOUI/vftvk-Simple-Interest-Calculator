function compute()
{
    var principal = document.getElementById("principal");
    if (principal.value <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }  
    var rate = document.getElementById("rate").value;
    var yearsSelect = document.getElementById("years");
    var year = yearsSelect.options[yearsSelect.selectedIndex].value;
    var intrest = principal.value * year * rate / 100;
    var date = new Date();
    year = date.getFullYear() + parseInt(year);
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal.value}</mark>,<br>
    at an interest rate of <mark>${rate}</mark>%.<br>
    You will receive an amount of <mark>${intrest}</mark>,<br>
    in the year <mark>${year}</mark>`;
}

function slider() {
    var rate = document.getElementById("rate").value;
    document.getElementById("slid").innerHTML = rate + " %";
}    