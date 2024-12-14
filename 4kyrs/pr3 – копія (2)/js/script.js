function dateConverterLogic() {
    const dateInput = document.querySelector('#dateInput');
    const dateDiv = document.querySelector('.date');
    const p = dateDiv.querySelector('p');

    dateInput.value = '25/12/2023 fefsfefe 24/10/2024';

    function dateConvertor(dateInput) {
        let dateString = dateInput.value;
        const regexRes = dateString.match(/\d{2}\/\d{2}\/\d{4}/g)
        if (regexRes) {
            const resultArray = []
            for (let i = 0; i < regexRes.length; i++) {
                let tempArr = regexRes[i].split('/');
                resultArray.push(`${tempArr[2]}-${tempArr[1]}-${tempArr[0]}`)
                dateString = dateString.replace(/\d{2}\/\d{2}\/\d{4}/, resultArray[i])
            }
            p.textContent = dateString;
        }
        else {
            p.textContent = dateString;
        }
    }

    dateConvertor(dateInput)
    dateInput.addEventListener('change', () => dateConvertor(dateInput));
}

dateConverterLogic();

function emailMatch(){
    const emailInput = document.querySelector('#emailInput');
    const emailDiv = document.querySelector('.email');
    const p = emailDiv.querySelector('p');

    emailInput.value = "Contact us at support@company.com, sales@shop.org or mail@mail.gmail.com. Invalid:admin@company, test@invalid-domain"

    function emailsToArray(input){
        let emailString = input.value;
        const regex = /[^\s@]+@[^\s@]+\.([^\s@]{2,6}\.)?[^\s@,]{2,}/g
        const result = emailString.match(regex);
        p.textContent = result;
    }
    emailsToArray(emailInput);
    emailInput.addEventListener('change', () => emailsToArray(emailInput));
}

emailMatch();