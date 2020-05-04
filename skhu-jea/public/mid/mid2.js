let a = [];

for (let i = 0; i < 100; ++i)
    a.push(Math.floor(Math.random() * 100 + 1))

a.sort((a, b) => b - a);
console.log(a);