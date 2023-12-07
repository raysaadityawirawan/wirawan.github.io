//    let operator = prompt("pilih simbol yang akan digunakan (+,-,*,/)")
//    let num1 = parseFloat(prompt("angka1"))
//    let num2 = parseFloat(prompt("angka2"))

//    if(operator === "+" ){
//        document.write(`Hasil: ${num1 + num2}`)
//     }else if (operator === "-"){
//        document.write(`Hasil: ${num1 - num2}`) }else if (operator ==="*"){
//        document.write(`Hasil: ${num1 * num2}`)
//    }else if (operator === "/"){
//        document.write(`Hasil: ${num1 / num2}`)
//    }

//   let nilaisederhana = prompt("Masukkan Nilai")
//   let grade = "";
// l
//   if(nilaisederhana >= 96-99){
//       grade = "A";
//   }else if(nilaisederhana >= 90-95){
//       grade = "B";
//   }else if(nilaisederhana >= 86-90){
//       grade = "C";
//   }else if(nilaisederhana >= 81-85){
//       grade = "D";
//   }else if(nilaisederhana >= 76-80){
//       grade = "E";
//   }else if(nilaisederhana >= 66-75){
//       grade = "F";
//   }else if(nilaisederhana >= 0-65){
//       grade = "F-";
//   }

//   document.write(`<h1>Nilai anda : ${nilaisederhana} dan grade anda : ${grade}</h1>`);


// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(angka);
// const hasilfilter = angka.filter ((items) => {return items % 2 === 0;});

// console.log(hasilfilter)
// Method Filter berfungsi untuk menyaring data
;

// Method includes berfungsi untuk cek data array

//  let makanan =["nasi goreng", "mie goreng", "nasi padang", "sate"];

//  let adasate = makanan.includes("mie goreng");
//  console.log(adasate);  //maka jawaban yang keluar adalah true


// method sort berfungsi untuk mengurutkan data dalam array

// let alfabet =["a", "b", "c", "d", "e", "f"];
// console.log(alfabet.sort());


// pembulatan menggunakan method javascrip
// 1. math.round = mengembalikan nilai dari pembulatan bilangan terdekat
// contoh:
// let a = 5.2;
// let b = 5.6;
// let c = 5.5;

// caranya => bulatan = math.round(a);
// console.log(bulatkan)

// // ketika bilangan itu positif maka,bulatkan ke atas namun,saat bilangan negatif maka bulatkan ke bawah
// 2. math.cell = mengembalikan nilai dari pembulatan ke bawah
// let bawah = math.cell(a);
// console.l



// INTRO
alert('SELAMAT DATANG DI GAME SUIT JAWA !!');
var tanya = confirm('Apakah Kamu ingin bermain ?');
var repeat = true;
if(tanya == true) { 
    while(repeat) {
// menangkap pilihan player
var player = prompt('Silahkan pilih gajah, semut atau orang');

// menangkap pilihan computer
// munculkan random number
var com = Math.random();

if(com < 0.33) {
    com = 'gajah';
} else if(com >= 0.33 && com < 0.67) {
    com = 'semut';
} else {
    com = 'orang';
}

// tentukan rules
var hasil = '';
if(player == com) {
 hasil = 'SERI';
} else if (player == 'gajah') {
    hasil = (com == 'semut') ? 'KALAH' : 'MENANG';
} else if (player == 'semut') {
    hasil = (com == 'orang') ? 'KALAH' : 'MENANG';
} else if (player == 'orang') {
    hasil = (com == 'gajah') ? 'KALAH' : 'MENANG';
}else {
    hasil = 'SALAH';
}
// tampilkan hasil games
if(hasil == 'MENANG' || hasil == 'KALAH' || hasil == 'SERI') {
    alert('kamu memilih : ' + player + '\nkomputer memilih : ' + com);
} else {
    alert('KAMU MEMASUKAN PILIHAN YANG SALAH!');
}
    if(hasil == 'MENANG') {
alert('Selamat Kamu Menang !!');
} else if(hasil == 'SERI') {
    alert('Wah hasilnya seri! kamu hampir menang!')
} else if(hasil == 'KALAH') {
    alert('Wah sayang sekali kamu kalah!')
}else {
    alert('Silahkan masukan pilihan sesuai aturan ya!');
}

if(hasil == 'MENANG' || hasil == 'KALAH' || hasil == 'SERI') {
    repeat = confirm('Apakah kamu ingin bermain lagi?');
    }
}
} else {
    alert('Wah sayang sekali, jangan lupa datang kembali ya!')
}
if(repeat == false) {
    alert('Terima Kasih Telah Bermain Ya!');
}