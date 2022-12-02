import "./sass/default.scss";
import "./sass/default.css";

const searchBar = document.querySelector(".search-bar")
const aa = document.querySelector(".a")


searchBar.addEventListener("click", () =>{
    aa.classList.toggle("cacher");
})