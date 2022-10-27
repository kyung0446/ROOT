(()=>{
    const tagMenuIcon = document.querySelector('.menu-icon');
    const tagMenu = document.querySelectorAll('.menu-bar>ul>li');
    const tagSection = document.querySelectorAll('section');
    const getMenuIndex = (obj) => {
        const elem = obj.parentNode.children;
        for( let i=0 ; i<elem.length ; i++ ){
            if( elem[i] === obj ){
                return i;
            }
        }
        return 0;
    }

    const changeDisplay = () => {
        const value = tagMenuIcon.style.opacity;
        console.log( `value=${value}  xor=${value^'1'}`)
        // let strValue = value^'1';
        tagMenuIcon.style.opacity = '' + (value^'1');
        /*** menu bar display */
        document.querySelector('.menu-bar').classList.toggle('menuoff');
        /*** main display */
        document.querySelector('main').classList.toggle('menuon');
    }

    const handlerClickMenu = (event) => {
        const idx = getMenuIndex( event.currentTarget );
        // console.log( idx );
        /*** menu icon display */        
        tagMenuIcon.style.cursor = 'pointer';
        changeDisplay();
        /*** section display */
        tagSection.forEach( (elem) => {
            elem.classList.remove('on');
        });
        tagSection[idx].classList.add('on');
    }
    tagMenu.forEach( (elem) => {
        elem.addEventListener( 'click' , handlerClickMenu );
    });

    const handlerClickIcon = () => {
        const value = tagMenuIcon.style.opacity;
        if( value == 0 ) return;
        
        tagMenuIcon.style.cursor = 'inherit';
        changeDisplay();
    }
    tagMenuIcon.addEventListener( 'click', handlerClickIcon );
})();