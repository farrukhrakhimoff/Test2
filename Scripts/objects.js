'Use strict'

// const thief = {
//     jacket: 'Blue',
//     height: 1.7,
//     details: {
//         hair: 'jet black',
//         style: 'long'
//     },
// }

// console.log(thief.height);

// delete thief.height; // it delets the property with value

// console.log(thief);

// console.log(typeof thief.details.hair);
// console.log(Object.keys(thief).length)
// console.log(Object.keys(person).length)

// ----------
// FOR IN //
// ----------
// let count = 0;
// for(let key in thief) { // for in ni object ishlatish orqali uning property lariga yoki uning value lariga murojat qilish mumkin
//     count++;
//     /*if(typeof thief[key] === "object"){
//         for(let i in thief[key]){ //agar object ichidagi objectni value si ni value sini chiqarmoqchi bo'lsangiz, here we go
//             console.log(`Property ${i} has a value: ${thief[key][i]}`)
//         }
//     }
//     else{
//         console.log(`Property ${key} has a value: ${thief[key]}`)            
//         };*/
// }
// console.log(count);
// -------------------------
// The First Method has been written by you!
// let person = {
    //     age: 3,
    //     name: 'Farrux',
    //     ismarried: true,
    //     howOut: function(){ //method bu object ichida e value sifatida e'lon qilingan qiymatidir
    //         console.log("that's genious!");
    //     }
    // }
    // person.howOut(); //method ni shunday chaqiriladi!
    // -------------------------

    // Distrubtizatsiya
    // -------------------------

    const thief = {
        jacket: 'Blue',
        height: 1.7,
        details: {
            hair: 'jet black',
            style: 'long',
            color: 'black'
        },
    }

    const {hair, style, color} = thief.details; //shu usul bilan object ichidagi objectning value larini olish mumkin boladi

    console.log(hair);
    console.log(style);
    console.log(color);
    

