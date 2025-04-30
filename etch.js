const container = document.querySelector(".container");



const box = document.querySelector('.container');
for(let i =1;i<273;i++){
    const div = document.createElement('div');
    box.appendChild(div);
}

const btn = document.querySelector('#btn');

btn.addEventListener("click",()=> {
    let size = prompt("What size would you like?")
    return size;
})