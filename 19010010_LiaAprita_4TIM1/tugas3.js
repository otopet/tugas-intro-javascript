// gunakan logical operator dan comparison operator
// silahkan isi bebas nilai dari variabel dibawah ini

// Nama : Andika Restu Saputra
// NPM  : 19010004

let a = 3;
let b = 11;

/* AND operator */
// angka 15 & 10 merupakan angka bebas, silahkan diisi sesuai kreasi kalian
console.log(a < 20 && b > 10); // (true && true) -> true
console.log(a > 20 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 20 || b > 10); // (true || true) -> true
console.log(a > 20 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 20)); // !(true) -> false
console.log(!(a < 20 && b > 10)); // !(true && true) -> !(true) -> false

/* output yang dihasilkan
true
false
true
true
false
false
*/
