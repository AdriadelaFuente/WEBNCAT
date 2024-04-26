import textsEN from "../../copies/texts.js";

document.addEventListener("DOMContentLoaded", () => {
    // Set CLASSES
    const txtEn = new textsEN();

    // Setting TITLES
    document.getElementById('title').innerText = txtEn.title;
    document.getElementById('title2').innerText = txtEn.title2;
    
    // Setting NAVMENU
    setNavMenuTexts();

    // Setting ARTICLE
    document.getElementById('contentarticle').innerText = txtEn.loremlong;

    // Setting FOOTER
    document.getElementById('creator').innerText = txtEn.creator + " | " + txtEn.copyright;

    function setNavMenuTexts() {
        let main = document.getElementById('li_main');
        let ranks = document.getElementById('li_rankings');
        let results = document.getElementById('li_results');
        let gallery = document.getElementById('li_gallery'); 

        // Setting texts
        main.innerText = txtEn.main;
        ranks.innerText = txtEn.rankings;
        results.innerText = txtEn.results;
        gallery.innerText = txtEn.gallery;
    }










});