const booksButton = document.getElementById("booksButton");
const tableHead = document.getElementById("thead");
const tableBody = document.getElementById("tbody");

if (booksButton) {
  booksButton.addEventListener("click", getBooks);
}

async function getBooks() {
  const response = await fetch("http://openlibrary.org/search.json?q=" + document.getElementById("booksInput").value);
  const { docs } = await response.json();

  tableBody.innerHTML = "";
  tableHead.innerHTML = "";
  const rowHeader = document.createElement("tr");
  const thTitle = document.createElement("th");
  thTitle.textContent = "Title";
  const thAuthor = document.createElement("th");
  thAuthor.textContent = "Author";
  const thPages = document.createElement("th");
  thPages.textContent = "Pages";

  rowHeader.appendChild(thTitle);
  rowHeader.appendChild(thAuthor);
  rowHeader.appendChild(thPages);
  tableHead.appendChild(rowHeader);

  for (const doc of docs) {
    const rowElement = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = doc.title;

    const author = document.createElement("td");
    author.textContent = doc.author_name;

    const pages = document.createElement("td");
    pages.textContent = doc.number_of_pages_median;

    rowElement.appendChild(title);
    rowElement.appendChild(author);
    rowElement.appendChild(pages);
    tableBody.appendChild(rowElement);
  }
}

