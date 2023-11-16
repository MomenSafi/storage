var submit = document.getElementById('submit');
var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var genderInput = document.getElementById('gender');
var majorInput = document.getElementById('major');
var universityInput = document.getElementById('university');
var languageInputs = document.getElementsByName('language');

submit.addEventListener('click', save);

function save(event) {

    var name = nameInput.value;
    var age = ageInput.value;
    var gender = genderInput.value;
    var major = majorInput.value;
    var university = universityInput.value;
    var selectedLanguages = [];

    for (var i = 0; i < languageInputs.length; i++) {
        if (languageInputs[i].checked) {
            selectedLanguages.push(languageInputs[i].value);
        }
    }

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("major", major);
    localStorage.setItem("university", university);
    localStorage.setItem("languages", JSON.stringify(selectedLanguages));

}






