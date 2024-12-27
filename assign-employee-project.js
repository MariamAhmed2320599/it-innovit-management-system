// دالة لملء اختيارات الفورم بتاع الإسناد بين الموظفين والمشاريع المخزنين في localStorage
function populateProjectForm() {
    let employees = JSON.parse(localStorage.getItem("employees")) || []; // بنجيب الموظفين
    let projects = JSON.parse(localStorage.getItem("projects")) || []; // بنجيب المشاريع

    let employeeSelect = document.getElementById("employee-select-project"); // عنصر اختيار الموظفين
    let projectSelect = document.getElementById("project-select"); // عنصر اختيار المشاريع

    employeeSelect.innerHTML = ''; // بنفضي الاختيارات عشان نضيفها من جديد
    projectSelect.innerHTML = ''; // نفس الفكرة هنا للمشاريع

    // بنضيف كل موظف كخيار في قائمة الاختيار
    employees.forEach(emp => {
        let option = document.createElement("option");
        option.value = emp.id; // قيمة الخيار هي رقم الموظف
        option.textContent = emp.name; // النص اللي هيظهر هو اسم الموظف
        employeeSelect.appendChild(option);
    });

    // بنضيف كل مشروع كخيار في قائمة الاختيار
    projects.forEach(proj => {
        let option = document.createElement("option");
        option.value = proj.id; // قيمة الخيار هي رقم المشروع
        option.textContent = proj.name; // النص اللي هيظهر هو اسم المشروع
        projectSelect.appendChild(option);
    });
}

// دالة لإسناد موظف لمشروع معين
function assignEmployeeToProject() {
    let employeeId = parseInt(document.getElementById("employee-select-project").value, 10); // رقم الموظف
    let projectId = parseInt(document.getElementById("project-select").value, 10); // رقم المشروع

    let employees = JSON.parse(localStorage.getItem("employees")) || []; // بنجيب الموظفين من localStorage
    let employee = employees.find(emp => emp.id === employeeId); // بنلاقي الموظف المطلوب

    if (employee) {
        employee.projectId = projectId; // بنضيف رقم المشروع للموظف
        localStorage.setItem("employees", JSON.stringify(employees)); // بنحدث البيانات في localStorage
        alert("Employee assigned to project successfully!"); // رسالة تأكيد
    }
}

// بنادي على الدالة عشان الفورم يبقى جاهز بالاختيارات
populateProjectForm();
