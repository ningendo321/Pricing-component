let myCheckbox = document.querySelector(".switch input")
let duration = document.querySelector('.month')
let price = document.querySelector('.thePrice')
let switcher = document.querySelector('.switch')
let range = document.querySelector('.myrange')
let btn = document.querySelector('.btn')
let main = document.querySelector('.main')
let thankYou = document.querySelector('.thankyou-div')
let goBack = document.querySelector('.go-back') 

switcher.onclick = function(){
    if(myCheckbox.checked == true) {
        let priceint = price.textContent
        price.textContent = `${(priceint - (priceint * 0.25)) * 12}`
        duration.textContent = "/year"
        console.log(price.textContent)
    } else {
        duration.textContent = "/month"
        
     updateprice()   
    }
    
}


function updateprice() {
    if(range.value == 1){
        if(myCheckbox.checked == true) {
            price.textContent = 72;
        } else {
            price.textContent = 8;
        }
    }
    if(range.value == 2){
        if(myCheckbox.checked == true) {
            price.textContent = 108;
        } else {
            price.textContent = 12;
        }
    }
    if(range.value == 3){
        if(myCheckbox.checked == true) {
            price.textContent = 144;
        } else {
            price.textContent = 16;
        }
    }
    if(range.value == 4){
        if(myCheckbox.checked == true) {
            price.textContent = 216;
        } else {
            price.textContent = 24;
        }
    }
    if(range.value == 5){
        if(myCheckbox.checked == true) {
            price.textContent = 288;
        } else {
            price.textContent = 32;
        }
    }
}
range.addEventListener("input", updateprice)

btn.addEventListener("click", function(){
    main.classList.add('active')
    thankYou.classList.add('active')
})
goBack.onclick = function() {
    location.reload()
}