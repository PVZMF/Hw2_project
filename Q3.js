let num = window.prompt("Please enter a number:");
let float_num = +num -Math.floor(+num);
console.log(float_num)
let integer_num = Math.floor(+num);
let NumINT = Number(0);
let NumFloat = Number(0);

if (integer_num!=0){
    while(integer_num>0){
        integer_num = Math.floor(integer_num/10);
        NumINT +=1;
    }
    alert("The numbers of integer = "+ NumINT)
}

if (float_num!=0){
    while(float_num>0){
        float_num = float_num*10 - Math.floor(float_num*10);
        NumFloat +=1;
    }
    alert("The numbers of float = "+ NumFloat)
}
