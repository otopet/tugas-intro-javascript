// gunakan logical operator dan comparison operator
// silahkan isi bebas nilai dari variabel dibawah ini

// Nama : Ibnu Rizki Yurdan Murdana
// NPM  : 19010017

let a = 4;
let b = 15;

/* AND operator */
// angka 15 & 10 merupakan angka bebas, silahkan diisi sesuai kreasi kalian
console.log(a < 17 && b > 8); // (true && true) -> true
console.log(a > 17 && b > 8); // (false && true) -> false

/* OR operator */
console.log(a < 17 || b > 8); // (true || true) -> true
console.log(a > 17 || b > 8); // (false || true) -> true

/* NOT operator */
console.log(!(a < 17)); // !(true) -> false
console.log(!(a < 17 && b > 8)); // !(true && true) -> !(true) -> false

/* output yang dihasilkan
true
false
true
true
false
false
*/
