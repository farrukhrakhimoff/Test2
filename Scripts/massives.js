"use Strict"

const arr = [1, 2, 3, 4, 5, 6]
// arr[99] = 1; // bunday qilib qoysa array ni 100 ta deb chiqaradi va oradilarni empylarini ham hisobga ovoradi
// console.log(arr.length);
// arr.pop();
// arr.push(7);
// console.log(arr);

//1-way
// for(let i =0; i < arr.length; i++)[
    // console.log(arr[i])
// 
//2-way
// for(let value of arr){
    // console.log(value);
// }
// ------------


arr.forEach(function(item,index,array){
    console.log(`${index}: ${item} into arr ${arr}`);
})