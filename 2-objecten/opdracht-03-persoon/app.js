// Stap 1
const person = {
    name: String("persoon"),
    age: Number("100"),
    birthdate: String("1 januari 2000"),
    sex: String("man"),
    alive : Boolean(true),
    hobbies: ["bank beroven, slapen, eten "],   
  
  changeName: function(newName) {
    this.name = newName;
    return this.name;
  },
    
  changeStatus: function(newStatus) {
    this.status = newStatus;
    return this.status;
  },
addhobby: function(newHobby) {
  this.hobbies.push(newHobby);
  return this.hobbies;
}}


person.changeName('hallooo')
person.changeStatus('false')
person.addhobby(' huilen')

document.querySelector('.output').innerHTML = `
<p>${person.name}<p>
<p>${person.age}<p>
<p>${person.birthdate}<p>
<p>${person.sex}<p>
<p>${person.status}<p>
<p>${person.hobbies}<p>

`;



// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!

