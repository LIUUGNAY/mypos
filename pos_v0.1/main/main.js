function printReceipt(inputs) {
  let item;
  let  itemArr = [];
  let total = 0;
  let text ="***<没钱赚商店>收据***\n";
  for (let i = 0; i <inputs.length;i++)
  {
    item = inputs[i];
    if (itemArr.length == 0)
    {
      item.count = 1;
      itemArr.push(item);
    }
    else {
      for (let j = 0; j < itemArr.length; j++) {
        if (inputs[i].name == itemArr[j].name) {
          itemArr[j].count++;
        }
        else if ( j == itemArr.length-1)
        {
          itemArr.push(item);
          item.count = 0;
        }
      }
    }
  }

  for (let n = 0;n < itemArr.length;n++)
  {

    text += "名称：" + itemArr[n].name +"，数量：" +itemArr[n].count+itemArr[n].unit+"，单价："+itemArr[n].price+".00(元)"+"，小计："+itemArr[n].price*itemArr[n].count+".00(元)\n";

    total += itemArr[n].price*itemArr[n].count;

  }

  text = text + "----------------------" + "\n总计：" + total +".00(元)\n" +"**********************" ;

  console.log(text);

}


