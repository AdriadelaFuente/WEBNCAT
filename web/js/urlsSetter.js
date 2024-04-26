
import urlsEN from "../../copies/urlgenerator.js";

document.addEventListener("DOMContentLoaded", () => {

    const urls = new urlsEN();

    setNavUrls()


    function setNavUrls() {
        let main = document.getElementById('li_main');
        let ranks = document.getElementById('li_rankings');
        let results = document.getElementById('li_results');
        let gallery = document.getElementById('li_gallery'); 

        main.setAttribute('href', urls.main);
        ranks.setAttribute('href', urls.rankings);
        results.setAttribute('href', urls.results);
        gallery.setAttribute('href', urls.gallery);
    }
});