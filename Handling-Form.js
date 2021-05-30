const BASE_URL="https://app.cabtreks.com/api/contact";
const form = document.querySelector('form');


const handleSubmit = async (e) => {
  e.preventDefault();

  $("#missing-fields-error").hide();
  $("#email-invalid-error").hide();
  $("#form-submission-failure").hide();
  $("#form-submitted").hide();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const data =  {
    email: email,
    message: message,
    name: name
};

if(data.name.trim() == "" || data.email.trim() == "" || data.message.trim() == "") {
  $("#missing-fields-error").show();
  return;
}
else if(!/(.+)@(.+)\.(.+)/.test(data.email)) {
  $("#email-invalid-error").show();
  return;
}

  await submitMessage(data);  ;
};

const submitMessage = async (data) => {
  try{
  let config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'      }
  }
  
  axios.post(BASE_URL, JSON.stringify(data),config)
  .then((response) => {
    console.log(response);
    $("#form-submitted").show();
  }, (error) => {
    $("#form-submission-failure").show();
    console.log(error);
  });
}catch(error){
  $("#form-submission-failure").show();
  console.log(error);

}
    
}

form.addEventListener('submit', handleSubmit);

      
    
