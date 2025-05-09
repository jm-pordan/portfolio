function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = image.src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

$(document).ready(function() {
    $('#imageModal').on('show.bs.modal', function (event) {
        const image = $(event.relatedTarget);
        const src = image.data('src');
        const modalImg = $(this).find('.modal-content-image');
        modalImg.attr('src', src);
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

function openFullscreen(image) {
    const modal = document.getElementById("fullscreenModal");
    const fullscreenImage = document.getElementById("fullscreenImage");
    fullscreenImage.src = image.src;
    modal.classList.add("active");
}

function closeFullscreen() {
    const modal = document.getElementById("fullscreenModal");
    modal.classList.remove("active");
}

function openCertificationModal(imageSrc, title, description) {
    const modal = document.getElementById("certificationModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    modalImage.src = `images/${imageSrc}`;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.classList.add("active");
}

function closeCertificationModal() {
    const modal = document.getElementById("certificationModal");
    modal.classList.remove("active");
}