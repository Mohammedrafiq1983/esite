import Link from 'next/link';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'الأسعار والباقات - إدارس',
  description: 'اختر الباقة المناسبة لك وابدأ رحلتك التعليمية مع إدارس',
};

const pricingPlans = [
  {
    name: 'المجاني',
    price: '0',
    period: 'مجاني للأبد',
    description: 'مثالي للمبتدئين الذين يرغبون في تجربة المنصة',
    icon: Star,
    color: 'primary',
    features: [
      'الوصول لـ 5 دورات مجانية',
      'مشاهدة الدروس المسجلة',
      'الاختبارات الأساسية',
      'دعم عبر البريد الإلكتروني',
      'شهادة إتمام للدورات المجانية',
    ],
    notIncluded: [
      'الصفوف المباشرة',
      'التواصل مع المعلمين',
      'المحتوى المتميز',
    ],
  },
  {
    name: 'الأساسي',
    price: '99',
    period: 'شهرياً',
    description: 'للطلاب الذين يريدون تعلماً منظماً',
    icon: Zap,
    color: 'green',
    popular: true,
    features: [
      'الوصول لجميع الدورات',
      '10 حصص مباشرة شهرياً',
      'التواصل مع المعلمين',
      'الاختبارات والواجبات',
      'شهادات معتمدة',
      'دعم فني على مدار الساعة',
      'تحميل المواد الدراسية',
    ],
    notIncluded: [
      'المحتوى الحصري',
      'جلسات خاصة',
    ],
  },
  {
    name: 'المتميز',
    price: '199',
    period: 'شهرياً',
    description: 'للطلاب الجادين الباحثين عن التميز',
    icon: Crown,
    color: 'orange',
    features: [
      'كل ميزات الباقة الأساسية',
      'حصص مباشرة غير محدودة',
      'المحتوى الحصري المتميز',
      '4 جلسات خاصة شهرياً',
      'أولوية في الدعم الفني',
      'تقارير تقدم مفصلة',
      'تدريب شخصي',
      'ورش عمل حصرية',
      'خصم 20% على الدورات المدفوعة',
    ],
    notIncluded: [],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                خطط الأسعار
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                اختر الباقة التي تناسب احتياجاتك وابدأ رحلتك التعليمية اليوم
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Check className="h-5 w-5 text-secondary-green" />
                <span>جميع الباقات تشمل فترة تجريبية مجانية لمدة 7 أيام</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative bg-white rounded-3xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-up ${
                      plan.popular
                        ? 'border-secondary-green scale-105'
                        : 'border-transparent'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 right-1/2 translate-x-1/2">
                        <Badge className="bg-secondary-green text-white px-4 py-1 text-sm font-semibold shadow-lg">
                          الأكثر شعبية
                        </Badge>
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                        plan.color === 'primary'
                          ? 'bg-primary-100'
                          : plan.color === 'green'
                          ? 'bg-secondary-green/10'
                          : 'bg-secondary-orange/10'
                      }`}
                    >
                      <Icon
                        className={`h-8 w-8 ${
                          plan.color === 'primary'
                            ? 'text-primary-600'
                            : plan.color === 'green'
                            ? 'text-secondary-green'
                            : 'text-secondary-orange'
                        }`}
                      />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-sm">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-gray-600">ريال</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{plan.period}</p>
                    </div>

                    {/* CTA Button */}
                    <Link href="/register/student" className="block mb-8">
                      <Button
                        className={`w-full h-12 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group ${
                          plan.popular
                            ? 'bg-gradient-to-r from-secondary-green to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white'
                            : plan.color === 'orange'
                            ? 'bg-gradient-to-r from-secondary-orange to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white'
                            : 'bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
                        }`}
                      >
                        <span>
                          {plan.price === '0' ? 'ابدأ مجاناً' : 'اشترك الآن'}
                        </span>
                        <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    {/* Features */}
                    <div className="space-y-4 mb-6">
                      <p className="text-sm font-semibold text-gray-900">
                        الميزات المتضمنة:
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-gray-700 text-sm"
                          >
                            <div className="w-5 h-5 rounded-full bg-secondary-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-secondary-green" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included */}
                    {plan.notIncluded.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3 text-gray-400 text-sm"
                            >
                              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <span className="text-xs">×</span>
                              </div>
                              <span className="line-through">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                أسئلة شائعة حول الأسعار
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    هل يمكنني تغيير باقتي لاحقاً؟
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    نعم، يمكنك الترقية أو التخفيض في أي وقت. عند الترقية، ستحصل على الميزات الإضافية فوراً. عند التخفيض، ستستمر بالباقة الحالية حتى نهاية فترة الاشتراك.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ما هي طرق الدفع المقبولة؟
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    نقبل جميع بطاقات الائتمان والخصم (Visa, Mastercard, Mada)، بالإضافة إلى Apple Pay والمحافظ الإلكترونية.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    هل يمكنني إلغاء اشتراكي؟
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    بالتأكيد! يمكنك إلغاء اشتراكك في أي وقت من لوحة التحكم. ستستمر بالوصول للمحتوى حتى نهاية فترة الاشتراك المدفوعة.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    هل توجد خصومات للطلاب أو المؤسسات؟
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    نعم، نوفر خصومات خاصة للمدارس والجامعات والمجموعات. تواصل معنا عبر صفحة الاتصال للحصول على عرض مخصص.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ما هي الفترة التجريبية المجانية؟
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    جميع الباقات المدفوعة تأتي مع فترة تجريبية مجانية لمدة 7 أيام. يمكنك الإلغاء في أي وقت خلال هذه الفترة بدون أي رسوم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                هل لديك أسئلة أخرى؟
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                فريقنا جاهز لمساعدتك في اختيار الباقة المناسبة
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button className="h-12 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-xl px-8 shadow-lg">
                    تواصل معنا
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="h-12 bg-secondary-green hover:bg-emerald-600 text-white font-semibold rounded-xl px-8 shadow-lg">
                    ابدأ التجربة المجانية
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
