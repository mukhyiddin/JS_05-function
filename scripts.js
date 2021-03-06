/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE

function taxCalc(salary){

	if(salary < 5000000)
	{
		let pajak = salary * 0;
		console.log("Salary : " + salary)
		console.log("Total pajak yang harus di bayar : " +  (pajak)); 
	}else if(salary >= 5000000 && salary < 10000000 ) {
		let pajak = salary * 5 / 100;
		console.log("Salary : " + salary)
		console.log("Total pajak yang harus di bayar : " +  (pajak)); 
	} else if(salary >= 10000000 && salary < 20000000 ) {
		let pajak = salary * 10 / 100;
		console.log("Salary : " + salary)
		console.log("Total pajak yang harus di bayar : " +  (pajak)); 
	} else	 {
		let pajak = salary * 20 / 100;
		console.log("Salary : " + salary)
		console.log("Total pajak yang harus di bayar : " +  (pajak)); 

	} 
	return taxCalc;
} 
console.log("----------------------------");
taxCalc(20000000);
//taxCalc(prompt("Menghitung pajak dari gaji yang di dapat, tulis jumlah gaji : "))


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

// / Spesifikasi BMI
// / - "under weight" apabila $BMI < 18.5
// / - "normal" apabila 18.5 < $BMI < 24.9
// / - "over weight" apabila 25 < $BMI < 29.9
// / - "obese" apabila 30 < $BMI < 34.9
// / - "extremely obese" apabila 35 < BMI

// / Parameter
// / - (Number) `height` ⇒ tinggi seseorang (cm)
// / - (Number) `weight` ⇒ berat badan seseorang (kg) 

// / Return Value
// / - (String) Indikasi BMI yang didapatkan melalui formula dibawah
// /   (weight/(height^2)) * 10000

// / EDIT HERE

function checkBMI(height,weight)
{
	let checkBMI = (weight / (height * height) * 10000);

		if(checkBMI < 18.5){
			console.log("Tinggi " + height + " Dan Berat "+ weight + " Dengan hasil BMI " + checkBMI.toFixed(1) + " termasuk Under Weight ")
		}else if(checkBMI > 18.5 && checkBMI < 24.9){
			console.log("Tinggi " + height + " Dan Berat "+ weight + " Dengan hasil BMI " + checkBMI.toFixed(1) + " termasuk Normal ")
		}else if(checkBMI > 25 && checkBMI < 29.9){
			console.log("Tinggi " + height + " Dan Berat "+ weight + " Dengan hasil BMI " + checkBMI.toFixed(1) + " termasuk over Weight ")
		}else if(checkBMI > 30 && checkBMI < 34.9){
			console.log("Tinggi " + height + " Dan Berat "+ weight + " Dengan hasil BMI " + checkBMI.toFixed(1) + " termasuk obese ")
		}else if(checkBMI > 35){
			console.log("Tinggi " + height + " Dan Berat "+ weight + " Dengan hasil BMI "+ checkBMI.toFixed(1) + " termasuk extremely obese ")
		}
		return checkBMI
} 
console.log("----------------------------");
checkBMI(170, 80);



/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
 
  
 function convToUpperCase(sentence)
{ 
	return sentence.replace (/\w\S*/g, function(text)
	   {  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() } )
} 
console.log("----------------------------");
console.log(convToUpperCase("hello bandung"));


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) 
{
	if(word.includes(" ")){
		console.log("Kata : " + word + " Tidak boleh di pisah")
	}else if(word.match(word)){
		console.log(word="0")
	}else if(word){
		console.log(word=" ")
	}
} 
console.log("----------------------------");
firstNonRepeatedChar("Hello World")

