import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'سياسة الخصوصية - إدارس',
  description: 'سياسة الخصوصية وحماية البيانات في منصة إدارس التعليمية',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                سياسة الخصوصية
              </h1>
              <p className="text-xl text-primary-100">
                نحن ملتزمون بحماية خصوصيتك وأمان بياناتك
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
                  <Lock className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">بيانات آمنة</h3>
                  <p className="text-sm text-gray-600">
                    نستخدم أحدث تقنيات التشفير لحماية معلوماتك
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Eye className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">شفافية كاملة</h3>
                  <p className="text-sm text-gray-600">
                    نوضح بدقة كيف نستخدم ونحمي بياناتك
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <UserCheck className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">أنت المتحكم</h3>
                  <p className="text-sm text-gray-600">
                    لديك السيطرة الكاملة على بياناتك الشخصية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-12">
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">1</span>
                    </span>
                    مقدمة
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      مرحباً بك في منصة إدارس. نحن نقدر ثقتك بنا ونلتزم بحماية خصوصيتك وأمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا ومشاركتنا للمعلومات التي تقدمها لنا عند استخدام منصتنا.
                    </p>
                    <p>
                      باستخدامك لمنصة إدارس، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه السياسة.
                    </p>
                  </div>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="h-5 w-5 text-primary-600" />
                    </span>
                    المعلومات التي نجمعها
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">2.1 المعلومات الشخصية</h3>
                    <p>عند التسجيل في المنصة، قد نطلب منك تقديم:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>الاسم الكامل</li>
                      <li>عنوان البريد الإلكتروني</li>
                      <li>رقم الهاتف</li>
                      <li>تاريخ الميلاد</li>
                      <li>المرحلة الدراسية (للطلاب)</li>
                      <li>التخصص والمؤهلات (للمعلمين)</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">2.2 معلومات الاستخدام</h3>
                    <p>نقوم بجمع معلومات حول كيفية تفاعلك مع المنصة، مثل:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>الدورات التي تسجل فيها وتشاهدها</li>
                      <li>تقدمك في الدورات والاختبارات</li>
                      <li>أوقات الدخول والنشاط</li>
                      <li>تفاعلاتك مع المعلمين والطلاب الآخرين</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6">2.3 المعلومات التقنية</h3>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>عنوان IP</li>
                      <li>نوع المتصفح والجهاز</li>
                      <li>نظام التشغيل</li>
                      <li>ملفات تعريف الارتباط (Cookies)</li>
                    </ul>
                  </div>
                </div>

                {/* How We Use Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">3</span>
                    </span>
                    كيف نستخدم معلوماتك
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>تقديم وتحسين خدماتنا التعليمية</li>
                      <li>إنشاء وإدارة حسابك</li>
                      <li>التواصل معك بخصوص حسابك والخدمات</li>
                      <li>تخصيص تجربتك التعليمية</li>
                      <li>معالجة المدفوعات والمعاملات المالية</li>
                      <li>إرسال إشعارات حول الدورات والتحديثات</li>
                      <li>تحليل الاستخدام لتحسين المنصة</li>
                      <li>منع الاحتيال وضمان أمان المنصة</li>
                      <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="h-5 w-5 text-primary-600" />
                    </span>
                    أمان البيانات
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      نحن نتخذ أمان بياناتك على محمل الجد ونستخدم تدابير أمنية متقدمة لحماية معلوماتك الشخصية، بما في ذلك:
                    </p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li>تشفير SSL/TLS لجميع البيانات المنقولة</li>
                      <li>تشفير كلمات المرور باستخدام خوارزميات حديثة</li>
                      <li>خوادم آمنة مع جدران حماية متقدمة</li>
                      <li>مراقبة أمنية على مدار الساعة</li>
                      <li>نسخ احتياطي منتظم للبيانات</li>
                      <li>تحديثات أمنية دورية</li>
                    </ul>
                    <div className="bg-amber-50 border-r-4 border-amber-500 p-4 mt-6 rounded">
                      <div className="flex gap-3">
                        <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">
                          <strong className="text-amber-900">ملاحظة هامة:</strong> على الرغم من اتخاذنا جميع الاحتياطات الممكنة، لا يمكن ضمان أمان البيانات بنسبة 100% عبر الإنترنت. يرجى استخدام كلمة مرور قوية وعدم مشاركتها مع أي شخص.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Information Sharing */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">5</span>
                    </span>
                    مشاركة المعلومات
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>نحن لا نبيع معلوماتك الشخصية. قد نشارك معلوماتك فقط في الحالات التالية:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li><strong>مع المعلمين:</strong> لتسهيل العملية التعليمية وتقديم الدعم الأكاديمي</li>
                      <li><strong>مزودي الخدمات:</strong> الشركات التي تساعدنا في تشغيل المنصة (مثل خدمات الاستضافة والدفع)</li>
                      <li><strong>الامتثال القانوني:</strong> عندما يتطلب القانون ذلك أو لحماية حقوقنا</li>
                      <li><strong>موافقتك:</strong> عندما تمنحنا إذناً صريحاً بمشاركة معلوماتك</li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="h-5 w-5 text-primary-600" />
                    </span>
                    حقوقك
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li><strong>الوصول:</strong> يمكنك طلب نسخة من بياناتك الشخصية</li>
                      <li><strong>التصحيح:</strong> يمكنك تحديث أو تصحيح معلوماتك في أي وقت</li>
                      <li><strong>الحذف:</strong> يمكنك طلب حذف حسابك وبياناتك</li>
                      <li><strong>الاعتراض:</strong> يمكنك الاعتراض على معالجة بياناتك لأغراض معينة</li>
                      <li><strong>نقل البيانات:</strong> يمكنك طلب نقل بياناتك إلى خدمة أخرى</li>
                      <li><strong>سحب الموافقة:</strong> يمكنك سحب موافقتك في أي وقت</li>
                    </ul>
                    <p className="mt-4">
                      لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر: <a href="mailto:privacy@edariss.com" className="text-primary-600 hover:text-primary-800 underline">privacy@edariss.com</a>
                    </p>
                  </div>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">7</span>
                    </span>
                    ملفات تعريف الارتباط (Cookies)
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك على المنصة. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
                    </p>
                    <p>أنواع ملفات تعريف الارتباط التي نستخدمها:</p>
                    <ul className="list-disc mr-6 space-y-2">
                      <li><strong>ضرورية:</strong> مطلوبة لتشغيل المنصة بشكل صحيح</li>
                      <li><strong>وظيفية:</strong> لحفظ تفضيلاتك وإعداداتك</li>
                      <li><strong>تحليلية:</strong> لفهم كيفية استخدام المنصة</li>
                      <li><strong>تسويقية:</strong> لتخصيص المحتوى والإعلانات</li>
                    </ul>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">8</span>
                    </span>
                    خصوصية الأطفال
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      نحن نهتم بشكل خاص بخصوصية الأطفال. إذا كان عمر المستخدم أقل من 18 عاماً، يجب الحصول على موافقة ولي الأمر قبل التسجيل. نحن لا نجمع عن قصد معلومات شخصية من الأطفال دون موافقة الوالدين.
                    </p>
                  </div>
                </div>

                {/* Changes to Privacy Policy */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">9</span>
                    </span>
                    التغييرات على سياسة الخصوصية
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإعلامك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث" في الأعلى. نوصي بمراجعة هذه الصفحة بشكل دوري للبقاء على اطلاع بأي تغييرات.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">10</span>
                    </span>
                    تواصل معنا
                  </h2>
                  <div className="mr-13 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالخصوصية، يرجى التواصل معنا:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <p className="font-semibold text-gray-900 mb-3">منصة إدارس</p>
                      <ul className="space-y-2 text-sm">
                        <li>البريد الإلكتروني: <a href="mailto:privacy@edariss.com" className="text-primary-600 hover:text-primary-800">privacy@edariss.com</a></li>
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
