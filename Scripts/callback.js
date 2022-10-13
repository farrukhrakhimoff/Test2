/*function first(){
    //code
    setTimeout(()=>{
        console.log(1);
    }, 5000); //5 sekunddan keyin run boladi 1
} first();

function second(){
    //code
    console.log(2);
} second();*/
// ------------------------------

// function edu(subject, callback){
//     console.log(`I wanna learn ${subject}`);
//     callback();
// }
// 1-version
/*edu("Javascript", function(){
    setTimeout(()=>{
        console.log('That is fucking great!')
    }, 3000)
})*/
// -----------------
// 2-version
// function done()[
//     setTimeout(()=>{
//         console.log();

//     })
// ]
// --------------------------

function first(callback){
    //code
    setTimeout(()=>{
        console.log(1);
        callback();
    }, 3000); // 3 sekunddan keyin tengdaniga ikkisi run boladi
}

function second(){
    //code
    console.log(2);
}
first(second);