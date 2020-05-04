let persons1 = [];

for (let i = 0; i < 3; ++i)
    persons1.push({
        name: "홍길동",
        age: i + 16
    })

console.log(persons1)

let persons2 = Objects.align({}, persons1);
