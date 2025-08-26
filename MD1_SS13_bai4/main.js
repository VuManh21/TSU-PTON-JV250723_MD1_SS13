let choose = prompt("hay chon so ban thich trog khoang tu 100").split("");
let max= Number(choose[0]);
for (let i = 1; i < choose.length; i++) {
    if(max < Number(choose[i])){
        max = Number(choose[i]);
   }
}

console.log(`so lon nhat la ${max}`);

