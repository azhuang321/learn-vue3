import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
});


export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(url, { params }).then((resp) => {
      resolve(resp.data);
    }, err => {
      reject(err);
    });
  });
};

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((resp) => {
      resolve(resp.data);
    }, err => {
      reject(err);
    });
  });
};
