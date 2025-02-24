let codeGenerated = false;

document.getElementById('generateBtn').addEventListener('click', function() {
    if (!codeGenerated) {
        const generatedCode = Math.random().toString(36).substring(2, 8);
        document.getElementById('codeOutput').innerText = `Vygenerovaný kód: ${generatedCode}`;
        codeGenerated = true;
        this.disabled = true; // Отключаем кнопку
        document.getElementById('copyBtn').style.display = 'inline'; // Показываем кнопку копирования
    } else {
        alert('Kód byl již vygenerován.'); // Сообщение об ошибке
    }
});

// Функция для копирования кода
document.getElementById('copyBtn').addEventListener('click', function() {
    const codeText = document.getElementById('codeOutput').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Kód byl zkopírován do schránky!'); // Сообщение об успешном копировании
    }).catch(err => {
        alert('Chyba při kopírování kódu: ', err);
    });
});