// لما الفورم يتعمله submit، هنمنع الريلود عشان نشتغل على البيانات
document.getElementById("projectForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // بناخد بيانات المشروع من الفورم
    var projectId = Number(document.getElementById("id").value); // رقم المشروع
    var projectName = document.getElementById("projectName").value; // اسم المشروع
    var numberOfHours = Number(document.getElementById("numberOfHours").value); // عدد الساعات
    var projectLocation = document.getElementById("projectLocation").value; // مكان المشروع

    // بنجيب المشاريع القديمة من localStorage أو بنبدأ array جديد
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    // بنحضر بيانات المشروع الجديد في object
    var newProject = {
        id: projectId,
        name: projectName,
        hours: numberOfHours,
        location: projectLocation
    };

    // بنضيف المشروع الجديد للمشاريع القديمة
    projects.push(newProject);

    // بنرجع نخزن البيانات كلها في localStorage
    localStorage.setItem('projects', JSON.stringify(projects));

    // بنعرض رسالة في الكونسول للتأكيد
    console.log("Project added successfully!");

    // بنفضي الفورم عشان المستخدم يدخل بيانات جديدة
    document.getElementById("projectForm").reset();
});
