//todo config from localStorage
interface Config {
    
}

var defaultConfig = __profile__;

// export let config = {
//     // api_base_url : "http://localhost"
//     api_base_url : "http://192.168.31.127"
// }

export let config:any = defaultConfig;

export function api(apiUrl){
    return config.api_base_url + apiUrl;
}