import emailjs from 'emailjs-com';

export const sendContactForm = async(req, res) => {
    const { userName, userEmail, messageContent } = req.body
    const emailTemplateParams = {
        user_name: userName,
        user_email: userEmail,
        message: messageContent,
        contact_number: "123"
    }

    try {
        const response = await emailjs.send("contact_form_service","contact_form", emailTemplateParams) 
        console.log(response)
        res.send(response)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    // const data = {
    //     service_id: 'contact_form_service',
    //     template_id: 'contact_form',
    //     user_id: 'user_Vs8FqkdKUI8bGyror2467',
    //     template_params: emailTemplateParams,
    //     accessToken: "d19facefe097acf51c8a0decd0e1f80b"
    // };
