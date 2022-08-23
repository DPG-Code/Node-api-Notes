const supertest = require('supertest')
const { app } = require('../index')
const api = supertest(app)

const initialNotes = [
  {
    content: '@DPG-Code',
    important: true,
    date: new Date()
  },
  {
    content: 'React Framework',
    important: true,
    date: new Date()
  },
  {
    content: 'Node + MongoDB',
    important: true,
    date: new Date()
  }
]

const getAllContentFromNotes = async () => {
  const response = await api.get('/api/notes')
  return {
    contents: response.body.map(note => note.content),
    response
  }
}

module.exports = { initialNotes, api, getAllContentFromNotes }
