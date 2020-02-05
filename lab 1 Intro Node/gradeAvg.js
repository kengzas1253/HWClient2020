let score=[2,3.5,4,1.5] //เกรด
let credit=[3,3,3,3] //หน่วยกิต
let sumCredit=0

let sum1 =score[0]*credit[0];
let sum2 =score[1]*credit[1];
let sum3 =score[2]*credit[2];
let sum4 =score[3]*credit[3];
let s=sum1+sum2+sum3+sum4;
for(let i in credit){
    sumCredit=sumCredit+credit[i];
}
console.log("Average of grade = "+ s/sumCredit);