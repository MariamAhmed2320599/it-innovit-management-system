// دالة لملء اختيارات الفورم بتاع الإسناد من الأقسام والموظفين المخزنين في localStorage
function populateAssignForm() {
    let employees = JSON.parse(localStorage.getItem("employees")) || []; // بنجيب الموظفين
    let departments = JSON.parse(localStorage.getItem("departments")) || []; // بنجيب الأقسام

    let employeeSelect = document.getElementById("employee-select"); // عنصر اختيار الموظفين
    let departmentSelect = document.getElementById("department-select"); // عنصر اختيار الأقسام

    employeeSelect.innerHTML = ''; // بنفضي الاختيارات عشان نضيفها من جديد
    departmentSelect.innerHTML = ''; // نفس الفكرة هنا للأقسام

    // بنضيف كل موظف كخيار في قائمة الاختيار
    employees.forEach(emp => {
        let option = document.createElement("option");
        option.value = emp.id; // قيمة الخيار هي رقم الموظف
        option.textContent = emp.name; // النص اللي هيظهر هو اسم الموظف
        employeeSelect.appendChild(option);
    });

    // بنضيف كل قسم كخيار في قائمة الاختيار
    departments.forEach(dep => {
        let option = document.createElement("option");
        option.value = dep.id; // قيمة الخيار هي رقم القسم
        option.textContent = dep.name; // النص اللي هيظهر هو اسم القسم
        departmentSelect.appendChild(option);
    });
}

// دالة لإسناد موظف لقسم معين
function assignEmployeeToDepartment() {
    let employeeId = parseInt(document.getElementById("employee-select").value, 10); // رقم الموظف
    let departmentId = parseInt(document.getElementById("department-select").value, 10); // رقم القسم

    let employees = JSON.parse(localStorage.getItem("employees")) || []; // بنجيب الموظفين من localStorage
    let employee = employees.find(emp => emp.id === employeeId); // بنلاقي الموظف المطلوب

    if (employee) {
        employee.departmentId = departmentId; // بنضيف رقم القسم للموظف
        localStorage.setItem("employees", JSON.stringify(employees)); // بنحدث البيانات في localStorage
        alert("Employee assigned to department successfully!"); // رسالة تأكيد
    }
}

// بنادي على الدالة عشان الفورم يبقى جاهز بالاختيارات
populateAssignForm();
