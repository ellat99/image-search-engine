const accessKey = "vac9db6AbmVLsK1A3UvZpESac0C7cpPsOORBFQHp_bI";

const searchForm = document.getElementById("section-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show-more-btn");

// vac9db6AbmVLsK1A3UvZpESac0C7cpPsOORBFQHp_bI;
let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showBtn.style.display = "block";
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});
showBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
