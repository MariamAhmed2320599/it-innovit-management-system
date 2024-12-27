// هنا بنعرف بيانات الموظفين
var employees = [
    { id: 1, name: "mariam", password: "1234" },
    { id: 2, name: "radwa", password: "5678" },
    { id: 3, name: "abdelrahman", password: "91011" }
];

// لما المستخدم يضغط على زرار الإرسال في فورم الدخول
document.getElementById('loginForm').onsubmit = function() {
    // بنجيب الـ ID والباسورد اللي المستخدم دخلهم
    var inputId = document.getElementById('loginId').value;
    var inputPassword = document.getElementById('loginPassword').value;

    // بنشوف إذا كان في موظف مطابق للـ ID والباسورد
    var validUser = employees.find(emp => emp.id == inputId && emp.password === inputPassword);

    // لو المستخدم صحيح بنحول الصفحة لصفحة الخيارات
    if (validUser) {
      window.location.href = "options.html";   
    return false;
    } else {
    // لو فيه خطأ بنعرض رسالة تحذير
    alert("Invalid ID or Password");
    return false;
    }
};

// دالة لتغيير الباسورد
function resetPassword() {
  // بنجيب الـ ID اللي المستخدم دخلها
  var inputId = document.getElementById('loginId').value;

  // لو المستخدم مش دخل الـ ID بنطلب منه يدخلها
  if (!inputId) {
      alert("Please enter your ID to reset the password.");
      return;
  }

  // بنبحث عن المستخدم باستخدام الـ ID
  var user = employees.find(emp => emp.id == inputId);

  // لو المستخدم موجود بنعرض الباسورد بتاعه
  if (user) {
      alert(`Password for user ${user.name}: ${user.password}`);
  } else {
      // لو الـ ID مش موجود بنعرض رسالة خطأ
      alert("User ID not found!");
  }
}
