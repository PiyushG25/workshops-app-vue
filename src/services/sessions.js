import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const addSession = async ( newSessionDetails ) => {
    const response = await axios.post(
        `${apiBaseUrl}/sessions`,
        newSessionDetails,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
};

export {
    addSession
};