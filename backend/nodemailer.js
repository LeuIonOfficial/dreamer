import nodemailer from 'nodemailer'



 export const sendMail =  async(mail,subject,message) => {
     const transport = nodemailer.createTransport(
         {
             host: "smtp.mail.ru",
             port:465,
             secure:true,
             auth: {
                 user:"dream_recover@mail.ru",
                 pass:"02j7BMnNFXGntaqtZBze"
             }
         }
     );
     const options = {
         from: "dream_recover@mail.ru",
         to:mail,
         subject:subject,
         text:message
     }
     const info = await transport.sendMail(options)
     console.log("Message sent: %s", info.messageId);
}