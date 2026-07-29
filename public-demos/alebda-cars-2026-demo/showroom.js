const SALES_NUMBER = "966546483121";
const money = (value) => new Intl.NumberFormat("ar-SA").format(value);

const vehicles = [
  {
    id: "elantra-black",
    brand: "هيونداي",
    name: "هيونداي إلنترا",
    trim: "Comfort",
    year: 2026,
    condition: "جديدة",
    image: "media/car-elantra-black.svg",
    badge: "تسليم فوري",
    price: 82900,
    monthly: 1299,
    color: "أسود لؤلؤي",
    body: "سيدان",
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    drive: "دفع أمامي",
    engine: "2.0 لتر",
    mileage: "0 كم",
    seats: "5 مقاعد",
    origin: "سعودي",
    stock: "E26-041",
    branch: "الشفا — الرياض",
    availability: "متاحة الآن",
    updated: "قبل 12 دقيقة",
    inspection: "فحص استلام قبل التسليم",
    warranty: "ضمان الوكيل حسب الشروط",
    maintenance: "جديدة — لا يوجد سجل سابق",
    finance: true,
    delivery: true,
    features: ["كاميرا خلفية", "حساسات", "دخول ذكي", "شاشة وسطية", "مثبت سرعة", "Apple CarPlay"],
  },
  {
    id: "elantra-white",
    brand: "هيونداي",
    name: "هيونداي إلنترا",
    trim: "Limited Premium",
    year: 2026,
    condition: "جديدة",
    image: "media/car-elantra-white.svg",
    badge: "فئة عليا",
    price: 94900,
    monthly: 1499,
    color: "أبيض لؤلؤي",
    body: "سيدان",
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    drive: "دفع أمامي",
    engine: "2.0 لتر",
    mileage: "0 كم",
    seats: "5 مقاعد",
    origin: "سعودي",
    stock: "E26-052",
    branch: "الشفا — الرياض",
    availability: "متاحة الآن",
    updated: "قبل 18 دقيقة",
    inspection: "فحص استلام قبل التسليم",
    warranty: "ضمان الوكيل حسب الشروط",
    maintenance: "جديدة — لا يوجد سجل سابق",
    finance: true,
    delivery: true,
    features: ["فتحة سقف", "كاميرا 360", "مقاعد جلد", "مثبت متكيف", "تحذير مسار", "شحن لاسلكي"],
  },
  {
    id: "elantra-graphite",
    brand: "هيونداي",
    name: "هيونداي إلنترا",
    trim: "Smart",
    year: 2026,
    condition: "جديدة",
    image: "media/car-elantra-graphite.svg",
    badge: "الأكثر طلبًا",
    price: 79900,
    monthly: 1249,
    color: "رمادي جرافيت",
    body: "سيدان",
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    drive: "دفع أمامي",
    engine: "2.0 لتر",
    mileage: "0 كم",
    seats: "5 مقاعد",
    origin: "سعودي",
    stock: "E26-063",
    branch: "الشفا — الرياض",
    availability: "متاحة الآن",
    updated: "قبل 25 دقيقة",
    inspection: "فحص استلام قبل التسليم",
    warranty: "ضمان الوكيل حسب الشروط",
    maintenance: "جديدة — لا يوجد سجل سابق",
    finance: true,
    delivery: true,
    features: ["كاميرا خلفية", "حساسات", "بلوتوث", "تحكم مقود", "مثبت سرعة", "تشغيل زر"],
  },
  {
    id: "seltos-white",
    brand: "كيا",
    name: "كيا سيلتوس",
    trim: "EX",
    year: 2025,
    condition: "جديدة",
    image: "media/car-seltos-white.svg",
    badge: "SUV عائلية",
    price: 89900,
    monthly: 1399,
    color: "أبيض لؤلؤي",
    body: "SUV",
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    drive: "دفع أمامي",
    engine: "1.6 لتر",
    mileage: "0 كم",
    seats: "5 مقاعد",
    origin: "سعودي",
    stock: "KS25-018",
    branch: "الشفا — الرياض",
    availability: "محجوزة مؤقتًا",
    updated: "قبل 35 دقيقة",
    inspection: "فحص استلام قبل التسليم",
    warranty: "ضمان الوكيل حسب الشروط",
    maintenance: "جديدة — لا يوجد سجل سابق",
    finance: true,
    delivery: true,
    features: ["شاشة ملاحة", "كاميرا خلفية", "حساسات", "تشغيل زر", "تكييف خلفي", "مثبت سرعة"],
  },
  {
    id: "mercedes-black",
    brand: "مرسيدس",
    name: "مرسيدس S 450",
    trim: "4MATIC",
    year: 2021,
    condition: "مستعملة",
    image: "media/car-mercedes-black.svg",
    badge: "فحص شامل",
    price: 239000,
    monthly: 3690,
    color: "أسود",
    body: "سيدان",
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    drive: "دفع كلي",
    engine: "3.0 لتر تيربو",
    mileage: "47,000 كم",
    seats: "5 مقاعد",
    origin: "خليجي",
    stock: "MS21-007",
    branch: "الشفا — الرياض",
    availability: "متاحة الآن",
    updated: "اليوم 10:40 ص",
    inspection: "فحص شامل — التقرير عند الطلب",
    warranty: "ضمان معرض محدود حسب الاتفاق",
    maintenance: "سجل صيانة متاح للمراجعة",
    finance: true,
    delivery: true,
    features: ["مقاعد كهربائية", "ذاكرة مقاعد", "كاميرا 360", "رادار", "إضاءة محيطية", "تعليق هوائي"],
  },
  {
    id: "mustang-blue",
    brand: "فورد",
    name: "فورد موستانج",
    trim: "GT",
    year: 2023,
    condition: "مستعملة",
    image: "media/car-mustang-blue.svg",
    badge: "رياضية",
    price: 219000,
    monthly: 3390,
    color: "أزرق داكن",
    body: "كوبيه",
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    drive: "دفع خلفي",
    engine: "5.0 لتر V8",
    mileage: "22,000 كم",
    seats: "4 مقاعد",
    origin: "أمريكي",
    stock: "FM23-011",
    branch: "الشفا — الرياض",
    availability: "تحت الفحص",
    updated: "اليوم 11:15 ص",
    inspection: "الفحص قيد الإكمال",
    warranty: "حسب نتيجة الفحص والاتفاق",
    maintenance: "السجل متاح للمراجعة",
    finance: true,
    delivery: true,
    features: ["وضعيات قيادة", "شاشة رقمية", "تبريد مقاعد", "كاميرا خلفية", "نظام صوت", "دخول ذكي"],
  },
];

