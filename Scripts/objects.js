'Use strict'

const thief = {
    jacket: 'Blue',
    height: 1.7,
    details: {
        hair: 'jet black',
        style: 'long'
    }
}

let person = {
    age: 3,
    name: 'Farrux',
    ismarried: true
}

// console.log(thief.height);

// delete thief.height; // it delets the property with value

// console.log(thief);

// console.log(typeof thief.details.hair);
// console.log(Object.keys(thief).length)
// console.log(Object.keys(person).length)

// ----------
// FOR IN //
// ----------
for(let key in thief) { // for in ni object ishlatish orqali uning property lariga yoki uning value lariga murojat qilish mumkin
    console.log(`Property ${key} has a value of ${thief[key]}`)
}
