document.getElementById('resumeform')?.addEventListener("submit", function (event){
    event.preventDefault();


//get refference to form elements using threir Ids
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const fullNameElement = document.getElementById('fullName') as HTMLInputElement;

    const emailElement = document.getElementById('email') as HTMLInputElement;

    const ageElement = document.getElementById('age') as HTMLInputElement;

    const addressElement = document.getElementById('address') as HTMLInputElement;

    const phoneNumberElement = document.getElementById('phoneNumber') as HTMLInputElement;

    const educationElement = document.getElementById('education') as HTMLInputElement;

    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    const skillsElement = document.getElementById('skills') as HTMLInputElement;

//check if all form element are present

if (profilePictureInput && 
    fullNameElement && 
    emailElement && 
    ageElement && 
    addressElement && 
    phoneNumberElement && 
    educationElement && 
    experienceElement && 
    skillsElement){

    const fullName = fullNameElement.value;
    const email = emailElement.value;
    const age = ageElement.value;
    const address = addressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    
//profile picture elements
const profilePictureFile =  profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



//resume object
    const resumeOutput = `
    <h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>FullName:</strong>${fullName} </p>
    <p><strong>Email:</strong>${email} </p>
    <p><strong>Age:</strong>${age} </p>
    <p><strong>Address:</strong>${address} </p>
    <p><strong>Phone Number:</strong>${phoneNumber} </p>

    <h3>Education:</h3>
    <p>${education}</p>

    <h3>Experience:</h3>
    <p>${experience}</p>

    <h3>Skills:</h3>
    <p>${skills}</p>
    `;

// resume output    
const resumeOutputElement = document.getElementById('resumeOutput')
 if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
 } else {
    console.error('The resume output element are missing')
 }
 }else{
    console.error('One or more element are missing')
 };

});