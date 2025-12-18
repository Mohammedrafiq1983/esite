import Link from 'next/link';
import { Mail, Lock, ArrowRight, Chrome, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata = {
  title: 'تسجيل الدخول - إدارس',
  description: 'سجل دخولك للوصول إلى حسابك على منصة إدارس التعليمية',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8 animate-fade-in">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              إدارس
            </h1>
          </Link>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            مرحباً بعودتك
          </h2>
          <p className="mt-2 text-gray-600">
            سجل دخولك للمتابعة رحلتك التعليمية
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-100 animate-slide-up">
          <form className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                البريد الإلكتروني
              </Label>
              <div className="relative group">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  كلمة المرور
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pr-10 h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 hover:border-gray-300"
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-colors cursor-pointer"
              />
              <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-700 cursor-pointer">
                تذكرني
              </label>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span>تسجيل الدخول</span>
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">أو تابع مع</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="h-11 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
            >
              <Chrome className="ml-2 h-5 w-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
              <span className="text-gray-700 group-hover:text-primary-700">Google</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
            >
              <Facebook className="ml-2 h-5 w-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
              <span className="text-gray-700 group-hover:text-primary-700">Facebook</span>
            </Button>
          </div>

          {/* Register Link */}
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-gray-600">
              ليس لديك حساب؟{' '}
              <Link
                href="/register"
                className="font-semibold text-primary-600 hover:text-primary-800 transition-colors"
              >
                سجل الآن مجاناً
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <p className="mt-6 text-center text-sm text-gray-500">
          بتسجيل الدخول، أنت توافق على{' '}
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
  );
}
