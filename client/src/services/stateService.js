import axios from 'axios'

export default{
    getAll: function(){
        return axios.get('/api/states/').then(response =>{
            return response.data
        })
    },
    setVisited(stateName, visited){
        return axios.patch('/api/state/'+ stateName, { visited:visited })
        .then(response => {
            return response.data
        })
    },
    
    //get one function to make request to new API route...
    //take stateName as argument
    getOne(stateName){
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data
        })
    },
}