import axios from "axios";

export const api = axios.create({ baseURL: process.env.END_POINT_API })