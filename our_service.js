//  الي هتظهر للمستخدم العادس لم يجي يختار الخدماتoptions
const services = [
  {
    icon: "fas fa-code",
    title: "Web Development",
    description: "Build responsive and dynamic websites tailored to your needs.",
    options: ["Frontend", "Backend", "Full-stack"]
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Apps",
    description: "Create user-friendly mobile applications for Android and iOS.",
    options: ["Android", "iOS", "Cross-platform"]
  },
  {
    icon: "fas fa-gamepad",
    title: "Game Development",
    description: "Design and develop immersive gaming experiences.",
    options: ["2D", "3D", "AR/VR"]
  },
  {
    icon: "fas fa-brain",
    title: "AI Solutions",
    description: "Implement AI-powered solutions to enhance your business processes.",
    options: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: "fas fa-tools",
    title: "IT Consultancy",
    description: "Expert advice and strategies for your IT infrastructure.",
    options: ["Cloud Services", "Network Security", "System Integration"]
  }
];

// الكود المستخدم لعمل البطاقات للخدمات بشكل ديناميكي 
//  الحاوية التي ستُضاف إليها البطاقات
const servicesContainer = document.querySelector(".services-container");
//  بيتم تكرار العناصر في المصوفه حيث تحتوي كل خدمه علي 
// icon: أيقونة تمثل الخدمة.
// title: اسم الخدمة.
// description: وصف الخدمة.

services.forEach((service) => {
  const serviceCard = document.createElement("div");
  serviceCard.classList.add("service-card");

  serviceCard.innerHTML = `
    <div class="service-icon">
      <i class="${service.icon}"></i>
    </div>
    <div class="service-title">${service.title}</div>
    <div class="service-description">${service.description}</div>
    <button class="apply-btn">Apply Now</button>
  `;
//  اضافه حدث event listener لزر apply now
// يحدد الزر الموجود داخل البطاقه بيضيف حدث عند النقر علي click
// showoptions (service) بيتم استدعاء الداله 
//  و بيتم تمرير البيانات الخدمه كمعامل للداله 
  serviceCard.querySelector(".apply-btn").addEventListener("click", () => {
    showOptions(service);
  });
// يضيف البطاقة الجديدة (العنصر <div class="service-card">) إلى العنصر servicesContainer المحدد سابقًا في الكود.

  servicesContainer.appendChild(serviceCard);
});
//  النموذج الديناميكي لتظهر للمستخدم بيحث يقوم بدخل الطلب الخاص بي 
//  النموذج بيحتوي علي عنوان يوضح اسم الخدمه 
// قايمه منسدله للاختيار 
// ازرار للتحكم 
//  بيتم عرض كل نموذج بشكل مخصص لكل خدمه بناء علي بياناتها
function showOptions(service) {
  const optionsForm = document.createElement("div");
  optionsForm.classList.add("options-form");

  optionsForm.innerHTML = `
    <div class="form-content">
      <div class="form-header">
        <h3>Apply for ${service.title}</h3>
        <button class="close-form">&times;</button>
      </div>
      <form>
        <label for="service-options">Choose an option:</label>
        <select id="service-options">
          ${service.options
            .map((option) => `<option value="${option}">${option}</option>`)
            .join("")}
        </select>
        <label for="description">Description:</label>
        <textarea id="description" placeholder="Add any details here..."></textarea>
        <div class="form-buttons">
          <button type="submit" class="submit-btn">Submit</button>
          <button type="button" class="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  `;
  // يتم إضافة النموذج (optionsForm) إلى الصفحة كعنصر فرعي داخل عنصر <body>.

  document.body.appendChild(optionsForm);
//  وظيفه تغلاق النموذج 
  const closeForm = () => {
    // يقوم بحذف النموذج من الصفحه 
    optionsForm.remove();
  };
// مستمعات لاحداث لاغلاق النموذج 
  optionsForm.querySelector(".close-form").addEventListener("click", closeForm);
  optionsForm.querySelector(".cancel-btn").addEventListener("click", closeForm);
// ارسال النموذج
// يمنع اعادة تحمبل الصفحه
  optionsForm.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
// #service-options: يجلب الخيار الذي حدده المستخدم من القائمة المنسدلة.
// #description: يجلب النص الذي أدخله المستخدم في حقل النصوص.

    const selectedOption = optionsForm.querySelector("#service-options").value;
    const description = optionsForm.querySelector("#description").value;
//  اعداد بيانات المشروع الجديده 
// يتم انشاء كائن جديد يمثل المشروع يتضمن 
// معرف فريد باستخدام الطابع الزمني 
// الاسم المكون من العنوان و الخدمه و الخيار المحدد 
//  الوصف المدخل 
    const newProject = {
      id: Date.now(), 
      name: `${service.title} - ${selectedOption}`,
      hours: "To be determined", 
      location: description
    };
// localStorage.getItem("projects"): يجلب المشاريع المخزنة مسبقًا (إن وُجدت).
//  json يحول النص المسترجع الي مصفوفه
//اذا لم توجد بيانات يتم تهيئه مصفوفه فارغه
const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
existingProjects.push(newProject);
//  يتم اضافه المشروع الجديد الي المصفوفه و تحديث localstorage با ساتخدام JSON.stringify()

    localStorage.setItem("projects", JSON.stringify(existingProjects));
// يعرض رسالة تأكيد بأن البيانات تم إرسالها بنجاح.
// يغلق النموذج بعد الإرسال.

    alert("Your project request has been submitted!");
    closeForm();
  });
}
// عند النقر على زر عرض النموذج (showFormButton):
// إذا كان النموذج مخفيًا، يتم عرضه.
// إذا كان ظاهرًا، يتم إخفاؤه.

document.getElementById("showFormButton").addEventListener("click", function () {
  const form = document.getElementById("contactForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
});

document.getElementById("submitFormButton").addEventListener("click", function () {
  const name = document.getElementById("clientName").value;
  const email = document.getElementById("clientEmail").value;
  const phone = document.getElementById("clientPhone").value;
  const message = document.getElementById("clientMessage").value;
// يجمع البيانات التي أدخلها المستخدم في الحقول المختلفة.

  if (name && email && phone && message)
    // يتحقق مما إذا كانت جميع الحقول مملوءة.
// إذا لم تكن مملوءة، يتم عرض رسالة خطأ.

    {
    const customer = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    const customers = JSON.parse(localStorage.getItem("customers")) || [];

    customers.push(customer);

    localStorage.setItem("customers", JSON.stringify(customers));
// يتم تخزين بيانات العميل بنفس الطريقة المتبعة مع المشاريع
    alert("Your information has been submitted successfully!");
    window.location.reload();
    // عرض رسالة تأكيد.
// يعيد تحميل الصفحة لتحديث المحتوى
  } else {
    alert("Please fill in all the fields.");
  }
});













// مسح البينات المخزنه في logic storage
// localStorage.clear();
