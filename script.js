document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.getElementById("gallery");
    const totalImages = 15; // кол-во фото
    let currentIndex = 0;
    const images = [];

    // Главная фотография уже есть
    images.push("images/review12.jpg");

    // Подгружаем остальные
    for (let i = 1; i <= totalImages; i++) {
        if (i === 12) continue; // пропускаем главную
        const div = document.createElement("div");
        div.className = "review-item";

        const img = document.createElement("img");
        img.src = "images/review" + i + ".jpg";

        img.addEventListener("click", function () {
            openModal(i < 12 ? i-1 : i-2); // индекс в массиве images
        });

        div.appendChild(img);
        gallery.appendChild(div);

        images.push(img.src);
    }

    // MODAL
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    function openModal(index) {
        currentIndex = index;
        modal.style.display = "flex";
        modalImg.src = images[currentIndex];
    }

    window.openModal = openModal;

    window.closeModal = function() {
        modal.style.display = "none";
    }

    window.nextImage = function() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex];
    }

    window.prevImage = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex];
    }

    // Листание свайпами на мобильных
    let startX = 0;
    modalImg.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    modalImg.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;
        if (diff > 50) prevImage();
        else if (diff < -50) nextImage();
    });

    // Закрытие при клике на фоне
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

});
