const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    // Add more images as needed
];

function openModal(index) {
    const modal = document.getElementById("lightboxModal");
    const modalImage = document.getElementById("lightboxImage");
    modal.style.display = "flex";
    modalImage.src = images[index];
}

function closeModal() {
    const modal = document.getElementById("lightboxModal");
    modal.style.display = "none";
}
