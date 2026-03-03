document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.getElementById("gallery");
    const totalImages = 15; // сколько фото

    for (let i = 1; i <= totalImages; i++) {

        const div = document.createElement("div");
        div.className = "review-item";

        const img = document.createElement("img");
        img.src = "images/review" + i + ".jpg";

        img.addEventListener("click", function () {
            openFullscreen(this.src);
        });

        div.appendChild(img);
        gallery.appendChild(div);
    }

    function openFullscreen(src) {

        const overlay = document.createElement("div");
        overlay.className = "fullscreen";

        const image = document.createElement("img");
        image.src = src;

        overlay.appendChild(image);

        overlay.addEventListener("click", function () {
            document.body.removeChild(overlay);
        });

        document.body.appendChild(overlay);
    }

});
