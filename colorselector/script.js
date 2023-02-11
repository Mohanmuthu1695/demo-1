const container=document.querySelector(".container");
const change=document.querySelector(".change");

const maxbox =30;
const generatepallet=()=>{
    for (let index = 0; index < maxbox; index++) {
        let randomHex =Math.floor(Math.random()* 0xffffff).toString(16);
        randomHex=`#${randomHex.padStart(6,"0")}`;
        
    


    const color =document.createElement('li');
    color.classList.add('color');
    color.innerHTML=` <div class="box" style="background:${randomHex}"></div>
                       <span class="code">${randomHex}</span>`;
    color.addEventListener('click',() => copycolor(color,randomHex));
    container.appendChild(color);

    }
}
generatepallet();
const copycolor=(elem,hexVal)=>{
    const colorelement=elem.querySelector(".code");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorelement.innerText="copied";
        setTimeout(()=>colorelement.innerText=hexVal,1000)
    })
}
change.addEventListener("click",generatepallet);
function copyy(){
    return copycolor()
};
