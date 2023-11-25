const endDate = "23 November 2023 1:17 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const cur = new Date()
    const dif = (end - cur)/1000;
    if(dif < 0){
        return
    }
    inputs[0].value = Math.floor(dif / 3600 / 24);
    inputs[1].value = Math.floor((dif / 3600) % 24);
    inputs[2].value = Math.floor((dif / 60) % 60);
    inputs[3].value = Math.floor(dif % 60);
}

clock()

setInterval(function f(){clock()}, 1000)
// setInterval(()=>{clock()}, 1000)
