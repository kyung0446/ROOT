/*

*****   5
****    4
***     3
**      2
*       1

*/

let star = '';
for( let i=5 ; i>=1 ; i-- ){
    for( let j=1 ; j<=i ; j++ ){
        star += '*';
    }
    console.log(star);
    star = '';
}
