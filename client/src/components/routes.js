import axios from "axios"
import { setList } from "../redux/reducer"


export const getNames = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}`)
            dispatch(setList(response.data))
        } catch (error) {
            alert(error)
        }
    }
}

export const createName = (form) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}`, form)
            dispatch(getNames(response.data))
        } catch (error) {
            alert(error)
        }
    }
}

export const removeName = (id) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API}/${id}`)
            dispatch(getNames(response.data))
        } catch (error) {
            alert(error)
        }
    }
}


export const updateName = (current, id) => {
    return async dispatch => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API}/${id}`, current)
            dispatch(getNames(response.data))
        } catch (error) {
            alert(error)
        }
    }
}

