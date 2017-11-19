// IIFE bo scope - poczytaj
(function() {

  const cartItems = document.querySelector('.cart-items');
  const cartBtns = document.querySelector('.pro-cart');
  let quantityBtn;
  let  addToCardBtn;
  // sprawdzam czy jest taki przycisk, bo w stronie z koszykiem go nie będzie
  if (cartBtns) {
    quantityBtn = cartBtns.querySelector('input');
    addToCardBtn = cartBtns.querySelector('.add-to-cart');
  
  }


  const addToCart = ({ target: { dataset } }) => {
    // Działa tylko na stronie living-room, bo zmieniłem tam przycisk
    // Resztę musisz poprawić sam
    // Nie zapomnij podpiąć tego skryptu do pliku html gdzie chcesz żeby działał
    const { price, name } = dataset;
    const currentItem = { name, price, quantity: quantityBtn.value };
    const cart = localStorage.getItem('cart');

    localStorage.setItem('cart', JSON.stringify(
      cart ? [...JSON.parse(cart), currentItem] : [currentItem],
    ));
  }

  const removeFromCart = () => {
    // do zrobienia
  }

  const renderCart = () => {
    const cart = localStorage.getItem('cart');
    if (!cart) {
      return `<div>Koszyk pusty</div>`
    }
    return JSON.parse(cart).map(item => (
      // lepiej tak nie robić na dłuższą mete i użyć jakiejś bilbioteki do templatek 
      // no i to powinna być tabelka anie divy ale nie chce mi się stylować za ciebie od nowa

      // nie dodałem opcji do usuwania/updatowanie od strony koszyka - musisz to załatwić sam
      // Podpowiedź: Użyj event delegation, i przypnij jeden eventListener do `cartItems`
      `
      <div class="cart-pro-detail">
          <div class="food-pro">
          <img src="images/menu/dish-img1.jpg" alt="">
          <span>${item.name}</span>
        </div>
        
        <div class="price">
          <span>£${item.price}</span>
        </div>
        
        <div class="quantity">
          <input name=" " type="text" value="${item.quantity}">
        </div>
        
        <div class="total">
          <span>£${item.price * item.quantity}</span>
        </div>
        
        <div class="cancel">
          <a href=#.><i class="fa fa-times"></i></a>
        </div>
    </div>
    `)).reduce((prev, curr) => prev + curr);
  };

  if (addToCardBtn) {
    addToCardBtn.addEventListener('click', addToCart);
  }
  document.addEventListener('DOMContentLoaded', () => {
    // renderuj jeśli na danej stronie jest koszyk
    if (cartItems) {
      cartItems.innerHTML = renderCart();
    }
  });
})()