//TODO: Please write code in this file.
'use strict';


function printReceipt(inputs) {
  let arr = [];
  let total = 0;
  let text = "***<没钱赚商店>收据***\n";
  for (let i = 0;i <inputs.length;i++)
  {
    total += inputs[i].price * inputs[i].count;
    arr.push("名称：" + inputs[i].name+"，数量：" + inputs[i].count+inputs[i].unit+"，单价："+inputs[i].price+".00(元)，"+"小计："+inputs[i].price*inputs[i].count+".00(元)\n");
    text += arr[i];
  }


  text = text +"----------------------\n"+"总计："+total +".00(元)\n"+"**********************";
  console.log(text);
}



