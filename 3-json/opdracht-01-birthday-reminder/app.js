console.log('killme')
let output = document.querySelector('.output');     


fetch('./birthday.json')
.then((response) => response.json())
.then((birthday) => {
for (let birthdays of birthday){
    output.innerHTML += `
    <p class="name">Naam: ${birthdays.name}</p>
    <p class="age">${birthdays.name} is ${birthdays.age} jaar oud</p>
<img class="image" src="${birthdays.image}" alt="foto" width="125">

   
`
}
document.querySelector(".button").addEventListener("click", () => {
    output.innerHTML = "";
    document.querySelector(".head").textContent = "0 verjaardagen vandaag";
});
});
