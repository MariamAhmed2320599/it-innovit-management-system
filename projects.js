window.onload = function() {
    // هنا بنجيب المشاريع من الـ localStorage. لو مفيش بيانات، بنخليها مصفوفة فاضية
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    // بنحدد الـ tableBody اللي هنضيف فيه بيانات المشاريع
    var tableBody = document.querySelector("#projectTable tbody");

    // بنكرر على كل مشروع ونضيفه كصف في الجدول
    projects.forEach(function(project) {
        var row = document.createElement("tr");

        // بنضيف عمود ID لكل مشروع
        var idCell = document.createElement("td");
        idCell.textContent = project.id;
        row.appendChild(idCell);

        // بنضيف عمود الاسم لكل مشروع
        var nameCell = document.createElement("td");
        nameCell.textContent = project.name;
        row.appendChild(nameCell);

        // بنضيف عمود عدد الساعات لكل مشروع
        var hoursCell = document.createElement("td");
        hoursCell.textContent = project.hours;
        row.appendChild(hoursCell);

        // بنضيف عمود المكان لكل مشروع
        var locationCell = document.createElement("td");
        locationCell.textContent = project.location;
        row.appendChild(locationCell);

        // بنضيف الصف للجدول
        tableBody.appendChild(row);
    });
};
