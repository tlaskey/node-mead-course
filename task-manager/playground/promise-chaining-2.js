require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ef162821d07475eb6fff242').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((numTasks) => {
//     console.log(numTasks)
// }).catch((e) => {
//     console.log(e)
// })

// 5ef17fdf0807fa7ba7b12c0f

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ef17fdf0807fa7ba7b12c0f').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})