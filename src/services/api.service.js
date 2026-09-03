class ApiService {

    constructor(){
        console.log(this)
    }

    get(url, params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const fullUrl = queryString ? `${url}?${queryString}` : url;        
        return fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => { 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }       
            return response.json();
        });
    }

    delete(url) {
      return fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }else{
            return response.json();
        }
      })
    }

}

export const apiService = new ApiService();