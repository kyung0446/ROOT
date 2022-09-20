const MAX_MARGIN = 300;
// const tagBox = document.querySelectorAll('section div');
const tagSection = document.querySelectorAll('section');

const handerScroll = ()=>{
    tagSection.forEach( (elem) => {
        //sections object
        // console.log( elem );
        // console.log( Array.isArray(elem.children) );
        // console.log( Array.isArray(elem.childNodes) );
        const boxTop = elem.getBoundingClientRect().top;
        const boxObj = elem.children;
        // const boxObj = elem.childNodes;
        if( window.innerHeight > boxTop+MAX_MARGIN ){
            // for( let i=0 ; i<boxObj.length ; i++ ) {
            //     boxObj[i].classList.add('show');
            // }
            // [].forEach.call( boxObj , (obj)=>{
            //     console.log( obj );
            // });
            Array.from(boxObj).forEach( (obj) => {
                obj.classList.add('show');
            });
        }
    });
}
const init = ()=>{
    window.addEventListener('scroll',handerScroll);
}
window.addEventListener('load',init);