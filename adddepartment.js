// لما الفورم يتعمله submit، هنمنع الريلود عشان ننفذ الكود اللي جاي
document.getElementById('departmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // هنا بنجمع البيانات اللي المستخدم دخلها في الفورم ونحطها في object
    const department = {
        id: document.getElementById('id').value, // رقم القسم
        name: document.getElementById('name').value, // اسم القسم
        location: document.getElementById('location').value, // مكان القسم
        startingDate: document.getElementById('startingDate').value // تاريخ بداية القسم
    };

    // بنجيب الأقسام القديمة من localStorage لو موجودة، لو مش موجودة بنرجع array فاضي
    let departments = JSON.parse(localStorage.getItem('departments')) || [];

    // بنضيف القسم الجديد للأقسام القديمة
    departments.push(department);

    // بنرجع نخزن الأقسام كلها تاني في localStorage
    localStorage.setItem('departments', JSON.stringify(departments));

    // بنعرض رسالة في الكونسول إن القسم اتضاف
    console.log('Department added:', department);

    // بنعرض رسالة تأكيد للمستخدم
    alert('Department ' + department.name + ' added successfully!');

    // بنعمل ريست لكل بيانات الفورم
    document.getElementById('departmentForm').reset();
});
