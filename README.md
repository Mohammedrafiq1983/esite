# Edariss E-Learning Platform

Modern e-learning platform connecting Iraqi teachers with students for supplementary education.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** NextAuth.js v5
- **Deployment:** Vercel

## 📋 Features

### For Students
- Browse and enroll in courses
- Watch video lessons
- Take quizzes and submit assignments
- Join live classes
- Track learning progress
- Earn certificates

### For Teachers
- Create and manage courses
- Upload video lessons and resources
- Create quizzes and assignments
- Schedule live sessions
- Monitor student progress
- Track earnings

### For Parents
- Monitor child progress
- Manage payments
- Communicate with teachers
- View detailed reports

### For Admins
- User management
- Content moderation
- Analytics and reporting
- Payment oversight
- Platform configuration

## 🎯 Subjects Covered

- Mathematics (الرياضيات)
- Physics (الفيزياء)
- Chemistry (الكيمياء)
- Science (العلوم)
- Arabic Language (اللغة العربية)
- English Language (اللغة الإنجليزية)

## 📚 Grade Levels

- Middle School: Grades 7-9
- High School: Grades 10-12

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Supabase account)
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd edariss-platform
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Update `.env.local` with your database credentials and API keys

5. Generate Prisma client:
\`\`\`bash
npx prisma generate
\`\`\`

6. Run database migrations:
\`\`\`bash
npx prisma db push
\`\`\`

7. (Optional) Seed the database:
\`\`\`bash
npx prisma db seed
\`\`\`

8. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

9. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
edariss-platform/
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── layout/       # Layout components
│   │   ├── course/       # Course components
│   │   ├── forms/        # Form components
│   │   └── ...
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript types
│   └── styles/           # Global styles
├── .env.local            # Environment variables
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
\`\`\`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma db push` - Push schema changes to database
- `npx prisma generate` - Generate Prisma Client

## 🌐 Environment Variables

See `.env.example` for all required environment variables.

### Required:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - NextAuth secret key
- `NEXTAUTH_URL` - Application URL

### Optional (for full functionality):
- Google OAuth credentials
- Stripe API keys
- Supabase credentials
- Daily.co API key
- Resend API key

## 📦 Database Schema

The platform uses PostgreSQL with Prisma ORM. Key models include:

- **User** - Base user authentication
- **StudentProfile, TeacherProfile, ParentProfile** - Role-specific profiles
- **Course** - Course information and content
- **Lesson** - Individual video lessons
- **Quiz, Question, QuizAttempt** - Assessment system
- **Enrollment, Progress** - Student progress tracking
- **LiveSession** - Video conferencing sessions
- **Payment** - Transaction records
- **Review, Notification, Message** - Communication features

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🔐 Security

- Password hashing with bcrypt
- JWT-based sessions
- CSRF protection
- SQL injection prevention (Prisma)
- XSS protection (React)
- Rate limiting
- Input validation with Zod

## 📝 Development Phases

### Phase 1: Foundation ✅
- Next.js setup
- Prisma & Supabase
- Authentication
- Basic homepage

### Phase 2: Course System (In Progress)
- Course creation
- Video player
- Enrollment system
- Search & filtering

### Phase 3-8: See PRD document for full roadmap

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before getting started.

## 📄 License

ISC

## 📧 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ for Iraqi students**
