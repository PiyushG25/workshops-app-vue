import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const getWorkshops = async () => {
    const response = await axios.get( `${apiBaseUrl}/workshops/` );
    return response.data;
};

const getWorkshopById = async ( id ) => {
    const response = await axios.get(
        `${apiBaseUrl}/workshops/${id}`,
        {
            params: {
                _embed: 'sessions'
            }
        }
    );
    return response.data;
};

export {
    getWorkshops,
    getWorkshopById
};