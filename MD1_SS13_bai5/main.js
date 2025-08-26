
let input = prompt("Hãy chọn 2 số từ 10 đến 20, cách nhau bằng dấu cách");
let numBer = input.split(" ").map(Number);
let numBerchan = 0;
let numBerle = 0;
for (let i = 0; i < numBer.length; i++) {
    if (numBer[i] % 2 === 0) {
        numBerchan = numBerchan + numBer[i];
    } else {
        numBerle += numBer[i];
    }
} alert(`Tổng các số chan là: ${numBerchan}`);
alert(`Tổng các số le là: ${numBerle}`);
