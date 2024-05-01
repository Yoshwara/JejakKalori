// Memuat data makanan yang disimpan di local storage saat halaman dimuat
window.onload = function() {
    loadFoodData();
    loadBreakfastHistory();
  };
  
  function loadFoodData() {
    var foodList = JSON.parse(localStorage.getItem("foodList")) || [];
    var drinkList = JSON.parse(localStorage.getItem("drinkList")) || [];
    
    var breakfastFoodSelect = document.getElementById("breakfastFoodList");
    var breakfastDrinkSelect = document.getElementById("breakfastDrinkList");
    var lunchFoodSelect = document.getElementById("lunchFoodList");
    var lunchDrinkSelect = document.getElementById("lunchDrinkList");
    var dinnerFoodSelect = document.getElementById("dinnerFoodList");
    var dinnerDrinkSelect = document.getElementById("dinnerDrinkList");
    
    // Mengisi dropdown makanan dan minuman
    foodList.forEach(function(item) {
      var option = document.createElement("option");
      option.text = item.food + " - " + item.calories + " kalori";
      option.value = item.food;
      breakfastFoodSelect.add(option);
      lunchFoodSelect.add(option.cloneNode(true));
      dinnerFoodSelect.add(option.cloneNode(true));
    });
  
    drinkList.forEach(function(item) {
      var option = document.createElement("option");
      option.text = item.drink + " - " + item.calories + " kalori";
      option.value = item.drink;
      breakfastDrinkSelect.add(option);
      lunchDrinkSelect.add(option.cloneNode(true));
      dinnerDrinkSelect.add(option.cloneNode(true));
    });
  }
  
  function saveBreakfast() {
    var date = document.getElementById("date").value;
    var targetCalories = document.getElementById("target").value;
    
    // Validasi data yang harus diisi
    if (!date || !targetCalories) {
      alert("Silakan isi tanggal dan target kalori sebelum menyimpan.");
      return;
    }
    
    var breakfastFoodList = document.getElementById("breakfastFoodList");
    var breakfastDrinkList = document.getElementById("breakfastDrinkList");
    var lunchFoodList = document.getElementById("lunchFoodList");
    var lunchDrinkList = document.getElementById("lunchDrinkList");
    var dinnerFoodList = document.getElementById("dinnerFoodList");
    var dinnerDrinkList = document.getElementById("dinnerDrinkList");
    
    var breakfastFoodIndex = breakfastFoodList.selectedIndex;
    var breakfastDrinkIndex = breakfastDrinkList.selectedIndex;
    var lunchFoodIndex = lunchFoodList.selectedIndex;
    var lunchDrinkIndex = lunchDrinkList.selectedIndex;
    var dinnerFoodIndex = dinnerFoodList.selectedIndex;
    var dinnerDrinkIndex = dinnerDrinkList.selectedIndex;
    
    var breakfastFood = '';
    var breakfastDrink = '';
    var lunchFood = '';
    var lunchDrink = '';
    var dinnerFood = '';
    var dinnerDrink = '';
    
    var breakfastCalories = 0;
    var breakfastDrinkCalories = 0;
    var lunchCalories = 0;
    var lunchDrinkCalories = 0;
    var dinnerCalories = 0;
    var dinnerDrinkCalories = 0;
    
    if (breakfastFoodIndex !== -1) {
      breakfastFood = breakfastFoodList.options[breakfastFoodIndex].text;
      breakfastCalories = parseInt(breakfastFoodList.options[breakfastFoodIndex].text.split('-')[1]) || 0;
    }
    if (breakfastDrinkIndex !== -1) {
      breakfastDrink = breakfastDrinkList.options[breakfastDrinkIndex].text;
      breakfastDrinkCalories = parseInt(breakfastDrinkList.options[breakfastDrinkIndex].text.split('-')[1]) || 0;
    }
    if (lunchFoodIndex !== -1) {
      lunchFood = lunchFoodList.options[lunchFoodIndex].text;
      lunchCalories = parseInt(lunchFoodList.options[lunchFoodIndex].text.split('-')[1]) || 0;
    }
    if (lunchDrinkIndex !== -1) {
      lunchDrink = lunchDrinkList.options[lunchDrinkIndex].text;
      lunchDrinkCalories = parseInt(lunchDrinkList.options[lunchDrinkIndex].text.split('-')[1]) || 0;
    }
    if (dinnerFoodIndex !== -1) {
      dinnerFood = dinnerFoodList.options[dinnerFoodIndex].text;
      dinnerCalories = parseInt(dinnerFoodList.options[dinnerFoodIndex].text.split('-')[1]) || 0;
    }
    if (dinnerDrinkIndex !== -1) {
      dinnerDrink = dinnerDrinkList.options[dinnerDrinkIndex].text;
      dinnerDrinkCalories = parseInt(dinnerDrinkList.options[dinnerDrinkIndex].text.split('-')[1]) || 0;
    }
    
    var totalCalories = breakfastCalories + breakfastDrinkCalories + lunchCalories + lunchDrinkCalories + dinnerCalories + dinnerDrinkCalories;
    
    // Simpan data sarapan ke local storage dengan kunci berdasarkan tanggal
    var breakfastData = {
      date: date,
      breakfastFood: breakfastFood,
      breakfastDrink: breakfastDrink,
      lunchFood: lunchFood,
      lunchDrink: lunchDrink,
      dinnerFood: dinnerFood,
      dinnerDrink: dinnerDrink,
      targetCalories: targetCalories,
      totalCalories: totalCalories
    };
    localStorage.setItem("breakfastData-" + date, JSON.stringify(breakfastData));
    alert("Sarapan tersimpan!");
    
    loadBreakfastHistory(); // Memuat kembali riwayat setelah menyimpan data baru
  }
  
  function clearTargetCalories() {
    document.getElementById("target").value = "";
  }
  
  function loadBreakfastHistory() {
    var historyDiv = document.getElementById("history");
    historyDiv.innerHTML = ''; // Kosongkan konten sebelum memuat riwayat baru
    
    // Mengambil semua kunci dari localStorage yang dimulai dengan "breakfastData-"
    var breakfastKeys = Object.keys(localStorage).filter(function(key) {
      return key.startsWith("breakfastData-");
    });
    
    // Membuat tampilan untuk setiap data sarapan yang tersimpan
    breakfastKeys.forEach(function(key) {
      var breakfastData = JSON.parse(localStorage.getItem(key));
      var historyItem = document.createElement("div");
      historyItem.innerHTML = `
        <hr>
        <p><strong>Tanggal:</strong> ${breakfastData.date}</p>
        <p><strong>Target Kalori:</strong> ${breakfastData.targetCalories}</p>
        <p><strong>Makanan Pagi:</strong> ${breakfastData.breakfastFood}</p>
        <p><strong>Minuman Pagi:</strong> ${breakfastData.breakfastDrink}</p>
        <p><strong>Makanan Siang:</strong> ${breakfastData.lunchFood}</p>
        <p><strong>Minuman Siang:</strong> ${breakfastData.lunchDrink}</p>
        <p><strong>Makanan Malam:</strong> ${breakfastData.dinnerFood}</p>
        <p><strong>Minuman Malam:</strong> ${breakfastData.dinnerDrink}</p>
        <p><strong>Total Kalori Pagi:</strong> ${breakfastData.breakfastCalories + breakfastData.breakfastDrinkCalories}</p>
        <p><strong>Total Kalori Siang:</strong> ${breakfastData.lunchCalories + breakfastData.lunchDrinkCalories}</p>
        <p><strong>Total Kalori Malam:</strong> ${breakfastData.dinnerCalories + breakfastData.dinnerDrinkCalories}</p>
        <p><strong>Total Kalori:</strong> ${breakfastData.totalCalories}</p>
        <button onclick="deleteBreakfast('${key}')">Hapus</button>
      `;
      historyDiv.appendChild(historyItem);
    });
  }
  
  function deleteBreakfast(key) {
    localStorage.removeItem(key); // Menghapus data dari localStorage
    loadBreakfastHistory(); // Memuat kembali riwayat setelah menghapus data
  }
  