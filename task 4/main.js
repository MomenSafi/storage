var form = document.getElementById('myForm');
var table = document.getElementById('myTable');

document.getElementById('clickme').addEventListener('click', function(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    var showname = document.getElementById('showname');
    var showemail = document.getElementById('showemail');
    var shownumber = document.getElementById('shownumber');

    showname.textContent = name;
    showemail.textContent = email;
    shownumber.textContent = mobile;

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    td1.innerHTML = name;
    td2.innerHTML = email;
    td3.innerHTML = mobile;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
    
    form.reset();
})
