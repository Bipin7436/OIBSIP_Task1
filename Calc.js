function dis(val) {
    document.getElementById("result").value += val
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'|| event.key == '2' || event.key == '3'|| event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'|| event.key == '8' || event.key == '9'|| event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calc");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}

function clr() {
    document.getElementById("result").value = ""
}
// let string="";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML== '='){
//             string=eval(string);
//             document.querySelector('input').value=string;
//         }
//         else if(e.target.innerHTML=='C'){
//             string=""
//             document.querySelector('input').value=string;
//         }
//         else{
//             console.log(e.target)
//             string=string+e.target.innerHTML;
//             document.querySelector('input').value=string;
//         }
        
//     })
// })