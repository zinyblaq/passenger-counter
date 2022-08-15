// let count=document.getElementById('counter-rel').innerHTML='yes'
// console.log(count)

let countinner=document.getElementById('counter-rel')
let count=0
function incrementCount(countdown){
       count++
    //    count=count + 1

    countinner.innerHTML=count
    console.log(count)
}
let saveEl=document.getElementById('save-el')

function save(){
    let countstr=count + '-'
    saveEl.textContent += countstr
    count=0
    countinner.innerHTML=0
    // console.log(count)
}
// incrementCount()