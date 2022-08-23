// const tagFruits = document.getElementById('fruits');
const tagFruits = document.querySelector('#fruits');
//tagFruits 요소의 자식 노드의 정보를 일기
// console.log( tagFruits.childNodes );
//자식 노드만
console.log( tagFruits.children );
console.log( tagFruits.firstChild );
console.log( tagFruits.lastChild );
console.log( tagFruits.firstElementChild );
console.log( tagFruits.lastElementChild );
//자식 노드 확인하기
// console.log( tagFruits.hasChildNodes() );
console.log( tagFruits.childElementCount );
//부모 노드의 정보 알기
console.log( tagFruits.parentNode );
//형제 노드의 정보 알기
console.log( tagFruits.previousSibling );
console.log( tagFruits.nextSibling );
console.log( tagFruits.previousElementSibling );
console.log( tagFruits.nextElementSibling );

const tagBanana = document.querySelector('.banana');
console.log( tagBanana.previousElementSibling );
console.log( tagBanana.nextElementSibling );

//노드 정보를 알아오기
console.log( tagBanana.nodeName );