/*

   *       1.....1 (1*2)-1
  ***      2.....3 (2*2)-1
 *****     3.....5 (3*2)-1
*******    4.....7 (4*2)-1

*/

let star = '';
for( let i=1 ; i<=4 ; i++ ){
    // for( let j=i ; j<4 ; j++ ){
    //     star += ' ';
    // }
    for( let j=4 ; j>i ; j--) {
        star += ' ';
    }
    for( let k=1 ; k<=(i*2)-1 ; k++ ){
        star += '*';
    }
    console.log(star);
    star = '';
}

