import Link from 'next/link';
import { GraduationCap, UserCheck, ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'إنشاء حساب - إدارس',
  description: 'انضم إلى منصة إدارس التعليمية كطالب أو معلم',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-green/10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              إدارس
            </h1>
          </Link>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ابدأ رحلتك التعليمية اليوم
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر نوع حسابك للانضمام إلى منصة إدارس التعليمية
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Student Card */}
          <Link href="/register/student" className="group">
            <div className="relative bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-up">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                التسجيل كطالب
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                انضم إلى آلاف الطلاب واحصل على تعليم متميز في جميع المواد الدراسية مع معلمين مؤهلين
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center ml-3">
                    <BookOpen className="h-4 w-4 text-primary-600" />
                  </div>
                  <span>الوصول لآلاف الدورات التعليمية</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center ml-3">
                    <Users className="h-4 w-4 text-primary-600" />
                  </div>
                  <span>حصص مباشرة مع المعلمين</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center ml-3">
                    <Award className="h-4 w-4 text-primary-600" />
                  </div>
                  <span>شهادات معتمدة عند الإكمال</span>
                </li>
              </ul>

              {/* Button */}
              <Button className="w-full h-12 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-200">
                <span>ابدأ التعلم الآن</span>
                <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-secondary-green/10 text-secondary-green px-3 py-1 rounded-full text-sm font-semibold">
                  الأكثر شعبية
                </span>
              </div>
            </div>
          </Link>

          {/* Teacher Card */}
          <Link href="/register/teacher" className="group">
            <div className="relative bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent hover:border-secondary-orange transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-orange to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <UserCheck className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                التسجيل كمعلم
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                شارك خبرتك ومعرفتك مع الطلاب واكسب دخلاً إضافياً من خلال التدريس على منصتنا
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center ml-3">
                    <Users className="h-4 w-4 text-secondary-orange" />
                  </div>
                  <span>تواصل مع آلاف الطلاب</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center ml-3">
                    <BookOpen className="h-4 w-4 text-secondary-orange" />
                  </div>
                  <span>أنشئ وبع دوراتك الخاصة</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center ml-3">
                    <Award className="h-4 w-4 text-secondary-orange" />
                  </div>
                  <span>جدول مرن وإدارة سهلة</span>
                </li>
              </ul>

              {/* Button */}
              <Button className="w-full h-12 bg-gradient-to-r from-secondary-orange to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-200">
                <span>ابدأ التدريس الآن</span>
                <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Link>
        </div>

        {/* Login Link */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <p className="text-gray-600 text-lg">
            لديك حساب بالفعل؟{' '}
            <Link
              href="/login"
              className="font-semibold text-primary-600 hover:text-primary-800 transition-colors"
            >
              سجل دخولك من هنا
            </Link>
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            بإنشاء حساب، أنت توافق على{' '}
            <Link href="/terms" className="text-primary-600 hover:text-primary-800 transition-colors">
              شروط الخدمة
            </Link>
            {' '}و{' '}
            <Link href="/privacy" className="text-primary-600 hover:text-primary-800 transition-colors">
              سياسة الخصوصية
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
