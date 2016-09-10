declare var __profile__;

//todo config from localStorage
interface Config {
    api_base_url?:string;
    image_server?:string;
}

var defaultConfig = __profile__;


export let config:Config = defaultConfig;

export function api(apiUrl){
    return config.api_base_url + apiUrl;
}