// هنا الفورم الخاص بحذف موظف
document.getElementById("deleteEmployeeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الريلود التلقائي لما تضغط على الزرار

    // جلب الـ ID الخاص بالموظف وتحويله لرقم
    var employeeId = parseInt(document.getElementById("employee-id").value);

    // جلب قائمة الموظفين المخزنة في الـ localStorage
    var employees = JSON.parse(localStorage.getItem('employees')) || [];

    // البحث عن الموظف بالـ ID
    var index = employees.findIndex(function(emp) {
        return emp.id === employeeId; // مقارنة الـ ID بالموظفين
    });

    // لو الموظف موجود يتم حذفه
    if (index !== -1) {
        employees.splice(index, 1); // حذف الموظف من المصفوفة
        localStorage.setItem('employees', JSON.stringify(employees)); // تحديث البيانات في الـ localStorage
        alert("Employee deleted successfully!"); // رسالة تأكيد الحذف
        document.getElementById("employee-id").value = ''; // تفريغ الحقل
        window.location.reload(); // تحديث الصفحة لعرض التعديلات
    } else {
        alert("Employee not found!"); // لو الـ ID مش موجود
    }
});
