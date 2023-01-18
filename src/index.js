

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span")
  const quantityElement = product.querySelector(".quantity input")
  const subtotalElement = product.querySelector(".subtotal span")

  const price = Number(priceElement.innerText)
  const quantity = Number(quantityElement.value)
  
  const subtotal = price * quantity
  
  subtotalElement.innerHTML = subtotal

  return subtotal
}

function calculateAll() {

  const productElements = document.querySelectorAll('.product')

  let totalPrice = 0

  productElements.forEach(Product => {
    const productTotal = updateSubtotal(Product)

    totalPrice += productTotal
  })

  let totalPriceElement = document.querySelector("#total-value span")

  totalPriceElement.textContent = totalPrice
}
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target)
  
  const productToRemove = target.parentNode.parentNode
  cartElement.removeChild(productToRemove)

  calculateAll(); 
}

function bindDeleteButton(deleteButton) {
  deleteButton.addEventListener("click", removeProduct)
}



function createProduct() {
  let nameElement = document.querySelector('.create-product input[type="text"]')
  let priceElement = document.querySelector('.create-product input[type="number"]')
  
  console.log(nameElement)
  console.log(priceElement)

  let newProductTr = document.createElement('tr')
  newProductTr.setAttribute('class', 'product')
  
  
  newProductTr.innerHTML = `
    <td class="name">
      <span>${nameElement.value}</span>
    </td>
    <td class="price">$<span>${priceElement.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  
  
  cartElement.appendChild(newProductTr)

  
  var newRemoveButton = newProductTr.querySelector('.btn-remove')
  newRemoveButton.addEventListener('click', removeProduct)

  
  nameElement.value = ""
  priceElement.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll)


  const removeButtons = cart.getElementsByClassName('btn-remove');
  [...removeButtons].forEach(button => button.addEventListener('click', removeProduct))

  
  const createButton = document.getElementById('create')
  if(createButton) {
    createButton.addEventListener('click', createProduct)
  }
})