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