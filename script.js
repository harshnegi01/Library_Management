let books = [];
let updateIndex = -1;

document.getElementById('addBook').addEventListener('click', addBook);
document.getElementById('updateBook').addEventListener('click', updateBook);

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    if (title && author) {
        books.push({ title, author });
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        renderBooks();
    } else {
        alert('Please fill in both fields');
    }
}

function renderBooks() {
    const tbody = document.querySelector('#bookList tbody');
    tbody.innerHTML = '';
    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button onclick="editBook(${index})">Edit</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editBook(index) {
    updateIndex = index;
    document.getElementById('bookTitle').value = books[index].title;
    document.getElementById('bookAuthor').value = books[index].author;
    document.getElementById('addBook').style.display = 'none';
    document.getElementById('updateBook').style.display = 'inline';
}

function updateBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;

    if (updateIndex > -1) {
        books[updateIndex] = { title, author };
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        updateIndex = -1;
        document.getElementById('addBook').style.display = 'inline';
        document.getElementById('updateBook').style.display = 'none';
        renderBooks();
    }
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}
