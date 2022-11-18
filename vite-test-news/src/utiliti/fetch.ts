import axios from 'axios';

export const BASE_URL = 'https://newsapi.org/v2';

const options = {
    params: {
        pageSize: 20,
    },
    headers: {
        // 'X-Api-Key': 'yourkey',
    },
};

export const fetchFromAPI = async (url: any) => {
    const {
        data
    } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};