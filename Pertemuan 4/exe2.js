// IIFE

(function() {
    const number = parseInt(prompt("Masukkan angka:"));
    if (number > 0){
        console.log(number, "bilangan positif");
    }
    else{
        console.log(number, "bilangan negatif");
    }
})();


// Callback

function checkNumber(num, callback) {
    if (num > 0) {
        callback("Bilangan Positif");
    } else {
        callback("Bilangan Negatif");
    }
}

const number = parseInt(prompt("Masukkan angka:"));

checkNumber(number, function(result) {
    console.log(result);
});


// Gabungan IIFE & Callback

(function() {
    function checkNumber(num, callback) {
        if (num > 0) {
            callback("Bilangan Positif");
        } else {
            callback("Bilangan Negatif");
        }
    }

    const number = parseInt(prompt("Masukkan angka:"));

    checkNumber(number, function(result) {
        console.log(result);
    });
})();
