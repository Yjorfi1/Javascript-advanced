const book = {
    title: ["House of leaves"],
    author: ["myself"],
    distributor: ["Penguin"],
    year: ["2000"],
    sold: ["unknown"],
    price: ["$24"]
}

document.querySelector('.output').innerHTML = `
<p>${book.title}<p>
<p>${book.author}<p>
<p>${book.distributor}<p>
<p>${book.year}<p>
<p>${book.sold}<p>
<p>${book.price}<p>
`

