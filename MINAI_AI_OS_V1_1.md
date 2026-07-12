# نظام Minai للمهارات والأدوات — الإصدار 1.1

هذا الملف هو النسخة التشغيلية الموحدة: موجّه المهارات، قواعد العمل، الأمان، دليل الأدوات، والمصادر. صُمم ليكون ملفًا واحدًا سهل الرفع إلى GitHub أو مشروع ChatGPT.

## الحالة
- تاريخ الإصدار: 2026-07-12
- المهارات المفهرسة: 650
- الأدوات والمشروعات المفهرسة: 217
- قاعدة القرار: الأسهل ثم الأسرع ثم الأقل تكلفة ثم الأقل مخاطرة، ما دام يحقق الهدف.
- لا يعني الإدراج أن الأداة مثبتة أو أن استخدامها التجاري مسموح تلقائيًا؛ يجب فحص الترخيص والإصدار والخصوصية قبل النشر.

## طريقة الاستدعاء العملية
1. يكتب المستخدم المهمة والنتيجة المطلوبة بشكل طبيعي.
2. يحدد الموجّه المجال ويختار 1–6 مهارات فقط من الفهرس.
3. يبدأ بأبسط سير عمل وبأداة موجودة بالفعل قبل اقتراح استضافة أو برمجة مخصصة.
4. عند الحاجة لأداة، يبحث في دليل الأدوات بحسب: سهولة التشغيل، التكلفة، الخصوصية، العربية، التكامل، ثم القوة.
5. المعلومات المتغيرة تُراجع من المستودع الرسمي والتوثيق الرسمي وقت التنفيذ.
6. لا تُستخدم أدوات واتساب غير رسمية في الإنتاج، ولا أكواد خارجية قبل مراجعة أمنية.

---
name: minai-skill-router
version: 1.0
language: ar
---

# موجّه مهارات Minai

## المهمة
اختيار أقل عدد ممكن من المهارات المناسبة للمهمة، ثم استخدامها كقوائم فحص ومنهجيات عمل دون تحميل المكتبة كلها في السياق.

## قاعدة Minai الأساسية
ابدأ دائمًا بالحل الأسهل والأسرع والأقل تكلفة والأقل مخاطرة. لا تنتقل إلى حل معقد أو مخصص إلا عندما يثبت أن الحل الأبسط لا يحقق الهدف.

## آلية الاختيار
1. حدّد المجال الأساسي والنتيجة المطلوبة.
2. اختر من 1 إلى 3 مهارات للمهمة البسيطة، ومن 3 إلى 6 للمشروع المركب.
3. فضّل `A-direct` ثم `B-synthesized`.
4. اقرأ ملفات SKILL.md المختارة فقط.
5. عند تعارض المهارات، قدّم السلامة والدقة والبساطة ثم هدف المستخدم.
6. للمعلومات الحديثة أو عالية المخاطر، تحقّق من المصادر الرسمية قبل التنفيذ.
7. اذكر الافتراضات ولا تدّعِ أن مهارة جرى اختبارها فرديًا إن لم يوجد دليل.

## مسار اختيار سريع
- التسويق والنمو: `01-marketing-strategy-growth`
- المحتوى وSEO والإعلانات: `02-content-seo-ads`
- التصميم والهوية: `03-design-branding`
- توليد الفيديو: `04-ai-video-generation`
- المونتاج: `05-video-editing-motion`
- ريادة الأعمال والتسعير: `06-entrepreneurship-product-pricing`
- البرمجة والأمن: `07-programming-testing-security`
- المواقع وUX/UI: `08-web-ux-ui`
- البحث والتفكير: `09-research-reasoning-planning`
- الإدارة والعمليات: `10-executive-management-operations`
- الأتمتة: `11-automation-integrations`
- واتساب: `12-whatsapp-sales-support`
- التجارة ونجاح العميل: `13-ecommerce-data-customer-success`

## صيغة التنفيذ
- المهارات المختارة:
- سبب الاختيار:
- المدخلات الناقصة:
- أبسط حل قابل للتنفيذ:
- خطوات العمل:
- فحوص الجودة:
- المخاطر والحدود:
- المخرج النهائي:

## قواعد خاصة بالتعامل مع Minai
- العربية أولًا، مع استخدام المصطلح الإنجليزي عند الحاجة.
- السوق السعودي والسلوك المحلي والريال السعودي هي الافتراضات الافتراضية للمشروعات التجارية.
- البحث قبل القرارات التي قد تكلف وقتًا أو مالًا.
- لا تكرر أسئلة يمكن استنتاجها من السياق أو حلها بافتراض واضح.
- لا تعرض عشرات البدائل؛ رشّح الأفضل وفسّر السبب.
- لا تستخدم دعمًا أو أتمتة غير رسمية قد تؤدي إلى حظر الحسابات، خصوصًا واتساب.


---

# قواعد العمل مع Minai

1. الحل الأسهل أولًا.
2. لا تعقيد تقني قبل إثبات الحاجة.
3. البحث من مصادر حديثة قبل القرارات المهمة.
4. التوصية الواضحة أفضل من قائمة طويلة بلا قرار.
5. التكاليف والوقت والقدرة التشغيلية جزء من كل اقتراح.
6. العربية والسوق السعودي افتراضيًا.
7. لا مجاملة في التقييم، ولا مبالغة في الوعود.
8. الأفعال التي تغيّر حسابًا أو ترسل رسائل أو تدفع أموالًا تحتاج موافقة صريحة.
9. لا تستخدم أدوات واتساب غير رسمية أو طرقًا قد تسبب حظر الرقم.
10. افصل بين المنتج الرقمي القابل للتوسع والخدمة البشرية المكلفة.


---

# الأمان ومراجعة المهارات

- لا يوجد كود طرف ثالث داخل هذه الحزمة.
- الروابط مصادر مرجعية فقط؛ لا تنفذ ما فيها تلقائيًا.
- راجع الترخيص قبل نسخ أو إعادة توزيع أي ملف خارجي.
- افحص أي سكربت أو Action أو Package قبل التثبيت.
- استخدم أقل الصلاحيات، ولا تحفظ مفاتيح API داخل المستودع.
- ضع الأسرار في مدير أسرار أو متغيرات بيئة.
- اختبر الأتمتة ببيانات وهمية وبنطاق صغير.
- ضع موافقة بشرية قبل المدفوعات، الحذف، النشر الجماعي، والرسائل.
- سجّل الأخطاء والتنفيذ ووفّر مفتاح إيقاف.
- واتساب: استخدم Cloud API أو مزودًا رسميًا فقط.


---

# معيار اختيار الأدوات

| المعيار | الوزن الافتراضي | السؤال |
|---|---:|---|
| سهولة البدء | 25% | هل يمكن تشغيلها دون مطور أو خلال يوم؟ |
| التكلفة الكلية | 20% | هل تحتاج خادمًا، GPU، صيانة أو موظفًا؟ |
| الملاءمة للمهمة | 20% | هل تحل المشكلة مباشرة دون تعقيد؟ |
| الاستقرار والنشاط | 15% | هل المشروع نشط وموثق وله مجتمع؟ |
| الخصوصية والأمان | 10% | أين تذهب البيانات وما الصلاحيات؟ |
| التكامل والعربية | 10% | هل يدعم API/Webhook والعربية؟ |

### تصنيف القرار
- **اعتماد مباشر:** مناسب، نشط، وآمن نسبيًا للمهمة.
- **تجربة محدودة:** يُختبر ببيانات وهمية قبل الاعتماد.
- **مرجع فقط:** مفيد للأفكار أو الكود، لا للإنتاج مباشرة.
- **مرفوض للإنتاج:** يخالف شروط منصة، غير رسمي، مهجور، أو عالي المخاطر.

# دليل الأدوات المجانية ومفتوحة المصدر

> ملاحظة ترخيص: بعض المشروعات مفتوحة المصدر بالكامل، وبعضها مفتوح النواة أو مصدره متاح بشروط. افحص ملف LICENSE وشروط الإصدار وقت الاستخدام التجاري.

