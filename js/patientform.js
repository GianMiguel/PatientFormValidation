const form = document.getElementById('form');
const firstName = document.getElementById('fName');
const middleName = document.getElementById('mName');
const lastName = document.getElementById('lName');
const address = document.getElementById('address');
const birthDate = document.getElementById('bdate');
const placeOB = document.getElementById('pob');
const contact = document.getElementById('contact');
const email = document.getElementById('email');

let nameOutput = document.getElementById('nameOutput');
let addressOutput = document.getElementById('addressOutput');
let birthdateOutput = document.getElementById('birthdateOutput');
let pobOutput = document.getElementById('pobOutput');
let genderOutput = document.getElementById('genderOutput');
let contactOutput = document.getElementById('contactOutput');
let emailOutput = document.getElementById('emailOutput');
let medHisOutput = document.getElementById('medHisOutput');
let symptomsOutput = document.getElementById('symptomsOutput');
let medicationOutput = document.getElementById('medicationOutput');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    nameInput();
    addressInput();
    birthDateInput();
    placeOBInput();
    genderBtn();
    contactInput();
    emailInput();

    selectedMedHistory();
    selectedSymptoms();
    // medication();

    modalDisplay();
})

nameInput = () => {
    let firstNameValue = firstName.value.trim();
    let middleNameValue = middleName.value.trim();
    let lastNameValue = lastName.value.trim();

// for First Name
    if (firstNameValue === '') {
        errorFor(firstName, 'Please enter a first name')
    } else {
        successFor(firstName);
    }
// for Last Name
    if (lastNameValue === '') {
        errorFor(lastName, 'Please enter a last name')
    } else {
        successFor(lastName);
        nameOutput.innerHTML = `${firstNameValue} ${middleNameValue} ${lastNameValue}`
    }
}

addressInput = () => {
    let addressValue = address.value.trim();

// for Address
    if (addressValue === ''){
        errorFor(address, 'Please enter a current address')
    } else {
        successFor(address);
        addressOutput.innerHTML = `${addressValue}`;
    }
}

birthDateInput = () => {
    let birthDateValue = birthDate.value;

    let userBirthDate = new Date (birthDateValue); // get the full date of user
    let userYear = userBirthDate.getFullYear(); // get only the year

    let today = new Date (); // todays date
    let todayYear = today.getFullYear(); // todays year
    let age3 = todayYear - 3; // trim 3 years from today (2019)
    let age100 = todayYear - 100; // trim 100 years from today (1922)
    
    if (birthDateValue == '') {
        errorFor(birthDate, 'Please enter a Birthdate')
      } else if (userYear > age3) {
        errorFor(birthDate, 'You have to be older than 3')
      } else if (userYear < age100) {
        errorFor(birthDate, 'You have to be younger than 100')
      } else {
        successFor(birthDate);
        birthdateOutput.innerHTML = `${birthDateValue}`;
    }
}

placeOBInput = () => {
    let placeOBValue = placeOB.value.trim();

    // for Place of Birth
    if (placeOBValue === ''){
        errorFor(placeOB, 'Please enter a place of birth')
    } else {
        successFor(placeOB);
        pobOutput.innerHTML = `${placeOBValue}`;
    }
}

genderBtn = () => {
    let selectedGender = document.querySelector( 'input[name="gender"]:checked')
    genderOutput.innerHTML = `${selectedGender.value}`
}

contactInput = () => {
    let contactValue = contact.value;
    let phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/; // regular expression only for 11numbers

    // for Contact Number
    if (contactValue === ''){
        errorFor(contact, 'Please enter a mobile number')
    } else if (phoneno.test(contactValue)) {
        successFor(contact);
        contactOutput.innerHTML = `${contactValue}`;
    } else {
        errorFor(contact, 'Invalid Mobile Number')
    }  
}

emailInput = () => {
    let emailValue = email.value.trim();
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // regular expression for email
        
// for Email Address
    if (emailValue === ''){
        errorFor(email, 'Email Address is required')
    } else if (emailValue.match(emailRegex)){
        successFor(email);
        emailOutput.innerHTML = `${emailValue}`;
    } else {
        errorFor(email, 'Invalid Email Address')
    }
}

errorFor = (input, message) => { 
    let inputControl = input.parentElement;
    let small = inputControl.querySelector('small');

    inputControl.className = 'input-control error';
    small.innerHTML = message;
}

successFor = (input) => {
    let inputControl = input.parentElement;
    inputControl.className = 'input-control';
}


enableTextMed = () => {
    let medYes = document.getElementById('medYes');
    let textMed = document.getElementById('textMed');
    textMed.disabled = medYes.checked ? false : true;
}

selectedMedHistory = () => {
    let checkBoxes = document.querySelectorAll('input[name="medHistory"]:checked');
    let medHistory = [];
    for (let i in checkBoxes){
        if (checkBoxes[i].checked){
            medHistory.push(checkBoxes[i].value)
        } 
    }
    medHisOutput.innerHTML = `${medHistory}`
}

let symptomsSelect = document.querySelector('#symptoms')

selectedSymptoms = () => {
    let selectedValues = [...symptomsSelect.options]
            .filter(option => option.selected)
            .map(option => option.text);
        
            symptomsOutput.innerHTML = `${selectedValues}`;
}

// Modal

const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modalBtn')
const closeBtn = document.getElementsByClassName('close')[0];


modalDisplay = () => {
    modalBtn.onclick = () => {
        modal.style.display = "block";
    }

    closeBtn.onclick = () =>  {
        modal.style.display = "none";
      }

    window.onclick = (e) =>  {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      }
}
