import Link from "next/link";
import { BookOpen, Users, Video, Award, Clock, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">
            Edariss
          </div>
          <div className="hidden md:flex gap-6">
            <Link href="/courses" className="text-gray-700 hover:text-primary-600 transition">
              Courses
            </Link>
            <Link href="/teachers" className="text-gray-700 hover:text-primary-600 transition">
              Teachers
            </Link>
            <Link href="/live-classes" className="text-gray-700 hover:text-primary-600 transition">
              Live Classes
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              About
            </Link>
          </div>
          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn From the Best Teachers in
            <span className="text-primary-600"> Iraq</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students accessing high-quality education through live classes,
            recorded lessons, and personalized learning paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register/student"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
            >
              Start Learning Today
            </Link>
            <Link
              href="/register/teacher"
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg text-lg font-semibold hover:bg-primary-50 transition"
            >
              Become a Teacher
            </Link>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary-600" />
              <span>10,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-600" />
              <span>500+ Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-600" />
              <span>Certified Teachers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Edariss?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for successful online learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Video className="w-8 h-8" />}
              title="Live & Recorded Classes"
              description="Join live sessions or watch recorded lessons at your own pace"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Expert Teachers"
              description="Learn from certified Iraqi educators specializing in core subjects"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Flexible Schedule"
              description="Study anytime, anywhere with our mobile-friendly platform"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Progress Tracking"
              description="Monitor your learning journey with detailed analytics"
            />
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Subjects
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage of Iraqi curriculum for grades 7-12
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SubjectCard title="Mathematics" arabicTitle="الرياضيات" color="bg-blue-500" />
            <SubjectCard title="Physics" arabicTitle="الفيزياء" color="bg-purple-500" />
            <SubjectCard title="Chemistry" arabicTitle="الكيمياء" color="bg-green-500" />
            <SubjectCard title="Science" arabicTitle="العلوم" color="bg-yellow-500" />
            <SubjectCard title="Arabic Language" arabicTitle="اللغة العربية" color="bg-red-500" />
            <SubjectCard title="English Language" arabicTitle="اللغة الإنجليزية" color="bg-indigo-500" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepCard
              number="1"
              title="Create Account"
              description="Sign up as a student or teacher in less than 2 minutes"
            />
            <StepCard
              number="2"
              title="Choose Courses"
              description="Browse subjects and enroll in courses that match your grade level"
            />
            <StepCard
              number="3"
              title="Start Learning"
              description="Attend live classes, complete quizzes, and track your progress"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join Edariss today and get access to hundreds of courses taught by expert teachers
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Edariss</h3>
              <p className="text-sm">
                Empowering Iraqi students through quality online education
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className="hover:text-white transition">Browse Courses</Link></li>
                <li><Link href="/live-classes" className="hover:text-white transition">Live Classes</Link></li>
                <li><Link href="/teachers" className="hover:text-white transition">Find Teachers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Edariss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function SubjectCard({ title, arabicTitle, color }: { title: string; arabicTitle: string; color: string }) {
  return (
    <div className={`${color} p-6 rounded-xl text-white hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg font-tajawal">{arabicTitle}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
