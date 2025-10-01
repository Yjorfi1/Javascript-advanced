let output = document.querySelector('.output');

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
.then((response) => response.json())
.then((data) => {
console.log(data)
for (let item of data)
    output.innerHTML += `
<h3 class="name">${item.name.common}</h3>
<img class="image" src = "${item.flags.png}" width="50px">
`
});