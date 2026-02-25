function sendComment(event){
    event.preventDefault();

    let commentParms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("service_21mp89a","template_s5empzb",commentParms)
    .then(alert("Comment Sent!!!"));

}
function sendEmail(event){
    event.preventDefault();

    let mailParms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("service_21mp89a","template_7pk5e1q",mailParms)
    .then(alert("Email Sent!!!"));

}
/*function sendMail(){
    let mailParms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("service_21mp89a","template_7pk5e1q",mailParms).then(alert("Email Sent!!!"));

};*/