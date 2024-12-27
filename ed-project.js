var project = [
    {
        id: 100 ,
        name : "Mobile App Launch " ,
        numberOfhours : 6 ,
        projectLocation : "Academy"
    },
    {
        id: 101 ,
        name : "E-commerce Platform Redesign" ,
        numberOfhours : 10 ,
        projectLocation : "PUA"
    },
    {
        id: 102 ,
        name : "PROJECT" ,
        numberOfhours : 8 ,
        projectLocation : "ALEX"
    }
]

// الدالة دي عشان نحدث بيانات المشروع بناءً على اختيارات المستخدم
function updateProject(){
    // هنا بنطلب من المستخدم يدخل رقم الـ id للمشروع اللي عايز يعدل عليه
    var projectId = Number(prompt("Enter the id of the project you would like to delete"))
    // بنبحث عن المشروع باستخدام الـ id
    var projectIndex = project.findIndex(function(project){
        return project.id === projectId
    })

    if(projectIndex != -1){
        // لو المشروع موجود بنعرض للمستخدم الاختيارات اللي يقدر يعدل عليها
        alert("type the number next to what you would like to update")
        var changedDetail = Number(prompt("1-Location , 2-Number of hours , 3-Exit"))
        
        switch (changedDetail) {
            case 1:
                // لو المستخدم اختار تعديل الموقع
                var newLocation = prompt("enter Project's new location")
                project[projectIndex].location = newLocation
                // تحديث الصفحة بإعلام المستخدم
                document.getElementById("x").innerHTML=("location updated.");
                break;

            case 2:
                // لو المستخدم اختار تعديل عدد الساعات
                var newNumberofHours = prompt("enter project's number of hours")
                project[projectIndex].numberOfhours = newNumberofHours
                // تحديث الصفحة بإعلام المستخدم
                document.getElementById("y").innerHTML=("number of hours has been updated.");
                break;

            case 3: 
                // لو المستخدم اختار الخروج من التعديل
                break;

            default:
                // لو المستخدم دخل رقم غير صحيح
                document.getElementById("z").innerHTML=("invailed number");
                return updateProject(); // بنرجع تاني عشان المستخدم يدخل اختيار صحيح
        }
    } else {
        // لو الـ id مش موجود أو غلط
        document.getElementById("c").innerHTML=("Project's id was either not found or incorrect");
    }
}

// نادينا على الدالة عشان يبدأ التحديث
updateProject()
