// let fruit = prompt('어떤 과일을 구매하시겠습니까?','apple');
/*
 예약어(변수선언) 객체명 = {
    속성이름 : 속성값 ,
    속성이름 : 속성값 ,
 }
 객체명.속성이름
 객체명['속성이름']
*/
// let fruit = 'apple';
// let wishList = {
//     [fruit+"_red"] : 5 ,
//     [fruit+"_green"] : 5 ,
// };
// wishList[fruit] = 5;
// console.log( wishList );

// const makeUser = (userName,age) => {
//     return { 
//         // userName:userName , 
//         // age:age ,
//         userName ,
//         age ,
//     }
// }
// let user = makeUser( 'hong' , 30 );
// console.log( user );

// let return = 0;
// "key" in Object;

// let user = {
//     userName : 'hong' ,
//     age : 30 ,
//     height : 100 ,
// }
// console.log( user );
// for( let key in user ) {
//     console.log( key );
//     console.log( user[key]);
// }

let user1 = {
    name : 'hong',
    age : 30 ,
    introduce : function() {
         console.log( `안녕하세요. 저는 ${this.nickName} 이고, 나이는 ${this.age}입니다`);
    } ,
}

let user2 = {
    name : 'dong',
    age : 18 ,
    introduce : function() {
         console.log( `안녕하세요. 저는 ${this.nickName} 이고, 나이는 ${this.age}입니다`);
    } ,
}

//생성자 constructor
// function User(nickName,age) {
//     this.nickName = nickName;
//     this.age = age;
//     this.introduce = function() {
//         console.log( `안녕하세요. 저는 ${this.nickName} 이고, 나이는 ${this.age}입니다`);
//     }
// }
// //인스턴스(instance) => 각각의 다른 객체
// const user1 = new User('hong',30);
// const user2 = new User('dong',18);
// user1.introduce();
// user2.introduce();



