//arrays with words
const names = ['Paulie', 'Sergio','Mikael','Pedro','Toby','Josh','George','John'];
const activities = ['played','ate','kissed','broke','crushed','pet','made','cleaned','threw','cut','slapped'];
const objects = ['a chair','an apple','a dog','a knife','a cat','a car','a window','a desk','a laptot','a sink','a toilet','a trashcan','a beer','an ice-cream'];
const places = ['in the kitchen','in the park','in the living room','on the garden','in the bathroom','in the garage','on the playground', 'at the office','at the square'];

//function to help with getting random words
function randomWord (arr) {
    let i = Math.floor(Math.random()* arr.length);
    return arr[i]
};

//random words
let person = randomWord(names);
let activity = randomWord(activities);
let object = randomWord(objects);
let place = randomWord(places);

//printing the random message to terminal
console.log(person + ' '+activity+' '+ object +' '+ place+'.');




