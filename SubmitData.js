function saveData() {
    var BeratBadanInput = document.getElementById("numberInputBeratBadan").value;
    var TinggiBadanInput = document.getElementById("numberInputTinggiBadan").value;
    var UsiaInput = document.getElementById("numberInputTinggiBadan").value;
    var KeadaanSelect = document.getElementById("KeadaanBadan").value;
    var genderSelect = document.getElementById("GenderSelect").value;
    
    
    var data = {
      name: BeratBadanInput,
      age: TinggiBadanInput,
      email: UsiaInput,
      country: KeadaanSelect,
      kelamin : genderSelect
    };
    
    localStorage.setItem("userData", JSON.stringify(data));
    alert("Data berhasil disimpan secara lokal.");

    window.location.href = 'JadwalSarapan.html'


    
  }