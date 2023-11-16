var submit = document.getElementById('submit');
var SubjectInput = document.getElementById('Subject');
var DescriptionInput = document.getElementById('Description');
var UserTypesInput = document.getElementById('UserTypes');
var TechnologyUsedInput = document.getElementById('TechnologyUsed');

submit.addEventListener('click', save);

function save(event) {

    var Subject = SubjectInput.value;
    var Description = DescriptionInput.value;
    var UserTypes = UserTypesInput.value;
    var TechnologyUsed = TechnologyUsedInput.value;

    sessionStorage.setItem("Subjectkey", Subject);
    sessionStorage.setItem("Descriptionkey", Description);
    sessionStorage.setItem("UserTypeskey", UserTypes);
    sessionStorage.setItem("TechnologyUsedkey", TechnologyUsed);

}

var Subjectname = sessionStorage.getItem("Subjectkey");
var Description = sessionStorage.getItem("Descriptionkey");
var UserTypes = sessionStorage.getItem("UserTypeskey");
var TechnologyUsed = sessionStorage.getItem("TechnologyUsedkey");

document.getElementById("aSubject").innerText = Subjectname;
document.getElementById("aDescription").innerText = Description;
document.getElementById("aUserTypes").innerText = UserTypes;
document.getElementById("aTechnologyUsed").innerText = TechnologyUsed;