const innovations = [
  ["01","⌁","واتساب ذكي","اسم السيارة ومصدر العميل في أول رسالة"],
  ["02","⌕","بحث وفلاتر","الوصول للخيار المناسب دون محادثات طويلة"],
  ["03","≋","مقارنة","جدول واحد للسعر والفئة والثقة والتمويل"],
  ["04","♡","محفوظات","قائمة شخصية تعود لها قبل اتخاذ القرار"],
  ["05","✓","حالة التوفر","متاحة أو محجوزة أو مباعة مع آخر تحديث"],
  ["06","◒","حاسبة تمويل","قسط تقديري واضح قبل طلب التمويل"],
  ["07","♢","ثقة الفحص","تقرير وضمان وصيانة دون ادعاءات مخفية"],
  ["08","↻","بيع أو بدل","تقييم أولي من الصور قبل الزيارة"],
  ["09","◎","طلب سيارة","التقاط الطلب حتى لو المخزون لا يحتويها"],
  ["10","◉","حجز معاينة","اختيار السيارة والوقت قبل زيارة المعرض"],
  ["11","＋","إدخال سريع","صور أو VIN أو Excel بدل الكتابة المتكررة"],
  ["12","▣","مصدر واحد","بيانات السيارة نفسها لكل الموظفين والقنوات"],
  ["13","↗","نشر متعدد","قالب حراج وتيك توك وواتساب من سجل واحد"],
  ["14","⏱","تنبيه الرد","تصعيد الطلب إذا لم يستلمه مندوب"],
  ["15","♟","توزيع العملاء","إسناد حسب الفرع والسيارة وطريقة الشراء"],
  ["16","⌁","تتبع المصدر","معرفة أي إعلان جلب العميل والبيع"],
  ["17","◌","عمر المخزون","تنبيه السيارات الراكدة قبل خفض السعر"],
  ["18","▤","لوحة المبيعات","من جديد إلى موعد وتفاوض وبيع"],
  ["19","↺","حذف المباعة","تحديث الحالة ومنع استفسارات سيارة بيعت"],
  ["20","♢","ما بعد البيع","تسليم وضمان وصيانة وتقييم العميل"],
];

let savedIds = JSON.parse(localStorage.getItem("alebda-saved") || "[]");
let compareIds = JSON.parse(localStorage.getItem("alebda-compare") || "[]");
let currentDealerTab = "entry";
const grid = document.querySelector("#inventory-grid");
const innovationGrid = document.querySelector("#innovation-grid");
const backdrop = document.querySelector("#modal-backdrop");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector("#modal-content");
const toast = document.querySelector("#toast");
let toastTimer;

function whatsappUrl(message) {
  return `https://wa.me/${SALES_NUMBER}?text=${encodeURIComponent(message)}`;
}

