// gunakan logical operator dan comparison operator
// silahkan isi bebas nilai dari variabel dibawah ini
let a = 4;
let b = 20;

/* AND operator */
// angka 15 & 10 merupakan angka bebas, silahkan diisi sesuai kreasi kalian
console.log(a < 18 && b > 11); // (true && true) -> true
console.log(a > 18 && b > 11); // (false && true) -> false

/* OR operator */
console.log(a < 18 || b > 11); // (true || true) -> true
console.log(a > 18 || b > 11); // (false || true) -> true

/* NOT operator */
console.log(!(a < 18)); // !(true) -> false
console.log(!(a < 18 && b > 11)); // !(true && true) -> !(true) -> false

// /* output yang dihasilkan
// true
// false
// true
// true
// false
// false
// */
