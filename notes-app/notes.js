'use strict'
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else console.log(chalk.red.inverse('Duplicate title, note was not added.'))
}

const removeNote = (title) => {
    const notes = loadNotes()
    const keptNotes = notes.filter((note) => {
        return note.title !== title
    })

    if (keptNotes.length !== notes.length) {
        saveNotes(keptNotes)
        console.log(chalk.green.inverse(`Note ${title} removed!`))
    }
    else console.log(chalk.red.inverse('No note to remove.'))
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) console.log(chalk.red.inverse('You have no notes!'))
    else {
        console.log(chalk.green.inverse('Your notes'))
        notes.forEach((note) => {
            console.log(chalk.blue.bold(note.title), chalk.blue(note.body))
        })
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const currNote = notes.find((note) => note.title === title)
    if (currNote) {
        console.log(chalk.green.bold(title), currNote.body)
    }
    else console.log(chalk.red.inverse('No note found!'))
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}