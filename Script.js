let id = 1;

function addAssignment(){

let student=document.getElementById("student").value;
let subject=document.getElementById("subject").value;
let title=document.getElementById("title").value;
let date=document.getElementById("date").value;

if(student==""||subject==""||title==""||date==""){
alert("Fill all fields");
return;
}

let table=document.getElementById("table");

let row=table.insertRow();

row.insertCell(0).innerHTML=id++;
row.insertCell(1).innerHTML=student;
row.insertCell(2).innerHTML=subject;
row.insertCell(3).innerHTML=title;
row.insertCell(4).innerHTML=date;

let status=row.insertCell(5);

status.innerHTML=
`<select>
<option>Pending</option>
<option>Submitted</option>
<option>Late</option>
</select>`;

row.insertCell(6).innerHTML=
"<button onclick='deleteRow(this)'>Delete</button>";

document.getElementById("student").value="";
document.getElementById("subject").value="";
document.getElementById("title").value="";
document.getElementById("date").value="";
}

function deleteRow(btn){
btn.parentNode.parentNode.remove();
}
