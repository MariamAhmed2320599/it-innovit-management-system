// بيانات الموظفين اللي هنشتغل عليها
var employees = [
    {
        id: 1,
        name: "mariam",
        salary: 20000,
        performanceRate: "excellent",
        age: 19,
        dateOfbirth: "10/8/2005",
        gender: "female",
        skills: "communication",
        status: "active"
    },
    {
        id: 2,
        name: "radwe",
        salary: 15000,
        performanceRate: "excellent",
        age: 19,
        dateOfbirth: "10/8/2009",
        gender: "female",
        skills: "marketing",
        status: "active"
    },
    {
        id: 3,
        name: "abdelrahman",
        salary: 10000,
        performanceRate: "Good",
        age: 18,
        dateOfbirth: "10/10/2005",
        gender: "male",
        skills: "coding",
        status: "active"
    },
    {
        id: 4,
        name: "ahmed",
        salary: 7500,
        performanceRate: "Average",
        age: 20,
        dateOfbirth: "10/8/2001",
        gender: "male",
        skills: "marketing",
        status: "active"
    },
    {
        id: 5,
        name: "yasmeen",
        salary: 3000,
        performanceRate: "Bad",
        age: 23,
        dateOfbirth: "10/8/2009",
        gender: "female",
        skills: "communication",
        status: "inactive"
    }
];

// دالة لعرض الموظفين الممتازين
function displayBestEmployees() {
    // فلترة الموظفين اللي تقييمهم "excellent"
    var bestEmployees = employees.filter(emp => emp.performanceRate === "excellent");
    var bestEmployeesBody = document.getElementById("best-employees-body"); // الجسم بتاع الجدول

    // تنظيف الصفوف القديمة لو فيه أي بيانات موجودة
    bestEmployeesBody.innerHTML = "";

    // لو مفيش موظفين تقييمهم "excellent"
    if (bestEmployees.length === 0) {
        bestEmployeesBody.innerHTML = "<tr><td colspan='9'>No excellent employees found.</td></tr>"; // رسالة مفيش بيانات
    } else {
        // عرض الموظفين الممتازين
        bestEmployees.forEach(emp => {
            var row = document.createElement("tr"); // إنشاء صف جديد
            row.innerHTML = `
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.salary}</td>
                <td>${emp.performanceRate}</td>
                <td>${emp.age}</td>
                <td>${emp.dateOfbirth}</td>
                <td>${emp.gender}</td>
                <td>${emp.skills}</td>
                <td>${emp.status}</td>
            `; // إضافة البيانات في الصف
            bestEmployeesBody.appendChild(row); // إضافة الصف للجدول
        });
    }
}

// استدعاء الدالة لعرض البيانات عند تحميل الصفحة
displayBestEmployees();
