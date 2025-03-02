const button = document.querySelector('#share-button');
const shareDesktop = document.querySelector('#share-desktop');
const shareMobile = document.querySelector('#share-mobile');
var sharing = false;

button.addEventListener('click', () => {
    console.log('button clicked');
    if (!sharing) {
        button.classList.add('sharing');
        shareDesktop.classList.add('sharing');
        shareMobile.classList.add('sharing');
        sharing = true;
    } else {
        button.classList.remove('sharing');
        shareDesktop.classList.remove('sharing');
        shareMobile.classList.remove('sharing');
        sharing = false;
    }
});
