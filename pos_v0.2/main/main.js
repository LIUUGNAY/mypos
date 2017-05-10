


function printReceipt(tags) {
  const allItems = loadAllItems();
  const inputsArr = findItemBarcode(tags,allItems);
  const cartItems = findInputsCount(inputsArr);
  const cartTotal = getCartTotal(cartItems).cartTotal;
  const printItems = getCartTotal(cartItems).printItems;
  const receiptText = buildPrintReceipt(printItems,cartTotal);
  console.log(receiptText);
}


function findItemBarcode(inputs,allItems) {
  let inputsArr = [];
  for (let i = 0;i<inputs.length;i++)
  {
    for (let j = 0;j<allItems.length;j++)
      if (inputs[i] == allItems[j].barcode)
      {
        inputsArr.push(allItems[j]);
      }
  }
  return inputsArr;
}


function findInputsCount(inputsArr) {
  let inputItem;
  let cartItems = [];
  for (let i = 0; i <inputsArr.length;i++)
  {
    inputItem = inputsArr[i];
    if (cartItems.length == 0)
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
    if (inputItem.name == cartItems[j].name)
    {
      cartItems[j].count++;
    }
    else if ( j == cartItems.length-1)
    {
      inputItem.count = 0;
      cartItems.push(inputItem);
    }
  }
}


function getCartTotal(cartItems) {
  let cartTotal = 0,printItems = [];
  for (let n = 0;n < cartItems.length;n++)
  {
    printItems.push( "名称：" + cartItems[n].name +"，数量：" +cartItems[n].count+cartItems[n].unit+"，单价："+cartItems[n].price+".00(元)"+"，小计："+cartItems[n].price*cartItems[n].count+".00(元)\n");
    cartTotal += cartItems[n].price*cartItems[n].count;
  }
  return  { cartTotal, printItems};
}



function buildPrintReceipt(printItem,cartTotal) {
  let text = "***<没钱赚商店>收据***\n";
  text += printItem.join('');
  text = text +"----------------------\n"+"总计："+cartTotal+".00(元)\n"+"**********************";
  return text;
}