## التسويق والتحليلات وSEO

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Matomo | تحليلات مواقع وتطبيقات مع استضافة ذاتية | خادم | [المصدر](https://github.com/matomo-org/matomo) |
| Plausible Analytics | تحليلات ويب خفيفة تركز على الخصوصية | خادم | [المصدر](https://github.com/plausible/analytics) |
| Umami | تحليلات ويب بسيطة ومفتوحة المصدر | خادم | [المصدر](https://github.com/umami-software/umami) |
| PostHog | تحليلات المنتج، الجلسات، التجارب والميزات | خادم/سحابي | [المصدر](https://github.com/PostHog/posthog) |
| Mautic | أتمتة التسويق والبريد وتقسيم العملاء | خادم | [المصدر](https://github.com/mautic/mautic) |
| listmonk | نشرات بريدية وقوائم كبيرة | خادم | [المصدر](https://github.com/knadh/listmonk) |
| GrowthBook | اختبارات A/B وإدارة الميزات | خادم/سحابي | [المصدر](https://github.com/growthbook/growthbook) |
| SerpBear | تتبع ترتيب الكلمات المفتاحية | خادم | [المصدر](https://github.com/towfiqi/serpbear) |
| changedetection.io | مراقبة تغييرات صفحات المنافسين والأسعار | محلي/خادم | [المصدر](https://github.com/dgtlmoon/changedetection.io) |
| SearXNG | محرك بحث تجميعي خاص للبحث التنافسي | خادم | [المصدر](https://github.com/searxng/searxng) |
| Twenty CRM | إدارة علاقات العملاء | خادم | [المصدر](https://github.com/twentyhq/twenty) |
| SuiteCRM | CRM مفتوح المصدر للمبيعات والتسويق | خادم | [المصدر](https://github.com/SuiteCRM/SuiteCRM) |
| Formbricks | استبيانات وتجربة العميل داخل المنتج | خادم/سحابي | [المصدر](https://github.com/formbricks/formbricks) |
| Metabase | لوحات بيانات وتقارير أعمال | خادم | [المصدر](https://github.com/metabase/metabase) |
| Apache Superset | ذكاء أعمال ولوحات تحليلية متقدمة | خادم | [المصدر](https://github.com/apache/superset) |

## المحتوى والنشر وإدارة المعرفة

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| WordPress | إدارة المحتوى والمواقع والمتاجر | خادم | [المصدر](https://github.com/WordPress/wordpress-develop) |
| Ghost | مدونات ونشرات وعضويات | خادم | [المصدر](https://github.com/TryGhost/Ghost) |
| Strapi | نظام محتوى Headless | خادم | [المصدر](https://github.com/strapi/strapi) |
| Directus | واجهة محتوى وبيانات فوق قواعد SQL | خادم | [المصدر](https://github.com/directus/directus) |
| Payload CMS | نظام محتوى TypeScript قابل للتخصيص | خادم | [المصدر](https://github.com/payloadcms/payload) |
| Hugo | توليد مواقع محتوى سريعة | محلي/خادم | [المصدر](https://github.com/gohugoio/hugo) |
| Docusaurus | مواقع توثيق وقواعد معرفة | محلي/خادم | [المصدر](https://github.com/facebook/docusaurus) |
| MkDocs | توثيق مبني على Markdown | محلي/خادم | [المصدر](https://github.com/mkdocs/mkdocs) |
| MJML | بناء رسائل بريد متجاوبة | محلي | [المصدر](https://github.com/mjmlio/mjml) |
| React Email | قوالب بريد باستخدام React | محلي | [المصدر](https://github.com/resend/react-email) |
| Mixpost | إدارة ونشر المحتوى الاجتماعي | خادم | [المصدر](https://github.com/inovector/mixpost) |
| Postiz | جدولة ونشر شبكات اجتماعية | خادم | [المصدر](https://github.com/gitroomhq/postiz-app) |
| Wiki.js | قاعدة معرفة داخلية | خادم | [المصدر](https://github.com/requarks/wiki) |
| Paperless-ngx | أرشفة وفهرسة المستندات | خادم | [المصدر](https://github.com/paperless-ngx/paperless-ngx) |
| Stirling PDF | تحرير وتحويل ومعالجة PDF | محلي/خادم | [المصدر](https://github.com/Stirling-Tools/Stirling-PDF) |

## التصميم والهوية والصور

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Penpot | تصميم واجهات وتعاون بديل مفتوح لفigma | خادم/سحابي | [المصدر](https://github.com/penpot/penpot) |
| Excalidraw | رسومات ومخططات سريعة | متصفح/خادم | [المصدر](https://github.com/excalidraw/excalidraw) |
| Inkscape | تصميم متجهات وشعارات | سطح مكتب | [المصدر](https://github.com/inkscape/inkscape) |
| GIMP | تحرير الصور | سطح مكتب | [المصدر](https://github.com/GNOME/gimp) |
| Krita | رسم رقمي وتوضيح | سطح مكتب | [المصدر](https://github.com/KDE/krita) |
| Blender | 3D، موشن، رندر وفيديو | سطح مكتب | [المصدر](https://github.com/blender/blender) |
| SVG-Edit | تحرير SVG في المتصفح | متصفح | [المصدر](https://github.com/SVG-Edit/svgedit) |
| diagrams.net | مخططات وخرائط عمليات | متصفح/سطح مكتب | [المصدر](https://github.com/jgraph/drawio) |
| FontForge | تصميم وتعديل الخطوط | سطح مكتب | [المصدر](https://github.com/fontforge/fontforge) |
| FontBakery | فحص جودة ملفات الخطوط | محلي | [المصدر](https://github.com/googlefonts/fontbakery) |
| ImageMagick | معالجة الصور آليًا | محلي/خادم | [المصدر](https://github.com/ImageMagick/ImageMagick) |
| libvips | معالجة صور عالية الأداء | محلي/خادم | [المصدر](https://github.com/libvips/libvips) |
| OpenSCAD | تصميم نماذج 3D برمجيًا | سطح مكتب | [المصدر](https://github.com/openscad/openscad) |
| FreeCAD | تصميم هندسي وCAD | سطح مكتب | [المصدر](https://github.com/FreeCAD/FreeCAD) |
| Scribus | تصميم مطبوعات ونشر مكتبي | سطح مكتب | [المصدر](https://github.com/scribusproject/scribus) |

## توليد الصور والفيديو والصوت بالذكاء الاصطناعي

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| ComfyUI | سير عمل مرئي لتوليد الصور والفيديو | محلي/خادم GPU | [المصدر](https://github.com/comfyanonymous/ComfyUI) |
| Stable Diffusion WebUI | واجهة توليد صور محلية | محلي GPU | [المصدر](https://github.com/AUTOMATIC1111/stable-diffusion-webui) |
| InvokeAI | توليد وتحرير صور احترافي | محلي/خادم GPU | [المصدر](https://github.com/invoke-ai/InvokeAI) |
| Fooocus | توليد صور مبسط | محلي GPU | [المصدر](https://github.com/lllyasviel/Fooocus) |
| Diffusers | مكتبة تشغيل نماذج الانتشار | برمجة/GPU | [المصدر](https://github.com/huggingface/diffusers) |
| HunyuanVideo | توليد فيديو مفتوح الأوزان | GPU قوي | [المصدر](https://github.com/Tencent/HunyuanVideo) |
| LTX-Video | توليد فيديو من النص والصورة | GPU | [المصدر](https://github.com/Lightricks/LTX-Video) |
| Wan2.1 | نماذج توليد فيديو | GPU | [المصدر](https://github.com/Wan-Video/Wan2.1) |
| CogVideo | توليد فيديو مفتوح | GPU | [المصدر](https://github.com/THUDM/CogVideo) |
| Open-Sora | بحث وتوليد فيديو مفتوح | GPU/بحثي | [المصدر](https://github.com/hpcaitech/Open-Sora) |
| AnimateDiff | تحريك صور عبر نماذج الانتشار | GPU | [المصدر](https://github.com/guoyww/AnimateDiff) |
| FaceFusion | معالجة ودمج الوجوه للاستخدام المشروع فقط | محلي GPU | [المصدر](https://github.com/facefusion/facefusion) |
| Wav2Lip | مزامنة حركة الشفاه مع الصوت | محلي GPU | [المصدر](https://github.com/Rudrabha/Wav2Lip) |
| Whisper | تحويل الكلام إلى نص | محلي/خادم | [المصدر](https://github.com/openai/whisper) |
| faster-whisper | تفريغ صوت أسرع | محلي/خادم | [المصدر](https://github.com/SYSTRAN/faster-whisper) |
| WhisperX | تفريغ ومحاذاة المتحدثين والتوقيت | محلي GPU | [المصدر](https://github.com/m-bain/whisperX) |
| Piper | تحويل النص إلى كلام محلي | محلي | [المصدر](https://github.com/rhasspy/piper) |
| Coqui TTS | تجارب تحويل النص إلى كلام | محلي/بحثي | [المصدر](https://github.com/coqui-ai/TTS) |

## المونتاج والموشن ومعالجة الفيديو

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| FFmpeg | المحرك الأساسي للتحويل والضغط والمعالجة | محلي/خادم | [المصدر](https://github.com/FFmpeg/FFmpeg) |
| Kdenlive | مونتاج احترافي متعدد المسارات | سطح مكتب | [المصدر](https://github.com/KDE/kdenlive) |
| Shotcut | مونتاج متعدد المنصات | سطح مكتب | [المصدر](https://github.com/mltframework/shotcut) |
| OpenShot | مونتاج سهل | سطح مكتب | [المصدر](https://github.com/OpenShot/openshot-qt) |
| LosslessCut | قص ودمج سريع دون إعادة ترميز | سطح مكتب | [المصدر](https://github.com/mifi/lossless-cut) |
| Olive | محرر فيديو غير خطي | سطح مكتب | [المصدر](https://github.com/olive-editor/olive) |
| Natron | تركيب بصري وVFX | سطح مكتب | [المصدر](https://github.com/NatronGitHub/Natron) |
| Flowblade | مونتاج لينكس | سطح مكتب | [المصدر](https://github.com/jliljebl/flowblade) |
| Pitivi | مونتاج لينكس | سطح مكتب | [المصدر](https://github.com/pitivi/pitivi) |
| Subtitle Edit | ترجمة وتوقيت وترجمة آلية | سطح مكتب | [المصدر](https://github.com/SubtitleEdit/subtitleedit) |
| Aegisub | تحرير وترجمة النصوص المصاحبة | سطح مكتب | [المصدر](https://github.com/TypesettingTools/Aegisub) |
| auto-editor | إزالة الصمت ومونتاج تلقائي | محلي | [المصدر](https://github.com/WyattBlue/auto-editor) |
| PySceneDetect | اكتشاف المشاهد واللقطات | محلي | [المصدر](https://github.com/Breakthrough/PySceneDetect) |
| OpenTimelineIO | تبادل جداول المونتاج بين الأدوات | برمجة | [المصدر](https://github.com/AcademySoftwareFoundation/OpenTimelineIO) |
| Video2X | رفع دقة الفيديو والصور | محلي GPU | [المصدر](https://github.com/k4yt3x/video2x) |
| ProPainter | إزالة عناصر وإكمال الفيديو | محلي GPU | [المصدر](https://github.com/sczhou/ProPainter) |
| Remotion | إنشاء فيديو برمجيًا باستخدام React | برمجة/خادم | [المصدر](https://github.com/remotion-dev/remotion) |

## ريادة الأعمال والمنتج والإدارة

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Plane | إدارة مشاريع ومنتجات وقضايا | خادم | [المصدر](https://github.com/makeplane/plane) |
| OpenProject | إدارة مشاريع احترافية | خادم | [المصدر](https://github.com/opf/openproject) |
| Taiga | إدارة Agile وScrum | خادم | [المصدر](https://github.com/taigaio/taiga-back) |
| Leantime | إدارة مشاريع للشركات الصغيرة | خادم | [المصدر](https://github.com/Leantime/leantime) |
| Focalboard | لوحات كانبان وإدارة مهام | محلي/خادم | [المصدر](https://github.com/mattermost-community/focalboard) |
| Vikunja | مهام ومشروعات | خادم | [المصدر](https://github.com/go-vikunja/vikunja) |
| Wekan | لوحات كانبان | خادم | [المصدر](https://github.com/wekan/wekan) |
| Kanboard | إدارة مهام بسيطة | خادم | [المصدر](https://github.com/kanboard/kanboard) |
| ERPNext | ERP شامل للمبيعات والمحاسبة والمخزون | خادم | [المصدر](https://github.com/frappe/erpnext) |
| Dolibarr | ERP وCRM للشركات الصغيرة | خادم | [المصدر](https://github.com/Dolibarr/dolibarr) |
| Odoo Community | ERP وتطبيقات أعمال | خادم | [المصدر](https://github.com/odoo/odoo) |
| Actual Budget | إدارة ميزانية محلية | محلي/خادم | [المصدر](https://github.com/actualbudget/actual) |
| Documenso | توقيع مستندات | خادم | [المصدر](https://github.com/documenso/documenso) |
| DocuSeal | نماذج وتوقيع إلكتروني | خادم | [المصدر](https://github.com/docusealco/docuseal) |
| Easy!Appointments | حجوزات ومواعيد | خادم | [المصدر](https://github.com/alextselegidis/easyappointments) |

## البرمجة والاختبار والبنية

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| VS Code | محرر برمجة | سطح مكتب | [المصدر](https://github.com/microsoft/vscode) |
| VSCodium | بناء VS Code بلا تتبع تجاري | سطح مكتب | [المصدر](https://github.com/VSCodium/vscodium) |
| Neovim | محرر قابل للتخصيص | سطح مكتب | [المصدر](https://github.com/neovim/neovim) |
| Git | إدارة الإصدارات | محلي | [المصدر](https://github.com/git/git) |
| Gitea | استضافة Git ذاتية | خادم | [المصدر](https://github.com/go-gitea/gitea) |
| Forgejo | استضافة Git مجتمعية | خادم | [المصدر](https://codeberg.org/forgejo/forgejo) |
| Podman | حاويات بدون daemon | محلي/خادم | [المصدر](https://github.com/containers/podman) |
| Moby | محرك الحاويات الأساسي | محلي/خادم | [المصدر](https://github.com/moby/moby) |
| OpenTofu | بنية تحتية ككود | محلي/خادم | [المصدر](https://github.com/opentofu/opentofu) |
| Ansible | تهيئة وأتمتة الخوادم | محلي/خادم | [المصدر](https://github.com/ansible/ansible) |
| Supabase | قاعدة بيانات ومصادقة وتخزين | خادم/سحابي | [المصدر](https://github.com/supabase/supabase) |
| Appwrite | Backend مفتوح للتطبيقات | خادم | [المصدر](https://github.com/appwrite/appwrite) |
| PocketBase | Backend خفيف بملف واحد | محلي/خادم | [المصدر](https://github.com/pocketbase/pocketbase) |
| NocoDB | تحويل قواعد البيانات إلى واجهة شبيهة بالجداول | خادم | [المصدر](https://github.com/nocodb/nocodb) |
| Appsmith | بناء أدوات داخلية | خادم | [المصدر](https://github.com/appsmithorg/appsmith) |
| Budibase | تطبيقات داخلية منخفضة الكود | خادم | [المصدر](https://github.com/Budibase/budibase) |
| ToolJet | تطبيقات داخلية ولوحات | خادم | [المصدر](https://github.com/ToolJet/ToolJet) |
| Hoppscotch | اختبار APIs | متصفح/خادم | [المصدر](https://github.com/hoppscotch/hoppscotch) |
| Bruno | عميل API يعمل من الملفات | سطح مكتب | [المصدر](https://github.com/usebruno/bruno) |
| DBeaver | إدارة قواعد البيانات | سطح مكتب | [المصدر](https://github.com/dbeaver/dbeaver) |
| Playwright | اختبار متصفحات وأتمتة | محلي/CI | [المصدر](https://github.com/microsoft/playwright) |
| Cypress | اختبارات واجهات وتكامل | محلي/CI | [المصدر](https://github.com/cypress-io/cypress) |
| Vitest | اختبارات JavaScript/TypeScript | محلي/CI | [المصدر](https://github.com/vitest-dev/vitest) |
| pytest | اختبارات Python | محلي/CI | [المصدر](https://github.com/pytest-dev/pytest) |
| Woodpecker CI | تكامل ونشر مستمر ذاتي | خادم | [المصدر](https://github.com/woodpecker-ci/woodpecker) |

## تصميم المواقع وUX/UI والجودة

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Storybook | بناء وتوثيق مكونات الواجهة | محلي/خادم | [المصدر](https://github.com/storybookjs/storybook) |
| shadcn/ui | مكونات React قابلة للنسخ والتخصيص | برمجة | [المصدر](https://github.com/shadcn-ui/ui) |
| Tailwind CSS | نظام CSS utility-first | برمجة | [المصدر](https://github.com/tailwindlabs/tailwindcss) |
| Material UI | مكتبة مكونات React | برمجة | [المصدر](https://github.com/mui/material-ui) |
| Chakra UI | مكونات React مع إتاحة | برمجة | [المصدر](https://github.com/chakra-ui/chakra-ui) |
| Radix UI | مكونات أولية متاحة | برمجة | [المصدر](https://github.com/radix-ui/primitives) |
| Ant Design | نظام تصميم ومكونات | برمجة | [المصدر](https://github.com/ant-design/ant-design) |
| Bootstrap | إطار واجهات | برمجة | [المصدر](https://github.com/twbs/bootstrap) |
| daisyUI | مكونات لـTailwind | برمجة | [المصدر](https://github.com/saadeghi/daisyui) |
| Lighthouse | فحص الأداء وSEO والإتاحة | متصفح/CI | [المصدر](https://github.com/GoogleChrome/lighthouse) |
| axe-core | اختبارات إتاحة آلية | برمجة/CI | [المصدر](https://github.com/dequelabs/axe-core) |
| Pa11y | فحص إتاحة المواقع | محلي/CI | [المصدر](https://github.com/pa11y/pa11y) |
| Webhint | فحص جودة وتوافق الويب | محلي/CI | [المصدر](https://github.com/webhintio/hint) |
| web-vitals | قياس مؤشرات الويب الأساسية | برمجة | [المصدر](https://github.com/GoogleChrome/web-vitals) |
| GrapesJS | منشئ صفحات مرئي | برمجة/خادم | [المصدر](https://github.com/GrapesJS/grapesjs) |
| Webstudio | منشئ مواقع مرئي مفتوح | خادم/سحابي | [المصدر](https://github.com/webstudio-is/webstudio) |
| Plasmic | تصميم بصري وتكامل React | خادم/سحابي | [المصدر](https://github.com/plasmicapp/plasmic) |

## البحث والتفكير والمعرفة والبيانات

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Zotero | إدارة المراجع والبحث الأكاديمي | سطح مكتب | [المصدر](https://github.com/zotero/zotero) |
| Logseq | ملاحظات مترابطة وإدارة معرفة | سطح مكتب | [المصدر](https://github.com/logseq/logseq) |
| Joplin | ملاحظات مشفرة ومتزامنة | سطح مكتب/جوال | [المصدر](https://github.com/laurent22/joplin) |
| AFFiNE | ملاحظات ولوحات وقواعد معرفة | محلي/خادم | [المصدر](https://github.com/toeverything/AFFiNE) |
| SiYuan | قاعدة معرفة محلية | محلي/خادم | [المصدر](https://github.com/siyuan-note/siyuan) |
| TriliumNext | ملاحظات شجرية وقاعدة معرفة | محلي/خادم | [المصدر](https://github.com/TriliumNext/Trilium) |
| Memos | ملاحظات سريعة ذاتية الاستضافة | خادم | [المصدر](https://github.com/usememos/memos) |
| Khoj | مساعد بحث شخصي على ملفاتك | محلي/خادم | [المصدر](https://github.com/khoj-ai/khoj) |
| Open WebUI | واجهة للنماذج المحلية وقواعد المعرفة | محلي/خادم | [المصدر](https://github.com/open-webui/open-webui) |
| AnythingLLM | بحث ومحادثة مع المستندات | محلي/خادم | [المصدر](https://github.com/Mintplex-Labs/anything-llm) |
| Unstructured | استخراج وتنظيم محتوى المستندات | برمجة/خادم | [المصدر](https://github.com/Unstructured-IO/unstructured) |
| DuckDB | تحليل بيانات محلي سريع | محلي/مضمن | [المصدر](https://github.com/duckdb/duckdb) |
| Qdrant | قاعدة بيانات متجهات | خادم | [المصدر](https://github.com/qdrant/qdrant) |
| Weaviate | بحث متجهي وهجين | خادم | [المصدر](https://github.com/weaviate/weaviate) |
| Milvus | قاعدة بيانات متجهات واسعة | خادم | [المصدر](https://github.com/milvus-io/milvus) |
| Apache Arrow | تنسيق ومعالجة بيانات عمودية | برمجة | [المصدر](https://github.com/apache/arrow) |

## الأتمتة والتكاملات

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Activepieces | أتمتة مرئية مفتوحة | خادم/سحابي | [المصدر](https://github.com/activepieces/activepieces) |
| n8n | أتمتة وتكاملات واسعة؛ راجع ترخيصه المصدر-المتاح | خادم/سحابي | [المصدر](https://github.com/n8n-io/n8n) |
| Windmill | سكربتات وسير عمل وتطبيقات داخلية | خادم | [المصدر](https://github.com/windmill-labs/windmill) |
| Huginn | وكلاء يراقبون الويب وينفذون أحداثًا | خادم | [المصدر](https://github.com/huginn/huginn) |
| Node-RED | أتمتة مرئية للأجهزة وAPIs | محلي/خادم | [المصدر](https://github.com/node-red/node-red) |
| Temporal | تنسيق عمليات موثوقة طويلة | خادم | [المصدر](https://github.com/temporalio/temporal) |
| Prefect | سير عمل بيانات Python | محلي/خادم | [المصدر](https://github.com/PrefectHQ/prefect) |
| Dagster | تنسيق بيانات وأصول | محلي/خادم | [المصدر](https://github.com/dagster-io/dagster) |
| Kestra | تنسيق سير عمل بالتصريحات | خادم | [المصدر](https://github.com/kestra-io/kestra) |
| Apache Airflow | جدولة خطوط البيانات | خادم | [المصدر](https://github.com/apache/airflow) |
| Trigger.dev | مهام خلفية وسير عمل TypeScript | خادم/سحابي | [المصدر](https://github.com/triggerdotdev/trigger.dev) |
| Argo Workflows | سير عمل Kubernetes | خادم | [المصدر](https://github.com/argoproj/argo-workflows) |
| Apache Camel | تكامل أنظمة ورسائل | برمجة/خادم | [المصدر](https://github.com/apache/camel) |
| OpenFaaS | دوال ذاتية الاستضافة | خادم | [المصدر](https://github.com/openfaas/faas) |
| Knative | حوسبة serverless على Kubernetes | خادم | [المصدر](https://github.com/knative/serving) |

## واتساب والمبيعات وخدمة العملاء

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Meta WhatsApp Cloud API | الطريقة الرسمية للإرسال والقوالب وWebhooks | خدمة رسمية | [المصدر](https://developers.facebook.com/docs/whatsapp/cloud-api/) |
| Chatwoot | صندوق موحد ودعم عملاء مع تكامل واتساب الرسمي | خادم/سحابي | [المصدر](https://github.com/chatwoot/chatwoot) |
| Zammad | نظام تذاكر وخدمة عملاء | خادم | [المصدر](https://github.com/zammad/zammad) |
| FreeScout | Helpdesk خفيف للبريد والدعم | خادم | [المصدر](https://github.com/freescout-helpdesk/freescout) |
| GLPI | خدمة ودعم وأصول وتذاكر | خادم | [المصدر](https://github.com/glpi-project/glpi) |
| UVdesk Community | نظام دعم وتذاكر | خادم | [المصدر](https://github.com/uvdesk/community-skeleton) |
| Typebot | نماذج محادثية وتأهيل عملاء | خادم/سحابي | [المصدر](https://github.com/baptisteArno/typebot.io) |
| Rasa | مساعدات محادثية قابلة للتخصيص | خادم/برمجة | [المصدر](https://github.com/RasaHQ/rasa) |
| Botpress | بناء مساعدين؛ راجع شروط الإصدار الحالي | خادم/سحابي | [المصدر](https://github.com/botpress/botpress) |
| Langflow | تدفقات مساعدين وLLM مرئية | محلي/خادم | [المصدر](https://github.com/langflow-ai/langflow) |
| Flowise | تدفقات LLM ووكلاء مرئية | محلي/خادم | [المصدر](https://github.com/FlowiseAI/Flowise) |

## التجارة الإلكترونية والبيانات ونجاح العميل

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Medusa | منصة تجارة Headless | خادم | [المصدر](https://github.com/medusajs/medusa) |
| Saleor | تجارة GraphQL | خادم | [المصدر](https://github.com/saleor/saleor) |
| Vendure | تجارة TypeScript Headless | خادم | [المصدر](https://github.com/vendure-ecommerce/vendure) |
| WooCommerce | متجر على WordPress | خادم | [المصدر](https://github.com/woocommerce/woocommerce) |
| PrestaShop | متجر إلكتروني كامل | خادم | [المصدر](https://github.com/PrestaShop/PrestaShop) |
| Magento Open Source | تجارة واسعة وقابلة للتخصيص | خادم قوي | [المصدر](https://github.com/magento/magento2) |
| Bagisto | تجارة Laravel | خادم | [المصدر](https://github.com/bagisto/bagisto) |
| Sylius | إطار تجارة Symfony | خادم/برمجة | [المصدر](https://github.com/Sylius/Sylius) |
| Shopware | منصة تجارة | خادم | [المصدر](https://github.com/shopware/shopware) |
| Solidus | تجارة Ruby | خادم | [المصدر](https://github.com/solidusio/solidus) |
| Spree Commerce | تجارة Ruby Headless | خادم | [المصدر](https://github.com/spree/spree) |
| Grafana | لوحات ومراقبة | خادم | [المصدر](https://github.com/grafana/grafana) |
| Redash | استعلام ولوحات بيانات | خادم | [المصدر](https://github.com/getredash/redash) |
| Lightdash | ذكاء أعمال فوق dbt | خادم | [المصدر](https://github.com/lightdash/lightdash) |
| Evidence | تقارير بيانات ككود | محلي/خادم | [المصدر](https://github.com/evidence-dev/evidence) |
| Apache ECharts | رسوم ولوحات تفاعلية | برمجة | [المصدر](https://github.com/apache/echarts) |
| dbt Core | تحويل ونمذجة البيانات | محلي/خادم | [المصدر](https://github.com/dbt-labs/dbt-core) |
| Meltano | تكامل ونقل وتحويل بيانات | محلي/خادم | [المصدر](https://github.com/meltano/meltano) |
| dlt | تحميل بيانات باستخدام Python | برمجة | [المصدر](https://github.com/dlt-hub/dlt) |

## الذكاء الاصطناعي المحلي والوكلاء وMCP

| الأداة | الاستخدام الأساسي | التشغيل | المصدر الرسمي |
|---|---|---|---|
| Ollama | تشغيل نماذج محلية بسهولة | محلي/خادم | [المصدر](https://github.com/ollama/ollama) |
| llama.cpp | تشغيل نماذج GGUF على أجهزة متعددة | محلي | [المصدر](https://github.com/ggml-org/llama.cpp) |
| vLLM | خدمة نماذج عالية الأداء | خادم GPU | [المصدر](https://github.com/vllm-project/vllm) |
| LangChain | بناء تطبيقات ووكلاء LLM | برمجة | [المصدر](https://github.com/langchain-ai/langchain) |
| LlamaIndex | بحث وربط البيانات بالنماذج | برمجة | [المصدر](https://github.com/run-llama/llama_index) |
| AutoGen | وكلاء متعددون من Microsoft | برمجة | [المصدر](https://github.com/microsoft/autogen) |
| CrewAI | تنسيق فرق وكلاء | برمجة | [المصدر](https://github.com/crewAIInc/crewAI) |
| Semantic Kernel | تنسيق AI ووكلاء من Microsoft | برمجة | [المصدر](https://github.com/microsoft/semantic-kernel) |
| Dify | منصة تطبيقات LLM وسير عمل | خادم | [المصدر](https://github.com/langgenius/dify) |
| Langflow | بناء تدفقات LLM مرئيًا | محلي/خادم | [المصدر](https://github.com/langflow-ai/langflow) |
| Flowise | بناء تدفقات ووكلاء مرئيًا | محلي/خادم | [المصدر](https://github.com/FlowiseAI/Flowise) |
| Open WebUI | واجهة للنماذج المحلية | محلي/خادم | [المصدر](https://github.com/open-webui/open-webui) |
| AnythingLLM | محادثة مع الملفات وقواعد المعرفة | محلي/خادم | [المصدر](https://github.com/Mintplex-Labs/anything-llm) |
| Browser Use | وكلاء تتفاعل مع المتصفح | برمجة/متصفح | [المصدر](https://github.com/browser-use/browser-use) |
| Playwright MCP | ربط الوكلاء بالمتصفح عبر MCP | محلي/خادم | [المصدر](https://github.com/microsoft/playwright-mcp) |
| MCP Servers | خوادم مرجعية لبروتوكول MCP | برمجة | [المصدر](https://github.com/modelcontextprotocol/servers) |
| FastMCP | بناء خوادم MCP في Python | برمجة | [المصدر](https://github.com/jlowin/fastmcp) |
| Open Interpreter | تنفيذ مهام على الكمبيوتر محليًا مع مراجعة | محلي | [المصدر](https://github.com/OpenInterpreter/open-interpreter) |
| Mem0 | ذاكرة للوكلاء والتطبيقات | برمجة/خادم | [المصدر](https://github.com/mem0ai/mem0) |

# قواعد خاصة بواتساب

- الإنتاج: Meta WhatsApp Cloud API أو مزود رسمي فقط.
- يمكن استخدام Chatwoot أو CRM كواجهة فوق القناة الرسمية.
- مكتبات تحاكي WhatsApp Web مثل Baileys وWPPConnect وopen-wa لا تُعتمد لرقم المشروع الرئيسي؛ قد تخالف الشروط وتعرض الرقم للحظر.
- الرسائل التسويقية تحتاج موافقة، قوالب معتمدة، وسياسة إلغاء واضحة.

# قاعدة الاكتشاف المستمر

عند عدم وجود أداة مناسبة في الدليل، يُبحث بهذا الترتيب:
1. التوثيق الرسمي أو مستودع الجهة نفسها.
2. GitHub مع فحص النشاط والإصدارات والقضايا والترخيص.
3. القوائم المختارة مثل Awesome Selfhosted وAwesome Agent Skills.
4. مقارنة أبسط بديل جاهز مع بديل مفتوح المصدر قبل التوصية.
5. تسجيل الأداة الجديدة في الدليل مع تاريخ المراجعة وحالتها.

# المصادر المعتمدة

هذه المكتبة لا تنسخ أكواد أو ملفات أطراف ثالثة. تستخدم المصادر التالية كأساس مرجعي، ثم تقدم بطاقات تشغيل أصلية.

## SRC-AGENT-CURATED — VoltAgent Awesome Agent Skills
- النوع: `curated-index`
- الثقة: `A`
- الرابط: https://github.com/VoltAgent/awesome-agent-skills
- الملاحظة: فهرس مختار يدويًا لمهارات رسمية ومجتمعية من فرق معروفة.

## SRC-MKT-COREY — Corey Haines Marketing Skills
- النوع: `recognized-author`
- الثقة: `A`
- الرابط: https://github.com/coreyhaines31/marketingskills
- الملاحظة: مهارات تسويق عملية تشمل SEO والكتابة وCRO والإعلانات والتسعير.

## SRC-ADS-KIM — Kim Barrett Advertising Skills
- النوع: `recognized-author`
- الثقة: `A`
- الرابط: https://github.com/realkimbarrett/advertising-skills
- الملاحظة: مهارات إعلانات مباشرة وبناء عروض ورسائل وحملات.

## SRC-PM-DEAN — Dean Peters Product Manager Skills
- النوع: `recognized-author`
- الثقة: `A`
- الرابط: https://github.com/deanpeters/Product-Manager-Skills
- الملاحظة: أطر عملية لإدارة المنتج والبحث والسوق والمقاييس.

## SRC-ANTHROPIC — Anthropic Agent Skills
- النوع: `official-repository`
- الثقة: `A`
- الرابط: https://github.com/anthropics/skills
- الملاحظة: مهارات رسمية لإنشاء المستندات والتصميم والواجهات والاختبار.

## SRC-FIGMA — Figma Official Skill
- النوع: `official-skill`
- الثقة: `A`
- الرابط: https://officialskills.sh/figma/skills/figma-use
- الملاحظة: استخدام Figma للتفتيش والكتابة على اللوحة وإدارة أنظمة التصميم.

## SRC-STITCH — Google Labs Stitch Skills
- النوع: `official-skill-family`
- الثقة: `A`
- الرابط: https://officialskills.sh/google-labs-code/skills/design-md
- الملاحظة: تحسين أوامر التصميم وتحويل التصاميم إلى مكونات وتكرار التصميم.

## SRC-WEB-QUALITY — Addy Osmani Web Quality Skills
- النوع: `recognized-author`
- الثقة: `A`
- الرابط: https://officialskills.sh/addyosmani/skills/web-quality-audit
- الملاحظة: أداء وإتاحة وSEO ومؤشرات الويب الأساسية وأفضل الممارسات.

## SRC-FAL — fal.ai Agent Skills
- النوع: `official-skill-family`
- الثقة: `A`
- الرابط: https://officialskills.sh/fal-ai-community/skills/fal-generate
- الملاحظة: توليد وتعديل الصور والفيديو والصوت والمزامنة والترميم.

## SRC-REMOTION — Remotion Agent Skill
- النوع: `official-skill`
- الثقة: `A`
- الرابط: https://officialskills.sh/remotion-dev/skills/remotion
- الملاحظة: إنشاء الفيديو برمجيًا باستخدام React.

## SRC-REPLICATE — Replicate Agent Skill
- النوع: `official-skill`
- الثقة: `A`
- الرابط: https://officialskills.sh/replicate/skills/replicate
- الملاحظة: اكتشاف وتشغيل ومقارنة نماذج الذكاء الاصطناعي.

## SRC-VENICE — Venice.ai Skills
- النوع: `official-repository`
- الثقة: `A`
- الرابط: https://github.com/veniceai/skills
- الملاحظة: مهارات للصورة والصوت والفيديو والنماذج والبحث.

## SRC-GWS — Google Workspace Developer Platform
- النوع: `official-docs`
- الثقة: `A`
- الرابط: https://developers.google.com/workspace
- الملاحظة: تكاملات Gmail وDrive وSheets وCalendar وDocs وForms.

## SRC-N8N — n8n Documentation
- النوع: `official-docs`
- الثقة: `A`
- الرابط: https://docs.n8n.io/
- الملاحظة: تصميم وتشغيل واختبار ومراقبة سير العمل الآلي.

## SRC-META-WA — Meta WhatsApp Cloud API
- النوع: `official-docs`
- الثقة: `A`
- الرابط: https://developers.facebook.com/docs/whatsapp/cloud-api/
- الملاحظة: المصدر الرسمي لتكامل واتساب للأعمال والقوالب والرسائل وWebhooks.

## SRC-SALLA — Salla Platform Documentation
- النوع: `official-docs`
- الثقة: `A`
- الرابط: https://docs.salla.dev/
- الملاحظة: واجهات سلة وWebhooks والطلبات والعملاء والمنتجات والاتصالات.

## SRC-STRIPE — Stripe Agent Skills
- النوع: `official-skill`
- الثقة: `A`
- الرابط: https://officialskills.sh/stripe/skills/stripe-best-practices
- الملاحظة: أفضل ممارسات المدفوعات والتكاملات.

## SRC-OWASP — OWASP
- النوع: `official-standard`
- الثقة: `A`
- الرابط: https://owasp.org/
- الملاحظة: ممارسات أمن التطبيقات والتهديدات الشائعة.

## SRC-W3C — W3C Web Accessibility Initiative
- النوع: `official-standard`
- الثقة: `A`
- الرابط: https://www.w3.org/WAI/
- الملاحظة: معايير وإرشادات إتاحة الويب.

## SRC-GITHUB — GitHub Documentation
- النوع: `official-docs`
- الثقة: `A`
- الرابط: https://docs.github.com/
- الملاحظة: المستودعات والإجراءات والاختبارات والمراجعات والنشر.

## SRC-TYPEFULLY — Typefully Agent Skill
- النوع: `official-skill`
- الثقة: `A`
- الرابط: https://officialskills.sh/typefully/skills/typefully
- الملاحظة: إنشاء وجدولة ونشر المحتوى الاجتماعي.

## SRC-RESEND — Resend Skills
- النوع: `official-repository`
- الثقة: `A`
- الرابط: https://github.com/resend/resend-skills
- الملاحظة: إرسال البريد وبناء القوالب البريدية.


---

# مكتبة Minai للمهارات — الإصدار 1.0
عدد المهارات: **650** موزعة على **13 مجالًا**. هذه بطاقات تشغيل أصلية مبنية على مصادر رسمية ومختارة، وليست نسخًا من أكواد الطرف الثالث.
> ملاحظة: GitHub لا يوفّر تقييمًا منفصلًا لكل ملف مهارة. لذلك التصنيف هنا يعتمد على موثوقية المصدر ووضوح التوثيق وملاءمة الاستخدام، وليس على ادعاء وجود تقييم مستخدم لكل مهارة.

## استراتيجية التسويق والنمو
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | تقسيم السوق | `market-segmentation` | `SRC-MKT-COREY` | `B-synthesized` |
| 2 | بناء العميل المثالي | `ideal-customer-profile` | `SRC-ADS-KIM` | `B-synthesized` |
| 3 | تحليل الوظائف المطلوب إنجازها | `jobs-to-be-done` | `SRC-PM-DEAN` | `A-direct` |
| 4 | استخراج آلام العملاء | `customer-pain-mining` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 5 | صياغة عرض القيمة | `value-proposition` | `SRC-MKT-COREY` | `B-synthesized` |
| 6 | تموضع العلامة | `brand-positioning` | `SRC-ADS-KIM` | `B-synthesized` |
| 7 | تصميم الفئة السوقية | `category-design` | `SRC-PM-DEAN` | `B-synthesized` |
| 8 | تحليل المشهد التنافسي | `competitive-landscape` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 9 | صفحات البدائل والمقارنات | `competitor-alternatives` | `SRC-MKT-COREY` | `A-direct` |
| 10 | استراتيجية دخول السوق | `market-entry-strategy` | `SRC-ADS-KIM` | `B-synthesized` |
| 11 | خطة الذهاب إلى السوق | `go-to-market-plan` | `SRC-PM-DEAN` | `B-synthesized` |
| 12 | استراتيجية الإطلاق | `launch-strategy` | `SRC-MKT-COREY` | `A-direct` |
| 13 | بناء العرض التجاري | `offer-design` | `SRC-MKT-COREY` | `B-synthesized` |
| 14 | تركيب مكونات العرض | `offer-stack` | `SRC-ADS-KIM` | `B-synthesized` |
| 15 | بناء الآلية الفريدة | `unique-mechanism` | `SRC-PM-DEAN` | `B-synthesized` |
| 16 | استراتيجية التسعير | `pricing-strategy` | `SRC-MKT-COREY` | `A-direct` |
| 17 | تغليف الباقات والأسعار | `pricing-packaging` | `SRC-MKT-COREY` | `B-synthesized` |
| 18 | هندسة مرساة السعر | `price-anchoring` | `SRC-ADS-KIM` | `B-synthesized` |
| 19 | استراتيجية الخصومات | `discount-strategy` | `SRC-PM-DEAN` | `B-synthesized` |
| 20 | تصميم قمع المبيعات | `sales-funnel-design` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 21 | خريطة رحلة العميل | `customer-journey-map` | `SRC-PM-DEAN` | `A-direct` |
| 22 | اختيار قنوات الاستحواذ | `acquisition-channel-selection` | `SRC-ADS-KIM` | `B-synthesized` |
| 23 | تصميم حلقات النمو | `growth-loop-design` | `SRC-PM-DEAN` | `B-synthesized` |
| 24 | برنامج الإحالة | `referral-program` | `SRC-MKT-COREY` | `A-direct` |
| 25 | برنامج التسويق بالعمولة | `affiliate-program` | `SRC-MKT-COREY` | `B-synthesized` |
| 26 | استراتيجية الشراكات | `partnership-strategy` | `SRC-ADS-KIM` | `B-synthesized` |
| 27 | النمو عبر المجتمع | `community-led-growth` | `SRC-PM-DEAN` | `B-synthesized` |
| 28 | النمو القائم على المنتج | `product-led-growth` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 29 | تسويق دورة حياة العميل | `lifecycle-marketing` | `SRC-MKT-COREY` | `B-synthesized` |
| 30 | استراتيجية تفعيل العميل | `activation-strategy` | `SRC-ADS-KIM` | `B-synthesized` |
| 31 | استراتيجية التهيئة | `onboarding-strategy` | `SRC-PM-DEAN` | `B-synthesized` |
| 32 | استراتيجية الاحتفاظ | `retention-strategy` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 33 | منع التسرب | `churn-prevention` | `SRC-MKT-COREY` | `A-direct` |
| 34 | حملات استعادة العملاء | `win-back-campaign` | `SRC-ADS-KIM` | `B-synthesized` |
| 35 | البيع الإضافي والمتقاطع | `upsell-cross-sell` | `SRC-PM-DEAN` | `B-synthesized` |
| 36 | تحويل العملاء إلى سفراء | `customer-advocacy` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 37 | تقدير حجم السوق | `market-sizing` | `SRC-MKT-COREY` | `B-synthesized` |
| 38 | التحقق من الطلب | `demand-validation` | `SRC-ADS-KIM` | `B-synthesized` |
| 39 | ملاءمة الرسالة للسوق | `message-market-fit` | `SRC-PM-DEAN` | `B-synthesized` |
| 40 | إعداد موجز الحملة | `campaign-brief` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 41 | التقويم التسويقي | `marketing-calendar` | `SRC-MKT-COREY` | `B-synthesized` |
| 42 | توزيع الميزانية التسويقية | `marketing-budget-allocation` | `SRC-ADS-KIM` | `B-synthesized` |
| 43 | اقتصاديات القنوات | `channel-economics` | `SRC-PM-DEAN` | `B-synthesized` |
| 44 | تحليل تكلفة الاستحواذ والقيمة العمرية | `cac-ltv-analysis` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 45 | شجرة مؤشرات التسويق | `marketing-kpi-tree` | `SRC-MKT-COREY` | `B-synthesized` |
| 46 | قائمة تجارب النمو | `marketing-experiment-backlog` | `SRC-ADS-KIM` | `B-synthesized` |
| 47 | تخطيط اختبارات A/B | `ab-test-planning` | `SRC-PM-DEAN` | `B-synthesized` |
| 48 | مراجعة النمو | `growth-review` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 49 | استراتيجية نمو العلامة | `brand-growth-strategy` | `SRC-MKT-COREY` | `B-synthesized` |
| 50 | توطين التسويق للسوق السعودي | `saudi-market-localization` | `SRC-ADS-KIM` | `B-synthesized` |

## المحتوى وSEO والإعلانات
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | استراتيجية المحتوى | `content-strategy` | `SRC-MKT-COREY` | `A-direct` |
| 2 | بناء أعمدة المحتوى | `content-pillars` | `SRC-ADS-KIM` | `B-synthesized` |
| 3 | تقويم المحتوى | `content-calendar` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 4 | استخراج لغة الجمهور | `audience-language-mining` | `SRC-TYPEFULLY` | `B-synthesized` |
| 5 | إعداد موجز المحتوى | `content-brief` | `SRC-RESEND` | `B-synthesized` |
| 6 | خريطة العناقيد الموضوعية | `topic-cluster-map` | `SRC-MKT-COREY` | `B-synthesized` |
| 7 | بحث الكلمات المفتاحية | `keyword-research` | `SRC-ADS-KIM` | `B-synthesized` |
| 8 | تحليل نية البحث | `search-intent-analysis` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 9 | تدقيق محركات البحث | `seo-audit` | `SRC-MKT-COREY` | `A-direct` |
| 10 | تحسين SEO التقني | `technical-seo` | `SRC-RESEND` | `B-synthesized` |
| 11 | تحسين SEO داخل الصفحة | `on-page-seo` | `SRC-MKT-COREY` | `B-synthesized` |
| 12 | هندسة الروابط الداخلية | `internal-linking` | `SRC-ADS-KIM` | `B-synthesized` |
| 13 | البيانات المنظمة | `schema-markup` | `SRC-MKT-COREY` | `A-direct` |
| 14 | SEO البرمجي | `programmatic-seo` | `SRC-MKT-COREY` | `A-direct` |
| 15 | SEO المحلي | `local-seo` | `SRC-RESEND` | `B-synthesized` |
| 16 | الظهور في إجابات الذكاء الاصطناعي | `ai-search-optimization` | `SRC-MKT-COREY` | `B-synthesized` |
| 17 | تحديث المحتوى القديم | `content-refresh` | `SRC-ADS-KIM` | `B-synthesized` |
| 18 | تحليل فجوات المحتوى | `content-gap-analysis` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 19 | تحليل منافسي نتائج البحث | `serp-competitor-analysis` | `SRC-TYPEFULLY` | `B-synthesized` |
| 20 | فحص الجودة التحريرية | `editorial-quality-check` | `SRC-RESEND` | `B-synthesized` |
| 21 | الكتابة الإعلانية | `copywriting` | `SRC-MKT-COREY` | `A-direct` |
| 22 | تحرير النصوص التسويقية | `copy-editing` | `SRC-MKT-COREY` | `A-direct` |
| 23 | نصوص صفحات الهبوط | `landing-page-copy` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 24 | نصوص صفحات المنتجات | `product-page-copy` | `SRC-TYPEFULLY` | `B-synthesized` |
| 25 | مصفوفة العناوين | `headline-matrix` | `SRC-ADS-KIM` | `A-direct` |
| 26 | توليد الخطافات | `hook-generation` | `SRC-MKT-COREY` | `B-synthesized` |
| 27 | السرد القصصي التسويقي | `storytelling` | `SRC-ADS-KIM` | `B-synthesized` |
| 28 | معالجة الاعتراضات بالنص | `objection-handling-copy` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 29 | صياغة الدعوات للإجراء | `call-to-action-design` | `SRC-TYPEFULLY` | `B-synthesized` |
| 30 | تسلسل البريد الإلكتروني | `email-sequence` | `SRC-MKT-COREY` | `A-direct` |
| 31 | استراتيجية النشرة البريدية | `newsletter-strategy` | `SRC-MKT-COREY` | `B-synthesized` |
| 32 | البريد البارد | `cold-email` | `SRC-MKT-COREY` | `A-direct` |
| 33 | محتوى الشبكات الاجتماعية | `social-content` | `SRC-MKT-COREY` | `A-direct` |
| 34 | نصوص الفيديو القصير | `short-form-script` | `SRC-TYPEFULLY` | `B-synthesized` |
| 35 | نصوص الفيديو الطويل | `long-form-script` | `SRC-RESEND` | `B-synthesized` |
| 36 | نصوص محتوى المستخدم | `ugc-script` | `SRC-MKT-COREY` | `B-synthesized` |
| 37 | الإبداع الإعلاني | `ad-creative` | `SRC-MKT-COREY` | `A-direct` |
| 38 | توسيع زوايا الإعلان | `ad-angle-multiplier` | `SRC-ADS-KIM` | `A-direct` |
| 39 | إدارة الإعلانات المدفوعة | `paid-ads` | `SRC-MKT-COREY` | `A-direct` |
| 40 | هيكلة إعلانات Google | `google-ads-structure` | `SRC-RESEND` | `B-synthesized` |
| 41 | هيكلة إعلانات Meta | `meta-ads-structure` | `SRC-MKT-COREY` | `B-synthesized` |
| 42 | اختبار المواد الإبداعية | `creative-testing` | `SRC-ADS-KIM` | `B-synthesized` |
| 43 | تحليل شراء الوسائط | `media-buying-analysis` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 44 | تتبع الحملات | `campaign-tracking` | `SRC-TYPEFULLY` | `B-synthesized` |
| 45 | إعداد التحليلات | `analytics-tracking` | `SRC-MKT-COREY` | `A-direct` |
| 46 | إسناد التحويلات | `conversion-attribution` | `SRC-MKT-COREY` | `B-synthesized` |
| 47 | تشخيص أداء الحملات | `performance-diagnosis` | `SRC-ADS-KIM` | `A-direct` |
| 48 | إعادة توظيف المحتوى | `content-repurposing` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 49 | توطين المحتوى العربي | `arabic-content-localization` | `SRC-TYPEFULLY` | `B-synthesized` |
| 50 | مراجعة الادعاءات والامتثال | `compliance-claims-review` | `SRC-RESEND` | `B-synthesized` |

## التصميم والهوية البصرية
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | موجز استراتيجية العلامة | `brand-strategy-brief` | `SRC-ANTHROPIC` | `B-synthesized` |
| 2 | نظام الهوية البصرية | `visual-identity-system` | `SRC-FIGMA` | `B-synthesized` |
| 3 | ابتكار مفاهيم الشعار | `logo-concepting` | `SRC-STITCH` | `B-synthesized` |
| 4 | نقد الشعار | `logo-critique` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 5 | دليل استخدام الشعار | `logo-usage-guidelines` | `SRC-ANTHROPIC` | `B-synthesized` |
| 6 | تصميم لوحة الألوان | `color-palette-design` | `SRC-FIGMA` | `B-synthesized` |
| 7 | إتاحة الألوان | `color-accessibility` | `SRC-STITCH` | `B-synthesized` |
| 8 | نظام الخطوط | `typography-system` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 9 | الخطوط العربية | `arabic-typography` | `SRC-ANTHROPIC` | `B-synthesized` |
| 10 | رموز التصميم | `design-tokens` | `SRC-FIGMA` | `B-synthesized` |
| 11 | دليل العلامة التجارية | `brand-guidelines` | `SRC-STITCH` | `B-synthesized` |
| 12 | التوجيه الفني | `art-direction` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 13 | إنشاء لوحة المزاج | `moodboard-creation` | `SRC-ANTHROPIC` | `B-synthesized` |
| 14 | تحليل المراجع البصرية | `visual-reference-analysis` | `SRC-FIGMA` | `B-synthesized` |
| 15 | تكوين التخطيط | `layout-composition` | `SRC-STITCH` | `B-synthesized` |
| 16 | التسلسل البصري | `visual-hierarchy` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 17 | نظام الشبكات | `grid-system` | `SRC-ANTHROPIC` | `B-synthesized` |
| 18 | نظام الأيقونات | `icon-system` | `SRC-FIGMA` | `B-synthesized` |
| 19 | أسلوب الرسوم | `illustration-style` | `SRC-STITCH` | `B-synthesized` |
| 20 | توجيه التصوير | `photography-direction` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 21 | موجز تصوير المنتج | `product-photography-brief` | `SRC-ANTHROPIC` | `B-synthesized` |
| 22 | موجز تصميم العبوة | `packaging-design-brief` | `SRC-FIGMA` | `B-synthesized` |
| 23 | مراجعة تصميم الملصق | `label-design-review` | `SRC-STITCH` | `B-synthesized` |
| 24 | نظام قوالب التواصل | `social-template-system` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 25 | المرئي الرئيسي للحملة | `campaign-key-visual` | `SRC-ANTHROPIC` | `B-synthesized` |
| 26 | تصميم العروض | `presentation-design` | `SRC-FIGMA` | `B-synthesized` |
| 27 | تصميم المستندات | `document-design` | `SRC-STITCH` | `B-synthesized` |
| 28 | تصميم الإنفوجرافيك | `infographic-design` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 29 | تصميم عرض البيانات | `data-visualization-design` | `SRC-ANTHROPIC` | `B-synthesized` |
| 30 | تصميم الملصقات | `poster-design` | `SRC-FIGMA` | `B-synthesized` |
| 31 | تصميم الكتيبات | `brochure-design` | `SRC-STITCH` | `B-synthesized` |
| 32 | تصميم البريد الإلكتروني | `email-design` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 33 | التصميم البصري لصفحة الهبوط | `landing-page-visual-design` | `SRC-ANTHROPIC` | `B-synthesized` |
| 34 | التصميم للجوال أولًا | `mobile-first-design` | `SRC-FIGMA` | `B-synthesized` |
| 35 | مراجعة التصميم المتجاوب | `responsive-design-review` | `SRC-STITCH` | `B-synthesized` |
| 36 | تدقيق اتساق التصميم | `design-consistency-audit` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 37 | تدقيق اتساق العلامة | `brand-consistency-audit` | `SRC-ANTHROPIC` | `B-synthesized` |
| 38 | ضمان جودة التصميم | `design-qa` | `SRC-FIGMA` | `B-synthesized` |
| 39 | تنظيم وتسميات الأصول | `asset-naming-organization` | `SRC-STITCH` | `B-synthesized` |
| 40 | تسليم التصميم للتنفيذ | `design-handoff` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 41 | نظام مكونات Figma | `figma-component-system` | `SRC-ANTHROPIC` | `B-synthesized` |
| 42 | متغيرات Figma | `figma-variables` | `SRC-FIGMA` | `B-synthesized` |
| 43 | حركة النماذج الأولية | `prototype-motion` | `SRC-STITCH` | `B-synthesized` |
| 44 | تصميم التفاعلات الدقيقة | `micro-interaction-design` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 45 | تصميم الحالات الفارغة | `empty-state-design` | `SRC-ANTHROPIC` | `B-synthesized` |
| 46 | تصميم حالات الخطأ | `error-state-design` | `SRC-FIGMA` | `B-synthesized` |
| 47 | تصميم الطابع الفاخر | `premium-luxury-style` | `SRC-STITCH` | `B-synthesized` |
| 48 | تصميم الطابع البسيط | `minimalist-style` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 49 | التصميم المتوافق مع الثقافة السعودية | `saudi-cultural-design` | `SRC-ANTHROPIC` | `B-synthesized` |
| 50 | ورشة نقد التصميم | `design-critique-workshop` | `SRC-FIGMA` | `B-synthesized` |

## توليد الفيديو بالذكاء الاصطناعي
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | كتابة أوامر النص إلى فيديو | `text-to-video-prompting` | `SRC-FAL` | `B-synthesized` |
| 2 | كتابة أوامر الصورة إلى فيديو | `image-to-video-prompting` | `SRC-REMOTION` | `B-synthesized` |
| 3 | اختيار نموذج توليد الفيديو | `video-model-selection` | `SRC-REPLICATE` | `B-synthesized` |
| 4 | تصميم اللقطة السينمائية | `cinematic-shot-design` | `SRC-VENICE` | `B-synthesized` |
| 5 | أوامر حركة الكاميرا | `camera-movement-prompting` | `SRC-FAL` | `B-synthesized` |
| 6 | ثبات الشخصية | `character-consistency` | `SRC-REMOTION` | `B-synthesized` |
| 7 | ثبات ملامح الوجه | `face-consistency` | `SRC-REPLICATE` | `B-synthesized` |
| 8 | ثبات الملابس | `wardrobe-consistency` | `SRC-VENICE` | `B-synthesized` |
| 9 | ثبات المشهد | `scene-consistency` | `SRC-FAL` | `B-synthesized` |
| 10 | ثبات الأسلوب | `style-consistency` | `SRC-REMOTION` | `B-synthesized` |
| 11 | توليد لوحة القصة | `storyboard-generation` | `SRC-REPLICATE` | `B-synthesized` |
| 12 | توليد قائمة اللقطات | `shot-list-generation` | `SRC-VENICE` | `B-synthesized` |
| 13 | كتابة النص البصري | `visual-script` | `SRC-FAL` | `B-synthesized` |
| 14 | توسيع أمر الفيديو | `prompt-expansion` | `SRC-REMOTION` | `B-synthesized` |
| 15 | اختصار أمر الفيديو | `prompt-compression` | `SRC-REPLICATE` | `B-synthesized` |
| 16 | الأوامر السلبية | `negative-prompting` | `SRC-VENICE` | `B-synthesized` |
| 17 | التحكم بالحركة | `motion-control` | `SRC-FAL` | `B-synthesized` |
| 18 | التحكم بالوضعية | `pose-control` | `SRC-REMOTION` | `B-synthesized` |
| 19 | التحكم بتعبيرات الوجه | `expression-control` | `SRC-REPLICATE` | `B-synthesized` |
| 20 | مزامنة الشفاه | `lip-sync` | `SRC-FAL` | `A-direct` |
| 21 | إنشاء شخصية متحدثة | `talking-avatar` | `SRC-FAL` | `B-synthesized` |
| 22 | سير عمل استنساخ الصوت | `voice-cloning-workflow` | `SRC-REMOTION` | `B-synthesized` |
| 23 | تحويل النص إلى صوت | `text-to-speech` | `SRC-REPLICATE` | `B-synthesized` |
| 24 | تحويل الصوت إلى فيديو | `speech-to-video` | `SRC-VENICE` | `B-synthesized` |
| 25 | فيديو استعراض المنتج | `product-demo-video` | `SRC-FAL` | `B-synthesized` |
| 26 | فيديو إعلان UGC | `ugc-ad-video` | `SRC-REMOTION` | `B-synthesized` |
| 27 | فيديو توضيحي | `explainer-video` | `SRC-REPLICATE` | `B-synthesized` |
| 28 | فيديو تعليمي | `educational-video` | `SRC-VENICE` | `B-synthesized` |
| 29 | توليد ريلز اجتماعية | `social-reel-generation` | `SRC-FAL` | `B-synthesized` |
| 30 | توليد إعلان قصير | `short-ad-generation` | `SRC-REMOTION` | `B-synthesized` |
| 31 | توليد فيديو طويل | `long-form-video-generation` | `SRC-REPLICATE` | `B-synthesized` |
| 32 | توليد لقطات مساندة | `b-roll-generation` | `SRC-VENICE` | `B-synthesized` |
| 33 | مقدم افتراضي | `virtual-presenter` | `SRC-FAL` | `B-synthesized` |
| 34 | إنسان رقمي | `digital-human` | `SRC-REMOTION` | `B-synthesized` |
| 35 | فيديو التجربة الافتراضية | `virtual-try-on-video` | `SRC-REPLICATE` | `B-synthesized` |
| 36 | تحريك الصور | `image-animation` | `SRC-VENICE` | `B-synthesized` |
| 37 | تحريك الشعار | `logo-animation` | `SRC-FAL` | `B-synthesized` |
| 38 | ملصق متحرك | `motion-poster` | `SRC-REMOTION` | `B-synthesized` |
| 39 | نقل أسلوب الفيديو | `video-style-transfer` | `SRC-REPLICATE` | `B-synthesized` |
| 40 | ترميم الفيديو | `video-restoration` | `SRC-FAL` | `A-direct` |
| 41 | رفع دقة الفيديو | `video-upscaling` | `SRC-FAL` | `A-direct` |
| 42 | استبدال الخلفية | `background-replacement` | `SRC-REMOTION` | `B-synthesized` |
| 43 | إزالة عناصر من الفيديو | `object-removal-video` | `SRC-REPLICATE` | `B-synthesized` |
| 44 | تمديد الفيديو | `video-extension` | `SRC-VENICE` | `B-synthesized` |
| 45 | توليد الإطارات الوسيطة | `frame-interpolation` | `SRC-FAL` | `B-synthesized` |
| 46 | استمرارية اللقطات المتعددة | `multi-shot-continuity` | `SRC-REMOTION` | `B-synthesized` |
| 47 | تقدير تكلفة توليد الفيديو | `ai-video-cost-estimation` | `SRC-REPLICATE` | `B-synthesized` |
| 48 | فحص جودة الفيديو المولد | `ai-video-quality-qa` | `SRC-VENICE` | `B-synthesized` |
| 49 | مراجعة سلامة الفيديو | `ai-video-safety-review` | `SRC-FAL` | `B-synthesized` |
| 50 | فيديو شخصية عربية واقعية | `arabic-avatar-video` | `SRC-REMOTION` | `B-synthesized` |

## مونتاج الفيديو والموشن
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | خطة المونتاج | `edit-plan` | `SRC-REMOTION` | `B-synthesized` |
| 2 | اختيار وتجميع اللقطات | `selects-assembly` | `SRC-FAL` | `B-synthesized` |
| 3 | المونتاج الأولي | `rough-cut` | `SRC-VENICE` | `B-synthesized` |
| 4 | المونتاج النهائي | `fine-cut` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 5 | الإيقاع والسرعة | `pacing-rhythm` | `SRC-REMOTION` | `B-synthesized` |
| 6 | تصميم القطع السريع | `jump-cut-design` | `SRC-FAL` | `B-synthesized` |
| 7 | مونتاج الاستمرارية | `continuity-editing` | `SRC-VENICE` | `B-synthesized` |
| 8 | المونتاج القصصي | `story-editing` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 9 | مونتاج الفيديو القصير | `short-form-editing` | `SRC-REMOTION` | `B-synthesized` |
| 10 | مونتاج الفيديو الطويل | `long-form-editing` | `SRC-FAL` | `B-synthesized` |
| 11 | مونتاج البودكاست | `podcast-editing` | `SRC-VENICE` | `B-synthesized` |
| 12 | مونتاج المقابلات | `interview-editing` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 13 | مونتاج فيديو المنتج | `product-video-editing` | `SRC-REMOTION` | `B-synthesized` |
| 14 | مونتاج محتوى UGC | `ugc-editing` | `SRC-FAL` | `B-synthesized` |
| 15 | مونتاج الإعلانات | `ad-editing` | `SRC-VENICE` | `B-synthesized` |
| 16 | توزيع اللقطات المساندة | `b-roll-placement` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 17 | تصميم الترجمة | `caption-design` | `SRC-REMOTION` | `B-synthesized` |
| 18 | الترجمة العربية | `arabic-subtitles` | `SRC-FAL` | `B-synthesized` |
| 19 | توقيت الترجمة | `subtitle-timing` | `SRC-VENICE` | `B-synthesized` |
| 20 | تنظيف النص المفرغ | `transcript-cleanup` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 21 | تنظيف الصوت | `audio-cleanup` | `SRC-REMOTION` | `B-synthesized` |
| 22 | إزالة الضوضاء | `noise-reduction` | `SRC-FAL` | `B-synthesized` |
| 23 | موازنة الحوار | `dialogue-leveling` | `SRC-VENICE` | `B-synthesized` |
| 24 | اختيار الموسيقى | `music-selection` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 25 | تصميم الصوت | `sound-design` | `SRC-REMOTION` | `B-synthesized` |
| 26 | توزيع المؤثرات الصوتية | `sound-effects-placement` | `SRC-FAL` | `B-synthesized` |
| 27 | مونتاج التعليق الصوتي | `voiceover-editing` | `SRC-VENICE` | `B-synthesized` |
| 28 | تصحيح الألوان | `color-correction` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 29 | المعالجة اللونية | `color-grading` | `SRC-REMOTION` | `B-synthesized` |
| 30 | مطابقة ألوان البشرة | `skin-tone-matching` | `SRC-FAL` | `B-synthesized` |
| 31 | مطابقة اللقطات | `shot-matching` | `SRC-VENICE` | `B-synthesized` |
| 32 | تثبيت الصورة | `stabilization` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 33 | إعادة تأطير الفيديو | `reframing` | `SRC-REMOTION` | `B-synthesized` |
| 34 | تحويل الفيديو إلى عمودي | `vertical-video-conversion` | `SRC-FAL` | `B-synthesized` |
| 35 | تكييف أبعاد الفيديو | `aspect-ratio-adaptation` | `SRC-VENICE` | `B-synthesized` |
| 36 | الرسوم المتحركة | `motion-graphics` | `SRC-REMOTION` | `A-direct` |
| 37 | تصميم الشريط التعريفي | `lower-thirds` | `SRC-REMOTION` | `B-synthesized` |
| 38 | تحريك النصوص | `kinetic-typography` | `SRC-FAL` | `B-synthesized` |
| 39 | مقدمة وخاتمة الشعار | `logo-intro-outro` | `SRC-VENICE` | `B-synthesized` |
| 40 | تصميم الانتقالات | `transition-design` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 41 | تغيير سرعة اللقطات | `speed-ramping` | `SRC-REMOTION` | `B-synthesized` |
| 42 | الأقنعة والتركيب | `masking-compositing` | `SRC-FAL` | `B-synthesized` |
| 43 | تفريغ الشاشة الخضراء | `green-screen-keying` | `SRC-VENICE` | `B-synthesized` |
| 44 | مونتاج تسجيل الشاشة | `screen-recording-edit` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 45 | مونتاج الشروحات | `tutorial-editing` | `SRC-REMOTION` | `B-synthesized` |
| 46 | اختيار إطار الغلاف | `thumbnail-frame-selection` | `SRC-FAL` | `B-synthesized` |
| 47 | إعدادات التصدير | `export-settings` | `SRC-VENICE` | `B-synthesized` |
| 48 | التسليم حسب المنصة | `platform-delivery` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 49 | ضبط جودة المونتاج | `editing-quality-control` | `SRC-REMOTION` | `B-synthesized` |
| 50 | إدارة نسخ المونتاج | `edit-version-management` | `SRC-FAL` | `B-synthesized` |

## ريادة الأعمال والمنتج والتسعير
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | اكتشاف المشكلة | `problem-discovery` | `SRC-PM-DEAN` | `B-synthesized` |
| 2 | فرز الأفكار | `idea-screening` | `SRC-MKT-COREY` | `B-synthesized` |
| 3 | مقابلات العملاء | `customer-interviews` | `SRC-STRIPE` | `B-synthesized` |
| 4 | صياغة المشكلة | `problem-statement` | `SRC-PM-DEAN` | `A-direct` |
| 5 | فرضية الحل | `solution-hypothesis` | `SRC-PM-DEAN` | `B-synthesized` |
| 6 | لوحة نموذج العمل الرشيق | `lean-canvas` | `SRC-MKT-COREY` | `B-synthesized` |
| 7 | لوحة نموذج العمل | `business-model-canvas` | `SRC-STRIPE` | `B-synthesized` |
| 8 | تصميم نموذج العمل | `business-model-design` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 9 | حساب TAM وSAM وSOM | `market-sizing-tam-sam-som` | `SRC-PM-DEAN` | `B-synthesized` |
| 10 | بحث المنافسين | `competitor-research` | `SRC-MKT-COREY` | `B-synthesized` |
| 11 | بحث الشركات | `company-research` | `SRC-PM-DEAN` | `A-direct` |
| 12 | تحليل PESTEL | `pestel-analysis` | `SRC-PM-DEAN` | `A-direct` |
| 13 | تحليل SWOT | `swot-analysis` | `SRC-PM-DEAN` | `B-synthesized` |
| 14 | قوى بورتر الخمس | `five-forces` | `SRC-MKT-COREY` | `B-synthesized` |
| 15 | الوظائف المطلوبة للمنتج | `jobs-to-be-done-product` | `SRC-STRIPE` | `B-synthesized` |
| 16 | الشخصية الافتراضية | `proto-persona` | `SRC-PM-DEAN` | `A-direct` |
| 17 | رحلة العميل للمنتج | `customer-journey-product` | `SRC-PM-DEAN` | `B-synthesized` |
| 18 | تحديد المنتج الأولي | `mvp-definition` | `SRC-MKT-COREY` | `B-synthesized` |
| 19 | ضبط نطاق MVP | `mvp-scope-control` | `SRC-STRIPE` | `B-synthesized` |
| 20 | متطلبات المنتج | `product-requirements` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 21 | خارطة طريق المنتج | `product-roadmap` | `SRC-PM-DEAN` | `B-synthesized` |
| 22 | ترتيب أولويات الخصائص | `feature-prioritization` | `SRC-MKT-COREY` | `B-synthesized` |
| 23 | تقييم RICE | `rice-scoring` | `SRC-STRIPE` | `B-synthesized` |
| 24 | ترتيب MoSCoW | `moscow-prioritization` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 25 | قصة المستخدم | `user-story` | `SRC-PM-DEAN` | `A-direct` |
| 26 | معايير القبول | `acceptance-criteria` | `SRC-MKT-COREY` | `B-synthesized` |
| 27 | خريطة قصص المستخدم | `user-story-mapping` | `SRC-PM-DEAN` | `A-direct` |
| 28 | تصميم التجارب | `experiment-design` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 29 | اختبار الطلب | `demand-test` | `SRC-PM-DEAN` | `B-synthesized` |
| 30 | التحقق بصفحة هبوط | `landing-page-validation` | `SRC-MKT-COREY` | `B-synthesized` |
| 31 | التحقق بالطلب المسبق | `preorder-validation` | `SRC-STRIPE` | `B-synthesized` |
| 32 | قياس ملاءمة المنتج للسوق | `product-market-fit` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 33 | مؤشر النجم الشمالي | `north-star-metric` | `SRC-PM-DEAN` | `B-synthesized` |
| 34 | اقتصاديات الوحدة | `unit-economics` | `SRC-MKT-COREY` | `B-synthesized` |
| 35 | تحليل تكلفة الاستحواذ | `cac-analysis` | `SRC-STRIPE` | `B-synthesized` |
| 36 | تحليل القيمة العمرية | `ltv-analysis` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 37 | فترة استرداد التكلفة | `payback-period` | `SRC-PM-DEAN` | `B-synthesized` |
| 38 | تحليل نقطة التعادل | `break-even-analysis` | `SRC-MKT-COREY` | `B-synthesized` |
| 39 | خطة التدفق النقدي | `cash-flow-plan` | `SRC-STRIPE` | `B-synthesized` |
| 40 | نموذج الإيرادات | `revenue-model` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 41 | بحث التسعير | `pricing-research` | `SRC-PM-DEAN` | `B-synthesized` |
| 42 | قياس الاستعداد للدفع | `willingness-to-pay` | `SRC-MKT-COREY` | `B-synthesized` |
| 43 | تحليل فان ويستندورب | `van-westendorp` | `SRC-STRIPE` | `B-synthesized` |
| 44 | التفكير بالتحليل المشترك | `conjoint-thinking` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 45 | تصميم الباقات | `package-design` | `SRC-PM-DEAN` | `B-synthesized` |
| 46 | قرار النموذج المجاني | `freemium-decision` | `SRC-MKT-COREY` | `B-synthesized` |
| 47 | الاشتراك مقابل الدفع مرة | `subscription-vs-one-time` | `SRC-STRIPE` | `B-synthesized` |
| 48 | جاهزية الإطلاق | `launch-readiness` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 49 | مراجعة ما بعد الإطلاق | `post-launch-review` | `SRC-PM-DEAN` | `B-synthesized` |
| 50 | توطين نموذج العمل للسعودية | `saudi-business-localization` | `SRC-MKT-COREY` | `B-synthesized` |

## البرمجة والاختبار والأمن
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | تحويل المتطلبات إلى كود | `requirements-to-code` | `SRC-ANTHROPIC` | `B-synthesized` |
| 2 | هندسة البرمجيات | `software-architecture` | `SRC-GITHUB` | `B-synthesized` |
| 3 | تصميم الأنظمة | `system-design` | `SRC-OWASP` | `B-synthesized` |
| 4 | تصميم الواجهات البرمجية | `api-design` | `SRC-STRIPE` | `B-synthesized` |
| 5 | تصميم قواعد البيانات | `database-design` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 6 | نمذجة البيانات | `data-modeling` | `SRC-ANTHROPIC` | `B-synthesized` |
| 7 | تطوير الواجهات | `frontend-development` | `SRC-GITHUB` | `B-synthesized` |
| 8 | تطوير الخوادم | `backend-development` | `SRC-OWASP` | `B-synthesized` |
| 9 | تكامل الواجهة والخادم | `full-stack-integration` | `SRC-STRIPE` | `B-synthesized` |
| 10 | تطوير تطبيقات الجوال | `mobile-app-development` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 11 | تنفيذ الواجهات المتجاوبة | `responsive-implementation` | `SRC-ANTHROPIC` | `B-synthesized` |
| 12 | هندسة المكونات | `component-architecture` | `SRC-GITHUB` | `B-synthesized` |
| 13 | إدارة الحالة | `state-management` | `SRC-OWASP` | `B-synthesized` |
| 14 | المصادقة | `authentication` | `SRC-STRIPE` | `B-synthesized` |
| 15 | التفويض | `authorization` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 16 | تكامل المدفوعات | `payments-integration` | `SRC-ANTHROPIC` | `B-synthesized` |
| 17 | تكامل Webhooks | `webhook-integration` | `SRC-GITHUB` | `B-synthesized` |
| 18 | تكامل APIs الخارجية | `third-party-api-integration` | `SRC-OWASP` | `B-synthesized` |
| 19 | معالجة الأخطاء | `error-handling` | `SRC-STRIPE` | `B-synthesized` |
| 20 | السجلات والمراقبة | `logging-observability` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 21 | تحسين الأداء | `performance-optimization` | `SRC-ANTHROPIC` | `B-synthesized` |
| 22 | استراتيجية التخزين المؤقت | `caching-strategy` | `SRC-GITHUB` | `B-synthesized` |
| 23 | تحسين استعلامات قاعدة البيانات | `database-query-optimization` | `SRC-OWASP` | `B-synthesized` |
| 24 | مراجعة الكود | `code-review` | `SRC-STRIPE` | `B-synthesized` |
| 25 | إعادة هيكلة الكود | `refactoring` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 26 | تدقيق الدين التقني | `technical-debt-audit` | `SRC-ANTHROPIC` | `B-synthesized` |
| 27 | اختبارات الوحدات | `unit-testing` | `SRC-GITHUB` | `B-synthesized` |
| 28 | اختبارات التكامل | `integration-testing` | `SRC-OWASP` | `B-synthesized` |
| 29 | اختبارات شاملة | `end-to-end-testing` | `SRC-STRIPE` | `B-synthesized` |
| 30 | اختبار APIs | `api-testing` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 31 | اختبار الانحدار البصري | `visual-regression-testing` | `SRC-ANTHROPIC` | `B-synthesized` |
| 32 | اختبار الإتاحة | `accessibility-testing` | `SRC-GITHUB` | `B-synthesized` |
| 33 | اختبار الأحمال | `load-testing` | `SRC-OWASP` | `B-synthesized` |
| 34 | تصميم بيانات الاختبار | `test-data-design` | `SRC-STRIPE` | `B-synthesized` |
| 35 | أتمتة الاختبارات | `test-automation` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 36 | خطوط CI/CD | `cicd-pipeline` | `SRC-ANTHROPIC` | `B-synthesized` |
| 37 | إجراءات GitHub | `github-actions` | `SRC-GITHUB` | `A-direct` |
| 38 | استراتيجية النشر | `deployment-strategy` | `SRC-OWASP` | `B-synthesized` |
| 39 | إدارة البيئات | `environment-management` | `SRC-STRIPE` | `B-synthesized` |
| 40 | إدارة الأسرار | `secrets-management` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 41 | تدقيق الاعتماديات | `dependency-audit` | `SRC-ANTHROPIC` | `B-synthesized` |
| 42 | مراجعة OWASP | `owasp-review` | `SRC-OWASP` | `A-direct` |
| 43 | نمذجة التهديدات | `threat-modeling` | `SRC-OWASP` | `B-synthesized` |
| 44 | البرمجة الآمنة | `secure-coding` | `SRC-STRIPE` | `B-synthesized` |
| 45 | الخصوصية منذ التصميم | `privacy-by-design` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 46 | النسخ الاحتياطي والاستعادة | `backup-recovery` | `SRC-ANTHROPIC` | `B-synthesized` |
| 47 | الاستجابة للحوادث | `incident-response` | `SRC-GITHUB` | `B-synthesized` |
| 48 | توثيق البرمجيات | `documentation` | `SRC-OWASP` | `B-synthesized` |
| 49 | تسليم العمل للمطور | `developer-handoff` | `SRC-STRIPE` | `B-synthesized` |
| 50 | جاهزية الإنتاج | `production-readiness` | `SRC-AGENT-CURATED` | `B-synthesized` |

## تصميم المواقع وUX/UI
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | خطة بحث تجربة المستخدم | `ux-research-plan` | `SRC-ANTHROPIC` | `B-synthesized` |
| 2 | مقابلات المستخدمين | `user-interviews-ux` | `SRC-FIGMA` | `B-synthesized` |
| 3 | تصميم استبيانات UX | `survey-design-ux` | `SRC-STITCH` | `B-synthesized` |
| 4 | خطة اختبار قابلية الاستخدام | `usability-test-plan` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 5 | التقييم الإرشادي | `heuristic-evaluation` | `SRC-W3C` | `B-synthesized` |
| 6 | مراجعة UX للمنافسين | `competitive-ux-review` | `SRC-ANTHROPIC` | `B-synthesized` |
| 7 | هندسة المعلومات | `information-architecture` | `SRC-FIGMA` | `B-synthesized` |
| 8 | خريطة الموقع | `site-map` | `SRC-STITCH` | `B-synthesized` |
| 9 | تدفق المستخدم | `user-flow` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 10 | تدفق المهمة | `task-flow` | `SRC-W3C` | `B-synthesized` |
| 11 | تصميم الإطارات الأولية | `wireframing` | `SRC-ANTHROPIC` | `B-synthesized` |
| 12 | نموذج منخفض الدقة | `low-fidelity-prototype` | `SRC-FIGMA` | `B-synthesized` |
| 13 | نموذج عالي الدقة | `high-fidelity-prototype` | `SRC-STITCH` | `B-synthesized` |
| 14 | نظام التصميم | `design-system` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 15 | مكتبة المكونات | `component-library` | `SRC-W3C` | `B-synthesized` |
| 16 | نقاط التوقف المتجاوبة | `responsive-breakpoints` | `SRC-ANTHROPIC` | `B-synthesized` |
| 17 | تنقل الجوال | `mobile-navigation` | `SRC-FIGMA` | `B-synthesized` |
| 18 | تنقل سطح المكتب | `desktop-navigation` | `SRC-STITCH` | `B-synthesized` |
| 19 | تجربة الصفحة الرئيسية | `homepage-ux` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 20 | تجربة صفحة الهبوط | `landing-page-ux` | `SRC-W3C` | `B-synthesized` |
| 21 | تجربة صفحة المنتج | `product-page-ux` | `SRC-ANTHROPIC` | `B-synthesized` |
| 22 | تجربة صفحة الأسعار | `pricing-page-ux` | `SRC-FIGMA` | `B-synthesized` |
| 23 | تجربة الدفع | `checkout-ux` | `SRC-STITCH` | `B-synthesized` |
| 24 | تجربة السلة | `cart-ux` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 25 | تدفق التسجيل | `signup-flow` | `SRC-W3C` | `B-synthesized` |
| 26 | تدفق الدخول | `login-flow` | `SRC-ANTHROPIC` | `B-synthesized` |
| 27 | تدفق التهيئة | `onboarding-flow` | `SRC-FIGMA` | `B-synthesized` |
| 28 | تجربة النماذج | `form-ux` | `SRC-STITCH` | `B-synthesized` |
| 29 | تجربة البحث | `search-ux` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 30 | تجربة الفلاتر والترتيب | `filter-sort-ux` | `SRC-W3C` | `B-synthesized` |
| 31 | تجربة لوحة التحكم | `dashboard-ux` | `SRC-ANTHROPIC` | `B-synthesized` |
| 32 | تجربة الحالات الفارغة | `empty-states-ux` | `SRC-FIGMA` | `B-synthesized` |
| 33 | التعافي من الأخطاء | `error-recovery-ux` | `SRC-STITCH` | `B-synthesized` |
| 34 | تجربة الإشعارات | `notification-ux` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 35 | النصوص الدقيقة | `microcopy` | `SRC-W3C` | `B-synthesized` |
| 36 | إتاحة WCAG | `accessibility-wcag` | `SRC-WEB-QUALITY` | `A-direct` |
| 37 | التنقل بلوحة المفاتيح | `keyboard-navigation` | `SRC-FIGMA` | `B-synthesized` |
| 38 | مراجعة قارئ الشاشة | `screen-reader-review` | `SRC-STITCH` | `B-synthesized` |
| 39 | مؤشرات الويب الأساسية | `core-web-vitals` | `SRC-WEB-QUALITY` | `A-direct` |
| 40 | أداء الويب | `web-performance` | `SRC-WEB-QUALITY` | `A-direct` |
| 41 | تدقيق جودة الويب | `web-quality-audit` | `SRC-WEB-QUALITY` | `A-direct` |
| 42 | تحسين معدل التحويل | `conversion-rate-optimization` | `SRC-FIGMA` | `B-synthesized` |
| 43 | تحسين تحويل الصفحة | `page-cro` | `SRC-MKT-COREY` | `A-direct` |
| 44 | تحسين تحويل النماذج | `form-cro` | `SRC-MKT-COREY` | `A-direct` |
| 45 | تحسين تحويل التسجيل | `signup-cro` | `SRC-W3C` | `B-synthesized` |
| 46 | تحسين التهيئة | `onboarding-cro` | `SRC-MKT-COREY` | `A-direct` |
| 47 | اختبار A/B للتجربة | `ab-test-ux` | `SRC-FIGMA` | `B-synthesized` |
| 48 | تحويل التصميم إلى كود | `design-to-code` | `SRC-STITCH` | `B-synthesized` |
| 49 | كتابة UX بالعربية | `ux-writing-arabic` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 50 | تجربة التجارة السعودية | `saudi-ecommerce-ux` | `SRC-W3C` | `B-synthesized` |

## البحث والتفكير والتخطيط
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | صياغة سؤال البحث | `research-question-framing` | `SRC-PM-DEAN` | `B-synthesized` |
| 2 | خطة البحث | `research-plan` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 3 | هرمية المصادر | `source-hierarchy` | `SRC-ANTHROPIC` | `B-synthesized` |
| 4 | البحث عبر الويب | `web-research` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 5 | مراجعة الأدبيات العلمية | `academic-literature-review` | `SRC-PM-DEAN` | `B-synthesized` |
| 6 | البحث المنهجي | `systematic-search` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 7 | التحقق من المصدر الأولي | `primary-source-check` | `SRC-ANTHROPIC` | `B-synthesized` |
| 8 | التحقق من الحقائق | `fact-checking` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 9 | تثليث المصادر | `source-triangulation` | `SRC-PM-DEAN` | `B-synthesized` |
| 10 | تدقيق الاستشهادات | `citation-audit` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 11 | فحص حداثة المعلومات | `date-freshness-check` | `SRC-ANTHROPIC` | `B-synthesized` |
| 12 | اكتشاف التحيز | `bias-detection` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 13 | فحص تضارب المصالح | `conflict-of-interest-check` | `SRC-PM-DEAN` | `B-synthesized` |
| 14 | خريطة الادعاء والدليل | `claim-evidence-map` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 15 | تصنيف قوة الأدلة | `evidence-grading` | `SRC-ANTHROPIC` | `B-synthesized` |
| 16 | معايرة عدم اليقين | `uncertainty-calibration` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 17 | خريطة الافتراضات | `assumption-mapping` | `SRC-PM-DEAN` | `B-synthesized` |
| 18 | التفكير من المبادئ الأولى | `first-principles` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 19 | تفكير الآثار من الدرجة الثانية | `second-order-thinking` | `SRC-ANTHROPIC` | `B-synthesized` |
| 20 | التفكير النظمي | `systems-thinking` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 21 | التفكير النقدي | `critical-thinking` | `SRC-PM-DEAN` | `B-synthesized` |
| 22 | الاستدلال السببي | `causal-reasoning` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 23 | تحليل السبب الجذري | `root-cause-analysis` | `SRC-ANTHROPIC` | `B-synthesized` |
| 24 | تقنية لماذا خمس مرات | `five-whys` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 25 | شجرة القضايا | `issue-tree` | `SRC-PM-DEAN` | `B-synthesized` |
| 26 | شجرة المنطق | `logic-tree` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 27 | شجرة الفرضيات | `hypothesis-tree` | `SRC-ANTHROPIC` | `B-synthesized` |
| 28 | شجرة القرار | `decision-tree` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 29 | مصفوفة القرار | `decision-matrix` | `SRC-PM-DEAN` | `B-synthesized` |
| 30 | التقييم الموزون | `weighted-scoring` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 31 | تحليل التكلفة والمنفعة | `cost-benefit-analysis` | `SRC-ANTHROPIC` | `B-synthesized` |
| 32 | تحليل المخاطر والعائد | `risk-reward-analysis` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 33 | تخطيط السيناريوهات | `scenario-planning` | `SRC-PM-DEAN` | `B-synthesized` |
| 34 | تحليل ما قبل الفشل | `premortem` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 35 | المراجعة المعاكسة | `red-team-review` | `SRC-ANTHROPIC` | `B-synthesized` |
| 36 | محامي الشيطان | `devils-advocate` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 37 | التفكير المضاد للواقع | `counterfactual-thinking` | `SRC-PM-DEAN` | `B-synthesized` |
| 38 | تحليل القيود | `constraint-analysis` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 39 | تحليل المفاضلات | `tradeoff-analysis` | `SRC-ANTHROPIC` | `B-synthesized` |
| 40 | إطار ترتيب الأولويات | `prioritization-framework` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 41 | تخطيط خارطة الطريق | `roadmap-planning` | `SRC-PM-DEAN` | `B-synthesized` |
| 42 | هيكل تقسيم العمل | `work-breakdown-structure` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 43 | خريطة الاعتماديات | `dependency-mapping` | `SRC-ANTHROPIC` | `B-synthesized` |
| 44 | تخطيط المعالم | `milestone-planning` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 45 | تخطيط الموارد | `resource-planning` | `SRC-PM-DEAN` | `B-synthesized` |
| 46 | تقدير الوقت | `time-estimation` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 47 | تركيب نتائج البحث | `research-synthesis` | `SRC-ANTHROPIC` | `B-synthesized` |
| 48 | الملخص التنفيذي | `executive-summary` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 49 | كتابة التوصيات | `recommendation-writing` | `SRC-PM-DEAN` | `B-synthesized` |
| 50 | ضمان جودة التفكير | `quality-assurance-reasoning` | `SRC-AGENT-CURATED` | `B-synthesized` |

## الإدارة التنفيذية والعمليات
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | الرؤية والاستراتيجية | `vision-strategy` | `SRC-PM-DEAN` | `B-synthesized` |
| 2 | التخطيط السنوي | `annual-planning` | `SRC-GWS` | `B-synthesized` |
| 3 | التخطيط الربعي | `quarterly-planning` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 4 | تصميم OKR | `okr-design` | `SRC-MKT-COREY` | `B-synthesized` |
| 5 | تصميم مؤشرات الأداء | `kpi-design` | `SRC-PM-DEAN` | `B-synthesized` |
| 6 | بطاقة الأداء المتوازن | `balanced-scorecard` | `SRC-GWS` | `B-synthesized` |
| 7 | خريطة الاستراتيجية | `strategy-map` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 8 | نموذج التشغيل | `operating-model` | `SRC-MKT-COREY` | `B-synthesized` |
| 9 | تصميم المنظمة | `organization-design` | `SRC-PM-DEAN` | `B-synthesized` |
| 10 | ميثاق الدور | `role-charter` | `SRC-GWS` | `B-synthesized` |
| 11 | مصفوفة RACI | `raci-matrix` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 12 | حقوق اتخاذ القرار | `decision-rights` | `SRC-MKT-COREY` | `B-synthesized` |
| 13 | نظام التفويض | `delegation-system` | `SRC-PM-DEAN` | `B-synthesized` |
| 14 | تصميم الاجتماعات | `meeting-design` | `SRC-GWS` | `B-synthesized` |
| 15 | إعداد جدول الاجتماع | `agenda-preparation` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 16 | محاضر الاجتماعات | `meeting-notes` | `SRC-MKT-COREY` | `B-synthesized` |
| 17 | تتبع بنود العمل | `action-item-tracking` | `SRC-PM-DEAN` | `B-synthesized` |
| 18 | المراجعة الأسبوعية للأعمال | `weekly-business-review` | `SRC-GWS` | `B-synthesized` |
| 19 | المراجعة الشهرية للأعمال | `monthly-business-review` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 20 | لوحة الإدارة التنفيذية | `executive-dashboard` | `SRC-MKT-COREY` | `B-synthesized` |
| 21 | كتابة إجراءات العمل | `sop-writing` | `SRC-PM-DEAN` | `B-synthesized` |
| 22 | رسم العمليات | `process-mapping` | `SRC-GWS` | `B-synthesized` |
| 23 | تحسين العمليات | `process-improvement` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 24 | تحليل الاختناقات | `bottleneck-analysis` | `SRC-MKT-COREY` | `B-synthesized` |
| 25 | تخطيط الطاقة الاستيعابية | `capacity-planning` | `SRC-PM-DEAN` | `B-synthesized` |
| 26 | تخطيط القوى العاملة | `workforce-planning` | `SRC-GWS` | `B-synthesized` |
| 27 | بطاقة تقييم التوظيف | `hiring-scorecard` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 28 | هيكلة المقابلات | `interview-structure` | `SRC-MKT-COREY` | `B-synthesized` |
| 29 | تهيئة الموظفين | `onboarding-employees` | `SRC-PM-DEAN` | `B-synthesized` |
| 30 | إدارة الأداء | `performance-management` | `SRC-GWS` | `B-synthesized` |
| 31 | اجتماعات فردية | `one-on-one-meetings` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 32 | إطار التغذية الراجعة | `feedback-framework` | `SRC-MKT-COREY` | `B-synthesized` |
| 33 | حل النزاعات | `conflict-resolution` | `SRC-PM-DEAN` | `B-synthesized` |
| 34 | إدارة التغيير | `change-management` | `SRC-GWS` | `B-synthesized` |
| 35 | إدارة أصحاب المصلحة | `stakeholder-management` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 36 | ميثاق المشروع | `project-charter` | `SRC-MKT-COREY` | `B-synthesized` |
| 37 | خطة المشروع | `project-plan` | `SRC-PM-DEAN` | `B-synthesized` |
| 38 | سجل المخاطر | `risk-register` | `SRC-GWS` | `B-synthesized` |
| 39 | سجل المشكلات | `issue-log` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 40 | إدارة الاعتماديات | `dependency-management` | `SRC-MKT-COREY` | `B-synthesized` |
| 41 | تقييم الموردين | `vendor-evaluation` | `SRC-PM-DEAN` | `B-synthesized` |
| 42 | موجز المشتريات | `procurement-brief` | `SRC-GWS` | `B-synthesized` |
| 43 | تخطيط الميزانية | `budget-planning` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 44 | ضبط المصروفات | `expense-control` | `SRC-MKT-COREY` | `B-synthesized` |
| 45 | إدارة النقد | `cash-management` | `SRC-PM-DEAN` | `B-synthesized` |
| 46 | كتابة السياسات | `policy-writing` | `SRC-GWS` | `B-synthesized` |
| 47 | التواصل الداخلي | `internal-communications` | `SRC-AGENT-CURATED` | `B-synthesized` |
| 48 | تواصل الأزمات | `crisis-communications` | `SRC-MKT-COREY` | `B-synthesized` |
| 49 | استمرارية الأعمال | `business-continuity` | `SRC-PM-DEAN` | `B-synthesized` |
| 50 | مذكرة القرار التنفيذي | `executive-decision-memo` | `SRC-GWS` | `B-synthesized` |

## الأتمتة والتكاملات
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | تدقيق فرص الأتمتة | `automation-opportunity-audit` | `SRC-N8N` | `B-synthesized` |
| 2 | رسم سير العمل | `workflow-mapping` | `SRC-GWS` | `B-synthesized` |
| 3 | ترتيب أولويات الأتمتة | `automation-prioritization` | `SRC-SALLA` | `B-synthesized` |
| 4 | تصميم سير عمل n8n | `n8n-workflow-design` | `SRC-N8N` | `A-direct` |
| 5 | تصميم سير عمل Zapier | `zapier-workflow-design` | `SRC-STRIPE` | `B-synthesized` |
| 6 | تصميم سير عمل Make | `make-workflow-design` | `SRC-N8N` | `B-synthesized` |
| 7 | تصميم Webhooks | `webhook-design` | `SRC-GWS` | `B-synthesized` |
| 8 | تصميم موصل API | `api-connector-design` | `SRC-SALLA` | `B-synthesized` |
| 9 | تصميم خادم MCP | `mcp-server-design` | `SRC-GITHUB` | `B-synthesized` |
| 10 | تكامل OAuth | `oauth-integration` | `SRC-STRIPE` | `B-synthesized` |
| 11 | إدارة بيانات الاعتماد | `credential-management` | `SRC-N8N` | `B-synthesized` |
| 12 | استراتيجية الأخطاء وإعادة المحاولة | `error-retry-strategy` | `SRC-GWS` | `B-synthesized` |
| 13 | تصميم عدم تكرار التنفيذ | `idempotency-design` | `SRC-SALLA` | `B-synthesized` |
| 14 | معالجة حدود الاستخدام | `rate-limit-handling` | `SRC-GITHUB` | `B-synthesized` |
| 15 | سجلات سير العمل | `workflow-logging` | `SRC-STRIPE` | `B-synthesized` |
| 16 | مراقبة الأتمتة | `workflow-monitoring` | `SRC-N8N` | `B-synthesized` |
| 17 | اختبار الأتمتة | `workflow-testing` | `SRC-GWS` | `B-synthesized` |
| 18 | الإنسان داخل الحلقة | `human-in-the-loop` | `SRC-SALLA` | `B-synthesized` |
| 19 | سير الموافقات | `approval-workflow` | `SRC-GITHUB` | `B-synthesized` |
| 20 | التحقق من البيانات | `data-validation` | `SRC-STRIPE` | `B-synthesized` |
| 21 | تحويل البيانات | `data-transformation` | `SRC-N8N` | `B-synthesized` |
| 22 | إزالة التكرار | `deduplication` | `SRC-GWS` | `B-synthesized` |
| 23 | سير العمل المجدول | `scheduled-workflows` | `SRC-SALLA` | `B-synthesized` |
| 24 | سير العمل المبني على الأحداث | `event-driven-workflows` | `SRC-GITHUB` | `B-synthesized` |
| 25 | أتمتة البريد | `email-automation` | `SRC-STRIPE` | `B-synthesized` |
| 26 | أتمتة Gmail | `gmail-automation` | `SRC-N8N` | `B-synthesized` |
| 27 | أتمتة التقويم | `calendar-automation` | `SRC-GWS` | `B-synthesized` |
| 28 | أتمتة Drive | `drive-automation` | `SRC-SALLA` | `B-synthesized` |
| 29 | أتمتة Sheets | `sheets-automation` | `SRC-GITHUB` | `B-synthesized` |
| 30 | أتمتة Docs | `docs-automation` | `SRC-STRIPE` | `B-synthesized` |
| 31 | أتمتة Forms | `forms-automation` | `SRC-N8N` | `B-synthesized` |
| 32 | أتمتة المهام | `tasks-automation` | `SRC-GWS` | `B-synthesized` |
| 33 | أتمتة Notion | `notion-automation` | `SRC-SALLA` | `B-synthesized` |
| 34 | أتمتة CRM | `crm-automation` | `SRC-GITHUB` | `B-synthesized` |
| 35 | توجيه العملاء المحتملين | `lead-routing` | `SRC-STRIPE` | `B-synthesized` |
| 36 | أتمتة مسار المبيعات | `sales-pipeline-automation` | `SRC-N8N` | `B-synthesized` |
| 37 | أتمتة تهيئة العميل | `customer-onboarding-automation` | `SRC-GWS` | `B-synthesized` |
| 38 | أتمتة تذاكر الدعم | `support-ticket-automation` | `SRC-SALLA` | `B-synthesized` |
| 39 | أتمتة الفواتير | `invoice-automation` | `SRC-GITHUB` | `B-synthesized` |
| 40 | أتمتة إشعارات الدفع | `payment-notification-automation` | `SRC-STRIPE` | `B-synthesized` |
| 41 | أتمتة التقارير | `reporting-automation` | `SRC-N8N` | `B-synthesized` |
| 42 | تحديث لوحات البيانات | `dashboard-refresh` | `SRC-GWS` | `B-synthesized` |
| 43 | أتمتة نشر المحتوى | `content-publishing-automation` | `SRC-SALLA` | `B-synthesized` |
| 44 | أتمتة جدولة التواصل | `social-scheduling-automation` | `SRC-GITHUB` | `B-synthesized` |
| 45 | أتمتة معالجة الملفات | `file-processing-automation` | `SRC-STRIPE` | `B-synthesized` |
| 46 | أتمتة إنشاء المستندات | `document-generation-automation` | `SRC-N8N` | `B-synthesized` |
| 47 | أتمتة طلبات التجارة | `ecommerce-order-automation` | `SRC-GWS` | `B-synthesized` |
| 48 | أتمتة Webhooks سلة | `salla-webhook-automation` | `SRC-SALLA` | `A-direct` |
| 49 | مراجعة أمن الأتمتة | `automation-security-review` | `SRC-GITHUB` | `B-synthesized` |
| 50 | خطة صيانة الأتمتة | `automation-maintenance-plan` | `SRC-STRIPE` | `B-synthesized` |

## واتساب والمبيعات والدعم
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | إعداد WhatsApp Cloud API | `whatsapp-cloud-api-setup` | `SRC-META-WA` | `A-direct` |
| 2 | تهيئة رقم الأعمال | `business-number-onboarding` | `SRC-SALLA` | `B-synthesized` |
| 3 | إعداد Webhook واتساب | `whatsapp-webhook-setup` | `SRC-N8N` | `B-synthesized` |
| 4 | تصميم قوالب الرسائل | `message-template-design` | `SRC-GWS` | `B-synthesized` |
| 5 | جاهزية اعتماد القالب | `template-approval-readiness` | `SRC-META-WA` | `B-synthesized` |
| 6 | إدارة موافقة العميل | `opt-in-consent` | `SRC-SALLA` | `B-synthesized` |
| 7 | إدارة إلغاء الاشتراك | `opt-out-handling` | `SRC-N8N` | `B-synthesized` |
| 8 | إدارة نافذة المحادثة | `conversation-window-management` | `SRC-GWS` | `B-synthesized` |
| 9 | توجيه رسائل الجلسة | `session-message-routing` | `SRC-META-WA` | `B-synthesized` |
| 10 | التحويل إلى موظف | `human-handoff` | `SRC-SALLA` | `B-synthesized` |
| 11 | تعيين المحادثات للموظفين | `agent-assignment` | `SRC-N8N` | `B-synthesized` |
| 12 | توجيه الحالات العاجلة | `priority-routing` | `SRC-GWS` | `B-synthesized` |
| 13 | توجيه المحادثة للقسم | `department-routing` | `SRC-META-WA` | `B-synthesized` |
| 14 | بوت الأسئلة الشائعة | `faq-bot` | `SRC-SALLA` | `B-synthesized` |
| 15 | بوت تأهيل العملاء | `lead-qualification-bot` | `SRC-N8N` | `B-synthesized` |
| 16 | توصيات المنتجات بالمحادثة | `product-recommendation-chat` | `SRC-GWS` | `B-synthesized` |
| 17 | نص محادثة المبيعات | `sales-conversation-script` | `SRC-META-WA` | `B-synthesized` |
| 18 | معالجة الاعتراضات بالمحادثة | `objection-handling-chat` | `SRC-SALLA` | `B-synthesized` |
| 19 | استعادة السلة عبر واتساب | `cart-recovery-whatsapp` | `SRC-N8N` | `B-synthesized` |
| 20 | تأكيد الطلب | `order-confirmation` | `SRC-GWS` | `B-synthesized` |
| 21 | تذكير الدفع | `payment-reminder` | `SRC-META-WA` | `B-synthesized` |
| 22 | تحديث الشحن | `shipping-update` | `SRC-SALLA` | `B-synthesized` |
| 23 | تأكيد التسليم | `delivery-confirmation` | `SRC-N8N` | `B-synthesized` |
| 24 | حجز المواعيد | `appointment-booking` | `SRC-GWS` | `B-synthesized` |
| 25 | تذكير المواعيد | `appointment-reminder` | `SRC-META-WA` | `B-synthesized` |
| 26 | تدفق إعادة الجدولة | `reschedule-flow` | `SRC-SALLA` | `B-synthesized` |
| 27 | تهيئة العميل عبر واتساب | `customer-onboarding-whatsapp` | `SRC-N8N` | `B-synthesized` |
| 28 | فرز طلبات الدعم | `support-triage` | `SRC-GWS` | `B-synthesized` |
| 29 | معالجة الشكاوى | `complaint-handling` | `SRC-META-WA` | `B-synthesized` |
| 30 | تدفق طلب الاسترجاع | `refund-request-flow` | `SRC-SALLA` | `B-synthesized` |
| 31 | تدفق طلب الإرجاع | `return-request-flow` | `SRC-N8N` | `B-synthesized` |
| 32 | استبيان رضا العميل | `csat-survey` | `SRC-GWS` | `B-synthesized` |
| 33 | استبيان NPS | `nps-survey` | `SRC-META-WA` | `B-synthesized` |
| 34 | طلب التقييم | `review-request` | `SRC-SALLA` | `B-synthesized` |
| 35 | تقسيم قوائم البث | `broadcast-segmentation` | `SRC-N8N` | `B-synthesized` |
| 36 | ضبط تكرار الحملات | `campaign-frequency-control` | `SRC-GWS` | `B-synthesized` |
| 37 | حقول التخصيص | `personalization-fields` | `SRC-META-WA` | `B-synthesized` |
| 38 | نبرة الرسائل العربية | `arabic-message-tone` | `SRC-SALLA` | `B-synthesized` |
| 39 | المحادثة باللهجة السعودية | `saudi-dialect-chat` | `SRC-N8N` | `B-synthesized` |
| 40 | تصميم رسائل الوسائط | `media-message-design` | `SRC-GWS` | `B-synthesized` |
| 41 | رسائل القوائم التفاعلية | `interactive-list-message` | `SRC-META-WA` | `B-synthesized` |
| 42 | أزرار الرد السريع | `quick-reply-buttons` | `SRC-SALLA` | `B-synthesized` |
| 43 | كتالوج التجارة عبر واتساب | `catalog-commerce` | `SRC-N8N` | `B-synthesized` |
| 44 | مزامنة واتساب مع CRM | `crm-sync-whatsapp` | `SRC-GWS` | `B-synthesized` |
| 45 | تكامل سلة وواتساب | `salla-whatsapp-integration` | `SRC-META-WA` | `B-synthesized` |
| 46 | أتمتة واتساب عبر n8n | `n8n-whatsapp-automation` | `SRC-SALLA` | `B-synthesized` |
| 47 | تحليلات المحادثات | `conversation-analytics` | `SRC-N8N` | `B-synthesized` |
| 48 | مراقبة جودة المحادثات | `quality-monitoring-chat` | `SRC-GWS` | `B-synthesized` |
| 49 | سياسة الخصوصية والاحتفاظ | `privacy-retention-policy` | `SRC-META-WA` | `B-synthesized` |
| 50 | الاستجابة لتعطل واتساب | `whatsapp-incident-response` | `SRC-SALLA` | `B-synthesized` |

## التجارة الإلكترونية والبيانات ونجاح العميل
| # | المهارة | Skill | المصدر | التصنيف |
|---:|---|---|---|---|
| 1 | استراتيجية التجارة الإلكترونية | `ecommerce-strategy` | `SRC-SALLA` | `B-synthesized` |
| 2 | هندسة المتجر | `store-architecture` | `SRC-MKT-COREY` | `B-synthesized` |
| 3 | تصنيف الفئات | `category-taxonomy` | `SRC-STRIPE` | `B-synthesized` |
| 4 | هيكلة كتالوج المنتجات | `product-catalog-structure` | `SRC-GWS` | `B-synthesized` |
| 5 | جودة بيانات المنتج | `product-data-quality` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 6 | تحسين صفحة المنتج | `product-page-optimization` | `SRC-SALLA` | `B-synthesized` |
| 7 | تحسين صفحة المجموعة | `collection-page-optimization` | `SRC-MKT-COREY` | `B-synthesized` |
| 8 | ترتيب منتجات الصفحة الرئيسية | `homepage-merchandising` | `SRC-STRIPE` | `B-synthesized` |
| 9 | تحسين نتائج البحث | `search-merchandising` | `SRC-GWS` | `B-synthesized` |
| 10 | تحسين الفلاتر | `filter-merchandising` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 11 | عرض الأسعار والعروض | `pricing-merchandising` | `SRC-SALLA` | `B-synthesized` |
| 12 | تصميم الحزم | `bundle-design` | `SRC-MKT-COREY` | `B-synthesized` |
| 13 | قواعد البيع المتقاطع | `cross-sell-rules` | `SRC-STRIPE` | `B-synthesized` |
| 14 | قواعد البيع الإضافي | `upsell-rules` | `SRC-GWS` | `B-synthesized` |
| 15 | تحسين السلة | `cart-optimization` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 16 | تحسين الدفع | `checkout-optimization` | `SRC-SALLA` | `B-synthesized` |
| 17 | استراتيجية وسائل الدفع | `payment-method-strategy` | `SRC-MKT-COREY` | `B-synthesized` |
| 18 | استراتيجية الشحن | `shipping-strategy` | `SRC-STRIPE` | `B-synthesized` |
| 19 | وعد التسليم | `delivery-promise` | `SRC-GWS` | `B-synthesized` |
| 20 | تصميم سياسة الإرجاع | `returns-policy-design` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 21 | عمليات الاسترجاع | `refund-operations` | `SRC-SALLA` | `B-synthesized` |
| 22 | تخطيط المخزون | `inventory-planning` | `SRC-MKT-COREY` | `B-synthesized` |
| 23 | توقع الطلب | `demand-forecasting` | `SRC-STRIPE` | `B-synthesized` |
| 24 | منع نفاد المخزون | `stockout-prevention` | `SRC-GWS` | `B-synthesized` |
| 25 | إدارة الطلبات | `order-management` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 26 | عمليات التجهيز | `fulfillment-operations` | `SRC-SALLA` | `B-synthesized` |
| 27 | نموذج بيانات العميل | `customer-data-model` | `SRC-MKT-COREY` | `B-synthesized` |
| 28 | تتبع أحداث التجارة | `event-tracking-ecommerce` | `SRC-STRIPE` | `B-synthesized` |
| 29 | تحليلات GA4 للتجارة | `ga4-ecommerce` | `SRC-GWS` | `B-synthesized` |
| 30 | تحليل قمع التحويل | `conversion-funnel-analysis` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 31 | تحليل الدفعات | `cohort-analysis` | `SRC-SALLA` | `B-synthesized` |
| 32 | تقسيم RFM | `rfm-segmentation` | `SRC-MKT-COREY` | `B-synthesized` |
| 33 | القيمة العمرية للعميل | `customer-lifetime-value` | `SRC-STRIPE` | `B-synthesized` |
| 34 | تحليل تكرار الشراء | `repeat-purchase-analysis` | `SRC-GWS` | `B-synthesized` |
| 35 | استعادة السلات المتروكة | `abandoned-cart-recovery` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 36 | تدفق ما بعد الشراء | `post-purchase-flow` | `SRC-SALLA` | `B-synthesized` |
| 37 | برنامج الولاء | `loyalty-program` | `SRC-MKT-COREY` | `B-synthesized` |
| 38 | خطة نجاح العميل | `customer-success-plan` | `SRC-STRIPE` | `B-synthesized` |
| 39 | مؤشر صحة العميل | `health-score` | `SRC-GWS` | `B-synthesized` |
| 40 | تهيئة نجاح العميل | `customer-onboarding-success` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 41 | تتبع التبني | `adoption-tracking` | `SRC-SALLA` | `B-synthesized` |
| 42 | إدارة التجديد | `renewal-management` | `SRC-MKT-COREY` | `B-synthesized` |
| 43 | فرص التوسع | `expansion-opportunities` | `SRC-STRIPE` | `B-synthesized` |
| 44 | صوت العميل | `voice-of-customer` | `SRC-GWS` | `B-synthesized` |
| 45 | قاعدة معرفة الدعم | `support-knowledge-base` | `SRC-WEB-QUALITY` | `B-synthesized` |
| 46 | اتفاقية مستوى الخدمة | `service-level-agreement` | `SRC-SALLA` | `B-synthesized` |
| 47 | حلقة تغذية العميل الراجعة | `customer-feedback-loop` | `SRC-MKT-COREY` | `B-synthesized` |
| 48 | لوحة التجارة | `ecommerce-dashboard` | `SRC-STRIPE` | `B-synthesized` |
| 49 | تشغيل متجر سلة | `salla-store-operations` | `SRC-SALLA` | `A-direct` |
| 50 | المراجعة الربعية للتجارة | `ecommerce-quarterly-review` | `SRC-WEB-QUALITY` | `B-synthesized` |


---

# سجل التغييرات

## 1.1 — 2026-07-12
- دمج موجّه المهارات وقواعد العمل والأمان في ملف موحد.
- إضافة دليل أولي يضم 217 أداة ومشروعًا في المجالات الأساسية.
- إضافة معيار ترتيب الأدوات وقواعد خاصة بواتساب.
- تثبيت قاعدة الحل الأسهل والأسرع والأقل تكلفة أولًا.

## 1.0 — 2026-07-12
- إنشاء فهرس 650 مهارة في 13 مجالًا.