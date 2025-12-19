import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Award, Users, Shield, BookOpen, MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "عن المنصة - eDariss",
  description: "تعرف على eDariss، منصة التعليم الإلكتروني الرائدة في العراق. نربط الطلاب بأفضل المعلمين في كركوك وجميع أنحاء العراق",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            عن منصة eDariss
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            نربط الطلاب العراقيين بأفضل المعلمين لتعليم تكميلي عالي الجودة
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              قصتنا
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                بدأت eDariss من رؤية بسيطة: جعل التعليم عالي الجودة متاحاً لكل طالب
                عراقي بغض النظر عن موقعه. نؤمن بأن كل طالب يستحق الوصول إلى أفضل
                المعلمين والموارد التعليمية لتحقيق أحلامه الأكاديمية.
              </p>
              <p>
                اليوم، نخدم أكثر من 10,000 طالب عبر العراق، ونعمل مع أكثر من 150
                معلماً معتمداً لتقديم دورات في جميع المواد الأساسية للصفوف 7-12.
                منصتنا توفر تجربة تعليمية متكاملة تجمع بين الصفوف المباشرة، الدروس
                المسجلة، والاختبارات التفاعلية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">مهمتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                تمكين الطلاب العراقيين من خلال توفير تعليم تكميلي عالي الجودة،
                متاح، وبأسعار معقولة يساعدهم على التفوق الأكاديمي وتحقيق أهدافهم
                التعليمية. نسعى لسد الفجوة التعليمية وتوفير فرص متساوية للجميع.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                أن نصبح المنصة التعليمية الرائدة في العراق، حيث يمكن لكل طالب
                الوصول إلى تعليم شخصي ومتميز. نطمح لبناء مجتمع تعليمي قوي يساهم
                في تطوير التعليم في العراق ورفع مستوى الطلاب الأكاديمي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            قيمنا
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ValueCard
              icon={<Award className="w-12 h-12" />}
              title="الجودة"
              description="نختار بعناية معلمين معتمدين وذوي خبرة، ونضمن جودة المحتوى التعليمي في جميع الدورات"
            />
            <ValueCard
              icon={<Users className="w-12 h-12" />}
              title="الإتاحة"
              description="التعليم الجيد يجب أن يكون متاحاً للجميع، لذا نوفر أسعاراً معقولة وجداول مرنة"
            />
            <ValueCard
              icon={<Shield className="w-12 h-12" />}
              title="الشفافية"
              description="أسعار واضحة، سياسات عادلة، وتواصل مستمر مع الطلاب وأولياء الأمور"
            />
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            eDariss بالأرقام
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StatCard number="10,000+" label="طالب" icon={<Users className="w-8 h-8" />} />
            <StatCard number="150+" label="معلم" icon={<Award className="w-8 h-8" />} />
            <StatCard number="500+" label="دورة" icon={<BookOpen className="w-8 h-8" />} />
            <StatCard number="4.9/5" label="تقييم المستخدمين" icon={<Shield className="w-8 h-8" />} />
          </div>
        </div>
      </section>

      {/* Location - PROMINENT SECTION */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              موقعنا
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-primary-200">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 bg-primary-100 rounded-full">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    مكتبنا الرئيسي
                  </h3>
                  <div className="space-y-2 text-lg text-gray-700 leading-relaxed">
                    <p className="font-semibold text-primary-600 text-xl">
                      كركوك، حي الواسطي
                    </p>
                    <p>قرب الجسر</p>
                    <p>عمارة مكتب اللقاء</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">الهاتف</p>
                    <a href="tel:+9647700545005" className="text-lg font-medium text-gray-900 hover:text-primary-600" dir="ltr">
                      +964 770 054 5005
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                    <a href="mailto:info@edariss.com" className="text-lg font-medium text-gray-900 hover:text-primary-600">
                      info@edariss.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">ساعات العمل:</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>السبت - الخميس:</span>
                    <span className="font-medium">9:00 صباحاً - 6:00 مساءً</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة:</span>
                    <span className="font-medium">مغلق</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            انضم إلى عائلة eDariss
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            سواء كنت طالباً يبحث عن التفوق أو معلماً يريد مشاركة خبرته، نحن نرحب بك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              سجل كطالب
            </button>
            <button className="px-8 py-4 bg-primary-800 text-white border-2 border-white rounded-lg text-lg font-semibold hover:bg-primary-900 transition">
              سجل كمعلم
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition">
      <div className="text-primary-600 flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="text-center bg-white p-6 rounded-xl shadow-md">
      <div className="text-primary-600 flex justify-center mb-3">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
