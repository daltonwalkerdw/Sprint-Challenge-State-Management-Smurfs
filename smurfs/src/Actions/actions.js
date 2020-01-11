import axios from "axios"

export const getApi = () => {
    return dispatch => {
        axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res.data)
           dispatch({type: "GET_API", payload: res.data})
        })
        .catch(err => {console.log("ERROR", err)})
    }
}

