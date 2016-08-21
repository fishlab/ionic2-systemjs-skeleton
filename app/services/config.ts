//todo config from localStorage
interface DefaultConfig {

}

interface Config {
    
}

export let config = {
    // api_base_url : "http://localhost"
    api_base_url : "http://192.168.31.127"
    
}

export function api(apiUrl){
    return config.api_base_url + apiUrl;
}