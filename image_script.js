const searchForm =document.getElementById("search-form");
const searchCate =document.getElementById("search-category");
const searchRes =document.getElementById("search-res");
const accessKey = 'oG8Cur1sk-2EFmc0MCEbTnmX6ZqIJaaoFQjqSd0N0bI';
let ref=1;
async function serchImage(){
    const category=searchCate.value;
    const url=`https://api.unsplash.com/search/photos?query=${category}&page=1&per_page=12&client_id=${accessKey}`;
    const resp=await fetch(url);
    const data=await resp.json();

    if(ref ===1){
        searchRes.innerHTML="";
    }

    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const desc=document.createElement("a");
        desc.href=result.links.html;
        desc.target="_blank";
        desc.appendChild(image);
        const fig=document.createElement("figure");
        fig.appendChild(desc);
        const detail=document.createElement("figcaption");
        detail.innerHTML="<b>Author: </b>"+result.user.name+"<br><b>Description: </b>"+result.description;
        fig.appendChild(detail);
        searchRes.appendChild(fig);
    })
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    ref=1;
    serchImage();

})