const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(5, 7).then((sum) => {
//     console.log(sum)

//     add(sum, 10).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Using promise chaining. Less nesting needed by using chaining.
add(5, 7).then((sum) => {
    console.log(sum)
    return add(sum, 10)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
