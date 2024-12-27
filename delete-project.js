// هنا الفورم الخاص بحذف مشروع
document.getElementById("deleteProjectForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع الريلود التلقائي عند الضغط على الزرار

    // جلب الـ ID الخاص بالمشروع وتحويله لرقم
    var projectId = parseInt(document.getElementById("project-id").value);

    // جلب قائمة المشاريع المخزنة في الـ localStorage
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    // البحث عن المشروع بالـ ID
    var index = projects.findIndex(function(proj) {
        return proj.id === projectId; // مقارنة الـ ID بالمشاريع
    });

    // لو المشروع موجود يتم حذفه
    if (index !== -1) {
        projects.splice(index, 1); // حذف المشروع من المصفوفة
        localStorage.setItem('projects', JSON.stringify(projects)); // تحديث البيانات في الـ localStorage
        alert("Project deleted successfully!"); // رسالة تأكيد الحذف
        document.getElementById("project-id").value = ''; // تفريغ الحقل

        window.location.reload(); // تحديث الصفحة لعرض التعديلات
    } else {
        alert("Project not found!"); // لو الـ ID مش موجود
    }
});
