var showTable = document.querySelector('.show-table');

table = document.querySelector('table');

showTable.addEventListener('click', function(){
  table.style.display = 'block';
});
showTable.addEventListener('dblclick', function(){
  table.style.display = 'none';
});

fetch('message.json').then((data) =>{
    return data.json();
}).then((data)=>{
    data.users.forEach((item)=>{
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    td1.innerHTML = item.firstName;
    td2.innerHTML = item.phone;
    td3.innerHTML = item.email;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);

});
})
