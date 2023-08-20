let Library = [];
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const bookNameInput = favDialog.querySelector("#bookNameInput");
const authorInput = favDialog.querySelector("#authorInput");
const pageInput = favDialog.querySelector("#pageInput");
const readInput = favDialog.querySelector("#readInput");
const confirmBtn = favDialog.querySelector("#confirmBtn");

//Book object constructor
function Book(uuid, title, author, pages, haveRead) {
  this.uuid = uuid;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

//Function to add book to library
function addBookToLibrary(uuid, title, author, pages, haveRead) {
  Library.push(new Book(uuid, title, author, pages, haveRead));
}

//Function to remove book from library
function removeBookFromLibrary(uuid) {
  document.getElementById(uuid).remove();
}

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(); // Have to send the select box value here.
  addBookToLibrary(self.crypto.randomUUID(), bookNameInput.value, authorInput.value, pageInput.value, readInput.value);
  generateBookGrids();
});

//Generate Book Div
function generateBookGrids() {
    //Get Library Container
    const libraryContainer = document.querySelector(".libraryContainer");
    libraryContainer.innerHTML = '';
    Library.forEach((Book) => {
      let bookDiv = document.createElement("div");
      bookDiv.classList.add(Book.title);
      bookDiv.setAttribute('id',Book.uuid);
      bookDiv.setAttribute(
        "style",
        "background:#bde0fe; border-radius: 5%; text-align: center;"
      );
      bookDiv.innerHTML += "<h3>" + Book.title + "</h3>";
      bookDiv.innerHTML += "<p>" + Book.author + "</p>";
      bookDiv.innerHTML += "<p>" + Book.pages + " Pages</p>";
      bookDiv.innerHTML += "<p>" + Book.haveRead + "</p>";
      bookDiv.innerHTML += "<button id=d-"+Book.uuid+">Delete</button>";
      libraryContainer.appendChild(bookDiv);
      document.getElementById("d-"+Book.uuid).addEventListener("click", () =>{removeBookFromLibrary(Book.uuid)})
    });
  }  

//Add some examples
addBookToLibrary(self.crypto.randomUUID(), "Test1", "Author1", "203", true);
addBookToLibrary(self.crypto.randomUUID(), "Test2", "Author2", "243", false);
addBookToLibrary(self.crypto.randomUUID(), "Test3", "Author3", "653", true);

//Generate when start
generateBookGrids();