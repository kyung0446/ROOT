const TOTAL = 12;
const color_list = [];

const shuffleColors = () => {
    const colors = ['red','orange','purple','green','aqua','pink'];
    const total_colors = colors.concat( colors );
    for( let i=0 ; i<TOTAL ; i++ ){
        const idx = Math.floor(Math.random()*total_colors.length);
        color_list.push( total_colors[idx] );
        total_colors.splice(idx,1);
    }
}

const createDivElem = (divClassName, color="none") => {
    const divElem = document.createElement('div');
    divElem.className = divClassName;
    divElem.style.backgroundColor = color;
    return divElem;
}

const createCardElem = () => {
    for( let i=0 ; i<TOTAL ; i++ ){
        const card = createDivElem('card');
        card.appendChild(createDivElem('card-front',color_list[i]));
        card.appendChild(createDivElem('card-back',"blue"));
        document.querySelector('#wrapper').appendChild(card);
    }
}
const init = () => {
    shuffleColors();
    createCardElem();
}

init();

