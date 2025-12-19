import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'اتصل بنا - eDariss',
  description: 'تواصل مع فريق eDariss. نحن هنا لمساعدتك والإجابة على استفساراتك',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                تواصل معنا
              </h1>
              <p className="text-xl text-primary-100">
                نحن هنا لمساعدتك! تواصل معنا عبر أي من القنوات التالية أو املأ النموذج وسنرد عليك في أقرب وقت
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Email Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                  <Mail className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">البريد الإلكتروني</h3>
                <a href="mailto:info@edariss.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                  info@edariss.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="w-14 h-14 bg-secondary-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary-green transition-colors">
                  <Phone className="h-7 w-7 text-secondary-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">الهاتف</h3>
                <a href="tel:+9647801234567" className="text-primary-600 hover:text-primary-800 transition-colors" dir="ltr">
                  +964 780 123 4567
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="w-14 h-14 bg-secondary-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary-orange transition-colors">
                  <MapPin className="h-7 w-7 text-secondary-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">العنوان</h3>
                <p className="text-gray-600 text-sm">
                  كركوك، جمهورية العراق
                </p>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up" style={{ animationDelay: '300ms' }}>
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                  <Clock className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">ساعات العمل</h3>
                <p className="text-gray-600 text-sm">
                  السبت - الخميس<br />
                  9:00 ص - 6:00 م
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center ml-4">
                    <MessageSquare className="h-6 w-6 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    أرسل لنا رسالة
                  </h2>
                </div>

                <form className="bg-gray-50 rounded-2xl p-8 space-y-6 border border-gray-100 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        الاسم الكامل
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="أحمد محمد"
                        className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        البريد الإلكتروني
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+966 5X XXX XXXX"
                      className="h-12 border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      الموضوع
                    </Label>
                    <select
                      id="subject"
                      className="h-12 w-full rounded-md border border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 bg-white"
                      required
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="general">استفسار عام</option>
                      <option value="technical">دعم فني</option>
                      <option value="courses">الدورات والمحتوى</option>
                      <option value="payment">الدفع والاشتراكات</option>
                      <option value="teacher">أسئلة المعلمين</option>
                      <option value="partnership">شراكات وتعاون</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      الرسالة
                    </Label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full rounded-md border border-gray-200 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 p-3"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <span>إرسال الرسالة</span>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-green/10 rounded-xl flex items-center justify-center ml-4">
                    <HelpCircle className="h-6 w-6 text-secondary-green" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    الأسئلة الشائعة
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* FAQ Item 1 */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      كيف يمكنني التسجيل في منصة eDariss؟
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      يمكنك التسجيل بسهولة من خلال زيارة صفحة التسجيل واختيار نوع الحساب (طالب أو معلم) وملء البيانات المطلوبة.
                    </p>
                  </div>

                  {/* FAQ Item 2 */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      هل يمكنني تجربة المنصة قبل الاشتراك؟
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      نعم، نوفر فترة تجريبية مجانية لمدة 7 أيام يمكنك خلالها استكشاف جميع ميزات المنصة.
                    </p>
                  </div>

                  {/* FAQ Item 3 */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      ما هي طرق الدفع المتاحة؟
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      نقبل جميع بطاقات الائتمان والخصم المحلية والدولية، بالإضافة إلى محافظ الدفع الإلكتروني.
                    </p>
                  </div>

                  {/* FAQ Item 4 */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      هل الشهادات معتمدة؟
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      نعم، جميع الشهادات التي نقدمها معتمدة ويمكن استخدامها لإثبات مهاراتك ومعرفتك.
                    </p>
                  </div>

                  {/* FAQ Item 5 */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary-300 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      كيف يمكنني أن أصبح معلماً على المنصة؟
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      سجل كمعلم من خلال نموذج التسجيل الخاص بالمعلمين، وسيتم مراجعة طلبك من قبل فريقنا خلال 24-48 ساعة.
                    </p>
                  </div>
                </div>

                {/* Additional Help */}
                <div className="mt-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white">
                  <h3 className="font-semibold mb-2">
                    لم تجد إجابة لسؤالك؟
                  </h3>
                  <p className="text-primary-100 text-sm mb-4">
                    تواصل معنا مباشرة وسنكون سعداء بمساعدتك
                  </p>
                  <a
                    href="mailto:support@edariss.com"
                    className="inline-flex items-center text-white hover:text-primary-100 transition-colors font-medium"
                  >
                    <Mail className="ml-2 h-5 w-5" />
                    <span>support@edariss.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="h-96 bg-gray-200">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">كركوك، جمهورية العراق</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
