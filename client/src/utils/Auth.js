import axios from 'axios';

export default {
    googleAuth: () => {
        return axios.get( '/auth/login' );
    }
}