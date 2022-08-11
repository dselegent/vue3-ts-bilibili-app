import axios from "axios";

declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>
    }
}

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000,

})

requests.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    console.warn("服务器响应数据失败");
})

export default requests;