const Footer = (footerTitle, bgc="cadetblue") => {
    return(
    `
    <footer class="footer1">
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
`
    )
}

export default Footer 