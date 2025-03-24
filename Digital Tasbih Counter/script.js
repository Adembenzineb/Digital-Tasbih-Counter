
let count = 0;
document.getElementById("counter").innerHTML = count

function counter() {
    count += 1;
    document.getElementById("counter").innerHTML = count

    checkgoal()
}

function verif(){

    if (!document.getElementById("goal")){
        alert("Error: Please type a number");
        return false
    }

    if (isNaN(document.getElementById("goal").value)){
        alert("Error: Please type a valid number");
        return false
    }
    return true
}

function checkgoal(){    
    if( parseInt(document.getElementById("goal").value) == count  ){
        alert("Congrats : you reached your goal!");
    }
}
