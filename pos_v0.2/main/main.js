//TODO: Please write code in this file.
function printReceipt(inputs) {
  let item;
  let  item_arr = [];
  let total = 0;
  let array,arr = [];
   array = loadAllItems();
  for (let p = 0;p<inputs.length;p++)
  {
    for (let q = 0;q < array.length;q++)
    if (inputs[p] == array[q].barcode)
    {
      arr.push(array[q]);
    }
  }



  let text ="***<没钱赚商店>收据***\n";

  for (let i = 0; i <arr.length;i++)
  {
    item = arr[i];
    if (item_arr.length == 0)
    {
      item.count = 1;
      item_arr.push(item);
    }
    else {
      for (let j = 0; j < item_arr.length; j++) {
        if (arr[i].barcode == item_arr[j].barcode) {
          item_arr[j].count++;
        }
        else if ( j == item_arr.length-1)
        {
          item_arr.push(item);
          item.count = 0;
        }
      }
    }
  }

  for (let n = 0;n < item_arr.length;n++)
  {

    text += "名称：" + item_arr[n].name +"，数量：" +item_arr[n].count+item_arr[n].unit+"，单价："+item_arr[n].price+".00(元)"+"，小计："+item_arr[n].price*item_arr[n].count+".00(元)\n";

    total += item_arr[n].price*item_arr[n].count;

  }

  text = text + "----------------------" + "\n总计：" + total +".00(元)\n" +"**********************" ;

  console.log(text);

}
