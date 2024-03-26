
// Add event listener to product hover
const productHover = document.getElementById('productHover');
const productMenu = document.getElementById('dropDown');

const handleHover = () => {
    productMenu.style.display = 'block';
}
const handleLeave = () => {
    productMenu.style.display = 'none';
}

productHover.addEventListener('mouseover', handleHover);
productHover.addEventListener('mouseleave', handleLeave);

// Add event listener to email submit
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');

const handleSubmit = () => {
    emailInput.value = '';
    }

submitButton.addEventListener('click', handleSubmit);