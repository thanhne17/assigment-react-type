import axios from "axios";

export const getAllVideos = () => {
    const url = "http://localhost:3005/api/video/";
    return axios.get(url);
}