//객체
/*
 객체명 = {
    속성 : 속성값,
    속성 : 속성값,
    속성 : 속성값,
  }
객체명.속성
객체명['속성']
*/
const kim = {
    firstName : 'dil-dong',
    lastName : 'kim',
    age : 35,
    phone : '010-000-0000',
    address : function(){ console.log( '주소출력')},
}
console.log( kim.age );
// console.log( kim['age'] );
kim.age = 40;
console.log( kim.age );
kim.address();

let copyB = kim;
console.log( copyB );
kim.age = 35;
console.log( copyB );


