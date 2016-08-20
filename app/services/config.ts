//todo config from localStorage
interface DefaultConfig {

}

interface Config {
    
}

export let config = {
    api_base_url : "http://localhost"
}

export function api(apiUrl){
    return config.api_base_url + apiUrl;
}