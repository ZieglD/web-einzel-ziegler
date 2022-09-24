const booksButton = document.getElementById("booksButton");
const tableHeadFavorites = document.getElementById("theadFavorites");
const tableBodyFavorites = document.getElementById("tbodyFavorites");
const h2InfoText = document.getElementById("h2InfoText");
const tableHeadSearch = document.getElementById("theadSearch");
const tableBodySearch = document.getElementById("tbodySearch");

if (booksButton) {
  booksButton.addEventListener("click", getBooks);
  tableBodySearch.addEventListener('click', function (e) {
    createFavoritesTable();
    let selectedRow = e.target.closest('tr');
    tableBodyFavorites.appendChild(selectedRow);
  })
  tableBodyFavorites.addEventListener('click', function (e) {
    let selectedRow = e.target.closest('tr');
    tableBodySearch.appendChild(selectedRow);
  })
}

async function getBooks() {
  const response = await fetch("http://openlibrary.org/search.json?q=" + document.getElementById("booksInput").value);
  const { docs } = await response.json();

  h2InfoText.textContent = "Add books to your Favorites List by clicking on a Row below!";

  tableBodySearch.innerHTML = "";
  tableHeadSearch.innerHTML = "";

  const thHeadlineSearch = document.createElement("tr");

  const tdHeadlineSearch = document.createElement("th");
  tdHeadlineSearch.textContent = "Available Books";
  tdHeadlineSearch.colSpan = 3;

  const thParametersSearch = document.createElement("tr");

  const thBookTitleSearch = document.createElement("th");
  thBookTitleSearch.className = "table-title";
  thBookTitleSearch.textContent = "Title";

  const thAuthorSearch = document.createElement("th");
  thAuthorSearch.className = "table-author";
  thAuthorSearch.textContent = "Author";

  const thPagesSearch = document.createElement("th");
  thPagesSearch.className = "table-pages";
  thPagesSearch.textContent = "Pages";

  thHeadlineSearch.appendChild(tdHeadlineSearch);
  tableHeadSearch.appendChild(thHeadlineSearch);
  tableHeadSearch.appendChild(thParametersSearch);
  thParametersSearch.appendChild(thBookTitleSearch);
  thParametersSearch.appendChild(thAuthorSearch);
  thParametersSearch.appendChild(thPagesSearch);

  for (const doc of docs) {
    const rowTableSearch = document.createElement("tr");

    const tdBookTitleSearch = document.createElement("td");
    tdBookTitleSearch.className = "table-title";
    tdBookTitleSearch.textContent = doc.title;

    const tdAuthorSearch = document.createElement("td");
    tdAuthorSearch.className = "table-author";
    tdAuthorSearch.textContent = doc.author_name;

    const tdPagesSearch = document.createElement("td");
    tdPagesSearch.className = "table-pages";
    tdPagesSearch.textContent = doc.number_of_pages_median;

    rowTableSearch.appendChild(tdBookTitleSearch);
    rowTableSearch.appendChild(tdAuthorSearch);
    rowTableSearch.appendChild(tdPagesSearch);
    tableBodySearch.appendChild(rowTableSearch);
  }
}

let createFavoritesTable = (function () {
  let executed = false;
  return function () {
    if (!executed) {
      executed = true;

      tableBodyFavorites.innerHTML = "";
      tableHeadFavorites.innerHTML = "";

      const thHeadlineFavorites = document.createElement("tr");

      const tdHeadlineFavorites = document.createElement("th");
      tdHeadlineFavorites.textContent = "Favorites";
      tdHeadlineFavorites.colSpan = 3;

      const thParametersFavorites = document.createElement("tr");

      const tdBookTitleFavorites = document.createElement("th");
      tdBookTitleFavorites.className = "table-title";
      tdBookTitleFavorites.textContent = "Title";

      const tdAuthorFavorites = document.createElement("th");
      tdAuthorFavorites.className = "table-author";
      tdAuthorFavorites.textContent = "Author";

      const tdPagesFavorites = document.createElement("th");
      tdPagesFavorites.className = "table-pages";
      tdPagesFavorites.textContent = "Pages";

      thHeadlineFavorites.appendChild(tdHeadlineFavorites);
      tableHeadFavorites.appendChild(thHeadlineFavorites);
      tableHeadFavorites.appendChild(thParametersFavorites);
      thParametersFavorites.appendChild(tdBookTitleFavorites);
      thParametersFavorites.appendChild(tdAuthorFavorites);
      thParametersFavorites.appendChild(tdPagesFavorites);
    }
  };
})();



