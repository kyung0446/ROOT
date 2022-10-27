/*
    내장 함수 객체를 활용

String
Number
Boolean
Math
Date
JSON
Set
Array
*/

// const str1 = 'javascript';
// const str2 = new String('javascript');
// console.log( typeof str1 , str1);
// console.log( typeof str2 , str2);

// console.log( str1 === 'javascript' );
// console.log( str2 , new String('javascript') );
// console.log( str2 === new String('javascript') );

// console.log( str1.valueOf() , str1.length );
// console.log( str2.valueOf() , str2.length );

// console.log( str1.valueOf() === str2.valueOf() );

//string -> trim(공백을 없애주는 메서드)
// const str = '       abc ABC';
// console.log( str );
// console.log( str.trim() );

const sentence = 'the sun shine';
/*  문자열.slice(시작index,끝index)*/
// console.log( sentence.slice(4,7) );
// console.log( sentence.slice(4) );
// console.log( sentence.substr(4,3) );
// console.log( sentence.charAt(4) );   /* sentence[4] */
// console.log( sentence.indexOf('w') );
// console.log( sentence.toLowerCase() );
// console.log( sentence.toUpperCase() );

// const arr = [1,2,3];
// const bool = true;
// console.log( typeof bool.toString() , bool.toString());

const str = '123456789';
// const arr = []
// for( let i=0 ; i<str.length ; i++ ){
//     arr[i] = str[i];
// }
const arr = Array.from(str);
const arrTemp = Array.from(str, el=>el+' st');
console.log( arr );
console.log( arrTemp );

const won = 'aaa@naver.com';
const temp = won.split('@');
console.log( temp[0] , temp[1] );

const data = ['a','b','c','d'];
console.log( data.join(':') );








