const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    let num = parseInt(str);
    
    if(str !== ""){
        for(let i=1; i<=num; i++){
            let ar = i.toString().split("");
            let sum = 0;
    
            for(let j=0; j<ar.length; j++){
                let number = parseInt(ar[j]);
                sum = sum + Math.pow(number, ar.length);
            }
            
            if(sum === i){
                var para = document.createElement("p");
                para.innerHTML = "Armstrong Numbers "+ i;
                document.getElementById('opText').appendChild(para);
            }
        }
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
