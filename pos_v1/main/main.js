
function printReceipt(tags) {
  const splitArr = getCartItem(tags);
  const cartItemArr = buildCartItem(splitArr);
  const allItems = loadAllItems();
  const inputsArr = findItemBarcode(cartItemArr,allItems);
  findInputCount(inputsArr);
}
function getCartItem(inputs) {
  const splitArr = [];
  for (let i=0;i<inputs.length;i++)
  {
    splitArr.push(inputs[i].split("-"));
  }
 return splitArr;
}

function buildCartItem(splitArr) {
  const cartItemArr = [];
  for (let i=0;i<splitArr.length;i++)
  {
    cartItemArr[i] = {};
    if (splitArr[i].length === 1)
    {
      cartItemArr[i].barcode = splitArr[i];
      cartItemArr[i].count = 1;
    }
    else
    {
      cartItemArr[i].barcode = splitArr[i][0];
      cartItemArr[i].count = splitArr[i][1];
    }
  }
  return cartItemArr;
}

function findItemBarcode(cartItemArr,allItems) {
  let inputsArr = [];
  for (let i = 0;i<cartItemArr.length;i++) {
    for (let j = 0; j < allItems.length; j++) {
      if (cartItemArr[i].barcode == allItems[j].barcode) {
        allItems[j].count = cartItemArr[i].count;
        inputsArr.push(allItems[j]);
      }
    }
  }
 return inputsArr ;
}

function findInputCount(inputsArr) {
  let cartItems = [];
  let inputItem;
  for (let i = 0; i < inputsArr.length; i++) {

    inputItem = inputsArr[i];
    if (cartItems.length === 0) {
      cartItems.push(inputItem);
    }
    else {
      for (let j = 0; j < cartItems.length; j++) {
        if (inputItem.name == cartItems[j].name) {
          cartItems[j].count += inputItem;
        }
        else if (j == cartItems.length - 1) {

          cartItems.push(inputItem);
        }
      }
    }

  }
  console.log(cartItems);
}
