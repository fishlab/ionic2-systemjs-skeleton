declare var __profile__;

//todo config from localStorage
interface Config {
    api_base_url?:string;
    image_server?:string;
    x;    
}

var defaultConfig = __profile__;

// export let config = {
//     // api_base_url : "http://localhost"
//     api_base_url : "http://192.168.31.127"
// }

export let config:Config = defaultConfig;

export function api(apiUrl){
    return config.api_base_url + apiUrl;
}