const tagFruits = document.querySelector('#fruits');
tagFruits.style.backgroundColor = 'green';
tagFruits.style.border = '2px solid red';
// tagFruits.innerHTML += '<li class="apple">Apple</li>';
// tagFruits.innerHTML += '<li class="banana">Banana</li>';
// tagFruits.innerHTML += '<li class="orange">Orange</li>';
// const tagApple = document.createElement('li');
// tagApple.textContent = 'Apple';
// tagApple.className = 'apple';
// tagFruits.appendChild(tagApple);

// const tagBanana = document.createElement('li');
// tagBanana.textContent = 'Banana';
// tagBanana.className = 'banana';
// tagFruits.appendChild(tagBanana);

// const tagOrange = document.createElement('li');
// tagOrange.textContent = 'Orange';
// tagOrange.className = 'orange';
// tagFruits.appendChild(tagOrange);

const content = ['Apple','Banana','Orange'];
const clsName = ['apple','banana','orange'];
// content.forEach( (el,idx) => {
//     const tagLi = document.createElement('li');
//     tagLi.textContent = el;
//     let text = el[0].toLowerCase() + el.slice(1,el.length);
//     tagLi.className = text;
//     tagFruits.appendChild(tagLi);
// });
for( let i=0 ; i<content.length ; i++ ){
    const tagLi = document.createElement('li');
    tagLi.textContent = content[i];
    tagLi.className = clsName[i];
    tagFruits.appendChild(tagLi);
}

const tagMelon = document.createElement('li');
tagMelon.textContent = 'Melon';
// tagMelon.appendChild( document.createTextNode('Melon') );
// tagMelon.className = 'melon';
// tagFruits.insertBefore( tagMelon,tagFruits.lastElementChild );

const tagCherry = document.createElement('li');
// tagCherry.textContent = 'Cherry';
// const value = tagFruits.appendChild(tagCherry);
// console.log( value );
tagCherry.append('Cherry');
tagFruits.append(tagCherry,tagMelon);

const cloneObj = tagFruits.cloneNode(true);
cloneObj.id = 'bbb';
console.log( cloneObj );
tagFruits.appendChild( cloneObj );

const tagPlum = document.createElement('li');
tagPlum.textContent = 'Plum';

tagFruits.replaceChild(tagPlum,tagFruits.firstElementChild);

tagFruits.removeChild(tagFruits.lastElementChild);

const tagClass = document.querySelector('.banana');
tagClass.classList.toggle('add',true);  //강제적

tagClass.classList.toggle('add',false);  //강제적

tagClass.classList.toggle('add');
// tagClass.classList.toggle('add');
console.log( tagClass.classList[0] , tagClass.classList[1]);

console.log( tagClass.classList.contains('aaa') );