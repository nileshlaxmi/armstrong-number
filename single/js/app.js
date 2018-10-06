const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    let num = Number(str);
    if(str !== ""){
        let sum = 0;
        let ar = str.split("");
        for(let i = 0; i<ar.length; i++){
            sum = sum + Math.pow(Number(ar[i]), ar.length);
        }

        if(sum === num){
            document.getElementById('opText').innerHTML = "Armstrong Number";
        }
        else{
            document.getElementById('opText').innerHTML = "Not an Armstrong Number";
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
