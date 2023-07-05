import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user:"cltb.cecleavictor@gmail.com",
            pass:"Bitociki"
        }
    }
);
const options = {
    from: "cltb.cecleavictor@gmail.com",
    to:"cecleavictor@gmail.com",
    subject:"Fa lucreaza?",
    text:"Da hui znaiet daca vezi asta insemna ca da"
}
transport.sendMail(options,(err,info)=> {
    if (err) {
        console.log(err)
        return;
    }
    console.log(`Send:${info.response}`)
})