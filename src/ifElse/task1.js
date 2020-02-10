"use strict"

//1

let a1 = 10, b1 = 4;
if (a1 % 2 == 0)
{
    alert(a1 * b1);
} 
else
{
    alert(a1 + b1);
}

//2

let x = -13.25, y = 7.9;
if (x >= 0)
{
    if  (y >= 0)
    {
        alert ("I quarter");
    }
    else
    {
        alert ("IV quarter");
    }
}
else
{
    if (y >= 0)
    {
        alert ("II quarter");
    }
    else
    {
        alert ("III quarter");
    }
}

//3

let a3 = 3, b3 = -7, c3 = 3.2;
a3 = (a3>=0)? a3 : 0;
b3 = (b3>=0)? b3 : 0;
c3 = (c3>=0)? c3 : 0;
alert (`sum = ${a + b + c}`);

//4

let a4 = 10, b4 = 0.1, c4 = 2;
if (a4*b4*c4 >= a4+b4+c4)
{
    alert(`max(a*b*c, a+b+c)+3 = a*b*c+3 = ${a4*b4*c4 + 3}`);    
}
else
{
    alert(`max(a*b*c, a+b+c)+3 = a+b+c+3 = ${a4+b4+c4 + 3}`);
}

//5

let rat = 79;
if (rat >= 0 && rat <= 19)
    alert("The mark is F");
else if (rat >= 20 && rat <= 39)
    alert("The mark is E");
else if (rat >= 40 && rat <= 59)
    alert("The mark is D");
else if (rat >= 60 && rat <= 74)
    alert("The mark is C");
else if (rat >= 75 && rat <= 89)
    alert("The mark is B");
else if (rat >= 90 && rat <= 100)
    alert("The mark is A");
else
    alert ("Error!");