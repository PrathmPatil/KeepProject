import axios from 'axios'

const headerConfig = {
    headers : {
        Authorization: localStorage.getItem('token')
    }
}

export const createNote = async(obj) => {
    console.log(headerConfig)
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",obj,headerConfig)
    return response
} 