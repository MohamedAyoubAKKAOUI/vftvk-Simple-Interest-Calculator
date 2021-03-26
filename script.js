function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var yearsSelect = document.getElementById("years");
    var year = yearsSelect.options[yearsSelect.selectedIndex].value;
    var intrest = principal * year * rate / 100;
    var date = new Date();
    year = date.getFullYear() + parseInt(year);
    document.getElementById("result").innerHTML = `If you deposit ${principal},
    at an interest rate of ${rate}%.
    You will receive an amount of ${intrest},
    in the year ${year}`;
}

function slider() {
    var rate = document.getElementById("rate").value;
    document.getElementById("slid").innerHTML = rate + " %";
}    