const form = document.forms.creditcard;

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardBank = document.querySelector("#bank-name");
const cardSystem = document.getElementById('bank-system')

const cardSystemImage = document.getElementById('system')
const cardNumberText = document.querySelector(".number-vl")
const cardHolderText = document.querySelector(".name-vl")
const cardExpirationText = document.querySelector(".expiration-vl")
const cardBankText = document.querySelector(".bank-vl")
const cardSystemCHange = document.querySelector('.system')

cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumberText.innerText = "0000 0000 0000 0000";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumberText.innerHTML = valuesOfInput
        }
    }
})

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "NAME SURNAME";
    } else {
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
})

cardBank.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardBankText.innerHTML = "ВТБ";
    } else {
        cardBankText.innerHTML = e.target.value[0].toUpperCase()+ e.target.value.slice(1) ;
    }
})

cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardExpirationText.innerHTML = "01/23";
    } else {
        const valuesOfInput = e.target.value.replace("/", "");

        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        } else {
            cardExpirationText.innerHTML = valuesOfInput;
        }
    }
})

cardSystem.addEventListener('change', () => {
  const option = cardSystem.options[cardSystem.selectedIndex].value;
  switch (option) {
    case 'МИР':
      system.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg';
      break;
    case 'MasterCard':
      system.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg';
      break;
    case 'VISA':
      system.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg';
      break;
    case 'American Express':
      system.src = 'https://logos-download.com/wp-content/uploads/2016/03/American_Express_logo_logotype_emblem.png';
      break;
    case 'Maestro':
      system.src = 'https://logos-download.com/wp-content/uploads/2016/10/Maestro_logo.png';
      break;
  }
});

form.addEventListener("submit", function(e) {
	e.preventDefault();
	const body = {}
    
    let newRow = document.getElementById('myTable')
    let row = document.createElement('tr')
    newRow.append(row)

	for (let i = 0; i < form.elements.length; i++) {        
		let el = form.elements[i];
        
		if (el.name) {            
            let c_td = document.createElement('td')	;	
            c_td.innerText = el.value;	            
            row.append(c_td)
		}
	}
	form.reset()
    system.src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg";
    cardExpirationText.innerHTML = "11/24"
    cardBankText.innerHTML = "ВТБ";
    cardHolderText.innerHTML = "NAME SURNAME";
    cardNumberText.innerText = "0000 0000 0000 0000";
})