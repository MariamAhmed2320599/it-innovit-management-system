var employee = [
    { id: 1, name: "mariam", salary: 20000, performanceRate: "excellent", age: 19, dateOfbirth: "10/8/2005", gender: "female", skills: "communication", status: "active" },
    { id: 2, name: "radwa", salary: 15000, performanceRate: "very good", age: 19, dateOfbirth: "10/8/2009", gender: "female", skills: "marketing", status: "active" },
    { id: 3, name: "abdelrahman", salary: 10000, performanceRate: "Good", age: 18, dateOfbirth: "10/10/2005", gender: "male", skills: "coding", status: "active" },
    { id: 4, name: "ahmed", salary: 7500, performanceRate: "Average", age: 20, dateOfbirth: "10/8/2001", gender: "male", skills: "marketing", status: "active" },
    { id: 5, name: "yasmeen", salary: 3000, performanceRate: "Bad", age: 23, dateOfbirth: "10/8/2009", gender: "female", skills: "communication", status: "inactive" }
];

// دالة للحصول على الموظفين اللي رواتبهم أعلى من المتوسط
function getEmployeesWithHigherSalary() {
    var totalSalary = 0;
    // حساب مجموع الرواتب لجميع الموظفين
    for (var i = 0; i < employee.length; i++) {
        totalSalary += employee[i].salary;
    }

    // حساب متوسط الراتب
    var averageSalary = totalSalary / employee.length;

    // تصفية الموظفين اللي رواتبهم أعلى من المتوسط
    var higherSalaryEmployees = employee.filter(emp => emp.salary > averageSalary);

    var tableBody = document.getElementById("x");
    // إضافة بيانات الموظفين في الجدول
    higherSalaryEmployees.forEach(emp => {
        var row = `<tr>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            <td>${emp.performanceRate}</td>
            <td>${emp.age}</td>
            <td>${emp.dateOfbirth}</td>
            <td>${emp.gender}</td>
            <td>${emp.skills}</td>
            <td>${emp.status}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// استدعاء الدالة لعرض الموظفين
getEmployeesWithHigherSalary();
