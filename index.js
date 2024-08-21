document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const hamburgerIcon = this.querySelector('.navbar-toggler-icon');
    const closeIcon = this.querySelector('.close-icon');

    /* Toggle between showing and hiding the icons*/
    if (hamburgerIcon.style.display === 'none') {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
});

