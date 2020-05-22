
const butoonMore = () => { 
    const butnMore = document.querySelector('.add-sentence-btn');
        butnMore.addEventListener("click", function() {
            event.preventDefault();
            butnMore.hidden = true;
            document.getElementById('hidde-block').hidden = false;
            document.getElementById('hidde-blok').hidden = false;
            document.getElementById('hidden-blok').hidden = false;

        }, false);
};
export default butoonMore;