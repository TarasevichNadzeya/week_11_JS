const sumCells = document.querySelectorAll('.price');
console.log(sumCells);

let sum = 0;
for (let i = 0; i < sumCells.length; i++) {
    sum = sum + (+sumCells[i].textContent);
}

console.log(sum);
document.querySelector('.grand_total').textContent = sum;



// 

// button.addEventListener('click', () => {
//     const sumCells = document.querySelectorAll('.price');
//     let sum = 0;
//     for (let i = 0; i < sumCells.length; i++) {
//         sum = sum + (+sumCells[i].textContent) * 0.2;
//     }
// });

// document.querySelector('.grand_total').textContent = sum;


click = function () {
    let numVal1 = Number(document.getElementById('price_1').value);
    let numVal2 = 0.2;
    let totalValue = numVal1 - (numVal1 * numVal2);
}
document.getElementById("new_total").value = totalValue.toFixed(2);