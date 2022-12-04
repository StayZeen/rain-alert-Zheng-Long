import "./sass/default.scss";
import "./sass/default.css";
import Header from "./js/header"
import Footer from "./js/footer"
import Main from "./js/main"
const app = document.querySelector('#app')

let contentHome = ""

contentHome += Header()
contentHome += Footer()
contentHome += Main()

app.innerHTML = contentHome


document.getElementById("aza").innerHTML = `

<a href="#main2"><main class="home" id="home">
        <section class="home__section">
            <div class="home__section__content"> 
                <div class="home__section__content__img-home">
                <img src="./img/logo.png" alt="logo">
                <div class="home__section__content__img-home__txt">
                       <h1>RainAlert</h1>
                <p>Préparez-vous <br>
                    pour la pluie</p>
                </div>
            </div>
            </div>
        </section>
    </main></a>
`;
const searchBar = document.querySelector(".search-bar")
const propo = document.querySelector(".art-search__div__propo")
const timeBg = document.querySelector(".content__preci__time__bg")
const time1 = document.querySelector("t1")
const time2 = document.querySelector("t2")
const time3 = document.querySelector("content__preci__time__3")
const time4 = document.querySelector("t4")


searchBar.addEventListener("click", () =>{
    propo.classList.toggle("afficher");
})

time1.addEventListener("click", () =>{
    timeBg.classList.toggle("time1bg");
})
time2.addEventListener("click", () =>{
    timeBg.classList.toggle("time2bg");
})
time3.addEventListener("click", () =>{
    timeBg.classList.toggle("time3bg");
})
time4.addEventListener("click", () =>{
    timeBg.classList.toggle("time4bg");
})