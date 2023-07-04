document.addEventListener("DOMContentLoaded", function() {
    const catalog = document.querySelectorAll(".catalog-image-container");
    catalog.forEach(cat => {
        const images = cat.querySelectorAll(".catalog-image");
        const control = cat.querySelector(".catalog-image-control");
        images.forEach(img => {
            const btn = document.createElement("div");
            btn.className = "catalog-image-hover";
            control.append(btn);
            btn.addEventListener("mouseover", function() {
                images.forEach(img => {
                    img.classList.remove("active");
                });
                img.classList.add("active");
            });
        });
    });
});