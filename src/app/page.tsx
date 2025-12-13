import Link from "next/link";
import { BookOpen, Users, Video, Award, Clock, Shield } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            تعلم من أفضل المعلمين في
            <span className="text-primary-600"> العراق</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            انضم لآلاف الطلاب الذين يحصلون على تعليم عالي الجودة من خلال الصفوف المباشرة،
            الدروس المسجلة، ومسارات التعلم الشخصية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register/student"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
            >
              ابدأ التعلم اليوم
            </Link>
            <Link
              href="/register/teacher"
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg text-lg font-semibold hover:bg-primary-50 transition"
            >
              كن معلماً
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-600" />
              <span>10,000+ طالب</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-600" />
              <span>500+ دورة</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-600" />
              <span>معلمون معتمدون</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار إدارس؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              كل ما تحتاجه للتعلم الإلكتروني الناجح
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Video className="w-8 h-8" />}
              title="صفوف مباشرة ومسجلة"
              description="انضم للحصص المباشرة أو شاهد الدروس المسجلة بالوقت المناسب لك"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="معلمون خبراء"
              description="تعلم من معلمين عراقيين معتمدين متخصصين في جميع المواد الأساسية"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="جدول مرن"
              description="ادرس في أي وقت ومن أي مكان مع منصتنا المتوافقة مع الهواتف المحمولة"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="تتبع التقدم"
              description="راقب رحلة تعلمك مع تحليلات مفصلة لأدائك الدراسي"
            />
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              استكشف موادنا الدراسية
            </h2>
            <p className="text-xl text-gray-600">
              تغطية شاملة للمنهج العراقي للصفوف 7-12
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SubjectCard title="الرياضيات" color="bg-blue-500" />
            <SubjectCard title="الفيزياء" color="bg-purple-500" />
            <SubjectCard title="الكيمياء" color="bg-green-500" />
            <SubjectCard title="العلوم" color="bg-yellow-500" />
            <SubjectCard title="اللغة العربية" color="bg-red-500" />
            <SubjectCard title="اللغة الإنجليزية" color="bg-indigo-500" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              كيف يعمل؟
            </h2>
            <p className="text-xl text-gray-600">
              ابدأ في ثلاث خطوات بسيطة
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepCard
              number="1"
              title="إنشاء حساب"
              description="سجل كطالب أو معلم في أقل من دقيقتين"
            />
            <StepCard
              number="2"
              title="اختر الدورات"
              description="تصفح المواد والتسجيل في الدورات المناسبة لصفك"
            />
            <StepCard
              number="3"
              title="ابدأ التعلم"
              description="احضر الصفوف المباشرة، أكمل الاختبارات، وتتبع تقدمك"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            هل أنت مستعد لتحويل تعلمك؟
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            انضم إلى إدارس اليوم واحصل على المئات من الدورات التي يدرسها معلمون خبراء
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            ابدأ مجاناً
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function SubjectCard({ title, color }: { title: string; color: string }) {
  return (
    <div className={`${color} p-6 rounded-xl text-white hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer`}>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
