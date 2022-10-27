const ROW=10;
const COL=10;
const TOTAL = ROW * COL;
const MAX_MINE=10;

const shuffleMine = () => {
    const mine = [];
    while( mine.length < 10 ) {
        let temp = Math.floor(Math.random()*TOTAL);
        if( mine.includes(temp) == false ){
            mine.push( temp );
        }
    }
    return mine.sort( (a,b) => a-b );
}

const createMineTable = (arrMine) => {
    const tagMine = document.querySelector('.mine');
    for( let i=0 ; i<TOTAL ; i++ ){
        const obj = document.createElement('div');
        if( arrMine.includes(i) ){
            obj.textContent = '●';
        } else {
            obj.textContent = `${i}`;
        }        
        tagMine.appendChild( obj );
    }
}

const addEvent = () => {
    const tagMine = document.querySelector('.mine');
    tagMine.addEventListener('contextmenu', (event)=> {
        event.preventDefault();
        const target = event.target;
        let target_idx = 0;
        for( let i=0 ; i<tagMine.children.length ; i++ ){
            if( tagMine.children[i] == target ) {
                target_idx = i;
            }
        }
        console.log( `idx = ${target_idx}`);
    });
}

const init = () => {
    const setMine = shuffleMine();
    createMineTable(setMine);
    addEvent();    
}
init();