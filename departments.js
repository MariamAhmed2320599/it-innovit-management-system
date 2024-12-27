// جلب الأقسام المحفوظة من Local Storage أو تهيئتها إذا كانت غير موجودة
var departments = JSON.parse(localStorage.getItem('departments')) || [];

// الحصول على العنصر tbody في الجدول
var tableBody = document.getElementById("departmentTable").querySelector("tbody");

// التأكد من وجود بيانات في Local Storage
if (departments.length > 0) {
    // استعراض الأقسام في الجدول
    departments.forEach(function(dep) {
        var row = tableBody.insertRow(); // إنشاء صف جديد في الجدول
        row.insertCell(0).textContent = dep.id; // إدخال الـ ID
        row.insertCell(1).textContent = dep.name; // إدخال اسم القسم
        row.insertCell(2).textContent = dep.location; // إدخال مكان القسم
        row.insertCell(3).textContent = dep.startingDate; // إدخال تاريخ بدء القسم
    });
} else {
    // لو مافيش بيانات، تظهر رسالة توضيحية
    var row = tableBody.insertRow(); // إنشاء صف جديد
    var cell = row.insertCell(0); // إدخال خلية جديدة
    cell.colSpan = 4; // دمج 4 خلايا لتكون خلية واحدة
    cell.textContent = "No departments available."; // عرض رسالة "لا توجد أقسام"
}

console.log("Departments:", departments); // طباعة الأقسام في الـ console
