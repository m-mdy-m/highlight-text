function search() {
  let textSearch = document.getElementById("SearchInput").value;
  let paragraph = document.getElementById("paragraph");
  textSearch = textSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let pattern = new RegExp(`${textSearch}`, "gi");

  paragraph.innerHTML = paragraph.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
}
