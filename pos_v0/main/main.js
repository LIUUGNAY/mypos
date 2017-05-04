'use strict';

function printReceipt(tags) {

  const cartItem =buildSubTotal(tags).cartItem;
  const subTotal = buildSubTotal(tags).subTotal;
  const cartTotal = getCartTotal(subTotal);
  const receiptText = buildPrintReceipt(cartItem,cartTotal);
  console.log(receiptText);
}

function buildSubTotal(inputs) {
  const cartItem = [],subTotal = [] ;
  for( let i = 0; i<inputs.length; i++)
  {
    subTotal[i] = inputs[i].price * inputs[i].count;
    cartItem.push("名称：" + inputs[i].name+"，数量：" + inputs[i].count+inputs[i].unit+"，单价："+inputs[i].price+".00(元)，"+"小计："+subTotal[i]+".00(元)\n");
  }

  return {cartItem,subTotal};
}

function getCartTotal(subTotal) {
  let cartTotal = 0;
  for (let i=0;i<subTotal.length;i++)
  {
    cartTotal += subTotal[i];
  }
  return cartTotal;
}

function buildPrintReceipt(cartItem,cartTotal) {
  let text = "***<没钱赚商店>收据***\n";
  text += cartItem.join('');
  text = text +"----------------------\n"+"总计："+cartTotal+".00(元)\n"+"**********************";
  return text;

}










