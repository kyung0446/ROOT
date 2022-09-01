const tagWrapper = document.querySelector('.wrapper');
let currentObj = null;
const activeDoor = (obj)=> {
    obj.classList.add('door-open');
    currentObj = obj;
}
const inactiveDoor = (obj) => {
    obj.classList.remove('door-open');
}
const handlerClick = (event) => {
    const targetElem = event.target;
    if( targetElem.classList.contains('door-front') ){
        if( currentObj ) {
            inactiveDoor(currentObj);
        }
        activeDoor( targetElem.parentNode );
    }
}
tagWrapper.addEventListener( 'click',handlerClick );
activeDoor( document.querySelector('.door:nth-child(2)') );
