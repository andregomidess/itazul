import api from "@/utils/api";
import { AxiosInstance } from "axios";

export default class UserService {
    axios: AxiosInstance; 
    constructor() {
        this.axios = api;
    }

    async createUser(payload: any){
        const {data} = await this.axios.post('/users/', payload);
        if (data) {
            return data;
        }
        return false;
    }

    async getAllUsers(){
        const {data} = await this.axios.get('/users');
        if (data) {
            return data;
        }
        return false;
    }

    async getUserById(userId: string){
        const {data} = await this.axios.get(`/users/${userId}/`);
        if (data) {
            return data;
        }
        return false;
    }

    async updateUser(userId: string, payload: any){
        const {data} = await this.axios.patch(`/users/${userId}/`, payload);
        if (data) {
            return data;
        }
        return false;
    }

    async removeUser(userId: string){
        const {data} = await this.axios.delete(`/users/${userId}/`);
        if (data) {
            return data;
        }
        return false;
    }

    async createVehicle(userId: string, payload: any){
        const {data} = await this.axios.post(`/vehicles/`, payload);
        if (data) {
            return data;
        }
        return false;
    }

    async getVehicle(userId: string){
        const {data} = await this.axios.get(`/vehicles/${userId}`);
        if (data) {
            return data;
        }
        return false;
    }

    async getStreet(streetId: string){
        const {data} = await this.axios.get(`/streets/${streetId}`);
        console.log(data);
        if (data) return data;
        return false;
    }

    async parkingSession(payload: any){
        const {data} = await this.axios.post(`/parking_sessions/`, payload);
        console.log(data);
        if (data) return data;
        return false;
    }

    async finishParkingSession(parkingSessionId: string, payload: any){
        const {data} = await this.axios.patch(`/parking_sessions/${parkingSessionId}`, payload);
        console.log(data);
        if (data) return data;
        return false;
    }

}