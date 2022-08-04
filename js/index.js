const students = [
  {
    firstName: "Shoxrux",
    lastName: "Raimov",
    age: 25,
    group: "Web dasturlash",
    status: "kontrakt",
  },
];
let btn=document.querySelector('#addBtn');

function drawFunction() {
    document.querySelector("tbody").innerHTML='';
  for (let i = 0; i < students.length; i++) {
    document.querySelector("tbody").innerHTML += `
    <tr>
    <td>${i + 1}</td>
    <td>${students[i].firstName}</td>
    <td>${students[i].lastName}</td>
    <td>${students[i].age}</td>
    <td>${students[i].group}</td>
    <td>${students[i].status}</td>
    <td>
    <button class="btn btn-danger btn-sm">delete<button>
    <button class="btn btn-warning btn-sm ms-2">edit<button></td>
    </tr>   
    `;
  }
}
drawFunction();

btn.addEventListener('click',addStudent);
function addStudent(){
let firstName=document.forms['studentForm']['firstName'].value;
let lastName=document.forms['studentForm']['lastName'].value;
let age=document.forms['studentForm']['age'].value;
let group=document.forms['studentForm']['group'].value;
let status=document.forms['studentForm']['status'].value;

if (firstName.trim().length>0 && lastName.trim().length>0 && age.trim().length>0 && group.trim().length && status!=='Tanlang'){

    let newObj={
        firstName,
        lastName,
        age,
        group,
        status,
    };
    students.push(newObj);
    drawFunction();
    document.forms['studentForm'].reset();
    
}
else{
    alert("Fo'rmani to'liq to'ldiring")
}
}