let Library = [];

//Book object constructor
function Book(uuid, title, author, pages, haveRead) {
  this.uuid = uuid;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

//Generate Book Div
function generateBookGrids() {
    //Get Library Container
    const libraryContainer = document.querySelector(".libraryContainer");
    libraryContainer.innerHTML = '';
    Library.forEach((Book) => {
      let bookDiv = document.createElement("div");
      bookDiv.classList.add(Book.title);
      bookDiv.setAttribute(
        "style",
        "background:#bde0fe; border-radius: 5%; text-align: center;"
      );
      bookDiv.innerHTML += "<h3>" + Book.title + "</h3>";
      bookDiv.innerHTML += "<p>" + Book.author + "</p>";
      bookDiv.innerHTML += "<p>" + Book.pages + " Pages</p>";
      bookDiv.innerHTML += "<p>" + Book.haveRead + "</p>";
      bookDiv.innerHTML += "<button>Delete</button>";
      libraryContainer.appendChild(bookDiv);
    });
  }  

//Function to add book to library
function addBookToLibrary(uuid, title, author, pages, haveRead) {
  Library.push(new Book(uuid, title, author, pages, haveRead));
}

function removeBookFromLibrary(uuid) {
    Library = Library.filter(Book => Book.uuid != uuid);
    generateBookGrids();
}

//Add some examples
addBookToLibrary(self.crypto.randomUUID(), "Test1", "Author1", "203", true);
addBookToLibrary(self.crypto.randomUUID(), "Test2", "Author2", "243", false);
addBookToLibrary(self.crypto.randomUUID(), "Test3", "Author3", "653", true);

//Generate when start
generateBookGrids();