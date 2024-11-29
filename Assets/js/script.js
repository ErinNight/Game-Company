document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.thumbnail').forEach((thumbnail) => {
        thumbnail.addEventListener('click', function () {
            const mainImage = document.querySelector('.gallery-main');
            mainImage.src = this.src;
        });
    });
});