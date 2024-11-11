document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll("ul li img");
    const featuredImage = document.querySelector("figure img");
    const caption = document.querySelector("figcaption");

    // Image information
    const images = [
        { src: "images/flowers-pink-large.jpg", caption: "Pink Flowers" },
        { src: "images/flowers-purple-large.jpg", caption: "Purple Flowers" },
        { src: "images/flowers-red-large.jpg", caption: "Red Flowers" },
        { src: "images/flowers-white-large.jpg", caption: "White Flowers" },
        { src: "images/flowers-yellow-large.jpg", caption: "Yellow Flowers" }
    ];

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            // Update featured image and caption
            featuredImage.src = images[index].src;
            caption.textContent = images[index].caption;

            // Highlight active thumbnail
            thumbnails.forEach(img => img.parentElement.classList.remove("active"));
            thumbnail.parentElement.classList.add("active");
        });
    });
});
