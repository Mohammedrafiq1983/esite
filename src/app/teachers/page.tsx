import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, Award, Star, BookOpen, CheckCircle } from "lucide-react";

export const metadata = {
  title: "المعلمون - إدارس",
  description: "تعرف على أفضل المعلمين المعتمدين في العراق. معلمون ذوو خبرة في الرياضيات، العلوم، الفيزياء، الكيمياء واللغات",
};

const teachers = [
  {
    id: 1,
    name: "أ. أحمد محمد الجبوري",
    subject: "الرياضيات",
    specialization: "الجبر والهندسة",
    experience: 12,
    students: 487,
    rating: 4.9,
    courses: 8,
    verified: true,
  },
  {
    id: 2,
    name: "أ. فاطمة حسن العبيدي",
    subject: "الفيزياء",
    specialization: "الكهرباء والمغناطيسية",
    experience: 10,
    students: 356,
    rating: 4.8,
    courses: 6,
    verified: true,
  },
  {
    id: 3,
    name: "أ. علي كريم النعيمي",
    subject: "الكيمياء",
    specialization: "الكيمياء العضوية",
    experience: 15,
    students: 423,
    rating: 5.0,
    courses: 10,
    verified: true,
  },
  {
    id: 4,
    name: "أ. سارة عبد الله الخفاجي",
    subject: "اللغة الإنجليزية",
    specialization: "القواعد والمحادثة",
    experience: 8,
    students: 612,
    rating: 4.9,
    courses: 12,
    verified: true,
  },
  {
    id: 5,
    name: "أ. محمد صالح الدليمي",
    subject: "الأحياء",
    specialization: "علم الخلايا والوراثة",
    experience: 11,
    students: 298,
    rating: 4.7,
    courses: 7,
    verified: true,
  },
  {
    id: 6,
    name: "أ. نور الدين يوسف",
    subject: "الرياضيات",
    specialization: "حساب التفاضل والتكامل",
    experience: 9,
    students: 445,
    rating: 4.8,
    courses: 9,
    verified: true,
  },
  {
    id: 7,
    name: "أ. ليلى أحمد الفهداوي",
    subject: "اللغة العربية",
    specialization: "النحو والأدب",
    experience: 14,
    students: 534,
    rating: 4.9,
    courses: 11,
    verified: true,
  },
  {
    id: 8,
    name: "أ. حسين علوان السامرائي",
    subject: "الفيزياء",
    specialization: "الميكانيكا والحركة",
    experience: 13,
    students: 391,
    rating: 5.0,
    courses: 8,
    verified: true,
  },
  {
    id: 9,
    name: "أ. زينب محمود الجنابي",
    subject: "الكيمياء",
    specialization: "الكيمياء التحليلية",
    experience: 7,
    students: 267,
    rating: 4.7,
    courses: 5,
    verified: true,
  },
  {
    id: 10,
    name: "أ. كريم طارق البياتي",
    subject: "التاريخ",
    specialization: "التاريخ الحديث والمعاصر",
    experience: 10,
    students: 312,
    rating: 4.8,
    courses: 6,
    verified: true,
  },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            تعرف على معلمينا
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            معلمون معتمدون وذوو خبرة في جميع التخصصات
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="150+" label="معلم معتمد" icon={<Award />} />
            <StatCard number="15+" label="سنة خبرة معدلة" icon={<BookOpen />} />
            <StatCard number="4.9" label="تقييم المعلمين" icon={<Star />} />
            <StatCard number="98%" label="رضا الطلاب" icon={<Users />} />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <h2 className="text-lg font-semibold text-gray-900">تصفية حسب المادة:</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">
                جميع المواد
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                الرياضيات
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                الفيزياء
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                الكيمياء
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                اللغات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* Become Teacher CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            هل أنت معلم؟
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            انضم إلى منصة إدارس وابدأ بتدريس آلاف الطلاب في جميع أنحاء العراق
          </p>
          <button className="px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            سجل كمعلم
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="text-primary-600 flex justify-center mb-2">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function TeacherCard({ teacher }: { teacher: typeof teachers[0] }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      {/* Profile Photo Placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center relative">
        <Users className="w-16 h-16 text-white opacity-80" />
        {teacher.verified && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            معتمد
          </div>
        )}
      </div>

      {/* Teacher Info */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {teacher.name}
        </h3>

        {/* Subject */}
        <p className="text-primary-600 font-medium mb-2">{teacher.subject}</p>

        {/* Specialization */}
        <p className="text-sm text-gray-600 mb-4">{teacher.specialization}</p>

        {/* Stats */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center justify-between text-gray-600">
            <span>الخبرة:</span>
            <span className="font-medium text-gray-900">{teacher.experience} سنة</span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>الطلاب:</span>
            <span className="font-medium text-gray-900">{teacher.students} طالب</span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>التقييم:</span>
            <span className="font-medium text-gray-900 flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              {teacher.rating}
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>الدورات:</span>
            <span className="font-medium text-gray-900">{teacher.courses} دورة</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition">
          عرض الملف الشخصي
        </button>
      </div>
    </div>
  );
}
