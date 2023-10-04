// Class in JS
//------------

//Objek literal
// const mobil1 = {
//     transmisi: 'Manual',
//     bahanBakar: 'Bensin',
//     mesin: 1500,
//     nyalakanMesinL: function () {
//         console.log(`Mobil ${this.transmisi} dinyalakan`)
//     },
// };

// const mobil2 = {
//     transmisi: 'Automatic',
//     bahanBakar: 'Diesel',
//     mesin: 1500,
//     nyalakanMesinL: function () {
//         console.log(`Mobil ${this.transmisi} dinyalakan`)
//     },
// }
 
class Mobil {
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin () {
        console.log(`Mobil ${this.transmisi} dinyalakan`)
    }
}

const mobil1 = new Mobil("Manual", "Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("Automatic", "Diesel", 2000);
mobil2.nyalakanMesin();

class Toyota extends Mobil{
    constructor(transmisi, bahanBakar, mesin, warna, tipe){
        super(transmisi, bahanBakar, mesin);
        this.warna = warna;
        this.tipe = tipe;
    }
    //Override
    nyalakanMesin(){
        console.log(`Mobil Tipe ${this.tipe} dinyalakan`)
    }
}

const Agya = new Toyota("Automatic", "Bensin", 1000, "Merah", "Agya GR");
Agya.nyalakanMesin();
console.log(Agya);

const Fortuner = new Toyota("Manual", "Diesel", 2800, "Hitam", "Fortuner GR");
Fortuner.nyalakanMesin();
console.log(Fortuner);
