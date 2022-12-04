const Main = () => {
    return(
    `
    <main id="main2">
    <section class= "container">
        <header class="header">
            <div class="header__div-header">
                <div class="img">
                    <img src="../assets/images/logopage.png" alt="logo">
                </div>
                <div>
                    <a href="#home"><h4>RainAlert</h4></a>
                </div>
            </div>
        </header>

        <article class="art-search">
            <div class="art-search__div">
                <div class="art-search__div__map-search ">
                    <img src="../assets/images/map.png" alt="nuage">
                    <input class="search-bar" type="text" placeholder="Paris, France">
                    <img src="../assets/images/search.png" alt="recherche">
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
                <div class="content__weather__img-weather"> <img src="../assets/images//weather.png" alt="weather"></div>
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
                        <div class="content__preci__graph__bot__niveau__fmf"><div><img src="../assets/images//3gouttes.png" alt=""></div>Fortes</div>
                        <div class="content__preci__graph__bot__niveau__fmf"><div><img src="../assets/images//3gouttes.png" alt=""></div>Moyens</div>
                        <div class="content__preci__graph__bot__niveau__fmf"><div><img src="../assets/images//3gouttes.png" alt=""></div>Faibles</div>
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
                    <img src="../assets/images//cloud.png" alt="nuage">
                </div>
                <a href="#main2"><p class="txt-prev">Prévision</p></a>                  
            </div>
            <div>
                <div class="img">
                    <img src="../assets/images//map.png" alt="nuage">
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
                    <img src="../assets/images//logopage.png" alt="logo">
                </div>
                <div>
                    <a href="#home"><h4>RainAlert</h4></a>
                </div>
            </div>
        </header>
        <article class="art-map">
        <div class="art-map__div">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26952439.343680188!2d86.04169495229236!3d34.44979483444347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChine!5e0!3m2!1sfr!2sbe!4v1670181028216!5m2!1sfr!2sbe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </article>
        
        <footer class="footer">
            <div class="footer_div-cloud">
                <div class="img">
                    <img src="../assets/images/cloud.png" alt="nuage">
                </div>
                <a href="#main2"><p class="txt-prev">Prévision</p></a>                  
            </div>
            <div>
                <div class="img">
                    <img src="../assets/images/map.png" alt="nuage">
                </div>
                <a href="#main3"><p class="txt-map">Carte</p></a>
            </div>
        </footer>
`
    )
}

export default Main 