var employee = [
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
        performanceRate: "very good",
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
        id: 6,
        name: "Omar",
        salary: 10000,
        performanceRate: "Good",
        age: 18,
        dateOfbirth: "10/10/2002",
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

// دالة لعرض الموظفين اللي عندهم مهارات في البرمجة
function employeeWithcodingSkills() {
    // تصفية الموظفين اللي عندهم مهارات في البرمجة
    var codingEmployees = employee.filter(emp => emp.skills === "coding");

    var tableBody = document.getElementById("coding-skill-body");
    tableBody.innerHTML = ''; // مسح المحتوى القديم في الجدول

    if (codingEmployees.length === 0) {
        // لو مفيش موظفين عندهم مهارات برمجة، نعرض رسالة
        tableBody.innerHTML = '<tr><td colspan="9">No current employees have coding skills</td></tr>';
    } else {
        // لو في موظفين عندهم مهارات برمجة، نعرضهم في الجدول
        codingEmployees.forEach(emp => {
            var row = document.createElement("tr");
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
            `;
            tableBody.appendChild(row);
        });
    }
}

// استدعاء الدالة لعرض الموظفين
employeeWithcodingSkills();
