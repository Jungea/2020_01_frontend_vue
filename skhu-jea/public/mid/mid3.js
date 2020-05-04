let persons1 = [];

for (let i = 0; i < 3; ++i)
    persons1.push({
        name: "홍길동",
        age: i + 16
    })

let persons2 = [];
for (let i = 0; i < persons1.length; ++i)
    persons2.push(Object.assign({}, persons1[i]));

persons1[0].age = 20;
console.log(persons1)
console.log(persons2)
