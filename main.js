let emailList = [];
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');

const handleSubmit = () => {
    emailList.push(emailInput.value);
    emailInput.value = '';
    console.log(emailList);
    }

submitButton.addEventListener('click', handleSubmit);
