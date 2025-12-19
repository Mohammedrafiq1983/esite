import Link from 'next/link';
import { Mail, Lock, User, Phone, Calendar, GraduationCap, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata = {
  title: 'التسجيل كطالب - eDariss',
  description: 'أنشئ حسابك كطالب على منصة eDariss التعليمية',
};

export default function StudentRegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          href="/register"
          className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors mb-6 group"
        >
          <ArrowLeft className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          <span>العودة لاختيار نوع الحساب</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            إنشاء حساب طالب
          </h2>
          <p className="mt-2 text-gray-600">
            املأ البيانات التالية لإنشاء حسابك
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-100 animate-slide-up">
          <form className="space-y-5">
            {/* Personal Information Section */}
            <div className="pb-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">المعلومات الشخصية</h3>

              <div className="grid md:grid-cols-2 gap-5">
                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    الاسم الأول
                  </Label>
                  <div className="relative group">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="أحمد"
                      className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    الاسم الأخير
                  </Label>
                  <div className="relative group">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="محمد"
                      className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 mt-5">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  البريد الإلكتروني
                </Label>
                <div className="relative group">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@example.com"
                    className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2 mt-5">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  رقم الهاتف
                </Label>
                <div className="relative group">
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+966 5X XXX XXXX"
                    className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Academic Information Section */}
            <div className="pb-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">المعلومات الدراسية</h3>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Grade Level */}
                <div className="space-y-2">
                  <Label htmlFor="grade" className="text-gray-700 font-medium">
                    المرحلة الدراسية
                  </Label>
                  <div className="relative group">
                    <GraduationCap className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                    <select
                      id="grade"
                      className="pr-10 h-12 w-full rounded-md border border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300 bg-white"
                      required
                    >
                      <option value="">اختر المرحلة</option>
                      <option value="GRADE_1">الصف الأول</option>
                      <option value="GRADE_2">الصف الثاني</option>
                      <option value="GRADE_3">الصف الثالث</option>
                      <option value="GRADE_4">الصف الرابع</option>
                      <option value="GRADE_5">الصف الخامس</option>
                      <option value="GRADE_6">الصف السادس</option>
                      <option value="GRADE_7">الصف السابع</option>
                      <option value="GRADE_8">الصف الثامن</option>
                      <option value="GRADE_9">الصف التاسع</option>
                      <option value="GRADE_10">الصف العاشر</option>
                      <option value="GRADE_11">الصف الحادي عشر</option>
                      <option value="GRADE_12">الصف الثاني عشر</option>
                      <option value="UNIVERSITY">جامعي</option>
                    </select>
                  </div>
                </div>

                {/* Birth Date */}
                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="text-gray-700 font-medium">
                    تاريخ الميلاد
                  </Label>
                  <div className="relative group">
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                    <Input
                      id="birthDate"
                      type="date"
                      className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Account Security Section */}
            <div className="pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">الأمان</h3>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    كلمة المرور
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                      required
                      minLength={8}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">يجب أن تكون 8 أحرف على الأقل</p>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                    تأكيد كلمة المرور
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms Acceptance */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-colors cursor-pointer"
                required
              />
              <label htmlFor="terms" className="mr-2 block text-sm text-gray-700 cursor-pointer">
                أوافق على{' '}
                <Link href="/terms" className="text-primary-600 hover:text-primary-800 underline">
                  شروط الخدمة
                </Link>
                {' '}و{' '}
                <Link href="/privacy" className="text-primary-600 hover:text-primary-800 underline">
                  سياسة الخصوصية
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span>إنشاء الحساب</span>
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link
                href="/login"
                className="font-semibold text-primary-600 hover:text-primary-800 transition-colors"
              >
                سجل دخولك من هنا
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
