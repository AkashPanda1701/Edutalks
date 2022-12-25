import nodeMailer from 'nodemailer';
const sendMail = async (to, name,code) => {
    console.log("Sending mail");
    console.log(to);
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nixturindia@gmail.com',
            pass: 'vbnlmhkjquthcqso'
        }
    });
    const mailOptions = {
        from: 'nixturindia@gmail.com',
        to: to,
        subject: 'Welcome to Edutalks',
        html: typeof(code) === 'number' ?`<h1>Hi ${name},</h1>
        <h2>Welcome to Edutalks</h2>
        
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
            </div>
            <div style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">
                <a href="" style="font-size:1.4em;color: #f4f9fc;text-decoration:none;font-weight:600">
                Hey we happy to inform you that you got a subscription of : <span style="color: #f4f9fc;text-decoration:none;font-weight:600">${code}</span>
                ${code === 1 ? 'Month. Beacuse a user signed up using your referal code.' : 'Months'}
                </a>

                ${ code === 1 ? `<p>Earn more by sharing your referal code.</p>` : ` <p>Thank you for buying our subscription.</p>`}
            </div>
             
              <p style="font-size:0.9em;color: #1f54f5;text-decoration:none;font-weight:600">Regards,<br />Hackathon & Team</p>
              <hr style="border:none;border-top:1px solid #eee" />
                <p style="font-size:0.8em;color:#777">You are receiving this email because you bought our subscription.</p>
            </div>
          </div>`  :  `<h1>Hi ${name},</h1>
        <h2>Welcome to Edutalks</h2>
        
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
            </div>
            <div style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">
                <a href="" style="font-size:1.4em;color: #f4f9fc;text-decoration:none;font-weight:600">
                Here is your Refferal Code : <span style="color: #f4f9fc;text-decoration:none;font-weight:600">${code}</span>
                </a>

                 <p>Thank you for registering with us.</p>
            </div>
             
              <p style="font-size:0.9em;color: #1f54f5;text-decoration:none;font-weight:600">Regards,<br />Hackathon & Team</p>
              <hr style="border:none;border-top:1px solid #eee" />
                <p style="font-size:0.8em;color:#777">You are receiving this email because you have registered with us.</p>
            </div>
          </div>`
        

    }
    await transporter.sendMail(mailOptions);
    console.log("Mail sent");
}


export default sendMail;