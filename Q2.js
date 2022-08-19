let a = window.prompt("Please enter First number:")
let b = window.prompt("Please enter second number:")
let c = window.prompt("Please enter third number:")

if(+a + +b > +c){
    if(+a + +c > +b){
        if(+b + +c > +a){
            alert("Yes, You can :D")
        }
        else{alert("No, Sorry, :X")}
    }
    else{alert("No, Sorry, :X")}
}
else{alert("No, Sorry, :X")}

