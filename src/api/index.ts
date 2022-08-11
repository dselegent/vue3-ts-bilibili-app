import requests from "./requests";

export const reqNavList = () => requests.get('/navList');
export const reqSwiperList = () => requests.get('/swiperList');