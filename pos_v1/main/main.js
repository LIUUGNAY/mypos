
function printReceipt(inputs) {
  let split = [];
  for (let i = 0; i<inputs.length;i++) {
    split[i] = inputs[i].split("-");
    for (let j = 0; j < split.length; j++) {
        console.log(split);
    }
  }
}
