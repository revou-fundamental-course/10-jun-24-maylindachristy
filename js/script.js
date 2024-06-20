// Fungsi untuk mengonversi suhu
function convertTemperature() {
    // Mengambil nilai input suhu dan jenis konversi
    var temperatureInput = document.getElementById('temperatureInput').value;
    var conversionType = document.getElementById('conversionType').value;
    var conversionResult = document.getElementById('conversionResult');
    var explanation = document.getElementById('explanation');
    var formula = document.getElementById('formula');
    var calculation = document.getElementById('calculation');

    // Validasi input suhu
    if (temperatureInput === '') {
        alert('Masukkan suhu yang valid.');
        return;
    }

    // Mengonversi input suhu ke tipe number
    var temperature = parseFloat(temperatureInput);
    var result, explanationText, formulaText, calculationText;

    // Logika konversi berdasarkan jenis konversi yang dipilih
    if (conversionType === 'CtoF') {
        result = (temperature * 9/5) + 32;
        explanationText = temperature + '°C sama dengan ' + result.toFixed(2) + '°F';
        formulaText = 'F = (C × 9/5) + 32';
        calculationText = 'F = (' + temperature + ' × 9/5) + 32 = ' + result.toFixed(2);
    } else {
        result = (temperature - 32) * 5/9;
        explanationText = temperature + '°F sama dengan ' + result.toFixed(2) + '°C';
        formulaText = 'C = (F - 32) × 5/9';
        calculationText = 'C = (' + temperature + ' - 32) × 5/9 = ' + result.toFixed(2);
    }

    // Menampilkan hasil konversi dan penjelasan
    conversionResult.innerHTML = result.toFixed(2);
    explanation.innerHTML = explanationText;
    formula.value = formulaText;
    calculation.value = calculationText;
    document.getElementById('result').style.display = 'block';
    document.getElementById('explanationFormSection').style.display = 'block';
}

// Fungsi untuk mereset form
function resetForm() {
    // Mereset form input
    document.getElementById('temperatureForm').reset();
    // Menyembunyikan hasil konversi dan penjelasan
    document.getElementById('result').style.display = 'none';
    document.getElementById('explanationFormSection').style.display = 'none';
}
