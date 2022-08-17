// function hello() {
//     console.log( 'Hello World' );
// }
// hello();
// hello.myName = 'gil-dong';
// console.log( hello.myName );

//값을 전달받아서 합을 반환시켜주는 함수
// function add(x) {
//     return x+x;
// }
// const add = (x) => x+x;
// console.log( add(5) );
// const data = add;
// console.log( data(6) );

const hello = () => {
    console.log( 'hello~~~');
}
const hi = () => {
    console.log( 'HI^^');
}
const meet = (type,fnHello,fnHi) => {
    if( type === 'high' ) {
        fnHello();
    } else {
        fnHi();
    }
}
meet( 'high', hello , hi );
/*
const meet = (type, check) => {
    if( check === true ) {
        if( type === 'high' ) {
            hello();
        } else {
            hi();
        }
    }
}
meet( 'high', true );
meet( 'high',false );
meet( 'low',true );
*/