function compute()
{
    if(checkData()){
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var year = new Date().getFullYear()+parseInt(years);
        var interest = principal * years * rate / 100;
        var result = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of <mark>${rate}</mark>.<br>You will receive an amount of <mark>${interest}</mark>,<br>in the year <mark>${year}`
        document.getElementById("result").innerHTML= result;
    } 
}

 function updateRate(){
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval+"%";
}

function checkData(){
    var p = document.getElementById("principal");
    if(p.value == "" || p.value <= "0"){
        alert("Enter a positive number");
        p.focus();
        return false;
    }
    return true;
}
        
