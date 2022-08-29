import axios from "axios";

const getLocalConfig = async (key:string) =>
{
    const baseConfig:any = await loadConfigFile(import.meta.env.VUE_APP_PUBLIC_PATH)
    if (baseConfig && baseConfig[key])
    { //取本地配置文件
        return baseConfig[key];
    }
    //取远程（portal）配置文件
    const remoteConfig:any = await loadConfigFile(import.meta.env.VUE_APP_BASE_URL)
    if (remoteConfig && remoteConfig[key])
    {
        return remoteConfig[key];
    }
    //本地和远程配置文件都没有，取环境变量
    return import.meta.env[`VUE_APP_${key.toUpperCase()}`]
}

const loadConfigFile = (path:string) =>
{
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) =>
    {
        const url = `//${window.location.host}${path}config/config.json`;
        axios.get(url).then(resultObj =>
        {
            if (resultObj && resultObj.data)
            {
                resolve(resultObj.data)
            }
        }).catch(() =>
        {
            resolve(null)
        });
    })
}
export default {getLocalConfig,loadConfigFile}