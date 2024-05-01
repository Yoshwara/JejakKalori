document.getElementById("numberInputBeratBadan").addEventListener("input", function() {
    var input = this;
    var num = parseInt(input.value);
    
    if (isNaN(num)) {
      alert("Harap masukkan angka yang valid.");
      input.value = "";
      return;
    }
    
    if (num < 0) {
      alert("Angka negatif tidak diperbolehkan.");
      input.value = "";
      return;
    }
    
    if (num > 1000) {
      alert("Angka tidak boleh lebih dari 1000.");
      input.value = "";
      return;
    }
    
    if (num === 0 || input.value.charAt(0) === '0') {
      alert("Angka tidak boleh dimulai dengan 0.");
      input.value = "";
      return;
    }
});