const books = [
    { title: "El Hobbit", genre: "fantasy", price: "$15", img: "hobbit.jpg" },
    { title: "Duna", genre: "sci-fi", price: "$20", img: "duna.jpg" },
    { title: "Sherlock Holmes", genre: "mystery", price: "$12", img: "sherlock.jpg" }
];

const bookGrid = document.getElementById("bookGrid");
const searchBar = document.getElementById("search");
const filter = document.getElementById("filter");

function displayBooks(filteredBooks) {
    bookGrid.innerHTML = "";
    filteredBooks.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.price}</p>
        `;
        bookGrid.appendChild(bookElement);
    });
}

searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchText));
    displayBooks(filteredBooks);
});

filter.addEventListener("change", () => {
    const selectedGenre = filter.value;
    const filteredBooks = selectedGenre === "all" ? books : books.filter(book => book.genre === selectedGenre);
    displayBooks(filteredBooks);
});

displayBooks(books);
