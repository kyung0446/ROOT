const mines = {
    row : 10,
    col : 10,
    count : 14,
}
const playTable = new Array(mines.row).fill(0).map( ()=> new Array(mines.col).fill(0) );

//지뢰 주위에 숫자를 1씩 증가 시키도록 하는 함수
const pushBoard = (x,y) => {
    playTable[x][y] = 'B';
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
    // playTable[1][0] = 'B';
    // pushBoard(1,0);
    // playTable[1][2] = 'B';
    // pushBoard(1,2);
    // playTable[4][4] = 'B';
    // pushBoard(4,4);
    const rowArr = new Array(10).fill().map( (v,i)=>i );
    for( let i=0 ; i<3 ; i++ ) {
        const idx = Math.floor( Math.random()*rowArr.length );
        rowArr.splice(idx,1);
    }
    for( let i=0 ; i<rowArr.length ; i++ ) {
        const colArr = new Array(10).fill().map( (v,i)=>i );
        for( let j=0 ; j<2 ; j++ ) {
            const idx = Math.floor( Math.random()*colArr.length );
            pushBoard(rowArr[i],colArr[idx]);
            colArr.splice(idx,1);
        }
    }
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
const findEmptyItem = (objList,x,y) => {
    setTimeout(()=>{
        for( let i=x-1 ; i<=x+1 ; i++ ){
            for( let j=y-1 ; j<=y+1 ; j++ ){
                if( i<0 || j<0 || i === playTable.length || j === playTable[x].length ) {
                    continue;
                }
                let idx = (i*mines.col)+j;
                objList[idx].classList.add('show');
                objList[idx].textContent = playTable[i][j];
                if( playTable[i][j] === 0) {
                    findEmptyItem( objList , i , j );
                }
            }
        }
    },0);

}
const handlerClickLeft = (event)=> {
    const obj = event.target;
    if( obj.classList.contains('show') || obj.classList.contains('flag') ) {
        return;
    }
    const idx = getBoardIndex(obj);
    if( idx >= 0 ){
        //객체를 제대로 클릭했을 때
        obj.classList.add('show');
        let x = Math.floor( idx/mines.col );
        let y = idx % mines.col;
        let item = playTable[x][y];
        //item 의 상태
        switch( item ) {
            case 'B' :  //지뢰일 경우
                obj.textContent = '꽝!';
                break;
            case 0 : //빈값 처리, 쫙 퍼져서 보이도록
                findEmptyItem(obj.parentNode.children,x,y);
                break;
            default :
                obj.textContent = item;
                break;
        }
    }
}
const handlerClickRight = (event) => {
    event.preventDefault();
    const obj = event.target;
    if( obj.classList.contains('show') ) {
        return;
    }
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
    console.log( 'init load.......');
    pushRandomMines();
    createMinesBoard();
}
window.addEventListener('load',init);

// init();