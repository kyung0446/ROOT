const mines = {
    row : 5 ,
    col : 5 ,
    total : (this.row * this.col),
    count : 2,
}

const playTable = new Array(mines.row).fill(0).map(() => new Array(mines.col).fill(0));

const pushMines = () => {
    playTable[0][0] = '●';
    pushTable(0,0);
    playTable[3][3] = '●';
    pushTable(3,3);
    console.log( playTable );
}
const pushTable = (row,col) => {
    let iLen = row + 2;
    let jLen = col + 2;
    for( let i=row-1 ; i<iLen ; i++ ){
        for( let j=col-1 ; j<jLen ; j++ ){
            if( i<0 || j<0 || i === playTable.length || j === playTable[row].length || (i===row && j===col) ){
                continue;
            }
            playTable[i][j] += (playTable[i][j] !== '●' ) ? 1 : '';
        }
    }
}

const findEmptyItem = (objList,row,col) => {
    setTimeout( ()=>{
        let iLen = row + 2;
        let jLen = col + 2;
        for( let i=row-1 ; i<iLen ; i++ ) {
            for( let j=col-1 ; j<jLen ; j++ ) {
                if( i<0 || j<0 || i === playTable.length || j === playTable[row].length || (i===row && j===col) ){
                    continue;
                }         
                let idx = (i*mines.row)+j;                
                objList[idx].textContent = playTable[i][j];
                objList[idx].classList = 'show';
                if( playTable[i][j] === 0 ){
                    findEmptyItem(objList,i,j);
                }
            }
        }
    },0);

}

const getTableIndex = (target) => {
    const obj = target.parentNode;
    for( let i=0 ; i<obj.children.length ; i++ ){
        if( obj.children[i] == target ) {
            return i;
        }
    }
    return -1;
}

const handlerClickLeft = (e) => {
    const obj = e.target;
    if( obj.classList.contains('show') || obj.classList.contains('flag')) {
        return;
    }
    obj.classList.add('show');
    const idx = getTableIndex(obj);
    let x = Math.floor( idx / mines.col );
    let y = idx % mines.col;
    let item = playTable[x][y];
    if( item === '●' ) {
        //폭탄을 선택했어요
        obj.textContent = '꽝';
    } else if( item === 0 ) {
        //빈값을 눌렀으니 쫙 퍼져요.
        findEmptyItem(obj.parentNode.children,x,y);
    } else {
        obj.textContent = item;
    }
}
const handlerClickRight = (e) => {
    e.preventDefault();
    const obj = e.target;
    if( obj.classList.contains('show') ) {
        return;
    }
    if( obj.classList.contains('flag') ){
        //플래그를 삭제하고 화면에서도 없애요
        obj.classList.remove('flag');
        obj.textContent = '';
    } else {
        //플래그가 없으면 추가하고 화면에서 보여요
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
            obj.style.backgroundColor = 'gray';
            //우클릭
            obj.addEventListener('click', handlerClickLeft );
            //좌클릭
            obj.addEventListener('contextmenu', handlerClickRight );
            tagMine.appendChild(obj);
        }
    }
}

const init = () => {
    pushMines();
    createMinesBoard();
}

init();