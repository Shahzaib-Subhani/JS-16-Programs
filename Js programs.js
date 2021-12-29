// Max 2 numbers program



var myinput;

function submit()
{
    myinput = document.getElementById('myinput').value;
    inputtwo = document.getElementById('inputtwo').value;

    document.getElementById("demo").innerHTML = Math.max(myinput , inputtwo) ;

}

//  Max 3 nmbrs program

var myinput;

function submit2()
{
    input3 = document.getElementById('input3').value;
    input4 = document.getElementById('input4').value;
    input5 = document.getElementById('input5').value;
    document.getElementById("demo2").innerHTML = Math.max(input3 , input4 , input5) ;

}

// Integers program

function integer(){
    var int = document.getElementById('integers').value;

    if (int < 0 ) {
        document.getElementById('demo3').innerHTML = "Entered number is -ve integer";
    }

    else if ( int > 0)
    {
        document.getElementById('demo3').innerHTML = "Entered number is +ve integer";
    }

    else if (int == 0) {
        document.getElementById('demo3').innerHTML = "Entered number is zero"
    }
    
    else {
        document.getElementById('demo3').innerHTML = "Enter numeric value";
    }
    
}

// Divisible Program


function divisible(){
    var dig = document.getElementById('dig').value;

    if((dig % 5 == 0) && (dig % 11 == 0))
    {
        document.getElementById('demo4').innerHTML = "Divisible by 5 and 11";
    }
    else
    {
        document.getElementById('demo4').innerHTML = "not Divisible by 5 and 11";
    }
}

// Even Odd program

function even(){
    var odd = document.getElementById('odd').value;

    if (odd % 2 == 0) 
    {
        document.getElementById('demo5').innerHTML = "EVEN";
    }
    else
    {
        document.getElementById('demo5').innerHTML = "ODD";
    }
}


// Leap Year

function leap(){
    var year =  document.getElementById('year').value;

    if (year % 4 == 0) {
        document.getElementById('demo6').innerHTML = (year + ' is a leap year');
    } else {
        document.getElementById('demo6').innerHTML = (year + ' is not a leap year');
    }
}

// Alphabet\

