"use strict"
let a4 = 10, b4 = 0.1, c4 = 2;
if (a4*b4*c4 >= a4+b4+c4)
{
    alert(`max(a*b*c, a+b+c)+3 = a*b*c+3 = ${a4*b4*c4 + 3}`);    
}
else
{
    alert(`max(a*b*c, a+b+c)+3 = a+b+c+3 = ${a4+b4+c4 + 3}`);
}
