let divWin = document.getElementById('wictory')
let divHint = document.getElementById('hint')

let mainNum = 0 



function diffSet(){
    let diffConfig = document.getElementById('diffConfig').value
    // location.reload()
    // let inputNumStyle = document.getElementById('inputNum')

    if (diffConfig == 'E'){
        mainNum = Math.floor(Math.random()*10 + 1)
        console.log(mainNum)
    } else if (diffConfig == 'N'){
        mainNum = Math.floor(Math.random()*100 + 1)
        console.log(mainNum)
    } else if (diffConfig == 'H') {
        mainNum = Math.floor(Math.random()*1000 + 1)
        console.log(mainNum)
    } else if (diffConfig == 'EX') {
        mainNum = Math.floor(Math.random()*100000 + 1)
        console.log(mainNum)
    } else {
        diffConfig = 'N'
        mainNum = Math.floor(Math.random()*100 + 1)
        console.log(mainNum)
    }
    
    console.log(diffConfig)
}

function checkNum() {
    let inputNum = document.getElementById('inputNum').value
    console.log(inputNum)

    if (inputNum == mainNum){
        divWin.innerHTML = "You won!"
        divHint.innerHTML = ""
    } else if (inputNum > mainNum){
        divWin.innerHTML = "You're still playing!"
        divHint.innerHTML = "Too big"
    } else if (inputNum < mainNum) {
        divWin.innerHTML = "You're still playing!"
        divHint.innerHTML = "Too small"
    } else {
        divWin.innerHTML = "Please enter a number."
    } 
}

