accessKey ="7SeyhzhUS-J4z46RfFIHZE9Sku0hQBVdfxJdaIj5ECY"

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");

let keyword = "";
let page = 1 ;

async function SearchImage(){

    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const Response = await fetch(url);
    const data = await Response.json();
    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((result)=>{

        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.appendChild(image);
        imageLink.target = "_blank"
        searchResult.appendChild(imageLink);

    })

    showMore.style.display = "block"
}
searchForm.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    page=1;
    SearchImage();
})

showMore.addEventListener("click",()=>{

    page++;
    SearchImage();

})