const Main = () => {
    return(
    `
    <main id="main2">
    <section class= "container">
        <header class="header">
            <div class="header__div-header">
                <div class="img">
                    <img src="./img/logopage.png" alt="logo">
                </div>
                <div>
                    <a href="#home"><h4>RainAlert</h4></a>
                </div>
            </div>
        </header>

        <article class="art-search">
            <div class="art-search__div">
                <div class="art-search__div__map-search ">
                    <img src="./img/map.png" alt="nuage">
                    <input class="search-bar" type="text" placeholder="Paris, France">
                    <img src="./img/search.png" alt="recherche">
                </div>
                <div class="art-search__div__propo">
                <p>Paris</p>
                <p>Marseille</p>
                <p>Lyon</p>
                <p>Nice</p></div>
            </div>
        </article>

        <article class="content">
            <div class="content__weather">
                <div class="content__weather__img-weather"> <img src="./img/weather.png" alt="weather"></div>
            <div>
                <h1 class="content__weather__img-weather_txt">20°C</h1>
            </div>
        </div>
        <div class="content__pluie">
            <p class="content__pluie__txt">La pluie se termine dans 1h45</p>
        </div>


        <div class="content__preci">
            <div class="content__preci__graph">
                <div class="content__preci__graph__top"><h3>Précipitation</h3>
                    <div class="content__preci__graph__top__fia">
                        <h3>Fiabilité</h3>
                        <h6 class="content__preci__graph__top__fia__pourc">90%</h6>
                    </div>
                </div>
                <div class="content__preci__graph__bot">
                    <div class="content__preci__graph__bot__niveau">
                        <div class="content__preci__graph__bot__niveau__fmf"><div><img src="./img/3gouttes.png" alt=""></div>Fortes</div>
                        <div class="content__preci__graph__bot__niveau__fmf"><div><img src="./img/3gouttes.png" alt=""></div>Moyens</div>
                        <div class="content__preci__graph__bot__niveau__fmf"><div><img src="./img/3gouttes.png" alt=""></div>Faibles</div>
                    </div>
                    <div class="content__preci__graph__bot__niveau__graph">
                        <div class="content__preci__graph__bot__niveau__graph__top"><div class="content__preci__graph__bot__niveau__graph__top__bg"></div></div>
                        <div class="content__preci__graph__bot__niveau__graph__time"> <p>12:00</p>
                        <p>12:15</p>
                        <p>12:30</p>
                        <p>12:45</p>
                        <p>13:00</p>
                    </div>
                    </div>
                </div>
            </div> 
            <div class="content__preci__time">
                <div class="content__preci__time__bg"></div>
                <p class="content__preci__time__1 t1">12:00</p>
                <p class="content__preci__time__1 t2">13:00</p>
                <p class="content__preci__time__3 t3">14:00</p>
                <p class="content__preci__time__1 t4">15:00</p>
            </div>
        </div>
        </article>


        <footer class="footer">
            <div class="footer_div-cloud">
                <div class="img">
                    <img src="./img/cloud.png" alt="nuage">
                </div>
                <a href="#main2"><p class="txt-prev">Prévision</p></a>                  
            </div>
            <div>
                <div class="img">
                    <img src="./img/map.png" alt="nuage">
                </div>
                <a href="#main3"><p class="txt-map">Carte</p></a>                </div>
        </footer>
    </section>
</main>




<main id="main3">
    <section class= "container">
        <header class="header">
            <div class="header__div-header">
                <div class="img">
                    <img src="./img/logopage.png" alt="logo">
                </div>
                <div>
                    <a href="#home"><h4>RainAlert</h4></a>
                </div>
            </div>
        </header>

        <article class="art-search">
            <div class="art-search__div">
                <div class="art-search__div__map-search ">
                    <img src="./img/map.png" alt="nuage">
                    <input type="text" placeholder="Paris, France">
                    <img src="./img/search.png" alt="recherche">
                </div>  
            </div>
        </article>

        <article class="content">
            <div class="content__weather">
                <div class="content__weather__img-weather"> <img src="./img/weather.png" alt="weather"></div>
            <div>
                <h1 class="content__weather__img-weather_txt">20°C</h1>
            </div>
        </div>
        <div class="content__pluie">
            <p class="content__pluie__txt">La pluie se termine dans 1h45</p>
        </div>
        <div class="content__preci">
            <div class="content__preci__graph"> </div>
            <div class="content__preci__time">
                <div class="content__preci__time__bg"></div>
                <p class="content__preci__time__1">12:00</p>
                <p>13:00</p>
                <p>14:00</p>
                <p>15:00</p>
            </div>
        </div>
        </article>


        <footer class="footer">
            <div class="footer_div-cloud">
                <div class="img">
                    <img src="./img/cloud.png" alt="nuage">
                </div>
                <a href="#main2"><p class="txt-prev">Prévision</p></a>                  
            </div>
            <div>
                <div class="img">
                    <img src="./img/map.png" alt="nuage">
                </div>
                <a href="#main3"><p class="txt-map">Carte</p></a>
            </div>
        </footer>
`
    )
}

export default Main 