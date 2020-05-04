function sum(array) {
    return array.reduce((a, b) => a + b)
}

function test_sum(f) {
    let arr = [];
    for (let i = 0; i < 5; ++i)
        arr.push(Math.floor(Math.random() * 11))
    console.log(arr)
    console.log(f(arr))
}

for (let i = 0; i < 5; ++i)
    test_sum(sum)