
function printReceipt(inputs) {
  let split = [],Arr = [],item_Arr =[],input_Arr = [],New_Arr = [];
  let all_Arr = loadAllItems();
  let sale_Arr = loadPromotions();
  for (let i = 0; i<inputs.length;i++) {
    split[i] = inputs[i].split("-");
  }
  for (let j = 0;j<split.length;j++) {
    item_Arr[j] = {};
    if (split[j].length > 1)
    {
      item_Arr[j].barcode = split[j][0];
      item_Arr[j].count = split[j][1];
    }
    else
    {
      item_Arr[j].barcode = split[j][0];
      item_Arr[j].count = 1;
    }
  }

  for (var p = 0;p < item_Arr.length-1;p++)
  {

    if (item_Arr[p].barcode == item_Arr[p+1].barcode)
    {
      item_Arr[p].count += item_Arr[p+1].count;
      item_Arr[p+1].count = item_Arr[p].count;
    }
  }

  for (var p = 0;p<item_Arr.length -1;p++)
  {
    if (item_Arr[p].barcode != item_Arr[p+1].barcode)
    {
      New_Arr.push(item_Arr[p]);
    }
  }

  for (var p = 0;p <New_Arr.length ;p++)
  {
    for (var q = 0;q<all_Arr.length;q++)
    {
      if (New_Arr[p].barcode == all_Arr[q].barcode)
      {
        New_Arr[p].name = all_Arr[q].name;
        New_Arr[p].unit = all_Arr[q].unit;
        New_Arr[p].price = all_Arr[q].price;

      }
    }
  }

  New_Arr.push(item_Arr[item_Arr.length-1]);
  console.log(New_Arr[length-1].barcode);
  // for (var p = 0;p < all_Arr.length;p++)
  // {
  //   if (New_Arr[length-1].barcode == all_Arr[p].barcode)
  //   {
  //     New_Arr[length-1].name = all_Arr[p].name;
  //     New_Arr[length-1].unit = all_Arr[p].unit;
  //     New_Arr[length-1].price = all_Arr[p].price;
  //
  //   }
  // }

//   for (var p = 0;p<sale_Arr[0].barcodes.length;p++)
//   {
//     for (var q = 0;q < New_Arr.length;q++)
//     {
//       if (sale_Arr[0].barcodes[p] == New_Arr[q].barcode)
//       {
//         New_Arr[q].smalltotal = New_Arr[q].price * (New_Arr[q].count-New_Arr[q].count/3);
//         console.log(New_Arr[q].smalltotal);
//       }
//       else
//       {
//         New_Arr[q].smalltotal = New_Arr[q].price * New_Arr[q].count;
//       }
//     }
//   }
// console.log(New_Arr);
}

