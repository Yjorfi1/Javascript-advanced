let output = document.querySelector('.output');

fetch('https://fortnite-api.com/v2/cosmetics/new')
.then((response) => response.json())
.then((data) => {
console.log(data.data.items.br)
for (let item of data.data.items.br)
    output.innerHTML += `
<h2 class="name">${item.name}</h2>
<img src = "${item.images.featured}" class ="image">
`
});