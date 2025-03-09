document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const codeOutput = document.getElementById("codeOutput");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");

    generateBtn.addEventListener("click", function () {
        const generatedCode = generateRandomCode(8); // Генерация 8-значного кода
        codeOutput.innerText = generatedCode;
        
        generateBtn.style.display = "none"; // Скрываем кнопку генерации
        copyBtn.style.display = "inline-block"; // Показываем кнопку копирования
    });

    copyBtn.addEventListener("click", function () {
        const codeText = codeOutput.innerText.trim();
        if (codeText) {
            navigator.clipboard.writeText(codeText)
                .then(() => showNotification("Kód byl zkopírován do schránky!", "success"))
                .catch(() => showNotification("Chyba při kopírování kódu!", "error"));
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    function generateRandomCode(length) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function showNotification(message, type) {
        const notification = document.createElement("div");
        notification.innerText = message;
        notification.classList.add("notification", type);
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove(); // Удаляем уведомление через 3 секунды
        }, 3000);
    }
});