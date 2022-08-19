let a = window.prompt("Please enter First number:")
let b = window.prompt("Please enter second number:")
let CM = Number;
let count = Number(0)
const ans = []
var gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }

CM = gcd(+a,+b)

ans[count] = CM;
count += 1;
CM -=1

while(CM>0){
    if (a%CM == 0 && b%CM==0){
        ans[count] = CM;
        count +=1;
    }
    CM -=1;
}
alert("List of common diviser of "+a+", "+b+" is: "+ans );





