/*eslint-env browser*/
    // GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
    let form = document.querySelector('#addForm');
    let empTable = document.querySelector('#employees');
    let empCount = document.querySelector('#empCount');

    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let count = 0;

    // ADD EMPLOYEE
    form.addEventListener('submit', (e) => {
    
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept = document.querySelector('#department').value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let empRow = empTable.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = empRow.insertCell();
    let cellName = empRow.insertCell();
    let cellExt = empRow.insertCell();
    let cellEmail = empRow.insertCell();
    let cellDept = empRow.insertCell();
    let cellDelete = empRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(empID));
    cellName.appendChild(document.createTextNode(empName));
    cellExt.appendChild(document.createTextNode(empExt));
    cellEmail.appendChild(document.createTextNode(empEmail));
    cellDept.appendChild(document.createTextNode(empDept));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);
    
    // RESET THE FORM
    document.querySelector('#addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.value = `(${count})`;

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if(confirm('Do you want to delete this employee?')) {
            empTable.deleteRow(e.target.parentNode.parentNode.rowIndex);
            count--;
            empCount.value = `(${count})`;
        }
    }
});