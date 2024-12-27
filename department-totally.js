// دالة لحساب وعرض إجمالي الرواتب حسب الأقسام
function calculateTotalSalaryByDepartment() {
    // جلب الموظفين والأقسام من الـ localStorage
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let departments = JSON.parse(localStorage.getItem("departments")) || [];
    
    // تحديد الـ div لعرض النتائج
    let resultDiv = document.getElementById("salary-result");

    // مسح النتائج القديمة
    resultDiv.innerHTML = '';

    // التكرار على الأقسام
    departments.forEach(dep => {
        // حساب إجمالي الرواتب لكل قسم
        let totalSalary = employees
            .filter(emp => emp.departmentId == dep.id) // فلترة الموظفين حسب الـ departmentId
            .reduce((sum, emp) => sum + (emp.salary || 0), 0); // إضافة الرواتب مع التأكد من أن القيمة عدد

        // إنشاء div جديد لعرض النتيجة
        let div = document.createElement("div");
        div.textContent = `Total salary for ${dep.name}: ${totalSalary}`; // عرض النتيجة
        resultDiv.appendChild(div); // إضافة النتيجة للـ div
    });
}

// استدعاء الدالة لحساب وعرض النتائج
calculateTotalSalaryByDepartment();
