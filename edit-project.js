document.getElementById("editForm").addEventListener("submit", function(event) {
    // منع إرسال الفورم بالطريقة الافتراضية علشان نتحكم في العملية
    event.preventDefault();
    
    // جلب الـ ID الجديد للمشروع من الفورم
    var projectId = parseInt(document.getElementById("id").value);
    // جلب الموقع وعدد الساعات مع حذف المسافات الزائدة
    var newLocation = document.getElementById("location").value.trim();
    var newHours = document.getElementById("hours").value.trim();

    // جلب المشاريع المخزنة في localStorage أو إنشاء مصفوفة فارغة لو مفيش
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    // البحث عن المشروع باستخدام الـ ID
    var project = projects.find(function(proj) {
        return proj.id === projectId;
    });

    if (project) {
        // لو المشروع موجود، بنحدث البيانات بتاعته لو فيه حاجات جديدة دخلها المستخدم
        if (newLocation !== "") {
            project.location = newLocation; 
        }
        if (newHours !== "") {
            project.hours = parseInt(newHours); 
        }

        // حفظ البيانات الجديدة في localStorage
        localStorage.setItem('projects', JSON.stringify(projects));
        alert("Project updated successfully!"); // إعلام المستخدم بالنجاح
        
        document.getElementById("editForm").reset(); // مسح البيانات من الفورم
    } else {
        // لو المشروع مش موجود في الـ localStorage
        alert("Project not found!");
    }
});
