function printReceipt(inputs) {
  const cartItems = findInputsCount(inputs);
  const cartTotal = getCartTotal(cartItems).cartTotal;
  const printItem = getCartTotal(cartItems).printItem;
  const receiptText = buildPrintReceipt(printItem,cartTotal);
  console.log(receiptText);
}

function findInputsCount(inputs) {
  let inputItem;
  let cartItems = [];
  for (let i = 0; i <inputs.length;i++)
  {
    inputItem = inputs[i];
    if (cartItems.length === 0)
    {
      inputItem.count = 1;
      cartItems.push(inputItem);
    }
    else {
      searchCount(inputItem,cartItems);
    }
  }
  return cartItems;
}


function searchCount(inputItem,cartItems) {
  for (let j = 0; j < cartItems.length; j++)
  {
    if (inputItem.name === cartItems[j].name)
    {
      cartItems[j].count++;
    }
    else if ( j === cartItems.length-1)
    {
      inputItem.count = 0;
      cartItems.push(inputItem);
    }
  }
}


function getCartTotal(cartItem) {
  let cartTotal = 0,printItem = [];
  for (let n = 0;n < cartItem.length;n++)
  {
    printItem.push( "名称：" + cartItem[n].name +"，数量：" +cartItem[n].count+cartItem[n].unit+"，单价："+cartItem[n].price+".00(元)"+"，小计："+cartItem[n].price*cartItem[n].count+".00(元)\n");
    cartTotal += cartItem[n].price*cartItem[n].count;
  }
  return  { cartTotal, printItem};
}


function buildPrintReceipt(printItem,cartTotal) {
  let text = "***<没钱赚商店>收据***\n";
  text += printItem.join('');
  text = text +"----------------------\n"+"总计："+cartTotal+".00(元)\n"+"**********************";
  return text;

}






