setTimeout(() => {
    console.log('2 seconds are up.')
}, 2000)

const names = ['Tyler', 'Ari', 'Leah']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, cb) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        return cb(data)
    }, 2000)
}

geocode('Los Angeles', (data) => {
    console.log(data)
})

const add = (x, y, cb) => {
    setTimeout(() => {
        return cb(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})
