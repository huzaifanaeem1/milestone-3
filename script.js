//listing element 
var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var fullNameElement = document.getElementById('fullName');
    var emailElement = document.getElementById('email');
    var ageElement = document.getElementById('age');
    var addressElement = document.getElementById('address');
    var phoneNumberElement = document.getElementById('phoneNumber');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //put out condition
    if (profilePictureInput && fullNameElement && emailElement && ageElement && addressElement && phoneNumberElement && educationElement && experienceElement && skillsElement) {
        var fullName = fullNameElement.value;
        var email = emailElement.value;
        var age = ageElement.value;
        var address = addressElement.value;
        var phoneNumber = phoneNumberElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //profile picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //resume object
        var resumeOutput = "\n    <h2>Resume</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n    <p><strong>FullName:</strong>").concat(fullName, " </p>\n    <p><strong>Email:</strong>").concat(email, " </p>\n    <p><strong>Age:</strong>").concat(age, " </p>\n    <p><strong>Address:</strong>").concat(address, " </p>\n    <p><strong>Phone Number:</strong>").concat(phoneNumber, " </p>\n\n    <h3>Education:</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience:</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p>").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element are missing');
        }
    }
    else {
        console.error('One or more element are missing');
    }
    ;
});
