import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Video, Users, Clock, Calendar, User } from "lucide-react";

export const metadata = {
  title: "الصفوف المباشرة - إدارس",
  description: "احضر صفوفاً مباشرة تفاعلية مع أفضل المعلمين. صفوف في الرياضيات، الفيزياء، الكيمياء والعلوم للمنهج العراقي",
};

const liveSessions = [
  {
    id: 1,
    title: "الرياضيات: حل المعادلات التربيعية",
    teacher: "أ. أحمد محمد الجبوري",
    subject: "الرياضيات",
    grade: "الصف التاسع",
    date: "2024-12-15",
    time: "15:00",
    duration: 90,
    price: 15000,
    seatsLeft: 12,
    totalSeats: 50,
    isLive: false,
  },
  {
    id: 2,
    title: "الفيزياء: قوانين نيوتن للحركة",
    teacher: "أ. فاطمة حسن العبيدي",
    subject: "الفيزياء",
    grade: "الصف العاشر",
    date: "2024-12-14",
    time: "17:00",
    duration: 120,
    price: 18000,
    seatsLeft: 8,
    totalSeats: 50,
    isLive: true,
  },
  {
    id: 3,
    title: "الكيمياء: التفاعلات الكيميائية",
    teacher: "أ. علي كريم النعيمي",
    subject: "الكيمياء",
    grade: "الصف الحادي عشر",
    date: "2024-12-16",
    time: "14:00",
    duration: 100,
    price: 20000,
    seatsLeft: 5,
    totalSeats: 40,
    isLive: false,
  },
  {
    id: 4,
    title: "اللغة الإنجليزية: قواعد Present Perfect",
    teacher: "أ. سارة عبد الله",
    subject: "اللغة الإنجليزية",
    grade: "الصف الثامن",
    date: "2024-12-15",
    time: "16:00",
    duration: 80,
    price: 12000,
    seatsLeft: 18,
    totalSeats: 60,
    isLive: false,
  },
  {
    id: 5,
    title: "الأحياء: الخلية ومكوناتها",
    teacher: "أ. محمد صالح الدليمي",
    subject: "الأحياء",
    grade: "الصف الثاني عشر",
    date: "2024-12-17",
    time: "15:30",
    duration: 110,
    price: 22000,
    seatsLeft: 10,
    totalSeats: 45,
    isLive: false,
  },
  {
    id: 6,
    title: "الرياضيات: الدوال والمتباينات",
    teacher: "أ. نور الدين يوسف",
    subject: "الرياضيات",
    grade: "الصف العاشر",
    date: "2024-12-16",
    time: "13:00",
    duration: 95,
    price: 16000,
    seatsLeft: 15,
    totalSeats: 50,
    isLive: false,
  },
  {
    id: 7,
    title: "اللغة العربية: البلاغة والبيان",
    teacher: "أ. ليلى أحمد الفهداوي",
    subject: "اللغة العربية",
    grade: "الصف الحادي عشر",
    date: "2024-12-15",
    time: "14:30",
    duration: 90,
    price: 14000,
    seatsLeft: 20,
    totalSeats: 55,
    isLive: false,
  },
  {
    id: 8,
    title: "الفيزياء: الكهرباء الساكنة",
    teacher: "أ. حسين علوان السامرائي",
    subject: "الفيزياء",
    grade: "الصف الثاني عشر",
    date: "2024-12-18",
    time: "16:00",
    duration: 120,
    price: 24000,
    seatsLeft: 7,
    totalSeats: 40,
    isLive: false,
  },
];

export default function LiveClassesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            الصفوف المباشرة
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            تفاعل مع المعلمين والطلاب في الوقت الفعلي
          </p>
        </div>
      </section>

      {/* Features of Live Classes */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            مميزات الصفوف المباشرة
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Video className="w-8 h-8" />}
              title="تفاعل مباشر"
              description="اسأل وناقش مع المعلم مباشرة خلال الصف"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="مجموعات صغيرة"
              description="حد أقصى 60 طالب لضمان جودة التعليم"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="مواعيد مرنة"
              description="صفوف صباحية ومسائية تناسب جدولك"
            />
            <FeatureCard
              icon={<Video className="w-8 h-8" />}
              title="تسجيلات متاحة"
              description="شاهد الصف مرة أخرى بعد انتهائه"
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium">
              الصفوف القادمة
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              اليوم
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              هذا الأسبوع
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              الشهر القادم
            </button>
          </div>
        </div>
      </section>

      {/* Sessions List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-4 max-w-5xl mx-auto">
            {liveSessions.map((session) => (
              <LiveSessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Your Own CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            احجز صفاً خاصاً
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            احجز صفاً مباشراً خاصاً بك مع المعلم المفضل لديك في الوقت المناسب لك
          </p>
          <button className="px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg">
            تصفح المعلمين
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-xl">
      <div className="text-primary-600 flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function LiveSessionCard({ session }: { session: typeof liveSessions[0] }) {
  const seatPercentage = ((session.totalSeats - session.seatsLeft) / session.totalSeats) * 100;
  const isAlmostFull = session.seatsLeft <= 10;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Session Info */}
        <div className="flex-1">
          {/* Header with badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              {session.subject}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              {session.grade}
            </span>
            {session.isLive && (
              <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full flex items-center gap-1 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                مباشر الآن
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {session.title}
          </h3>

          {/* Teacher */}
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <User className="w-4 h-4" />
            <span>{session.teacher}</span>
          </div>

          {/* Session Details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{session.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{session.time} ({session.duration} دقيقة)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span className={isAlmostFull ? "text-orange-600 font-medium" : ""}>
                {session.seatsLeft} مقعد متبقي
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Price and CTA */}
        <div className="lg:w-64 flex flex-col justify-between border-t lg:border-t-0 lg:border-r pt-6 lg:pt-0 lg:pr-6">
          <div>
            <p className="text-3xl font-bold text-primary-600 mb-1">
              {session.price.toLocaleString()} IQD
            </p>
            <p className="text-sm text-gray-500 mb-4">للصف الواحد</p>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>الحجوزات</span>
                <span>{Math.round(seatPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    isAlmostFull ? "bg-orange-500" : "bg-primary-600"
                  }`}
                  style={{ width: `${seatPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  );
}
