import axios from "axios";
import env from "react-dotenv";

const axiosInstance = axios.create({
  baseURL: env.BASE_URL,
  headers: {
    BrowserLang: navigator.language,
  },
});

export default axiosInstance;
