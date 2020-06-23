require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ef17cd8f91d1c775c46cf3c

// User.findByIdAndUpdate('5ef181317ddcd67cce99505e', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5ef181317ddcd67cce99505e', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})