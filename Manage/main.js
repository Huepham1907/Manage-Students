var students = [
    {
      id: 1,
      name: "Hoa Tran",
      age: 21,
      phone: "012956487",
      address: " Hai Ba Trung , Ha Noi",
    },
    {
      id: 2,
      name: "Huy Nguyen",
      age: 31,
      phone: " 0459056432",
      address: " Dao Tan , Ha Noi",
    },
    {
      id: 3,
      name: "Linh Pham",
      age: 25,
      phone: " 0986456633",
      address: " Nguyen Huu Huan , Ha Noi",
    },
    {
      id: 4,
      name: "Linh Pham 2",
      age: 25,
      phone: " 0986456633",
      address: "Nguyen Huu Huan , Ha Noi",
    },
  ];
  let tmpStudentId;
  let editMode = false;
  
  function enableEdit() {
    editMode = true;
  }
  
  function disableEditMode() {
    editMode = false;
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    renderStudent();
  });
  
  function renderStudent() {
    var html = "";
    var lengthStudents = students.length;
  
    for (i = 0; i < lengthStudents; i++) {
      var student = students[i];
      html += `
        <li class="list-item">
          <p>Id: ${student.id}</p>
          <p>Name:  ${student.name}</p>
          <p>Phone: ${student.age}</p>
          <p>Address: ${student.address}</p>
          <button class="btn btn-delete" onclick="onDeleteStudent(${i})">Delete</button>
          <button class="btn btn-edit" onclick="onEditStudent(${i})">Edit</button>
        </li>
      `;
    }
  
    setHTML("#list-student", html);
  }
  
  function getHTML(selector) {
    var element = document.querySelector(selector);
    return element;
  }
  
  function setHTML(selector, value) {
    var element = document.querySelector(selector);
    element.innerHTML = value;
  }
  
  function onEditStudent(index) {
    enableEdit();
    var studentEdit = students[index];
    
    setInputValue('#name', studentEdit.name);
    setInputValue('#age', studentEdit.age);
    setInputValue('#address', studentEdit.address);
    setInputValue('#phone', studentEdit.phone);
  
    setHTML('.btn-create', 'Save');
  
    tmpStudentId = index;
  }
  
  function handleEditStudent() {
    var name = getInputValue("#name");
    var age = getInputValue("#age");
    var phone = getInputValue("#phone");
    var address = getInputValue("#address");
  
    updateStudent(tmpStudentId, {
      name,
      age,
      phone,
      address,
    });
  
    renderStudent();
    resetFormStudent();
    disableEditMode();
    setHTML(".btn.btn-create", "Create");
  }
  
  function updateStudent(index, student) {
    students[index] = student;
  }
  // Create students
  
  function createStudent() {
    if (editMode) {
      handleEditStudent();
    } else {
      postData();
    }
  }
  
  const postData = () => {
    var name = getInputValue("#name");
    var age = getInputValue("#age");
    var address = getInputValue("#address");
    var phone = getInputValue("#phone");
  
    var newStudent = {
      name,
      age,
      address,
      phone,
    };
  
    addStudent(newStudent);
    renderStudent();
    resetFormStudent();
  }
  
  function addStudent(student) {
    students.push(student);
  }
  
  function getInputValue(selector) {
    var inputElement = document.querySelector(selector);
    return inputElement.value;
  }
  
  function setInputValue(selector, value) {
    var inputElement = document.querySelector(selector);
    inputElement.value = value;
  }
  
  function resetFormStudent() {
    setInputValue("#name", "");
    setInputValue("#age", "");
    setInputValue("#address", "");
    setInputValue("#phone", "");
  }
  
  function editStudent(index) {
    var student = student[index];
  
    setInputValue("#name", student.name);
    setInputValue("#age", student.age);
    setInputValue("#address", student.address);
    setInputValue("#phone", student.phone);
  
    editMode = true;
  
    setHTML(".btn.btn-create", "Save");
  
    tmpStudentId = index;
  }
  
  function onDeleteStudent(index) {
    var isDeleted = confirm("Are you sure to delete");
    if (isDeleted) {
      deleteStudent(index);
      renderStudent();
    }
  }
  
  function deleteStudent(index) {
    students.splice(index, 1);
  }
  