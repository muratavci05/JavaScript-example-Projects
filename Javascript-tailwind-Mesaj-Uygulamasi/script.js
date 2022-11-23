const formContact=document.getElementById("contact");
const fullName=document.getElementById("fullName");
const message=document.getElementById("message");

formContact.addEventListener("submit",saveData);

// 2..yöntem async fonksiyon >>>

async function saveData (event){
    event.preventDefault();

    let sendMessage=fullName.value;
    let messageContent=message.value;

    //console.log(sendMessage,messageContent);

    const serverResponse = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
              sendMessage:sendMessage,
              messageContent:messageContent,
          }
        ),
      });

        let dataMessage = await serverResponse.json();
        alert("Data recording has been done "+dataMessage.sendMessage+"  Thank-YOU");

 /*
         //**********1. yol fetch post ile **********

    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
            sendMessage:sendMessage,
            messageContent:messageContent
        }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        //alert("Data Successfully Saved",data)
        console.log('Success:', data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });


      */
}