function bindWhatsapp(root = document) {
  root.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl(link.dataset.whatsapp);
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function vehicleCard(car) {
  const saved = savedIds.includes(car.id);
  const compared = compareIds.includes(car.id);
  return `
    <article class="vehicle-card reveal is-visible">
      <div class="vehicle-image">
        <img src="${car.image}" alt="${car.name} ${car.year} ${car.color}" loading="lazy" />
        <span class="vehicle-badge">${car.badge}</span>
        <button class="save-car ${saved ? "is-saved" : ""}" data-save="${car.id}" type="button" aria-label="حفظ ${car.name}">${saved ? "♥" : "♡"}</button>
      </div>
      <div class="vehicle-body">
        <div class="vehicle-top">
          <div><h3>${car.name} ${car.year}</h3><small>${car.trim} · ${car.condition}</small></div>
          <span class="vehicle-price">${money(car.price)} ر.س</span>
        </div>
        <div class="vehicle-specs">
          <div><span>الممشى</span><b>${car.mileage}</b></div>
          <div><span>القسط التقديري</span><b>${money(car.monthly)} ر.س</b></div>
          <div><span>الحالة</span><b>${car.availability}</b></div>
        </div>
        <div class="vehicle-tags"><span>${car.body}</span><span>${car.transmission}</span><span>${car.color}</span></div>
        <div class="vehicle-actions">
          <button class="button button-primary" data-vehicle="${car.id}" type="button">التفاصيل الكاملة</button>
          <button class="icon-button ${compared ? "is-active" : ""}" data-compare="${car.id}" type="button" aria-label="مقارنة ${car.name}">≋</button>
          <a class="icon-button" data-whatsapp="السلام عليكم، أرغب بمعرفة تفاصيل ${car.name} ${car.trim} ${car.year} رقم المخزون ${car.stock}" href="#" aria-label="واتساب عن ${car.name}">◉</a>
        </div>
      </div>
    </article>`;
}

function renderVehicles(list = vehicles) {
  grid.innerHTML = list.length ? list.map(vehicleCard).join("") : `<div class="empty-state">لا توجد سيارات مطابقة. جرّب تغيير البحث أو أرسل طلب سيارة خاصة.</div>`;
  document.querySelector("#inventory-summary").textContent = `${list.length} سيارات ضمن النتائج`;
  bindWhatsapp(grid);
}

function applyFilters() {
  const text = document.querySelector("#text-filter").value.trim().toLowerCase();
  const brand = document.querySelector("#brand-filter").value;
  const year = document.querySelector("#year-filter").value;
  const body = document.querySelector("#body-filter").value;
  const purchase = document.querySelector("#purchase-filter").value;
  const result = vehicles.filter((car) =>
    (!text || `${car.brand} ${car.name} ${car.trim}`.toLowerCase().includes(text)) &&
    (brand === "all" || car.brand === brand) &&
    (year === "all" || car.year === Number(year)) &&
    (body === "all" || car.body === body) &&
    (purchase === "all" || (purchase === "finance" && car.finance) || purchase === "cash")
  );
  renderVehicles(result);
}

function syncSaved() {
  localStorage.setItem("alebda-saved", JSON.stringify(savedIds));
  document.querySelector("#saved-count").textContent = savedIds.length;
}

function syncCompare() {
  localStorage.setItem("alebda-compare", JSON.stringify(compareIds));
  document.querySelector("#compare-count").textContent = compareIds.length;
  document.querySelector("#tray-count").textContent = compareIds.length;
  document.querySelector("#open-compare").disabled = compareIds.length < 2;
  document.querySelector("#compare-tray").hidden = compareIds.length === 0;
}

function toggleSaved(id) {
  savedIds = savedIds.includes(id) ? savedIds.filter((item) => item !== id) : [...savedIds, id];
  syncSaved();
  applyFilters();
  showToast(savedIds.includes(id) ? "تمت إضافة السيارة للمحفوظات" : "تمت إزالة السيارة من المحفوظات");
}

function toggleCompare(id) {
  if (compareIds.includes(id)) compareIds = compareIds.filter((item) => item !== id);
  else if (compareIds.length < 3) compareIds.push(id);
  else return showToast("يمكن مقارنة 3 سيارات كحد أقصى");
  syncCompare();
  applyFilters();
  showToast(compareIds.includes(id) ? "أضيفت السيارة للمقارنة" : "أزيلت السيارة من المقارنة");
}

function vehicleOverview(car) {
  return `<div class="spec-grid">
    ${[
      ["السنة", car.year], ["الفئة", car.trim], ["الحالة", car.condition], ["اللون", car.color],
      ["الهيكل", car.body], ["المحرك", car.engine], ["القير", car.transmission], ["الدفع", car.drive],
      ["الوقود", car.fuel], ["الممشى", car.mileage], ["المقاعد", car.seats], ["المصدر", car.origin],
    ].map(([label,value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("")}
  </div>`;
}

function vehicleTrust(car) {
  return `<div class="trust-grid">
    <article><i>✓</i><strong>الفحص</strong><p>${car.inspection}</p></article>
    <article><i>♢</i><strong>الضمان</strong><p>${car.warranty}</p></article>
    <article><i>↺</i><strong>الصيانة</strong><p>${car.maintenance}</p></article>
  </div>`;
}

function vehicleFeatures(car) {
  return `<div class="spec-grid">${car.features.map((feature) => `<div><span>ميزة</span><b>${feature}</b></div>`).join("")}</div>`;
}

function vehicleFinance(car) {
  return `<div class="trust-grid">
    <article><i>◒</i><strong>${money(car.monthly)} ر.س / شهر</strong><p>مثال تقديري يتغير حسب الدفعة والمدة والجهة.</p></article>
    <article><i>▤</i><strong>طلب أولي بلا مستندات</strong><p>راتب ضمن نطاق وقطاع ودفعة متوقعة فقط.</p></article>
    <article><i>!</i><strong>غير ملزم</strong><p>الموافقة والقسط النهائي من جهة التمويل.</p></article>
  </div>`;
}

function openVehicle(id) {
  const car = vehicles.find((item) => item.id === id);
  if (!car) return;
  modal.classList.add("modal-wide");
  modalContent.innerHTML = `
    <div class="vehicle-detail-hero">
      <div class="detail-image"><img src="${car.image}" alt="${car.name}" /><span class="detail-status">${car.availability} · ${car.updated}</span></div>
      <div class="detail-summary">
        <p class="eyebrow">${car.badge} · رقم ${car.stock}</p>
        <h2 id="modal-title">${car.name} ${car.year}</h2>
        <p>${car.trim} · ${car.condition} · ${car.branch}</p>
        <div class="detail-price"><div><span>السعر النقدي التجريبي</span><strong>${money(car.price)} ر.س</strong></div><div><span>قسط يبدأ تقريبًا من</span><strong>${money(car.monthly)} ر.س</strong></div></div>
        <div class="detail-quick"><div><span>الممشى</span><b>${car.mileage}</b></div><div><span>اللون</span><b>${car.color}</b></div><div><span>الفحص</span><b>${car.inspection}</b></div><div><span>التحديث</span><b>${car.updated}</b></div></div>
        <div class="detail-actions"><a class="button button-primary" data-whatsapp="السلام عليكم، أرغب بحجز ${car.name} ${car.year} رقم المخزون ${car.stock}" href="#">احجز عبر واتساب</a><button class="button button-outline" data-open="testdrive" data-context="${car.name} ${car.year}" type="button">احجز معاينة</button></div>
      </div>
    </div>
    <div class="detail-tabs"><button class="is-active" data-detail-tab="overview" type="button">المواصفات</button><button data-detail-tab="trust" type="button">الفحص والضمان</button><button data-detail-tab="features" type="button">المزايا</button><button data-detail-tab="finance" type="button">التمويل</button></div>
    <div class="detail-panel" id="detail-panel">${vehicleOverview(car)}</div>`;
  modalContent.dataset.vehicleId = car.id;
  bindWhatsapp(modalContent);
  openBackdrop();
}

function openCompare() {
  const list = compareIds.map((id) => vehicles.find((car) => car.id === id)).filter(Boolean);
  modal.classList.add("modal-wide");
  const rows = [
    ["السيارة", ...list.map((car) => `<img src="${car.image}" alt="${car.name}" />`)],
    ["الموديل", ...list.map((car) => `${car.name} ${car.year}`)],
    ["الفئة", ...list.map((car) => car.trim)],
    ["السعر", ...list.map((car) => `${money(car.price)} ر.س`)],
    ["القسط التقديري", ...list.map((car) => `${money(car.monthly)} ر.س`)],
    ["الممشى", ...list.map((car) => car.mileage)],
    ["الفحص", ...list.map((car) => car.inspection)],
    ["الضمان", ...list.map((car) => car.warranty)],
    ["التوفر", ...list.map((car) => car.availability)],
  ];
  modalContent.innerHTML = `<p class="eyebrow">مقارنة بلا تشويش</p><h2 id="modal-title">أين الفرق الحقيقي؟</h2><p class="modal-content-note">قارن ما يهم قرارك، ثم افتح تفاصيل السيارة الأقرب.</p><div class="compare-table" style="--columns:${list.length}">${rows.map((row) => `<div class="compare-row" style="--columns:${list.length}">${row.map((cell) => `<div>${cell}</div>`).join("")}</div>`).join("")}</div>`;
  openBackdrop();
}

function modalForm(type, context = "") {
  if (type === "match") return `<p class="eyebrow">مطابقة ذكية</p><h2 id="modal-title">ثلاث إجابات تقلل الخيارات</h2><p class="modal-content-note">لا نقرر عنك؛ نرتب أقرب الخيارات ونوضح السبب.</p><form class="modal-form" id="match-form"><label>الاستخدام<select name="body"><option value="سيدان">تنقل يومي / سيدان</option><option value="SUV">عائلة / SUV</option><option value="كوبيه">رياضية / كوبيه</option></select></label><label>الميزانية القصوى<select name="budget"><option value="90000">90,000 ر.س</option><option value="150000">150,000 ر.س</option><option value="250000">250,000 ر.س</option></select></label><label>طريقة الشراء<select name="purchase"><option>تمويل</option><option>كاش</option><option>بدل</option></select></label><button class="button button-primary" type="submit">اعرض أقرب الخيارات</button></form>`;
  if (type === "finance") return `<p class="eyebrow">طلب تمويل أولي</p><h2 id="modal-title">رتّب الطلب قبل المندوب</h2><p class="modal-content-note">${context ? `السيارة: ${context}` : "يمكن تحديد السيارة لاحقًا."} لا نطلب هوية أو مستند راتب في هذه المرحلة.</p><form class="modal-form" id="finance-form"><label>السيارة المطلوبة<input name="car" value="${context}" placeholder="مثال: إلنترا 2026"></label><div class="form-row"><label>القطاع<select name="sector"><option>حكومي</option><option>خاص</option><option>متقاعد</option><option>أخرى</option></select></label><label>نطاق الراتب<select name="salary"><option>أقل من 5,000</option><option>5,000 – 8,000</option><option>8,000 – 12,000</option><option>أكثر من 12,000</option></select></label></div><div class="form-row"><label>القسط المناسب<input name="payment" inputmode="numeric" placeholder="مثال: 1,500"></label><label>الدفعة المتوقعة<input name="down" inputmode="numeric" placeholder="إن وجدت"></label></div><button class="button button-primary" type="submit">جهز الرسالة في واتساب</button><small class="form-note">طلب تقديري لا يمثل موافقة تمويلية.</small></form>`;
  if (type === "trade") return `<p class="eyebrow">بع أو بدّل</p><h2 id="modal-title">تقييم أولي قبل الزيارة</h2><form class="modal-form" id="trade-form"><label>السيارة الحالية<input required name="car" placeholder="مثال: كامري 2021"></label><div class="form-row"><label>السنة<input name="year" inputmode="numeric"></label><label>الممشى<input name="mileage" inputmode="numeric" placeholder="85,000 كم"></label></div><label>ملاحظات الحالة<textarea name="notes" placeholder="الرش، الحوادث، الصيانة أو التمويل القائم"></textarea></label><button class="button button-dark" type="submit">انتقل لواتساب وأرفق الصور</button></form>`;
  if (type === "testdrive") return `<p class="eyebrow">حجز معاينة</p><h2 id="modal-title">زيارة مرتبة لا مشوار مجهول</h2><form class="modal-form" id="testdrive-form"><label>السيارة<input name="car" value="${context}" placeholder="اختر السيارة"></label><div class="form-row"><label>اليوم<select name="day"><option>اليوم</option><option>غدًا</option><option>نهاية الأسبوع</option></select></label><label>الفترة<select name="time"><option>9–12 صباحًا</option><option>4–7 مساءً</option><option>7–10 مساءً</option></select></label></div><label>نوع الطلب<select name="type"><option>معاينة في المعرض</option><option>تجربة قيادة</option><option>اتصال فيديو عن بعد</option></select></label><button class="button button-primary" type="submit">أرسل طلب الموعد</button></form>`;
  if (type === "request") return `<p class="eyebrow">طلب سيارة غير موجودة</p><h2 id="modal-title">دع المخزون يبحث عنك</h2><form class="modal-form" id="request-form"><div class="form-row"><label>الماركة<input name="brand" required></label><label>الموديل<input name="model" required></label></div><div class="form-row"><label>السنوات المقبولة<input name="years" placeholder="2023–2026"></label><label>الميزانية<input name="budget" placeholder="حتى 100,000"></label></div><label>طريقة الشراء<select name="purchase"><option>كاش</option><option>تمويل</option><option>بدل</option></select></label><button class="button button-primary" type="submit">أرسل مواصفات الطلب</button></form>`;
  if (type === "delivery") return `<p class="eyebrow">طلب عن بُعد</p><h2 id="modal-title">خطوات استلام واضحة</h2><div class="trust-grid"><article><i>01</i><strong>تأكيد السيارة</strong><p>المواصفات، السعر، الفحص والتوفر.</p></article><article><i>02</i><strong>اعتماد الصفقة</strong><p>كاش أو تمويل والمستندات المطلوبة.</p></article><article><i>03</i><strong>تجهيز وشحن</strong><p>موعد الاستلام أو تكلفة الشحن للمدينة.</p></article></div><a class="button button-primary full" data-whatsapp="أرغب بمعرفة خطوات الشراء عن بعد والشحن إلى مدينتي" href="#">اسأل عن الشحن عبر واتساب</a>`;
  return "";
}

function openGeneric(type, context = "") {
  modal.classList.remove("modal-wide");
  if (type === "saved") {
    const list = savedIds.map((id) => vehicles.find((car) => car.id === id)).filter(Boolean);
    modalContent.innerHTML = `<p class="eyebrow">المحفوظات</p><h2 id="modal-title">خياراتك في مكان واحد</h2><div class="saved-list">${list.length ? list.map((car) => `<button class="saved-row" data-vehicle="${car.id}" type="button"><img src="${car.image}" alt=""><span><strong>${car.name} ${car.year}</strong><small>${money(car.price)} ر.س · ${car.availability}</small></span><b>←</b></button>`).join("") : `<div class="empty-state">لم تحفظ أي سيارة بعد.</div>`}</div>`;
  } else if (type === "feature") {
    modalContent.innerHTML = `<p class="eyebrow">حل داخل النظام</p><h2 id="modal-title">${context}</h2><p class="modal-content-note">${modalContent.dataset.description || ""}</p><a class="button button-primary full" data-whatsapp="أرغب بمعرفة المزيد عن حل ${context}" href="#">اسأل عن الحل</a>`;
  } else modalContent.innerHTML = modalForm(type, context);
  bindWhatsapp(modalContent);
  openBackdrop();
}

function openBackdrop() {
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  const focusable = modalContent.querySelector("input,select,button,a");
  if (focusable) setTimeout(() => focusable.focus(), 50);
}

function closeModal() {
  backdrop.hidden = true;
  document.body.style.overflow = "";
  modal.classList.remove("modal-wide");
  modalContent.dataset.vehicleId = "";
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function calculateFinance() {
  const price = Number(document.querySelector("#calc-price").value);
  const down = Number(document.querySelector("#calc-down").value);
  const term = Number(document.querySelector("#calc-term").value);
  const annual = Number(document.querySelector("#calc-rate").value);
  const principal = Math.max(0, price - down);
  const rate = annual / 1200;
  const monthly = rate ? (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1) : principal / term;
  document.querySelector("#calc-price-label").textContent = `${money(price)} ر.س`;
  document.querySelector("#calc-down-label").textContent = `${money(down)} ر.س`;
  document.querySelector("#calc-monthly").textContent = `${money(Math.round(monthly))} ر.س`;
  document.querySelector("#calc-total").textContent = `${money(Math.round(monthly * term + down))} ر.س`;
  document.querySelector("#calc-financed").textContent = `${money(principal)} ر.س`;
  document.querySelector("#calc-months").textContent = term;
}

function dealerEntry() {
  return `<div class="entry-layout">
    <div class="entry-methods">
      <button class="entry-method is-active" type="button"><i>◉</i><strong>صور + استخراج تلقائي</strong><small>ارفع الصور وانسخ بيانات الإعلان، ثم راجع الحقول الناقصة</small></button>
      <button class="entry-method" type="button"><i>▤</i><strong>استيراد Excel / CSV</strong><small>رفع عشرات السيارات دفعة واحدة بقالب موحد</small></button>
      <button class="entry-method" type="button"><i>⌁</i><strong>نسخ إعلان سابق</strong><small>كرر سيارة مشابهة وعدّل اللون والفئة والسعر فقط</small></button>
      <button class="entry-method" type="button"><i>⌕</i><strong>مسح VIN أو الباركود</strong><small>جلب حقول أساسية ثم مراجعتها قبل النشر</small></button>
      <div class="entry-result"><strong>النتيجة المتوقعة</strong><ul><li>إضافة السيارة خلال دقائق بدل إعادة الكتابة</li><li>تنبيه الحقول الناقصة قبل النشر</li><li>رابط واحد لحراج وواتساب وبقية القنوات</li></ul></div>
    </div>
    <div class="entry-demo"><div class="entry-demo-head"><div><span>إضافة سريعة</span><h3>سيارة جديدة للمخزون</h3></div><b>الخطوة 1 من 3</b></div><form class="entry-form" id="entry-form"><label class="entry-drop">＋ اسحب صور السيارة أو اخترها من الجوال<input type="file" accept="image/*" multiple></label><div class="entry-fields"><label>الماركة<select name="brand"><option>هيونداي</option><option>كيا</option><option>مرسيدس</option><option>فورد</option></select></label><label>الموديل<input name="model" value="إلنترا"></label><label>السنة<input name="year" value="2026"></label><label>الفئة<input name="trim" placeholder="Comfort"></label><label>السعر<input name="price" inputmode="numeric" placeholder="82900"></label><label>الحالة<select name="status"><option>متاحة</option><option>محجوزة</option><option>تحت الفحص</option><option>مباعة</option></select></label></div><button class="button button-primary" type="submit">راجع البيانات وانشر</button><small class="form-note">في النظام الحقيقي تحفظ السيارة في قاعدة واحدة مع سجل تعديلات وصلاحيات.</small></form></div>
  </div>`;
}

function dealerInventory() {
  return `<div class="ops-layout"><div class="ops-card"><div class="ops-card-head"><div><span class="eyebrow">صحة المخزون</span><h3>ما الذي يحتاج تدخلًا اليوم؟</h3></div></div><div class="metric-row"><div><strong>38</strong><span>متاحة</span></div><div><strong>06</strong><span>تحتاج تحديث</span></div><div><strong>04</strong><span>محجوزة</span></div><div><strong>03</strong><span>أكبر من 60 يومًا</span></div></div></div><div class="ops-card"><div class="ops-card-head"><h3>اكتمال بيانات السيارات</h3><span>هذا الأسبوع</span></div><div class="health-list"><div class="health-row"><span>الصور</span><i style="--fill:92%"></i><b>92%</b></div><div class="health-row"><span>الفحص والضمان</span><i style="--fill:71%"></i><b>71%</b></div><div class="health-row"><span>السعر والتمويل</span><i style="--fill:84%"></i><b>84%</b></div><div class="health-row"><span>حالة التوفر</span><i style="--fill:96%"></i><b>96%</b></div></div></div></div>`;
}

function dealerLeads() {
  return `<div class="ops-layout"><div class="ops-card"><div class="ops-card-head"><div><span class="eyebrow">مسار العملاء</span><h3>من الاستفسار إلى البيع</h3></div><b>17 طلبًا اليوم</b></div><div class="lead-pipeline"><div class="lead-row"><span>جديد</span><b>17</b><i style="--fill:100%"></i></div><div class="lead-row"><span>تم التواصل</span><b>12</b><i style="--fill:72%"></i></div><div class="lead-row"><span>مؤهل</span><b>08</b><i style="--fill:48%"></i></div><div class="lead-row"><span>موعد</span><b>05</b><i style="--fill:30%"></i></div><div class="lead-row"><span>تفاوض</span><b>03</b><i style="--fill:18%"></i></div><div class="lead-row"><span>تم البيع</span><b>02</b><i style="--fill:12%"></i></div></div></div><div class="ops-card"><div class="ops-card-head"><div><span class="eyebrow">سرعة الرد</span><h3>لا تدع الطلب يبرد</h3></div><strong>06:12 د</strong></div><div class="metric-row"><div><strong>12</strong><span>ضمن 10 دقائق</span></div><div><strong>03</strong><span>تحتاج متابعة</span></div><div><strong>02</strong><span>متأخرة</span></div><div><strong>4</strong><span>مندوبون نشطون</span></div></div><div class="entry-result"><strong>تنبيه تلقائي</strong><ul><li>الطلب غير المستلم يصعد لمدير المبيعات</li><li>كل عميل مرتبط بسيارة ومصدر ومندوب</li><li>سبب خسارة الصفقة يصبح قابلًا للتحليل</li></ul></div></div></div>`;
}

function dealerInsights() {
  return `<div class="ops-layout"><div class="ops-card"><div class="ops-card-head"><div><span class="eyebrow">مصادر الطلبات</span><h3>أي قناة تجلب العميل الأفضل؟</h3></div></div><div class="source-chart"><div><i style="--height:82%"></i><span>حراج 38%</span></div><div><i style="--height:68%"></i><span>TikTok 27%</span></div><div><i style="--height:52%"></i><span>Google 18%</span></div><div><i style="--height:36%"></i><span>واتساب 11%</span></div><div><i style="--height:22%"></i><span>مباشر 6%</span></div></div></div><div class="ops-card"><div class="ops-card-head"><div><span class="eyebrow">المخزون الراكد</span><h3>قبل أن تخفض السعر</h3></div></div><div class="stale-list"><div class="stale-row"><img src="media/car-mercedes-black.svg" alt=""><div><strong>مرسيدس S 450</strong><small>74 يومًا · مشاهدة مرتفعة وتواصل منخفض</small></div><b>حسّن الثقة</b></div><div class="stale-row"><img src="media/car-mustang-blue.svg" alt=""><div><strong>فورد موستانج</strong><small>61 يومًا · وصول منخفض</small></div><b>ادعم الإعلان</b></div><div class="stale-row"><img src="media/car-seltos-white.svg" alt=""><div><strong>كيا سيلتوس</strong><small>54 يومًا · طلبات تمويل غير مكتملة</small></div><b>بسّط الطلب</b></div></div></div></div>`;
}

function renderDealerPanel(tab) {
  currentDealerTab = tab;
  document.querySelectorAll("[data-dealer-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.dealerTab === tab));
  document.querySelector("#dealer-panel").innerHTML = tab === "entry" ? dealerEntry() : tab === "inventory" ? dealerInventory() : tab === "leads" ? dealerLeads() : dealerInsights();
}

function renderInnovations() {
  innovationGrid.innerHTML = innovations.map(([num,icon,title,text]) => `<button class="innovation-card reveal" data-feature="${title}" data-description="${text}" type="button"><span>${num}</span><i>${icon}</i><strong>${title}</strong><small>${text}</small></button>`).join("");
}

function formMessage(form) {
  const data = new FormData(form);
  if (form.id === "finance-form") return `السلام عليكم، أرغب بطلب تمويل أولي.\nالسيارة: ${data.get("car") || "غير محددة"}\nالقطاع: ${data.get("sector")}\nنطاق الراتب: ${data.get("salary")}\nالقسط المناسب: ${data.get("payment") || "غير محدد"}\nالدفعة: ${data.get("down") || "غير محددة"}`;
  if (form.id === "trade-form") return `السلام عليكم، أرغب ببيع أو استبدال سيارتي.\nالسيارة: ${data.get("car")}\nالسنة: ${data.get("year") || "غير محددة"}\nالممشى: ${data.get("mileage") || "غير محدد"}\nالملاحظات: ${data.get("notes") || "لا توجد"}\nوسأرفق الصور هنا.`;
  if (form.id === "testdrive-form") return `السلام عليكم، أرغب بحجز ${data.get("type")}.\nالسيارة: ${data.get("car") || "غير محددة"}\nاليوم: ${data.get("day")}\nالفترة: ${data.get("time")}`;
  if (form.id === "request-form") return `السلام عليكم، أبحث عن سيارة.\nالماركة: ${data.get("brand")}\nالموديل: ${data.get("model")}\nالسنوات: ${data.get("years") || "مرنة"}\nالميزانية: ${data.get("budget") || "غير محددة"}\nطريقة الشراء: ${data.get("purchase")}`;
  return "";
}

function observeReveals() {
  if (!("IntersectionObserver" in window)) return document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: .08 });
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => observer.observe(item));
}

