export default class GlassService {
    // get API
    getAPI = () => {
        let promise = axios({
          method: 'get',
          url: 'https://62e789430e5d74566af67388.mockapi.io/VirtualGlass'
        })
        return promise ; 
          
    }
    // get product glass
    getGlass = (id) => {
        let promise = axios({
            method: 'get',
            url: `https://62e789430e5d74566af67388.mockapi.io/VirtualGlass/${id}`
          })
          return promise ; 
    }
}