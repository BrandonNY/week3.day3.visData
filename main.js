// num gen
let randomIndex = Math.floor(Math.random() * data.results.length);
// name
const NameHeading = document.getElementById("name");

// pic
const peopleImg = document.querySelector("#pfp");
peopleImg.src = data.results[randomIndex].picture.large;

// button
const randomizerButton = document.getElementById("random_btn");

// phone
const phoneHeading = document.getElementById("phonenum")

// email
const emailHeading = document.getElementById("email")

// DOB
const dobHeading = document.getElementById("birtday")

// address
const addressHeading = document.getElementById("address")

// password
const passwordHeading = document.getElementById("password")

function getpeopleData() {
    // num gen
    randomIndex = Math.floor(Math.random() * data.results.length);
    
    //name
    let randomPerson = data.results[randomIndex].name.first;
    let randomPerson2 = data.results[randomIndex].name.last;
    let randomPerson3 = randomPerson + " " + randomPerson2;
    NameHeading.innerHTML = "Hi my name is " + randomPerson3;
    
    // img
    peopleImg.src = data.results[randomIndex].picture.large;
    
    // phone#
    
    number = data.results[randomIndex].phone;
    phoneHeading.innerHTML = "phone: " + number;

    // email
    email = data.results[randomIndex].email;
    emailHeading.innerHTML ="email: " + email;

    // DOB
    dob = data.results[randomIndex].dob.date;
    dobHeading.innerHTML = "DOB: " + dob;

    // address
    address1 = data.results[randomIndex].location.street.number;
    address2 = data.results[randomIndex].location.street.name;
    address3 = address1 + " " + address2
    addressHeading.innerHTML = "Address: " + address3;

    //password 
    password = data.results[randomIndex].login.password;
    passwordHeading.innerHTML = "Password: " + password;
    



    }
  
  
  randomizerButton.onclick = function (event) {
    event.preventDefault();
    getpeopleData();
  };