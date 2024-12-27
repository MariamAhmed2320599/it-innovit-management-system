// هنا بنعرف بيانات الموظفين
var employee = [
    { id: 1, name: "mariam", salary: 20000, performanceRate: "excellent", age: 19, dateOfbirth: "10/8/2005", gender: "female", skills: "communication", status: "active" },
    { id: 2, name: "Omar", salary: 20000, performanceRate: "excellent", age: 19, dateOfbirth: "10/8/2005", gender: "male", skills: "communication", status: "active" },
    { id: 3, name: "radwe", salary: 15000, performanceRate: "very good", age: 19, dateOfbirth: "10/8/2009", gender: "female", skills: "marketing", status: "active" },
    { id: 4, name: "abdelrahman", salary: 10000, performanceRate: "Good", age: 18, dateOfbirth: "10/10/2005", gender: "male", skills: "coding", status: "active" },
    { id: 5, name: "ahmed", salary: 7500, performanceRate: "Average", age: 20, dateOfbirth: "10/8/2001", gender: "male", skills: "marketing", status: "active" },
    { id: 6, name: "yasmeen", salary: 3000, performanceRate: "Bad", age: 23, dateOfbirth: "10/8/2009", gender: "female", skills: "communication", status: "inactive" }
];

// دالة بتجيب الموظفين الذكور فقط
function getMaleEmployees() {
    // بنعمل فلترة للموظفين علشان نجيب الذكور بس
    var maleEmployees = employee.filter(emp => emp.gender === "male");

    // بنحدد الـ tableBody اللي هنعرض فيه البيانات
    var tableBody = document.getElementById("x");

    // بنكرر على كل موظف ذكر ونضيفه في الجدول
    maleEmployees.forEach(emp => {
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

        // بنضيف الصف الجديد في الجدول
        tableBody.innerHTML += row;
    });
}

// استدعاء الدالة لعرض الموظفين الذكور
getMaleEmployees();
