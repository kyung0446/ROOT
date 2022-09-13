const mines = {
    row : 5,
    col : 5,
    count : 3,
}
const playTable = new Array(mines.row).fill(0).map( ()=> new Array(mines.col).fill(0) );

//지뢰 주위에 숫자를 1씩 증가 시키도록 하는 함수
const pushBoard = (x,y) => {
    for( let i=x-1 ; i<=x+1 ; i++ ){
        for( let j=y-1 ; j<=y+1 ; j++ ) {
            if( i<0 || j<0 || i === playTable.length || j === playTable[x].length ) {
                continue;
            }
            playTable[i][j] += (playTable[i][j] !=='B') ? 1 : '';
        }
    }
}

const pushRandomMines = () => {
    playTable[1][0] = 'B';
    pushBoard(1,0);
    playTable[1][2] = 'B';
    pushBoard(1,2);
    playTable[4][4] = 'B';
    pushBoard(4,4);
}
const getBoardIndex = (target) => {
    const obj = target.parentNode;
    for( let i=0 ; i<obj.children.length ; i++ ){
        if( obj.children[i] === target ) {
            return i;
        }
    }
    return -1;
}
const handlerClickLeft = (event)=> {
    const obj = event.target;
    const idx = getBoardIndex(obj);
    if( idx >= 0 ){
        //객체를 제대로 클릭했을 때
        obj.classList.add('show');
        let x = Math.floor( idx/mines.col );
        let y = idx % mines.col;
        obj.textContent = playTable[x][y];
    }
}
const handlerClickRight = (event) => {
    event.preventDefault();
    const obj = event.target;
    if( obj.classList.contains('flag') ) {
        //flag 클래스가 있는 상태
        obj.classList.remove('flag');
        obj.textContent = '';
    } else {
        //flag 클래스가 없는 상태
        obj.classList.add('flag');
        obj.textContent = '!';
    }
    
}
const createMinesBoard = () => {
    const tagMine = document.querySelector('.mine');
    for( let i=0 ; i<mines.row ; i++ ) {
        for( let j=0 ; j<mines.col ; j++ ) {
            let obj = document.createElement('div');
            obj.textContent = '';
            //좌클릭
            obj.addEventListener('click',handlerClickLeft);
            //우클릭
            obj.addEventListener('contextmenu',handlerClickRight);
            //자식으로 추가
            tagMine.appendChild(obj);
        }
    }
}
const init = () => {
    pushRandomMines();
    createMinesBoard();
}
init();