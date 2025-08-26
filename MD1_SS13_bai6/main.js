let input = prompt("Hãy chọn 2 số từ 10 đến 20, cách nhau bằng dấu cách");
let numBer = input.split(" ").map(Number);
let soCanDem = +prompt("Hãy nhập số cần đếm số lần xuất hiện")
let sodem = 0;
 for (let i = 0; i < numBer.length; i++) {
    if(numBer[i] === soCanDem){
        sodem++
    }
    
 }
alert(`Số ${soCanDem} xuất hiện ${sodem} lần trong mảng.`);