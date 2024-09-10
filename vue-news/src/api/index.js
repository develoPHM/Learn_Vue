import axios from 'axios';

// HTTP request 와 관련된 기본 설정
const config = {
    baseURL: 'https://api.hnpwa.com/v0/'
}
// news api
function fetchNewsList() {
    // return axios.get(config.baseURL + 'news/1.json')
    return axios.get(`${config.baseURL}news/1.json`) // es6문법
}

function fetchJobsList() {
    return axios.get(`${config.baseURL}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseURL}ask/1.json`)
}

export {fetchNewsList, fetchJobsList, fetchAskList}