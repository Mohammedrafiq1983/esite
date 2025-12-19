import { FileText, Scale, UserCheck, AlertTriangle, Shield, Ban } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'شروط الخدمة - eDariss',
  description: 'شروط وأحكام استخدام منصة eDariss التعليمية',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                شروط الخدمة
              </h1>
              <p className="text-xl text-primary-100">
                يرجى قراءة هذه الشروط بعناية قبل استخدام منصة eDariss
              </p>
              <p className="text-sm text-primary-200 mt-4">
                آخر تحديث: 18 ديسمبر 2025
              </p>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Scale className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">عادلة ومنصفة</h3>
                  <p className="text-sm text-gray-600">
                    شروط واضحة تحمي حقوق جميع الأطراف
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <UserCheck className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">سهلة الفهم</h3>
                  <p className="text-sm text-gray-600">
                    مكتوبة بلغة واضحة ومباشرة
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Shield className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">حماية كاملة</h3>
                  <p className="text-sm text-gray-600">
                    تضمن بيئة تعليمية آمنة للجميع
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-12">
                {/* Acceptance of Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">1</span>
                    </span>
                    قبول الشروط
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      مرحباً بك في منصة eDariss ("المنصة" أو "الخدمة"). باستخدامك للمنصة، فإنك توافق على الالتزام بهذه الشروط والأحكام ("الشروط"). إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام المنصة.
                    </p>
                    <p>
                      نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات جوهرية، واستمرارك في استخدام المنصة بعد هذه التغييرات يعني موافقتك عليها.
                    </p>
                  </div>
                </div>

                {/* Eligibility */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="h-5 w-5 text-primary-600" />
                    </span>
                    الأهلية والتسجيل
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">2.1 شروط الأهلية</h3>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>يجب أن يكون عمرك 13 عاماً على الأقل لاستخدام المنصة</li>
                      <li>إذا كنت أقل من 18 عاماً، يجب الحصول على موافقة ولي الأمر</li>
                      <li>يجب تقديم معلومات دقيقة وصحيحة عند التسجيل</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">2.2 أمان الحساب</h3>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>أنت مسؤول عن الحفاظ على سرية كلمة المرور</li>
                      <li>أنت مسؤول عن جميع الأنشطة التي تتم من خلال حسابك</li>
                      <li>يجب إخطارنا فوراً بأي استخدام غير مصرح به لحسابك</li>
                      <li>لا يجوز مشاركة حسابك مع الآخرين</li>
                    </ul>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">3</span>
                    </span>
                    الخدمات المقدمة
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>توفر منصة eDariss الخدمات التالية:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>الوصول إلى الدورات التعليمية المسجلة والمباشرة</li>
                      <li>التواصل مع المعلمين والطلاب</li>
                      <li>الاختبارات والواجبات</li>
                      <li>شهادات الإكمال</li>
                      <li>تتبع التقدم الأكاديمي</li>
                    </ul>
                    <p className="mt-4">
                      نحتفظ بالحق في تعديل أو إيقاف أي من الخدمات في أي وقت دون إشعار مسبق.
                    </p>
                  </div>
                </div>

                {/* User Conduct */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Ban className="h-5 w-5 text-primary-600" />
                    </span>
                    سلوك المستخدم
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>عند استخدام المنصة، توافق على:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>استخدام المنصة للأغراض التعليمية المشروعة فقط</li>
                      <li>احترام حقوق الملكية الفكرية للمحتوى</li>
                      <li>عدم نسخ أو توزيع المحتوى التعليمي بدون إذن</li>
                      <li>التعامل باحترام مع المعلمين والطلاب الآخرين</li>
                      <li>عدم نشر محتوى مسيء أو غير قانوني</li>
                    </ul>

                    <div className="bg-red-50 border-r-4 border-red-500 p-4 mt-6 rounded">
                      <div className="flex gap-3">
                        <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900 mb-2">الأنشطة المحظورة:</p>
                          <ul className="list-disc mr-6 space-y-1 text-sm text-red-800">
                            <li>الغش في الاختبارات أو الواجبات</li>
                            <li>انتحال شخصية الآخرين</li>
                            <li>محاولة اختراق النظام أو الوصول غير المصرح به</li>
                            <li>التحرش أو التنمر</li>
                            <li>نشر برامج ضارة أو فيروسات</li>
                            <li>استخدام الروبوتات أو البرامج الآلية</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payments */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">5</span>
                    </span>
                    المدفوعات والاشتراكات
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">5.1 الأسعار</h3>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>جميع الأسعار معروضة بالريال السعودي</li>
                      <li>نحتفظ بالحق في تغيير الأسعار في أي وقت</li>
                      <li>أي تغيير في الأسعار لن يؤثر على الاشتراكات الحالية</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">5.2 طرق الدفع</h3>
                    <p>نقبل الدفع عبر بطاقات الائتمان والخصم والمحافظ الإلكترونية.</p>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">5.3 سياسة الاسترداد</h3>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>يمكنك طلب استرداد كامل خلال 7 أيام من الشراء</li>
                      <li>بعد 7 أيام، لا يمكن استرداد الرسوم</li>
                      <li>الاشتراكات الشهرية غير قابلة للاسترداد بعد بدء الشهر</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">5.4 الإلغاء</h3>
                    <p>
                      يمكنك إلغاء اشتراكك في أي وقت. سيستمر وصولك إلى المحتوى حتى نهاية فترة الفوترة الحالية.
                    </p>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">6</span>
                    </span>
                    الملكية الفكرية
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      جميع المحتويات على المنصة، بما في ذلك النصوص والصور والفيديوهات والمواد التعليمية، محمية بحقوق النشر وحقوق الملكية الفكرية الأخرى.
                    </p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>يُمنح لك ترخيص شخصي غير حصري للوصول إلى المحتوى</li>
                      <li>لا يجوز نسخ أو توزيع أو بيع أي محتوى من المنصة</li>
                      <li>يحتفظ المعلمون بحقوق الملكية لمحتواهم الأصلي</li>
                      <li>أي محتوى تنشره يجب أن يكون ملكك أو لديك الحق في نشره</li>
                    </ul>
                  </div>
                </div>

                {/* Disclaimers */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-primary-600" />
                    </span>
                    إخلاء المسؤولية
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      يتم توفير المنصة "كما هي" و "حسب التوفر". نحن لا نضمن:
                    </p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>أن الخدمة ستكون متاحة دائماً دون انقطاع</li>
                      <li>أن المحتوى خالٍ من الأخطاء</li>
                      <li>نتائج معينة من استخدام المنصة</li>
                      <li>أن المحتوى سيلبي احتياجاتك الخاصة</li>
                    </ul>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">8</span>
                    </span>
                    تحديد المسؤولية
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة ناتجة عن:
                    </p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>استخدامك أو عدم قدرتك على استخدام المنصة</li>
                      <li>أي محتوى تم الحصول عليه من خلال المنصة</li>
                      <li>الوصول غير المصرح به إلى حسابك</li>
                      <li>أخطاء أو سهو في المحتوى</li>
                    </ul>
                  </div>
                </div>

                {/* Termination */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">9</span>
                    </span>
                    إنهاء الحساب
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      نحتفظ بالحق في تعليق أو إنهاء حسابك في أي وقت إذا:
                    </p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>انتهكت هذه الشروط</li>
                      <li>قدمت معلومات كاذبة أو مضللة</li>
                      <li>انخرطت في سلوك احتيالي أو غير قانوني</li>
                      <li>أساءت استخدام المنصة</li>
                    </ul>
                    <p className="mt-4">
                      يمكنك أيضاً حذف حسابك في أي وقت من إعدادات الحساب.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="h-5 w-5 text-primary-600" />
                    </span>
                    القانون الحاكم
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاع ناشئ عن هذه الشروط سيخضع للاختصاص القضائي الحصري للمحاكم في الرياض.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">11</span>
                    </span>
                    تواصل معنا
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <p className="font-semibold text-gray-900 mb-3">منصة eDariss</p>
                      <ul className="space-y-2 text-sm">
                        <li>البريد الإلكتروني: <a href="mailto:legal@edariss.com" className="text-primary-600 hover:text-primary-800">legal@edariss.com</a></li>
                        <li>الهاتف: <span dir="ltr">+966 12 345 6789</span></li>
                        <li>العنوان: الرياض، المملكة العربية السعودية</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
