import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About + Location */}
          <div>
            <div className="mb-4">
              <Image
                src="/eDariss_logo.png"
                alt="eDariss Logo"
                width={140}
                height={47}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              منصة التعليم الإلكتروني الرائدة في العراق
            </p>
            <div className="text-sm">
              <p className="font-semibold text-white mb-2">موقعنا:</p>
              <p className="leading-relaxed">
                كركوك، حي الواسطي<br />
                قرب الجسر<br />
                عمارة مكتب اللقاء
              </p>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">المنصة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  تصفح الدورات
                </Link>
              </li>
              <li>
                <Link href="/live-classes" className="hover:text-white transition-colors">
                  الصفوف المباشرة
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="hover:text-white transition-colors">
                  المعلمون
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  عن المنصة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  الأسعار
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">قانوني</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  شروط الخدمة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 eDariss. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