document.addEventListener("click", (event) => {
  const open = event.target.closest("[data-open]");
  if (open) openGeneric(open.dataset.open, open.dataset.context || "");
  const vehicle = event.target.closest("[data-vehicle]");
  if (vehicle) { closeModal(); openVehicle(vehicle.dataset.vehicle); }
  const save = event.target.closest("[data-save]");
  if (save) toggleSaved(save.dataset.save);
  const compare = event.target.closest("[data-compare]");
  if (compare) toggleCompare(compare.dataset.compare);
  const detailTab = event.target.closest("[data-detail-tab]");
  if (detailTab) {
    document.querySelectorAll("[data-detail-tab]").forEach((button) => button.classList.toggle("is-active", button === detailTab));
    const car = vehicles.find((item) => item.id === modalContent.dataset.vehicleId);
    document.querySelector("#detail-panel").innerHTML = detailTab.dataset.detailTab === "overview" ? vehicleOverview(car) : detailTab.dataset.detailTab === "trust" ? vehicleTrust(car) : detailTab.dataset.detailTab === "features" ? vehicleFeatures(car) : vehicleFinance(car);
  }
  const dealerTab = event.target.closest("[data-dealer-tab]");
  if (dealerTab) renderDealerPanel(dealerTab.dataset.dealerTab);
  const feature = event.target.closest("[data-feature]");
  if (feature) {
    modalContent.dataset.description = feature.dataset.description;
    openGeneric("feature", feature.dataset.feature);
  }
  if (event.target.closest("[data-close]") || event.target === backdrop) closeModal();
  if (event.target.closest("[data-reset]")) {
    document.querySelector("#inventory-search").reset();
    renderVehicles();
  }
  if (event.target.closest("#open-compare") || event.target.closest("#tray-open")) openCompare();
  if (event.target.closest("#tray-clear")) {
    compareIds = [];
    syncCompare();
    applyFilters();
  }
  const method = event.target.closest(".entry-method");
  if (method) {
    document.querySelectorAll(".entry-method").forEach((item) => item.classList.toggle("is-active", item === method));
    showToast(`تم اختيار: ${method.querySelector("strong").textContent}`);
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "inventory-search") {
    event.preventDefault();
    applyFilters();
    document.querySelector("#inventory-grid").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (event.target.id === "match-form") {
    event.preventDefault();
    const data = new FormData(event.target);
    const result = vehicles.filter((car) => car.body === data.get("body") && car.price <= Number(data.get("budget"))).slice(0,3);
    closeModal();
    renderVehicles(result);
    document.querySelector("#inventory").scrollIntoView({ behavior: "smooth" });
    showToast(`وجدنا ${result.length} خيارات قريبة`);
  }
  if (["finance-form","trade-form","testdrive-form","request-form"].includes(event.target.id)) {
    event.preventDefault();
    window.open(whatsappUrl(formMessage(event.target)), "_blank", "noopener");
    showToast("تم تجهيز الرسالة — أكمل الإرسال في واتساب");
  }
  if (event.target.id === "entry-form") {
    event.preventDefault();
    showToast("اكتملت مراجعة البيانات — السيارة جاهزة للنشر");
    const button = event.target.querySelector("button[type='submit']");
    button.textContent = "✓ جاهزة للنشر على الموقع والقنوات";
    button.disabled = true;
  }
});

["calc-price","calc-down","calc-term","calc-rate"].forEach((id) => document.querySelector(`#${id}`).addEventListener("input", calculateFinance));
document.querySelector("#menu-button").addEventListener("click", (event) => {
  const header = document.querySelector(".site-header");
  header.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(header.classList.contains("is-open")));
});
document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => document.querySelector(".site-header").classList.remove("is-open")));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.querySelector("#scroll-progress").style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
}, { passive: true });

document.querySelector("#year").textContent = new Date().getFullYear();
renderVehicles();
renderInnovations();
renderDealerPanel(currentDealerTab);
syncSaved();
syncCompare();
calculateFinance();
bindWhatsapp();
observeReveals();
