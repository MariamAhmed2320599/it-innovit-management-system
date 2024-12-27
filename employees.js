// var employee=[{id:1,name:mariam ,salary:5000,performance:90}]

// دالة لملء جدول الموظفين من الـ localStorage
function populateEmployeeTable() {
    var tableBody = document.getElementById("employeeTable").querySelector("tbody");
    tableBody.innerHTML = ""; // مسح محتويات الجدول الحالي

    // جلب بيانات الموظفين من localStorage أو استخدام مصفوفة فارغة لو مفيش بيانات
    var employees = JSON.parse(localStorage.getItem('employees')) || [];

    // إضافة صف لكل موظف في الجدول
    employees.forEach(function(emp) {
        var row = tableBody.insertRow();
        // إضافة الخلايا (البيانات) في الصف
        row.insertCell(0).textContent = emp.id;
        row.insertCell(1).textContent = emp.name;
        row.insertCell(2).textContent = emp.salary;
        row.insertCell(3).textContent = emp.performancerate; // يجب التأكد من صحة اسم الخاصية
    });
}

// عند تحميل الصفحة، يتم ملء الجدول بالموظفين
window.onload = function() {
    populateEmployeeTable();
};
