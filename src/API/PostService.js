import axios from "axios";

export default class PostService {

    static async sendMail(formData) {
        const response = await axios.post("sendmail.php", {
            body: formData
        })
        return response
    }
}