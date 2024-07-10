// JUFT TOQ O'YINI
var elJufttoqDesc = document.querySelector(".js-jufttoq-desc");
var elJufttoqErrorDesc = document.querySelector(".js-jufttoq-error-desc");
var userEnteredNumber = Number(prompt("Hayolingizga kelgan birinchi raqamni kiriting:"));

if (userEnteredNumber < 1) {
   elJufttoqErrorDesc.textContent = "1 va 1 dan katta son kiriting!";
} else if (userEnteredNumber % 2 == 0) {
   elJufttoqDesc.textContent = `${userEnteredNumber} soni juft son.`;
} else {
   elJufttoqDesc.textContent = `${userEnteredNumber} soni toq son.`;
}