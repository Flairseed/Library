const myLibrary = [];

function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead
  this.changeReadStatus = function() {
    this.isRead = !this.isRead;
  };
}