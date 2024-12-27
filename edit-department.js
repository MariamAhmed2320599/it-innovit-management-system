document.querySelector("form").addEventListener("submit", function(event) {
    // منع إرسال الفورم بالطريقة الافتراضية علشان نتحكم في العملية
    event.preventDefault();
    
    // طلب ID القسم اللي عايز المستخدم يعدل عليه
    var departmentId = prompt("Enter the Department ID you want to edit:");
    
    // الحصول على البيانات الجديدة من الفورم
    var newStartDate = document.getElementById("start-date").value;
    var newLocation = document.getElementById("location").value;
    
    // جلب الأقسام المخزنة في localStorage أو إنشاء مصفوفة فارغة لو مفيش
    var departments = JSON.parse(localStorage.getItem('departments')) || [];

    // البحث عن القسم اللي ID بتاعه يساوي الـ ID المدخل
    var department = departments.find(function(dep) {
        return dep.id === departmentId;
    });

    if (department) {
        // لو القسم موجود، بنحدث البيانات بتاعته لو فيه حاجات جديدة دخلها المستخدم
        if (newStartDate) {
            department.startingDate = newStartDate;
        }
        if (newLocation) {
            department.location = newLocation;
        }

        // حفظ البيانات الجديدة في localStorage
        localStorage.setItem('departments', JSON.stringify(departments));
        alert("Department updated successfully!"); // إعلام المستخدم بالنجاح
        document.querySelector("form").reset(); // مسح البيانات من الفورم
    } else {
        // لو القسم مش موجود في الـ localStorage
        alert("Department not found!");
    }
});
