import Link from 'next/link';
import { Mail, Lock, User, Phone, FileText, Award, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata = {
  title: 'التسجيل كمعلم - eDariss',
  description: 'أنشئ حسابك كمعلم على منصة eDariss التعليمية',
};

export default function TeacherRegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          href="/register"
          className="inline-flex items-center text-secondary-orange hover:text-amber-700 transition-colors mb-6 group"
        >
          <ArrowLeft className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          <span>العودة لاختيار نوع الحساب</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary-orange to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            إنشاء حساب معلم
          </h2>
          <p className="mt-2 text-gray-600">
            املأ البيانات التالية لبدء رحلتك في التدريس
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
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="خالد"
                      className="pr-10 h-12 border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300"
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
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="العبيدي"
                      className="pr-10 h-12 border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300"
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
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="teacher@example.com"
                    className="pr-10 h-12 border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300"
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
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+964 770 123 4567"
                    className="pr-10 h-12 border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="pb-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">المعلومات المهنية</h3>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Subject Specialization */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    التخصص
                  </Label>
                  <div className="relative group">
                    <BookOpen className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                    <select
                      id="subject"
                      className="pr-10 h-12 w-full rounded-md border border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300 bg-white"
                      required
                    >
                      <option value="">اختر التخصص</option>
                      <option value="ARABIC">اللغة العربية</option>
                      <option value="ENGLISH">اللغة الإنجليزية</option>
                      <option value="MATH">الرياضيات</option>
                      <option value="SCIENCE">العلوم</option>
                      <option value="PHYSICS">الفيزياء</option>
                      <option value="CHEMISTRY">الكيمياء</option>
                      <option value="BIOLOGY">الأحياء</option>
                      <option value="HISTORY">التاريخ</option>
                      <option value="GEOGRAPHY">الجغرافيا</option>
                      <option value="ISLAMIC">التربية الإسلامية</option>
                      <option value="COMPUTER">الحاسبة</option>
                      <option value="ART">الفنون</option>
                      <option value="PE">التربية البدنية</option>
                      <option value="OTHER">أخرى</option>
                    </select>
                  </div>
                </div>

                {/* Years of Experience */}
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-gray-700 font-medium">
                    سنوات الخبرة
                  </Label>
                  <div className="relative group">
                    <Award className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                    <Input
                      id="experience"
                      type="number"
                      placeholder="5"
                      min="0"
                      max="50"
                      className="pr-10 h-12 border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-2 mt-5">
                <Label htmlFor="qualifications" className="text-gray-700 font-medium">
                  المؤهلات العلمية
                </Label>
                <div className="relative group">
                  <Award className="absolute right-3 top-3 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                  <textarea
                    id="qualifications"
                    rows={3}
                    placeholder="مثال: بكالوريوس في الرياضيات من جامعة كركوك ماجستير في التربية..."
                    className="pr-10 w-full rounded-md border border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300 p-3"
                    required
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2 mt-5">
                <Label htmlFor="bio" className="text-gray-700 font-medium">
                  نبذة عنك
                </Label>
                <div className="relative group">
                  <FileText className="absolute right-3 top-3 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                  <textarea
                    id="bio"
                    rows={4}
                    placeholder="اكتب نبذة مختصرة عن خبرتك التعليمية وأسلوبك في التدريس..."
                    className="pr-10 w-full rounded-md border border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300 p-3"
                    required
                  />
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
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pr-10 h-12 border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300"
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
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-secondary-orange transition-colors" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pr-10 h-12 border-gray-200 focus:border-secondary-orange focus:ring-secondary-orange transition-all duration-200 hover:border-gray-300"
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
                className="h-4 w-4 mt-1 text-secondary-orange focus:ring-secondary-orange border-gray-300 rounded transition-colors cursor-pointer"
                required
              />
              <label htmlFor="terms" className="mr-2 block text-sm text-gray-700 cursor-pointer">
                أوافق على{' '}
                <Link href="/terms" className="text-secondary-orange hover:text-amber-700 underline">
                  شروط الخدمة
                </Link>
                {' '}و{' '}
                <Link href="/privacy" className="text-secondary-orange hover:text-amber-700 underline">
                  سياسة الخصوصية
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-secondary-orange to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group"
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
                className="font-semibold text-secondary-orange hover:text-amber-700 transition-colors"
              >
                سجل دخولك من هنا
              </Link>
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-2">ملاحظة هامة:</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            سيتم مراجعة طلبك من قبل فريقنا خلال 24-48 ساعة. سنتواصل معك عبر البريد الإلكتروني لتأكيد حسابك وبدء رحلتك التعليمية معنا.
          </p>
        </div>
      </div>
    </div>
  );
}
