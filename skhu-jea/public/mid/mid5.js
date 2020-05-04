let a = [];

for (let i = 0; i < 100; ++i)
    a.push(Math.floor(Math.random() * 100 + 1))

console.log(a.filter((e) => e % 2 == 0).reduce((a, b) => a + b));
