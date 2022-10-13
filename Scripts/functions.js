'Use strict';
//FUNCTION DECLARATION
// let sum = cal(12,5) //ISTALGAN JOYIDA CHAQIRIB OLISH MUMKIN

// function cal(a,b){
//     return a + b;
// }
// console.log(sum);
// -----------------
// FUNCTION EXPRESSION

// let sum = function add(a,b){
//     return a + b;
// }
// console.log(sum(9,1));
// -----------
//ARROW FUNCTION
// (a,b)=>{
//     return a+b;
// }
// // let a = (4,5); console.log(a);
// console.log((5,10));
// --------------------------------------

// Amaliyot

let numberOfSeries;

function startApp(){
    numberOfSeries = +prompt("How many movies have you watched so far?", "");

    while(numberOfSeries == "" || numberOfSeries == null || numberOfSeries == isNaN(numberOfSeries)){
        numberOfSeries = +prompt("How many movies have you watched so far?", "");
    }
}
startApp();

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
};

function remembermyseries(){
    for(let i = 0; i < 2; i++){
        const a = prompt("The lastmove name you watched:"),
            b = prompt("What rank you give the movie?");
        // console.log(i);
        seriesDB.series[a] = b;
    
            if(a != null && a != "" && b != null && b != ""){
                console.log('Done!');
            }
            else{
                console.log('Error!');
                i--;
            } 
        }

}
remembermyseries();

function detectMySeries(){
    if(seriesDB.count < 5){
        console.log('less watcher');
    }
    else if(seriesDB.count > 5 && seriesDB.count < 10){
        console.log('norm watcher');
    }
    else if(seriesDB.count > 10){
        console.log("You are a coach potato!");
    }
    else {console.log('That is a total EROR!');}
}
detectMySeries();

function showDB(){
    if(!seriesDB.private){
        console.log(seriesDB);
    }
}
showDB();

function writeGenres(){
    for(let i =1; i <=3; i++){
        const genre = prompt(`What's you favourite genre - ${i}`);
        seriesDB.genres[i-1] = genre; // bo'sh massivga promptdan kiritilgan value larni qo'shish
    }
}
writeGenres();



