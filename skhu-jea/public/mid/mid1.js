let a = [];

for (let i = 0; i < 100; ++i)
    a.push(Math.floor(Math.random() * 100 + 1))

let sum = a.reduce((a, b) => a + b);
console.log((sum / 100).toFixed(1));