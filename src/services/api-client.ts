import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/apix',
    params:{
        key:'ef86c8394c754b06b4623a9d11ce8fd2'
    }
})