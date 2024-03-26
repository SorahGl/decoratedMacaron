
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

