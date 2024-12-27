// عندنا هنا فورم لحذف قسم
document.getElementById("deleteDepartmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الريلود التلقائي عند الضغط على الزرار

    // جلب الـ ID اللي المستخدم دخله
    var departmentId = document.getElementById("department-id").value.trim();

    // لو الـ ID فاضي يطلع رسالة خطأ
    if (departmentId === "") {
        alert("Please enter a valid Department ID."); // رسالة إن الحقل مطلوب
        return;
    }

    // جلب الأقسام اللي موجودة في الـ localStorage
    var departments = JSON.parse(localStorage.getItem('departments')) || [];

    // البحث عن القسم بالـ ID المدخل
    var index = departments.findIndex(function(dep) {
        return dep.id === departmentId; // مقارنة الـ ID مع الأقسام
    });

    // لو القسم موجود، يتم حذفه
    if (index !== -1) {
        departments.splice(index, 1); // حذف القسم من المصفوفة

        localStorage.setItem('departments', JSON.stringify(departments)); // تحديث الأقسام في الـ localStorage
        alert("Department deleted successfully!"); // رسالة نجاح العملية

        document.getElementById("department-id").value = ''; // تفريغ الحقل

        window.location.reload(); // تحديث الصفحة لعرض البيانات الجديدة
    } else {
        alert("Department not found!"); // لو الـ ID مش موجود
    }
});
