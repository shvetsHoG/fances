import axios from "axios";

export default class PostService {

    static async sendMail(formData) {
        return await axios.post("https://zaborylipetsk.ru/public/api/sendmail.php", formData)
    }
}