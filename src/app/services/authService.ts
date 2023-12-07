import api from "@/utils/api";
import { AxiosInstance } from "axios";

export default class AuthService {
    axios: AxiosInstance; 
    constructor() {
        this.axios = api;
    }

    async login(payload: any) {
        const { data } = await this.axios.post('/login/', payload);
        if (data) {
            localStorage.setItem('name', data?.name);
            localStorage.setItem('id', data?.id);
            localStorage.setItem('access_token', data?.access_token);
            localStorage.setItem('role', data?.role.name);
            console.log(data);
            return true;
        }
        return
    }

    async logout() {
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        localStorage.removeItem('access_token');
        localStorage.removeItem('vehicle');
        localStorage.removeItem('parkingSession');
        localStorage.removeItem('payment');
    }

}