function alpha(){
    var char = document.getElementById('alp').value;

    if( (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
    document.getElementById('demo7').innerHTML = (char + " is an alphabet.");
}
        else
            { document.getElementById('demo7').innerHTML = (char + " is not an alphabet.");
    }

}


// Vowel

function vow() {
    var vowel = document.getElementById('vowel').value;

    if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u' )
    {
    document.getElementById('demo8').innerHTML = (vowel + " is vowel");
}


        else {
        document.getElementById('demo8').innerHTML = (vowel + " is consonant");

    }
}


// Special

function special(){
    var spe = document.getElementById('spe').value;
    var regex=/^[0-9]+$/;
    if( (spe >= 'a' && spe <= 'z') || (spe >= 'A' && spe <= 'Z')){
        document.getElementById('demo9').innerHTML = (spe + " is an alphabet.");
    }

    else if (spe.match(regex)){
        document.getElementById('demo9').innerHTML = (spe + " is a number.");
    }

    
            else
                { document.getElementById('demo9').innerHTML = (spe + " is special Character.");
        }
}


// Uppercase

function low() {
    var up = document.getElementById('up').value;
    if( up >= 'a' && up <= 'z') {
        document.getElementById('demo10').innerHTML = ("Lowercase Letter");
    }

    else if (up >= 'A' && up <= 'Z') 
    {
        document.getElementById('demo10').innerHTML = ("Uppercase Letter");
    }

    else {
        document.getElementById('demo10').innerHTML = ("Enter an Alphabet");
    }
}

// Marks

function high(){
    var phy = Number(document.getElementById("phy").value);
    var chm =Number(document.getElementById("chm").value);
    var bio = Number(document.getElementById("bio").value);
    var math = Number(document.getElementById("math").value);
    var comp = Number(document.getElementById("comp").value);


    var total = phy + chm + bio + math + comp ;

    var tot = total * 100 / 500;

    if(tot >= 90){
        document.getElementById("demo11").innerHTML = "Your Grade is (A)."
    } 

   else if(tot >= 80){
        document.getElementById("demo11").innerHTML = "Your Grade is (B)."
    } 

    else if(tot >= 70){
        document.getElementById("demo11").innerHTML = "Your Grade is (C)."
    } 

    else if(tot >= 60){
        document.getElementById("demo11").innerHTML = "Your Grade is (D)."
    } 
    
    else if(tot >= 40){
        document.getElementById("demo11").innerHTML = "Your Grade is (E)."
    } 

    else if(tot < 40){
        document.getElementById("demo11").innerHTML = "Your Grade is (F)."
    } 

    else {
        document.getElementById("demo11").innerHTML = "Enter Numeric values"
    }
}



// Bill

function bill(){
    var unit = Number(document.getElementById("unit").value);

    if (unit >= 1 && unit <= 50){
        var fifty = unit * 0.50;
        var uni = (unit * 0.50 ) * 20 / 100;
        document.getElementById("demo12").innerHTML = "Rs. " + (fifty + uni);
    }
    

    else if(unit >=51 && unit <= 150){
        var one = 50 * 0.50 ;
        var two = unit - 50 ;
        var four = two * 0.75;
        var three = ( one + four) * 20 / 100 ;
        document.getElementById("demo12").innerHTML = "Rs. " + ( one + ( four + three)) ;
    }

    else if (unit >=151 && unit <= 250){
        var one = 50 * 0.50 ;
        var four = 100 * 0.75;
        var three = unit - 150 ;
        var five = three * 1.20;
        var six = (one + four) + five ;
        var seven = six * 20 /100;
        document.getElementById("demo12").innerHTML =  "Rs. " + (six + seven) ;
    }

    else if (unit > 250){
        var one = 50 * 0.50 ;
        var four = 100 * 0.75;
        var three = 100 * 1.20 ;
        var two = unit - 250 ;
        var five = two * 1.50;
        var six = ((one + four) + three) + five ;
        var seven = six * 20 /100;
        document.getElementById("demo12").innerHTML =  "Rs. " + (six + seven) ;
    }

    else {
        document.getElementById("demo12").innerHTML = "Enter numeric value";
    }
}



// Week

function unt(){
    var weekday = document.getElementById("popup").value;

    if(weekday > 0 && weekday < 2){
        document.getElementById("demo13").innerHTML = "Monday!"
    }

    else if(weekday > 1 && weekday < 3){
        document.getElementById("demo13").innerHTML = "Tuesday!"
    }

    else if(weekday > 2 && weekday < 4){
        document.getElementById("demo13").innerHTML = "Wednesday!"
    }

    else if(weekday > 3 && weekday < 5){
        document.getElementById("demo13").innerHTML = "Thursday!"
    }

    else if(weekday > 4 && weekday < 6){
        document.getElementById("demo13").innerHTML = "Friday!"
    }

    else if(weekday > 5 && weekday < 7){
        document.getElementById("demo13").innerHTML = "Saturday!"
    }

    else if(weekday > 6 && weekday < 8){
        document.getElementById("demo13").innerHTML = "Sunday!"
    }

    else {
        document.getElementById("demo13").innerHTML = "Enter b/w 1-7"
    }
    
}

// Month

function mnt(){
    var month = document.getElementById("mnth").value;

    if(month > 0 && month < 2){
        document.getElementById("demo14").innerHTML = "(January) 31 Days"
    }

    else if(month > 1 && month < 3){
        document.getElementById("demo14").innerHTML = "(Feburary) 27 Days"
    }

    else if(month > 2 && month < 4){
        document.getElementById("demo14").innerHTML = "(March) 31 Days"
    }

    else if(month > 3 && month < 5){
        document.getElementById("demo14").innerHTML = "(April) 30 Days"
    }

    else if(month > 4 && month < 6){
        document.getElementById("demo14").innerHTML = "(May) 31 Days"
    }

    else if(month > 5 && month < 7){
        document.getElementById("demo14").innerHTML = "(June) 30 Days"
    }

    else if(month > 6 && month < 8){
        document.getElementById("demo14").innerHTML = "(July) 31 Days"
    }

    else if(month > 7 && month < 9){
        document.getElementById("demo14").innerHTML = "(August) 31 Days"
    }

    else if(month > 8 && month < 10){
        document.getElementById("demo14").innerHTML = "(September) 30 Days"
    }

    else if(month > 9 && month < 11){
        document.getElementById("demo14").innerHTML = "(October) 31 Days"
    }

    else if(month > 10 && month < 12){
        document.getElementById("demo14").innerHTML = "(November) 30 Days"
    }

    else if(month > 11 && month < 13){
        document.getElementById("demo14").innerHTML = "(December) 31 Days"
    }

    else {
        document.getElementById("demo14").innerHTML = "Enter b/w 1-12"
    }
}