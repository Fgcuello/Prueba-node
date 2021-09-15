const fruits = ["manzana", "naranja", "cereza"];

fruits.forEach(element => {
    console.log('La fruta es ' + element)
});

console.log('-----------------')


fruits.forEach((element, i) => {
    console.log((i+1) + ': La fruta es ' + element)
});

console.log('-----------------')


fruits.forEach((element) => {
    console.log(element)
});