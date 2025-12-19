import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Auth Buttons (Right in RTL) */}
        <div className="flex items-center gap-4">
          <Link href="/register">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              ابدأ الآن
            </button>
          </Link>
          <Link href="/login" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
            تسجيل الدخول
          </Link>
        </div>

        {/* Navigation (Center) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="hover:text-primary-600 transition-colors font-medium">
            عن المنصة
          </Link>
          <Link href="/live-classes" className="hover:text-primary-600 transition-colors font-medium">
            الصفوف المباشرة
          </Link>
          <Link href="/teachers" className="hover:text-primary-600 transition-colors font-medium">
            المعلمون
          </Link>
          <Link href="/courses" className="hover:text-primary-600 transition-colors font-medium">
            الدورات
          </Link>
        </nav>

        {/* Logo (Left in RTL) */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/eDariss_logo.png"
            alt="eDariss Logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-700">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
