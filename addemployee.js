// لما الفورم يتعمله submit، بنمنع الريلود عشان نشتغل على البيانات
document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // هنا بناخد البيانات اللي المستخدم دخلها
    var employeeId = Number(document.getElementById("id").value); // رقم الموظف
    var employeeName = document.getElementById("name").value; // اسم الموظف
    var employeeSalary = Number(document.getElementById("salary").value); // مرتب الموظف
    var employeePerformancerate = document.getElementById("performancerate").value; // تقييم الأداء
    var employeeAge = Number(document.getElementById("age").value); // سن الموظف
    var employeeDateOfbirth = document.getElementById("dateOfBirth").value; // تاريخ الميلاد
    var employeeGender = document.getElementById("gender").value; // نوع الموظف (ذكر/أنثى)
    var employeeSkills = document.getElementById("skills").value; // المهارات
    var employeeStatus = document.getElementById("status").value; // حالة الموظف (نشط/غير نشط)

    // بنجيب البيانات القديمة من localStorage أو بنبدأ array جديد
    var employees = JSON.parse(localStorage.getItem('employees')) || [];

    // بنجهز بيانات الموظف الجديد في object
    var newEmployee = {
        id: employeeId,
        name: employeeName,
        salary: employeeSalary,
        performancerate: employeePerformancerate,
        age: employeeAge,
        dateOfbirth: employeeDateOfbirth,
        gender: employeeGender,
        skills: employeeSkills,
        status: employeeStatus
    };

    // بنضيف الموظف الجديد للبيانات القديمة
    employees.push(newEmployee);

    // بنخزن كل البيانات في localStorage
    localStorage.setItem('employees', JSON.stringify(employees));

    // رسالة في الكونسول للتأكيد إن الإضافة تمت
    console.log("Employee added successfully!");

    // بنفضي الفورم عشان المستخدم يدخل بيانات جديدة
    document.getElementById("employeeForm").reset();
});
