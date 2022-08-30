
const tagColor = document.querySelector('#color');
const tagResult = document.querySelector('#result');
let timeoutID;
let time = { 
                start:0, 
                end:0,
                getTimeDiff : function(){ 
                    return this.end - this.start;
                } 
            };
let records = [];

const changeColorContent = (old,current,text) => {
        // tagColor.classList.remove('waiting');
        // tagColor.classList.add('ready');
        tagColor.classList.replace(old,current);
        tagColor.textContent = text;
}

const rankRecords = (time) => {
    records.push(time);
    //평균
    // let sum=0;
    // let average=0;
    // records.forEach( (v) => {
    //     sum += v;
    // });
    // average = sum / records.length;
    const average = records.reduce( (v,i) => v+i ) / records.length;
    //TOP3 를 추출
    const top3 = records.sort( (a,b) => a-b ).slice(0,3);  
    //화면에 출력
    // tagResult.textContent = `${currentTime} ms`;   
    let htmlStr = '';
    htmlStr += `<span>현재 : ${time}ms</span>`;
    htmlStr += `<span>평균 : ${average}ms</span>`;
    top3.forEach( (v,i) => {
        htmlStr += `<p>${i+1}위 : ${v}ms</p>`;
    });
    tagResult.innerHTML = htmlStr;
}
const handlerColorClick = () => {
    if( tagColor.classList.contains('waiting') ){
        changeColorContent('waiting','ready','초록색이 되면 클릭하세요');
        /***** 랜덤초가 지나면 now 로 변경 */
        let second = Math.floor( Math.random()*3+2 );  //초
        timeoutID = setTimeout( ()=>{
            changeColorContent('ready','now','클릭하세요');
            time.start = new Date();
        },second*1000);
    } else if( tagColor.classList.contains('ready') ){
        clearTimeout(timeoutID);
        changeColorContent('ready','waiting','너무 성급하시군요!');

    } else if( tagColor.classList.contains('now') ){
        clearTimeout(timeoutID);
        time.end = new Date();
        // const currentTime = time.end - time.start;
        // rankRecords( currentTime );
        rankRecords( time.getTimeDiff() );
        changeColorContent('now','waiting','클릭해서 시작하세요');
    }
}
tagColor.addEventListener( 'click', handlerColorClick );
