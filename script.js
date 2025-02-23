let codeGenerated = false;

document.getElementById('generateBtn').addEventListener('click', function() {
    if (!codeGenerated) {
        const generatedCode = Math.random().toString(36).substring(2, 8);
        document.getElementById('codeOutput').innerText = `Vygenerovaný kód: ${generatedCode}`;
        codeGenerated = true;
        this.disabled = true; // Отключаем кнопку
    } else {
        alert('Kód byl již vygenerován.'); // Сообщение об ошибке
    }
});