let priceSlider = document.querySelector(".price"),
    outputPrice = document.querySelector(".price-output"),
    equalityNumber = document.querySelector(".equality-number"),
    equalityRange = document.querySelector(".equality-range"),
    yearsNumber = document.querySelector(".years-number"),
    yearsRange = document.querySelector(".years-range");

outputPrice.innerHTML = priceSlider.value;
equalityNumber.innerHTML = equalityRange.value;
yearsNumber.innerHTML = yearsRange.value + " years";

priceSlider.oninput = function() {
    outputPrice.innerHTML = this.value;
}
equalityRange.oninput = function() {
    equalityNumber.innerHTML = this.value;
}
yearsRange.oninput = function() {
    if(this.value <= 1) yearsNumber.innerHTML = this.value + " year";

    else yearsNumber.innerHTML = this.value + " years";
}