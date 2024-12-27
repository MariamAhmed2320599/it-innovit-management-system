document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // الحصول على بيانات التعديل المدخلة من المستخدم
    var employeeId = document.getElementById("employeeId").value.trim();
    var newSalary = document.getElementById("salary").value.trim();
    var newPerformance = document.getElementById("performance").value.trim();

    // جلب الموظفين من Local Storage
    var employees = JSON.parse(localStorage.getItem('employees')) || [];

    // العثور على الموظف باستخدام ID
    var employee = employees.find(function(emp) {
        return emp.id === parseInt(employeeId);
    });

    if (employee) {
        // تعديل بيانات الموظف إذا كانت مدخلة
        if (newSalary !== "") {
            employee.salary = parseFloat(newSalary);
        }
        if (newPerformance !== "") {
            employee.performancerate = newPerformance;
        }

        // حفظ الموظفين المحدثين في Local Storage
        localStorage.setItem('employees', JSON.stringify(employees));
        alert("Employee updated successfully!");
        // إعادة تعيين النموذج
        document.querySelector("form").reset();
    } else {
        alert("Employee not found!");
    }
});
