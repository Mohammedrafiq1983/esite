# Product Requirements Document (PRD)
# Edariss E-Learning Platform (www.edariss.com)

**Version:** 1.0  
**Last Updated:** December 2024  
**Project Type:** E-Learning Platform  
**Target Market:** Iraqi Students (Grades 7-12) in Kirkuk & Beyond  
**Deployment:** Vercel + Supabase

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [Technical Stack](#3-technical-stack)
4. [System Architecture](#4-system-architecture)
5. [Database Schema](#5-database-schema)
6. [Feature Requirements](#6-feature-requirements)
7. [UI/UX Specifications](#7-uiux-specifications)
8. [API Specifications](#8-api-specifications)
9. [Component Architecture](#9-component-architecture)
10. [Authentication & Authorization](#10-authentication--authorization)
11. [Third-Party Integrations](#11-third-party-integrations)
12. [Development Phases](#12-development-phases)
13. [Testing Requirements](#13-testing-requirements)
14. [Deployment Instructions](#14-deployment-instructions)
15. [Security & Performance](#15-security--performance)

---

## 1. Executive Summary

### 1.1 Project Goal
Build a modern, scalable e-learning platform that connects Iraqi teachers with students for supplementary education outside traditional schools. The platform will feature live classes, recorded lessons, quizzes, progress tracking, and parent monitoring.

### 1.2 Target Users
- **Students:** Grades 7-12 (ages 12-18)
- **Teachers:** Certified educators specializing in core subjects
- **Parents:** Monitoring child progress and managing payments
- **Admins:** Platform management and content moderation

### 1.3 Core Value Proposition
- Flexible, high-quality supplementary education
- One-on-one and group sessions
- National Iraqi curriculum alignment
- Affordable pricing with multiple payment options
- Comprehensive progress tracking

---

## 2. Product Overview

### 2.1 Platform Features

**For Students:**
- Course enrollment and content access
- Live and recorded lessons
- Interactive quizzes and assignments
- Progress tracking and certificates
- Direct messaging with teachers
- Personalized learning dashboard

**For Teachers:**
- Course creation and management
- Live session scheduling (Zoom/custom)
- Student progress monitoring
- Assignment grading
- Earnings dashboard
- Student communication tools

**For Parents:**
- Child progress monitoring
- Payment management
- Teacher communication
- Report generation
- Multiple child accounts

**For Admins:**
- User management
- Content moderation
- Analytics and reporting
- Payment processing oversight
- Platform configuration

### 2.2 Subjects Covered
- Mathematics (الرياضيات)
- Science (العلوم)
- Physics (الفيزياء)
- Chemistry (الكيمياء)
- Arabic Language (اللغة العربية)
- English Language (اللغة الإنجليزية)

### 2.3 Grade Levels
- Middle School: Grades 7-9
- High School: Grades 10-12
- Future: University/College prep courses

---

## 3. Technical Stack

### 3.1 Frontend
```
Framework: Next.js 14.x (App Router)
Language: TypeScript 5.x
Styling: Tailwind CSS 3.x
UI Components: shadcn/ui + Custom Components
State Management: React Context + Zustand (for complex state)
Forms: React Hook Form + Zod validation
Icons: Lucide React
Animations: Framer Motion
```

### 3.2 Backend
```
API: Next.js API Routes (Edge Runtime where possible)
Database: PostgreSQL (via Supabase)
ORM: Prisma 5.x
Authentication: NextAuth.js v5
File Storage: Supabase Storage / Cloudflare R2
Email: Resend.com
```

### 3.3 Third-Party Services
```
Hosting: Vercel (Free tier initially)
Database: Supabase (Free tier: 500MB, 2GB bandwidth)
Payments: Stripe (Iraq-compatible gateway as backup)
Video Hosting: Cloudflare Stream / Vimeo
Live Sessions: Daily.co API (100 free minutes/month)
Analytics: Vercel Analytics
Error Tracking: Sentry (optional)
```

### 3.4 Development Tools
```
Version Control: Git + GitHub
Package Manager: npm
Code Quality: ESLint + Prettier
Type Checking: TypeScript strict mode
Testing: Jest + React Testing Library (Phase 2)
```

---

## 4. System Architecture

### 4.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     USER BROWSERS                        │
│              (Desktop, Tablet, Mobile)                   │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                  VERCEL CDN/EDGE                         │
│              (Global Distribution)                        │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                  NEXT.JS APPLICATION                     │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Frontend   │  │  API Routes  │  │  Server      │  │
│  │  Components  │  │              │  │  Components  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└──────────┬────────────────┬────────────────┬───────────┘
           │                │                │
           ▼                ▼                ▼
┌──────────────────┐ ┌─────────────┐ ┌──────────────────┐
│   SUPABASE DB    │ │  SUPABASE   │ │   THIRD-PARTY    │
│   (PostgreSQL)   │ │  STORAGE    │ │    SERVICES      │
│                  │ │             │ │                  │
│ - Users          │ │ - Videos    │ │ - Stripe         │
│ - Courses        │ │ - Images    │ │ - Daily.co       │
│ - Progress       │ │ - Documents │ │ - Resend         │
│ - Payments       │ │ - Resources │ │ - Cloudflare     │
└──────────────────┘ └─────────────┘ └──────────────────┘
```

### 4.2 Folder Structure

```
edariss-platform/
├── .github/
│   └── workflows/
│       └── ci.yml                    # GitHub Actions
├── prisma/
│   ├── schema.prisma                 # Database schema
│   ├── seed.ts                       # Seed data
│   └── migrations/                   # DB migrations
├── public/
│   ├── images/
│   ├── videos/
│   └── fonts/
├── src/
│   ├── app/                          # Next.js 14 App Router
│   │   ├── (auth)/                   # Auth routes group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   ├── student/page.tsx
│   │   │   │   ├── teacher/page.tsx
│   │   │   │   └── parent/page.tsx
│   │   │   ├── forgot-password/
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/              # Protected dashboard routes
│   │   │   ├── student/
│   │   │   │   ├── page.tsx          # Student home
│   │   │   │   ├── courses/page.tsx
│   │   │   │   ├── progress/page.tsx
│   │   │   │   └── settings/page.tsx
│   │   │   ├── teacher/
│   │   │   │   ├── page.tsx          # Teacher home
│   │   │   │   ├── courses/
│   │   │   │   │   ├── page.tsx      # Course list
│   │   │   │   │   ├── create/page.tsx
│   │   │   │   │   └── [id]/edit/page.tsx
│   │   │   │   ├── students/page.tsx
│   │   │   │   ├── schedule/page.tsx
│   │   │   │   ├── earnings/page.tsx
│   │   │   │   └── settings/page.tsx
│   │   │   ├── parent/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── children/page.tsx
│   │   │   │   ├── reports/page.tsx
│   │   │   │   └── payments/page.tsx
│   │   │   ├── admin/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── users/page.tsx
│   │   │   │   ├── courses/page.tsx
│   │   │   │   ├── payments/page.tsx
│   │   │   │   └── analytics/page.tsx
│   │   │   └── layout.tsx
│   │   ├── courses/                  # Public course browsing
│   │   │   ├── page.tsx              # All courses
│   │   │   ├── [id]/
│   │   │   │   ├── page.tsx          # Course detail
│   │   │   │   └── lesson/[lessonId]/page.tsx
│   │   │   └── category/[subject]/page.tsx
│   │   ├── live-classes/
│   │   │   ├── page.tsx              # Browse live sessions
│   │   │   ├── [id]/page.tsx         # Session detail
│   │   │   └── join/[id]/page.tsx    # Join live session
│   │   ├── teachers/
│   │   │   ├── page.tsx              # Teacher directory
│   │   │   └── [id]/page.tsx         # Teacher profile
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── api/                      # API Routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/route.ts
│   │   │   ├── courses/
│   │   │   │   ├── route.ts          # GET, POST
│   │   │   │   └── [id]/route.ts     # GET, PUT, DELETE
│   │   │   ├── lessons/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   ├── enrollments/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   ├── progress/
│   │   │   │   └── route.ts
│   │   │   ├── quizzes/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/submit/route.ts
│   │   │   ├── live-sessions/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       ├── route.ts
│   │   │   │       └── join/route.ts
│   │   │   ├── payments/
│   │   │   │   ├── create-intent/route.ts
│   │   │   │   ├── webhook/route.ts
│   │   │   │   └── history/route.ts
│   │   │   ├── users/
│   │   │   │   ├── profile/route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   └── upload/
│   │   │       └── route.ts
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Homepage
│   │   ├── globals.css
│   │   └── error.tsx
│   ├── components/                   # React Components
│   │   ├── ui/                       # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── DashboardLayout.tsx
│   │   ├── course/
│   │   │   ├── CourseCard.tsx
│   │   │   ├── CourseGrid.tsx
│   │   │   ├── CourseDetail.tsx
│   │   │   ├── CoursePlayer.tsx
│   │   │   ├── LessonList.tsx
│   │   │   ├── LessonContent.tsx
│   │   │   └── CourseProgress.tsx
│   │   ├── quiz/
│   │   │   ├── QuizCard.tsx
│   │   │   ├── QuizQuestion.tsx
│   │   │   ├── QuizResults.tsx
│   │   │   └── QuizTimer.tsx
│   │   ├── live-session/
│   │   │   ├── SessionCard.tsx
│   │   │   ├── SessionScheduler.tsx
│   │   │   ├── SessionRoom.tsx
│   │   │   └── SessionControls.tsx
│   │   ├── teacher/
│   │   │   ├── TeacherCard.tsx
│   │   │   ├── TeacherProfile.tsx
│   │   │   ├── TeacherStats.tsx
│   │   │   └── StudentList.tsx
│   │   ├── student/
│   │   │   ├── StudentDashboard.tsx
│   │   │   ├── ProgressChart.tsx
│   │   │   ├── EnrollmentCard.tsx
│   │   │   └── UpcomingClasses.tsx
│   │   ├── parent/
│   │   │   ├── ChildSelector.tsx
│   │   │   ├── ProgressReport.tsx
│   │   │   └── PaymentHistory.tsx
│   │   ├── forms/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── CourseForm.tsx
│   │   │   ├── LessonForm.tsx
│   │   │   ├── QuizForm.tsx
│   │   │   └── ProfileForm.tsx
│   │   ├── shared/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── LanguageToggle.tsx
│   │   └── providers/
│   │       ├── SessionProvider.tsx
│   │       ├── ThemeProvider.tsx
│   │       └── ToastProvider.tsx
│   ├── lib/                          # Utilities
│   │   ├── auth.ts                   # NextAuth config
│   │   ├── db.ts                     # Prisma client
│   │   ├── utils.ts                  # Helper functions
│   │   ├── validations.ts            # Zod schemas
│   │   ├── constants.ts              # App constants
│   │   ├── stripe.ts                 # Stripe config
│   │   ├── supabase.ts               # Supabase client
│   │   ├── email.ts                  # Email utilities
│   │   └── api-client.ts             # API fetch wrapper
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useCourses.ts
│   │   ├── useEnrollment.ts
│   │   ├── useProgress.ts
│   │   ├── useDebounce.ts
│   │   └── useMediaQuery.ts
│   ├── types/                        # TypeScript types
│   │   ├── index.ts
│   │   ├── api.ts
│   │   ├── database.ts
│   │   └── components.ts
│   ├── styles/                       # Global styles
│   │   └── globals.css
│   └── middleware.ts                 # Next.js middleware
├── .env.local                        # Environment variables
├── .env.example                      # Example env file
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. Database Schema

### 5.1 Complete Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// ============================================================================
// AUTHENTICATION & USER MANAGEMENT
// ============================================================================

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?
  role          Role      @default(STUDENT)
  isActive      Boolean   @default(true)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  accounts       Account[]
  sessions       Session[]
  teacherProfile TeacherProfile?
  studentProfile StudentProfile?
  parentProfile  ParentProfile?
  notifications  Notification[]
  messages       Message[]

  @@index([email])
  @@index([role])
}

enum Role {
  STUDENT
  TEACHER
  PARENT
  ADMIN
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// ============================================================================
// USER PROFILES
// ============================================================================

model StudentProfile {
  id          String   @id @default(cuid())
  userId      String   @unique
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  grade       Grade
  school      String?
  phoneNumber String?
  parentId    String?
  
  bio         String?   @db.Text
  interests   String[]  // Array of interests
  
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  enrollments    Enrollment[]
  progress       Progress[]
  quizAttempts   QuizAttempt[]
  assignments    AssignmentSubmission[]
  liveAttendance LiveSessionAttendance[]
  reviews        Review[]

  @@index([userId])
  @@index([grade])
}

enum Grade {
  GRADE_7
  GRADE_8
  GRADE_9
  GRADE_10
  GRADE_11
  GRADE_12
}

model TeacherProfile {
  id             String   @id @default(cuid())
  userId         String   @unique
  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  specializations Subject[]
  bio            String?  @db.Text
  education      String?  // Degree, certifications
  experience     Int?     // Years of experience
  hourlyRate     Float?
  
  rating         Float?   @default(0)
  totalReviews   Int      @default(0)
  totalStudents  Int      @default(0)
  
  phoneNumber    String?
  bankAccount    String?  // For payments
  taxId          String?
  
  isVerified     Boolean  @default(false)
  verifiedAt     DateTime?
  
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  // Relations
  courses       Course[]
  liveSessions  LiveSession[]
  reviews       Review[]

  @@index([userId])
  @@index([isVerified])
}

model ParentProfile {
  id          String   @id @default(cuid())
  userId      String   @unique
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  phoneNumber String?
  childrenIds String[] // Array of StudentProfile IDs
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId])
}

// ============================================================================
// COURSES & CONTENT
// ============================================================================

model Course {
  id          String   @id @default(cuid())
  
  // Basic Info
  title       String
  titleAr     String
  slug        String   @unique
  description String   @db.Text
  descriptionAr String @db.Text
  
  // Categorization
  subject     Subject
  grade       Grade
  level       Level    @default(BEGINNER)
  
  // Media
  thumbnail   String?
  previewVideo String?
  
  // Pricing
  price       Float    @default(0)
  discountPrice Float?
  currency    String   @default("IQD")
  
  // Teacher
  teacherId   String
  teacher     TeacherProfile @relation(fields: [teacherId], references: [id], onDelete: Cascade)
  
  // Status
  status      CourseStatus @default(DRAFT)
  published   Boolean  @default(false)
  publishedAt DateTime?
  
  // Stats
  enrollmentCount Int   @default(0)
  rating          Float @default(0)
  totalReviews    Int   @default(0)
  
  // Metadata
  duration    Int?     // Total minutes
  language    String   @default("ar")
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  lessons     Lesson[]
  enrollments Enrollment[]
  reviews     Review[]
  categories  CourseCategory[]

  @@index([teacherId])
  @@index([subject])
  @@index([grade])
  @@index([status])
  @@index([published])
  @@index([slug])
}

enum Subject {
  MATH
  SCIENCE
  PHYSICS
  CHEMISTRY
  ARABIC
  ENGLISH
}

enum Level {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

enum CourseStatus {
  DRAFT
  UNDER_REVIEW
  PUBLISHED
  ARCHIVED
}

model CourseCategory {
  id       String @id @default(cuid())
  name     String
  nameAr   String
  slug     String @unique
  
  courses  Course[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([slug])
}

model Lesson {
  id          String   @id @default(cuid())
  
  // Basic Info
  title       String
  titleAr     String
  description String?  @db.Text
  descriptionAr String? @db.Text
  
  // Content
  content     String?  @db.Text  // Rich text/markdown
  videoUrl    String?
  videoDuration Int?   // seconds
  
  // Organization
  order       Int
  courseId    String
  course      Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  // Access
  isFree      Boolean  @default(false)
  isPublished Boolean  @default(false)
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  quizzes     Quiz[]
  resources   Resource[]
  progress    Progress[]
  assignments Assignment[]

  @@index([courseId])
  @@index([order])
  @@index([isPublished])
}

model Resource {
  id          String       @id @default(cuid())
  
  title       String
  titleAr     String
  type        ResourceType
  url         String
  size        Int?         // bytes
  
  lessonId    String
  lesson      Lesson       @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime     @default(now())

  @@index([lessonId])
  @@index([type])
}

enum ResourceType {
  PDF
  VIDEO
  DOCUMENT
  LINK
  IMAGE
  AUDIO
}

// ============================================================================
// QUIZZES & ASSESSMENTS
// ============================================================================

model Quiz {
  id          String   @id @default(cuid())
  
  title       String
  titleAr     String
  description String?  @db.Text
  descriptionAr String? @db.Text
  
  lessonId    String
  lesson      Lesson   @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  
  // Settings
  timeLimit   Int?     // minutes
  passingScore Float   @default(70)
  maxAttempts Int?     // null = unlimited
  showAnswers Boolean  @default(true)
  shuffleQuestions Boolean @default(false)
  
  isPublished Boolean  @default(false)
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  questions   Question[]
  attempts    QuizAttempt[]

  @@index([lessonId])
  @@index([isPublished])
}

model Question {
  id          String       @id @default(cuid())
  
  quizId      String
  quiz        Quiz         @relation(fields: [quizId], references: [id], onDelete: Cascade)
  
  type        QuestionType
  question    String       @db.Text
  questionAr  String       @db.Text
  
  // For multiple choice/checkbox
  options     Json?        // [{text: string, textAr: string}]
  correctAnswer Json       // number[] for indexes or string for text
  
  explanation String?      @db.Text
  explanationAr String?    @db.Text
  
  points      Int          @default(1)
  order       Int
  
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt

  @@index([quizId])
  @@index([order])
}

enum QuestionType {
  MULTIPLE_CHOICE
  TRUE_FALSE
  SHORT_ANSWER
  ESSAY
  CHECKBOX
}

model QuizAttempt {
  id          String   @id @default(cuid())
  
  quizId      String
  quiz        Quiz     @relation(fields: [quizId], references: [id], onDelete: Cascade)
  
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id], onDelete: Cascade)
  
  answers     Json     // {questionId: answer}
  score       Float
  isPassing   Boolean
  
  startedAt   DateTime @default(now())
  completedAt DateTime?
  timeSpent   Int?     // seconds

  @@index([quizId])
  @@index([studentId])
}

model Assignment {
  id          String   @id @default(cuid())
  
  title       String
  titleAr     String
  description String   @db.Text
  descriptionAr String @db.Text
  
  lessonId    String
  lesson      Lesson   @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  
  dueDate     DateTime?
  maxScore    Float    @default(100)
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  submissions AssignmentSubmission[]

  @@index([lessonId])
}

model AssignmentSubmission {
  id           String   @id @default(cuid())
  
  assignmentId String
  assignment   Assignment @relation(fields: [assignmentId], references: [id], onDelete: Cascade)
  
  studentId    String
  student      StudentProfile @relation(fields: [studentId], references: [id], onDelete: Cascade)
  
  content      String   @db.Text
  attachments  String[] // URLs
  
  score        Float?
  feedback     String?  @db.Text
  
  status       SubmissionStatus @default(PENDING)
  
  submittedAt  DateTime @default(now())
  gradedAt     DateTime?

  @@unique([assignmentId, studentId])
  @@index([assignmentId])
  @@index([studentId])
  @@index([status])
}

enum SubmissionStatus {
  PENDING
  GRADED
  LATE
  RESUBMIT
}

// ============================================================================
// ENROLLMENT & PROGRESS
// ============================================================================

model Enrollment {
  id          String   @id @default(cuid())
  
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id], onDelete: Cascade)
  
  courseId    String
  course      Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  progress    Float    @default(0)
  completed   Boolean  @default(false)
  
  enrolledAt  DateTime @default(now())
  completedAt DateTime?
  expiresAt   DateTime? // For time-limited access
  
  @@unique([studentId, courseId])
  @@index([studentId])
  @@index([courseId])
  @@index([completed])
}

model Progress {
  id          String   @id @default(cuid())
  
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id], onDelete: Cascade)
  
  lessonId    String
  lesson      Lesson   @relation(fields: [lessonId], references: [id], onDelete: Cascade)
  
  completed   Boolean  @default(false)
  watchTime   Int      @default(0) // seconds
  lastPosition Int     @default(0) // video position
  
  completedAt DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([studentId, lessonId])
  @@index([studentId])
  @@index([lessonId])
  @@index([completed])
}

// ============================================================================
// LIVE SESSIONS
// ============================================================================

model LiveSession {
  id          String   @id @default(cuid())
  
  title       String
  titleAr     String
  description String?  @db.Text
  descriptionAr String? @db.Text
  
  subject     Subject
  grade       Grade
  
  teacherId   String
  teacher     TeacherProfile @relation(fields: [teacherId], references: [id], onDelete: Cascade)
  
  // Scheduling
  scheduledAt DateTime
  duration    Int      // minutes
  timezone    String   @default("Asia/Baghdad")
  
  // Access
  meetingLink String?
  meetingId   String?
  meetingPassword String?
  recordingUrl String?
  
  // Capacity
  maxStudents Int      @default(30)
  minStudents Int      @default(1)
  
  // Pricing
  price       Float
  currency    String   @default("IQD")
  
  // Status
  status      SessionStatus @default(SCHEDULED)
  
  // Settings
  isRecorded  Boolean  @default(true)
  allowChat   Boolean  @default(true)
  allowQA     Boolean  @default(true)
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  attendance  LiveSessionAttendance[]

  @@index([teacherId])
  @@index([subject])
  @@index([grade])
  @@index([status])
  @@index([scheduledAt])
}

enum SessionStatus {
  SCHEDULED
  LIVE
  COMPLETED
  CANCELLED
  RESCHEDULED
}

model LiveSessionAttendance {
  id          String   @id @default(cuid())
  
  sessionId   String
  session     LiveSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id], onDelete: Cascade)
  
  registered  Boolean  @default(true)
  attended    Boolean  @default(false)
  joinedAt    DateTime?
  leftAt      DateTime?
  duration    Int?     // minutes actually attended
  
  createdAt   DateTime @default(now())
  
  @@unique([sessionId, studentId])
  @@index([sessionId])
  @@index([studentId])
}

// ============================================================================
// PAYMENTS & TRANSACTIONS
// ============================================================================

model Payment {
  id              String   @id @default(cuid())
  
  userId          String
  amount          Float
  currency        String   @default("IQD")
  
  type            PaymentType
  status          PaymentStatus @default(PENDING)
  
  // Stripe/Payment Gateway
  paymentIntentId String?  @unique
  paymentMethod   String?
  
  // Related Entity
  courseId        String?
  liveSessionId   String?
  
  metadata        Json?
  
  paidAt          DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([userId])
  @@index([status])
  @@index([type])
}

enum PaymentType {
  COURSE_PURCHASE
  LIVE_SESSION
  SUBSCRIPTION
  REFUND
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
  CANCELLED
}

// ============================================================================
// REVIEWS & RATINGS
// ============================================================================

model Review {
  id          String   @id @default(cuid())
  
  courseId    String?
  course      Course?  @relation(fields: [courseId], references: [id], onDelete: Cascade)
  
  teacherId   String?
  teacher     TeacherProfile? @relation(fields: [teacherId], references: [id], onDelete: Cascade)
  
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id], onDelete: Cascade)
  
  rating      Int      // 1-5
  comment     String?  @db.Text
  
  isApproved  Boolean  @default(false)
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([courseId])
  @@index([teacherId])
  @@index([studentId])
  @@index([isApproved])
}

// ============================================================================
// NOTIFICATIONS & MESSAGING
// ============================================================================

model Notification {
  id          String   @id @default(cuid())
  
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  type        NotificationType
  title       String
  titleAr     String
  message     String   @db.Text
  messageAr   String   @db.Text
  
  link        String?
  icon        String?
  
  isRead      Boolean  @default(false)
  readAt      DateTime?
  
  createdAt   DateTime @default(now())

  @@index([userId])
  @@index([isRead])
  @@index([createdAt])
}

enum NotificationType {
  ENROLLMENT
  LESSON_COMPLETE
  QUIZ_GRADED
  ASSIGNMENT_GRADED
  LIVE_SESSION_REMINDER
  PAYMENT_SUCCESS
  COURSE_UPDATE
  MESSAGE
  SYSTEM
}

model Message {
  id          String   @id @default(cuid())
  
  senderId    String
  sender      User     @relation(fields: [senderId], references: [id], onDelete: Cascade)
  
  recipientId String
  content     String   @db.Text
  
  isRead      Boolean  @default(false)
  readAt      DateTime?
  
  createdAt   DateTime @default(now())

  @@index([senderId])
  @@index([recipientId])
  @@index([isRead])
  @@index([createdAt])
}

// ============================================================================
// ANALYTICS & REPORTS
// ============================================================================

model ActivityLog {
  id          String   @id @default(cuid())
  
  userId      String?
  action      String
  entity      String   // 'Course', 'Lesson', etc.
  entityId    String?
  
  metadata    Json?
  ipAddress   String?
  userAgent   String?
  
  createdAt   DateTime @default(now())

  @@index([userId])
  @@index([action])
  @@index([createdAt])
}
```

### 5.2 Database Initialization

```typescript
// prisma/seed.ts

import { PrismaClient, Role, Subject, Grade } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create Admin User
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@edariss.com' },
    update: {},
    create: {
      email: 'admin@edariss.com',
      name: 'Admin User',
      password: adminPassword,
      role: Role.ADMIN,
      emailVerified: new Date(),
    },
  });

  console.log('✅ Admin created:', admin.email);

  // Create Sample Teacher
  const teacherPassword = await bcrypt.hash('teacher123', 10);
  const teacher = await prisma.user.create({
    data: {
      email: 'teacher@edariss.com',
      name: 'Ahmed Al-Maliki',
      password: teacherPassword,
      role: Role.TEACHER,
      emailVerified: new Date(),
      teacherProfile: {
        create: {
          specializations: [Subject.MATH, Subject.PHYSICS],
          bio: 'مدرس رياضيات وفيزياء مع 10 سنوات خبرة',
          experience: 10,
          hourlyRate: 25000,
          isVerified: true,
          verifiedAt: new Date(),
        },
      },
    },
  });

  console.log('✅ Teacher created:', teacher.email);

  // Create Sample Student
  const studentPassword = await bcrypt.hash('student123', 10);
  const student = await prisma.user.create({
    data: {
      email: 'student@edariss.com',
      name: 'Sara Mohammed',
      password: studentPassword,
      role: Role.STUDENT,
      emailVerified: new Date(),
      studentProfile: {
        create: {
          grade: Grade.GRADE_10,
          school: 'مدرسة كركوك الثانوية',
        },
      },
    },
  });

  console.log('✅ Student created:', student.email);

  // Create Course Categories
  const categories = await Promise.all([
    prisma.courseCategory.create({
      data: {
        name: 'Mathematics',
        nameAr: 'الرياضيات',
        slug: 'mathematics',
      },
    }),
    prisma.courseCategory.create({
      data: {
        name: 'Science',
        nameAr: 'العلوم',
        slug: 'science',
      },
    }),
  ]);

  console.log('✅ Categories created');

  // Create Sample Course
  const course = await prisma.course.create({
    data: {
      title: 'Algebra Fundamentals',
      titleAr: 'أساسيات الجبر',
      slug: 'algebra-fundamentals',
      description: 'Complete algebra course for grade 10 students',
      descriptionAr: 'دورة جبر كاملة لطلاب الصف العاشر',
      subject: Subject.MATH,
      grade: Grade.GRADE_10,
      price: 50000,
      teacherId: teacher.teacherProfile!.id,
      published: true,
      publishedAt: new Date(),
      status: 'PUBLISHED',
      categories: {
        connect: [{ id: categories[0].id }],
      },
    },
  });

  console.log('✅ Course created:', course.title);

  // Create Sample Lessons
  const lessons = await Promise.all([
    prisma.lesson.create({
      data: {
        title: 'Introduction to Algebra',
        titleAr: 'مقدمة في الجبر',
        description: 'Basic concepts and terminology',
        descriptionAr: 'المفاهيم والمصطلحات الأساسية',
        order: 1,
        courseId: course.id,
        isFree: true,
        isPublished: true,
      },
    }),
    prisma.lesson.create({
      data: {
        title: 'Linear Equations',
        titleAr: 'المعادلات الخطية',
        description: 'Solving linear equations',
        descriptionAr: 'حل المعادلات الخطية',
        order: 2,
        courseId: course.id,
        isPublished: true,
      },
    }),
  ]);

  console.log('✅ Lessons created');

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

---

## 6. Feature Requirements

### 6.1 Authentication & Authorization

**Requirements:**
1. **Registration:**
   - Multi-step forms for Student/Teacher/Parent
   - Email verification required
   - Password strength validation (min 8 chars, 1 uppercase, 1 number)
   - Terms & conditions acceptance
   - Automatic profile creation based on role

2. **Login:**
   - Email/password authentication
   - Remember me functionality
   - Rate limiting (max 5 attempts per 15 minutes)
   - Redirect to role-specific dashboard

3. **Password Management:**
   - Forgot password flow with email token
   - Password reset with token expiry (1 hour)
   - Password change in settings

4. **Social Authentication (Phase 2):**
   - Google OAuth
   - Facebook Login

**Authorization Rules:**
```typescript
// Access Control Matrix
const permissions = {
  STUDENT: {
    canEnrollCourses: true,
    canViewOwnProgress: true,
    canTakeLiveClasses: true,
    canSubmitAssignments: true,
    canReviewCourses: true,
  },
  TEACHER: {
    canCreateCourses: true,
    canEditOwnCourses: true,
    canDeleteOwnCourses: true,
    canGradeAssignments: true,
    canScheduleLiveSessions: true,
    canViewStudentProgress: true, // Only their students
  },
  PARENT: {
    canViewChildProgress: true,
    canManagePayments: true,
    canMessageTeachers: true,
  },
  ADMIN: {
    canManageAllUsers: true,
    canManageAllCourses: true,
    canViewAllPayments: true,
    canAccessAnalytics: true,
    canModerateContent: true,
  },
};
```

### 6.2 Course Management

**For Teachers:**

1. **Course Creation:**
   - Step-by-step wizard (6 steps):
     1. Basic info (title, description, subject, grade)
     2. Curriculum planning
     3. Content upload
     4. Pricing setup
     5. Preview & review
     6. Publish
   - Rich text editor for descriptions
   - Thumbnail upload (max 2MB, JPG/PNG)
   - Preview video upload (max 100MB)
   - Auto-save drafts every 30 seconds

2. **Lesson Management:**
   - Drag-and-drop lesson ordering
   - Video upload (Cloudflare Stream integration)
   - Support for YouTube/Vimeo embeds
   - PDF/document attachments (max 10MB per file)
   - Rich text content editor
   - Mark lessons as free preview
   - Schedule future release dates

3. **Quiz Creation:**
   - Question types: Multiple choice, True/False, Short answer, Essay
   - Question bank with tagging
   - Random question selection
   - Time limits (optional)
   - Passing score configuration
   - Attempt limits
   - Show/hide correct answers

4. **Assignment Management:**
   - Create text-based assignments
   - Set due dates
   - Attach reference materials
   - Grade submissions with rubric
   - Provide feedback
   - Allow resubmissions

**For Students:**

1. **Course Discovery:**
   - Browse by subject/grade
   - Search with filters (price, rating, level)
   - Sort by (newest, popular, highest rated, price)
   - Free preview lessons
   - Teacher profile view
   - Course reviews and ratings

2. **Course Player:**
   - Video player with controls (play/pause, speed, fullscreen)
   - Auto-save progress every 10 seconds
   - Resume from last position
   - Next lesson auto-navigation
   - Download resources button
   - Notes taking feature
   - Discussion forum per lesson (Phase 2)

3. **Quiz Taking:**
   - Timer display if time-limited
   - Save progress
   - Submit for grading
   - View results immediately (if enabled)
   - Review incorrect answers
   - Retake if allowed

4. **Progress Tracking:**
   - Overall course completion percentage
   - Lesson completion checkmarks
   - Quiz scores
   - Assignment grades
   - Time spent learning
   - Certificates upon completion

### 6.3 Live Sessions

**For Teachers:**

1. **Session Creation:**
   - Schedule date/time
   - Set duration (30 min to 3 hours)
   - Choose subject and grade
   - Set price per session
   - Set max students (1 for 1-on-1, up to 50 for groups)
   - Add session description
   - Set recurring schedule (optional, Phase 2)

2. **Session Management:**
   - Integration with Daily.co or Zoom
   - Auto-generate meeting links
   - Send reminders (24h, 1h before)
   - In-session controls (mute, screen share, chat)
   - Record sessions automatically
   - Post-session recording upload

**For Students:**

1. **Session Discovery:**
   - Browse upcoming sessions
   - Filter by subject/grade/teacher/price
   - View teacher profile before booking
   - Register for sessions
   - Payment at registration

2. **Session Participation:**
   - Join 10 minutes before start
   - Video/audio controls
   - Chat with teacher and peers
   - Raise hand feature
   - Screen share (if allowed by teacher)
   - Download recording after session

### 6.4 Payment System

**Payment Methods:**
- Credit/Debit Card (Stripe)
- Local Iraqi payment gateways (Phase 2)
- Wallet system with top-up (Phase 2)

**Payment Flows:**

1. **Course Purchase:**
   - Add to cart or buy now
   - Show pricing summary
   - Apply discount codes
   - Secure payment via Stripe
   - Instant course access after payment
   - Email receipt

2. **Live Session Payment:**
   - Pay during registration
   - Hold payment until session starts
   - Auto-refund if cancelled by teacher
   - Pro-rated refunds for no-shows

3. **Subscription Plans (Phase 2):**
   - Monthly unlimited access
   - Annual plans with discount
   - Family plans

**For Teachers:**

1. **Earnings Dashboard:**
   - Total earnings (all-time, monthly, weekly)
   - Pending payouts
   - Transaction history
   - Breakdown by course/session
   - Export to CSV

2. **Withdrawal:**
   - Minimum payout: 100,000 IQD
   - Bank transfer (manual processing initially)
   - Payout history

### 6.5 User Dashboards

**Student Dashboard:**

**Widgets:**
- Welcome message with name
- Current enrollments (continue learning)
- Upcoming live sessions
- Recent quiz scores
- Progress overview chart
- Recommended courses
- Notifications badge

**Sections:**
- My Courses
  - In Progress
  - Completed
  - Wishlist
- My Schedule (live sessions)
- My Progress
  - Course-wise breakdown
  - Quiz performance
  - Time spent
- Certificates
- Settings

**Teacher Dashboard:**

**Widgets:**
- Welcome message with stats
- Today's sessions
- Pending assignments to grade
- New enrollments
- Revenue this month
- Student count
- Average rating

**Sections:**
- My Courses
  - Published
  - Draft
  - Under Review
- My Students
  - Active enrollments
  - Student list with progress
- Schedule
  - Upcoming sessions
  - Past sessions
- Earnings
  - Revenue dashboard
  - Payout history
- Analytics
  - Course performance
  - Student engagement
- Settings

**Parent Dashboard:**

**Widgets:**
- Child selector dropdown
- Progress summary
- Upcoming classes
- Recent grades
- Spending this month

**Sections:**
- Children Management
  - Add/remove children
  - View individual progress
- Progress Reports
  - Overall performance
  - Subject-wise breakdown
  - Comparison over time
- Payment History
  - Transactions
  - Invoices download
- Messages
  - Chat with teachers

### 6.6 Admin Panel

**User Management:**
- View all users (paginated table)
- Filter by role
- Search by name/email
- Activate/deactivate accounts
- Verify teacher profiles
- View user activity logs

**Course Management:**
- Review submitted courses
- Approve/reject with feedback
- Edit course details
- Archive courses
- Featured course selection

**Payment Management:**
- View all transactions
- Process refunds
- Generate financial reports
- Track platform revenue

**Analytics:**
- Dashboard with key metrics:
  - Total users (by role)
  - Active courses
  - Total enrollments
  - Revenue (daily/monthly)
  - Popular courses
  - Teacher performance
- Charts and graphs
- Export reports

**Content Moderation:**
- Review user-generated content
- Moderate reviews
- Handle reports/complaints

---

## 7. UI/UX Specifications

### 7.1 Design System

**Colors:**
```css
/* Primary Colors */
--primary-blue: #2563eb;
--primary-blue-dark: #1e40af;
--primary-blue-light: #3b82f6;

/* Secondary Colors */
--secondary-green: #10b981;
--secondary-orange: #f59e0b;
--secondary-red: #ef4444;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;

/* Semantic Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;

/* Background */
--bg-primary: #ffffff;
--bg-secondary: #f9fafb;
--bg-tertiary: #f3f4f6;
```

**Typography:**
```css
/* Arabic Font */
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');

/* English Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

**Spacing:**
```css
/* 4px base unit */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

**Borders & Shadows:**
```css
/* Border Radius */
--radius-sm: 0.25rem;  /* 4px */
--radius-md: 0.375rem; /* 6px */
--radius-lg: 0.5rem;   /* 8px */
--radius-xl: 0.75rem;  /* 12px */
--radius-2xl: 1rem;    /* 16px */
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

### 7.2 Component Specifications

**Button Variants:**
```tsx
// Primary Button
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">

// Secondary Button
<button className="bg-white text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">

// Outline Button
<button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">

// Ghost Button
<button className="text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">

// Danger Button
<button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">

// Disabled Button
<button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed" disabled>

// Button Sizes
size="sm"  // px-3 py-1.5 text-sm
size="md"  // px-4 py-2 text-base (default)
size="lg"  // px-6 py-3 text-lg
```

**Card Component:**
```tsx
<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-gray-600">Card content...</p>
</div>
```

**Input Fields:**
```tsx
// Text Input
<input 
  type="text"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>

// Textarea
<textarea 
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
  rows={4}
/>

// Select
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
  <option>Option 1</option>
</select>
```

### 7.3 Page Layouts

**Homepage Layout:**
```
┌─────────────────────────────────────────┐
│           Header (Navbar)               │
├─────────────────────────────────────────┤
│                                         │
│           Hero Section                  │
│       (Title + CTA Buttons)             │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│        Features Grid (4 cards)          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│       Popular Courses Section           │
│          (Course Cards)                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│       Subjects Grid (6 cards)           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│      How It Works (3 steps)             │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│     Teacher Spotlight Section           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│         CTA Section                     │
│    (Get Started Banner)                 │
│                                         │
├─────────────────────────────────────────┤
│              Footer                     │
└─────────────────────────────────────────┘
```

**Dashboard Layout:**
```
┌──────────────────────────────────────────────────┐
│              Header (with profile)               │
├────────────┬─────────────────────────────────────┤
│            │                                     │
│  Sidebar   │        Main Content Area            │
│  (Nav)     │                                     │
│            │  ┌─────────────────────────────┐   │
│  - Home    │  │                             │   │
│  - Courses │  │      Dashboard Widgets       │   │
│  - Schedule│  │                             │   │
│  - Progress│  └─────────────────────────────┘   │
│  - Settings│                                     │
│            │  ┌─────────────────────────────┐   │
│            │  │                             │   │
│            │  │      Content Section         │   │
│            │  │                             │   │
│            │  └─────────────────────────────┘   │
│            │                                     │
└────────────┴─────────────────────────────────────┘
```

**Course Player Layout:**
```
┌──────────────────────────────────────────────────┐
│              Header (with breadcrumb)            │
├────────────────────────┬─────────────────────────┤
│                        │                         │
│                        │     Video Player        │
│   Lesson Sidebar       │    (16:9 aspect)        │
│                        │                         │
│  ✓ Lesson 1            ├─────────────────────────┤
│  ► Lesson 2 (Current)  │                         │
│    Lesson 3            │   Lesson Title          │
│    Lesson 4            │   Lesson Description    │
│                        │                         │
│  Quiz 1                │   Tabs:                 │
│                        │   - Overview            │
│  Resources:            │   - Resources           │
│  - PDF 1               │   - Notes               │
│  - PDF 2               │   - Q&A                 │
│                        │                         │
│                        │   [Next Lesson Button]  │
│                        │                         │
└────────────────────────┴─────────────────────────┘
```

### 7.4 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Default: Mobile (< 640px) */

/* Small tablets */
@media (min-width: 640px) { /* sm */ }

/* Large tablets */
@media (min-width: 768px) { /* md */ }

/* Laptops */
@media (min-width: 1024px) { /* lg */ }

/* Desktops */
@media (min-width: 1280px) { /* xl */ }

/* Large desktops */
@media (min-width: 1536px) { /* 2xl */ }
```

**Responsive Behaviors:**
- Mobile: Single column, hamburger menu, bottom navigation
- Tablet: 2-column grids, slide-out sidebar
- Desktop: 3-4 column grids, persistent sidebar

### 7.5 RTL Support

**Implementation:**
```tsx
// Layout component
<html dir="rtl" lang="ar">
  <body className="font-tajawal">
    {children}
  </body>
</html>

// Tailwind config for RTL
// Use logical properties:
- margin-left → ms-4 (margin-start)
- margin-right → me-4 (margin-end)
- padding-left → ps-4
- text-left → text-start
- left-0 → start-0
```

---

## 8. API Specifications

### 8.1 API Design Principles

- RESTful architecture
- JSON request/response format
- JWT-based authentication
- Consistent error responses
- Pagination for list endpoints
- Rate limiting (100 requests/minute per user)

### 8.2 Authentication Endpoints

```typescript
// POST /api/auth/register
Request:
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "STUDENT" | "TEACHER" | "PARENT",
  "profileData": {
    // Role-specific data
  }
}

Response: 201
{
  "user": {
    "id": "string",
    "email": "string",
    "name": "string",
    "role": "string"
  },
  "message": "Verification email sent"
}

// POST /api/auth/login
Request:
{
  "email": "string",
  "password": "string"
}

Response: 200
{
  "user": { /* user object */ },
  "token": "jwt_token"
}

// POST /api/auth/forgot-password
Request:
{
  "email": "string"
}

Response: 200
{
  "message": "Reset link sent"
}

// POST /api/auth/reset-password
Request:
{
  "token": "string",
  "newPassword": "string"
}

Response: 200
{
  "message": "Password reset successful"
}
```

### 8.3 Course Endpoints

```typescript
// GET /api/courses
Query Params:
- page: number (default: 1)
- limit: number (default: 12)
- subject: Subject enum
- grade: Grade enum
- search: string
- sortBy: 'newest' | 'popular' | 'rating' | 'price_low' | 'price_high'
- minPrice: number
- maxPrice: number

Response: 200
{
  "courses": Course[],
  "pagination": {
    "page": number,
    "limit": number,
    "total": number,
    "totalPages": number
  }
}

// GET /api/courses/:id
Response: 200
{
  "course": {
    "id": "string",
    "title": "string",
    "titleAr": "string",
    "description": "string",
    "subject": "string",
    "grade": "string",
    "price": number,
    "thumbnail": "string",
    "teacher": {
      "id": "string",
      "name": "string",
      "rating": number,
      "totalStudents": number
    },
    "lessons": Lesson[],
    "stats": {
      "enrollmentCount": number,
      "rating": number,
      "totalReviews": number,
      "duration": number
    }
  }
}

// POST /api/courses (Teacher only)
Request:
{
  "title": "string",
  "titleAr": "string",
  "description": "string",
  "descriptionAr": "string",
  "subject": "MATH",
  "grade": "GRADE_10",
  "price": number,
  "thumbnail": "string"
}

Response: 201
{
  "course": Course
}

// PUT /api/courses/:id (Teacher only)
Request: Partial<Course>
Response: 200 { "course": Course }

// DELETE /api/courses/:id (Teacher only)
Response: 204

// POST /api/courses/:id/publish (Teacher only)
Response: 200
{
  "course": Course,
  "message": "Course published successfully"
}
```

### 8.4 Enrollment Endpoints

```typescript
// POST /api/enrollments
Request:
{
  "courseId": "string"
}

Response: 201
{
  "enrollment": Enrollment,
  "message": "Successfully enrolled"
}

// GET /api/enrollments/my-courses
Query: ?status=completed|active
Response: 200
{
  "enrollments": Array<{
    enrollment: Enrollment,
    course: Course,
    progress: number
  }>
}

// DELETE /api/enrollments/:id
Response: 204
```

### 8.5 Progress Endpoints

```typescript
// POST /api/progress
Request:
{
  "lessonId": "string",
  "completed": boolean,
  "watchTime": number,
  "lastPosition": number
}

Response: 200
{
  "progress": Progress,
  "courseProgress": number // Overall course completion %
}

// GET /api/progress/course/:courseId
Response: 200
{
  "courseProgress": number,
  "lessons": Array<{
    lessonId: string,
    completed: boolean,
    watchTime: number
  }>
}
```

### 8.6 Quiz Endpoints

```typescript
// GET /api/quizzes/:id
Response: 200
{
  "quiz": {
    "id": "string",
    "title": "string",
    "questions": Question[], // Without correct answers
    "timeLimit": number,
    "passingScore": number,
    "attemptsLeft": number
  }
}

// POST /api/quizzes/:id/submit
Request:
{
  "answers": {
    [questionId: string]: any
  },
  "timeSpent": number
}

Response: 200
{
  "attempt": QuizAttempt,
  "score": number,
  "isPassing": boolean,
  "correctAnswers": { [questionId: string]: any }, // If showAnswers is true
  "feedback": string
}

// GET /api/quizzes/:id/attempts
Response: 200
{
  "attempts": QuizAttempt[],
  "bestScore": number
}
```

### 8.7 Live Session Endpoints

```typescript
// GET /api/live-sessions
Query:
- upcoming: boolean
- subject: Subject
- grade: Grade
- teacherId: string

Response: 200
{
  "sessions": LiveSession[]
}

// POST /api/live-sessions (Teacher only)
Request:
{
  "title": "string",
  "titleAr": "string",
  "subject": "MATH",
  "grade": "GRADE_10",
  "scheduledAt": "ISO date",
  "duration": number,
  "maxStudents": number,
  "price": number
}

Response: 201
{
  "session": LiveSession
}

// POST /api/live-sessions/:id/register (Student only)
Response: 200
{
  "attendance": LiveSessionAttendance,
  "message": "Registration successful"
}

// GET /api/live-sessions/:id/join
// Returns meeting link if user is registered and session is live
Response: 200
{
  "meetingLink": "string",
  "meetingId": "string",
  "password": "string"
}
```

### 8.8 Payment Endpoints

```typescript
// POST /api/payments/create-intent
Request:
{
  "type": "COURSE_PURCHASE" | "LIVE_SESSION",
  "entityId": "string", // courseId or sessionId
  "amount": number
}

Response: 200
{
  "clientSecret": "string",
  "paymentIntentId": "string"
}

// POST /api/payments/webhook
// Stripe webhook handler
// Updates payment status and grants access

// GET /api/payments/history
Query:
- page: number
- limit: number

Response: 200
{
  "payments": Payment[],
  "pagination": Pagination
}
```

### 8.9 User Endpoints

```typescript
// GET /api/users/profile
Response: 200
{
  "user": User,
  "profile": StudentProfile | TeacherProfile | ParentProfile
}

// PUT /api/users/profile
Request: Partial<ProfileData>
Response: 200
{
  "user": User,
  "profile": Profile
}

// POST /api/users/avatar
// Multipart form data with image file
Response: 200
{
  "imageUrl": "string"
}

// GET /api/users/notifications
Query: ?unreadOnly=true
Response: 200
{
  "notifications": Notification[]
}

// PUT /api/users/notifications/:id/read
Response: 200
```

### 8.10 Admin Endpoints

```typescript
// GET /api/admin/users
Query:
- role: Role
- search: string
- page: number
- limit: number

Response: 200
{
  "users": User[],
  "pagination": Pagination
}

// PUT /api/admin/users/:id/status
Request: { "isActive": boolean }
Response: 200

// GET /api/admin/courses/pending
Response: 200
{
  "courses": Course[]
}

// PUT /api/admin/courses/:id/approve
Response: 200

// GET /api/admin/analytics
Response: 200
{
  "stats": {
    "totalUsers": number,
    "totalCourses": number,
    "totalRevenue": number,
    "activeEnrollments": number
  },
  "charts": {
    "userGrowth": DataPoint[],
    "revenueByMonth": DataPoint[]
  }
}
```

### 8.11 Error Response Format

```typescript
// Standard error response
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {} // Optional additional context
  }
}

// HTTP Status Codes:
- 200: Success
- 201: Created
- 204: No Content (successful delete)
- 400: Bad Request (validation error)
- 401: Unauthorized (not authenticated)
- 403: Forbidden (not authorized)
- 404: Not Found
- 409: Conflict (duplicate resource)
- 422: Unprocessable Entity (business logic error)
- 429: Too Many Requests (rate limit)
- 500: Internal Server Error
```

---

## 9. Component Architecture

### 9.1 Shared UI Components

Create these reusable components using shadcn/ui as a base:

```typescript
// src/components/ui/button.tsx
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading,
  className,
  children,
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <LoadingSpinner size="sm" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
```

**Other Required UI Components:**
- `Card` - Container with shadow and padding
- `Input` - Text input with validation styles
- `Select` - Dropdown select
- `Textarea` - Multi-line text input
- `Checkbox` - Checkbox with label
- `Radio` - Radio button with label
- `Badge` - Small status indicators
- `Avatar` - User profile image
- `Dialog/Modal` - Overlay dialogs
- `Dropdown` - Dropdown menus
- `Tabs` - Tab navigation
- `Progress` - Progress bars
- `Toast` - Notification toasts
- `Tooltip` - Hover tooltips
- `Pagination` - Page navigation
- `Table` - Data tables
- `Accordion` - Collapsible sections

### 9.2 Feature Components

**Course Components:**

```typescript
// src/components/course/CourseCard.tsx
interface CourseCardProps {
  course: {
    id: string;
    title: string;
    titleAr: string;
    thumbnail?: string;
    price: number;
    rating: number;
    enrollmentCount: number;
    teacher: {
      name: string;
      image?: string;
    };
  };
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="hover:shadow-lg transition cursor-pointer">
        <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
          <img 
            src={course.thumbnail || '/placeholder.jpg'} 
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">
            {course.titleAr}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Avatar src={course.teacher.image} size="sm" />
            <span className="text-sm text-gray-600">{course.teacher.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{course.rating}</span>
              <span className="text-sm text-gray-500">
                ({course.enrollmentCount})
              </span>
            </div>
            <span className="font-bold text-lg text-blue-600">
              {course.price.toLocaleString()} IQD
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
```

**Other Course Components:**
- `CourseGrid` - Grid layout for multiple courses
- `CourseDetail` - Full course information page
- `CoursePlayer` - Video player with lesson navigation
- `LessonList` - Sidebar lesson list with progress
- `CourseProgress` - Progress visualization

**Quiz Components:**
- `QuizCard` - Quiz preview card
- `QuizQuestion` - Individual question display
- `QuizResults` - Results and feedback display
- `QuizTimer` - Countdown timer

**Live Session Components:**
- `SessionCard` - Session preview card
- `SessionScheduler` - Calendar view for sessions
- `SessionRoom` - Video conference interface
- `SessionControls` - Mute/unmute, share screen controls

### 9.3 Form Components

```typescript
// src/components/forms/CourseForm.tsx
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const courseSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  titleAr: z.string().min(10, "العنوان يجب أن يكون 10 أحرف على الأقل"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  descriptionAr: z.string().min(50, "الوصف يجب أن يكون 50 حرف على الأقل"),
  subject: z.enum(['MATH', 'SCIENCE', 'PHYSICS', 'CHEMISTRY', 'ARABIC', 'ENGLISH']),
  grade: z.enum(['GRADE_7', 'GRADE_8', 'GRADE_9', 'GRADE_10', 'GRADE_11', 'GRADE_12']),
  price: z.number().min(0, "Price must be positive"),
});

type CourseFormData = z.infer<typeof courseSchema>;

export function CourseForm({ onSubmit, defaultValues }: CourseFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* English Title */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Course Title (English)
          </label>
          <Input
            {...register('title')}
            error={errors.title?.message}
            placeholder="Enter course title"
          />
        </div>

        {/* Arabic Title */}
        <div>
          <label className="block text-sm font-medium mb-2">
            عنوان الدورة (بالعربية)
          </label>
          <Input
            {...register('titleAr')}
            error={errors.titleAr?.message}
            placeholder="أدخل عنوان الدورة"
            dir="rtl"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <Select {...register('subject')} error={errors.subject?.message}>
          <option value="">Select subject</option>
          <option value="MATH">Mathematics</option>
          <option value="SCIENCE">Science</option>
          <option value="PHYSICS">Physics</option>
          <option value="CHEMISTRY">Chemistry</option>
          <option value="ARABIC">Arabic Language</option>
          <option value="ENGLISH">English Language</option>
        </Select>
      </div>

      {/* Grade */}
      <div>
        <label className="block text-sm font-medium mb-2">Grade Level</label>
        <Select {...register('grade')} error={errors.grade?.message}>
          <option value="">Select grade</option>
          {[7, 8, 9, 10, 11, 12].map(g => (
            <option key={g} value={`GRADE_${g}`}>Grade {g}</option>
          ))}
        </Select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Description (English)
        </label>
        <Textarea
          {...register('description')}
          error={errors.description?.message}
          rows={4}
          placeholder="Describe your course..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          الوصف (بالعربية)
        </label>
        <Textarea
          {...register('descriptionAr')}
          error={errors.descriptionAr?.message}
          rows={4}
          placeholder="صف دورتك..."
          dir="rtl"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Price (IQD)
        </label>
        <Input
          {...register('price', { valueAsNumber: true })}
          type="number"
          error={errors.price?.message}
          placeholder="50000"
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" isLoading={isSubmitting}>
          Save Course
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
```

**Other Form Components:**
- `LoginForm` - User login
- `RegisterForm` - User registration (multi-step)
- `LessonForm` - Create/edit lessons
- `QuizForm` - Create quizzes with questions
- `ProfileForm` - Edit user profile

### 9.4 Layout Components

```typescript
// src/components/layout/Header.tsx
"use client";

import { useSession } from 'next-auth/react';

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Edariss" className="h-8" />
            <span className="text-xl font-bold">أدرس أونلاين</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="hover:text-blue-600">
              الدورات
            </Link>
            <Link href="/live-classes" className="hover:text-blue-600">
              الدروس المباشرة
            </Link>
            <Link href="/teachers" className="hover:text-blue-600">
              المعلمون
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              من نحن
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost">لوحة التحكم</Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar src={session.user.image} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">تسجيل الدخول</Button>
                </Link>
                <Link href="/register">
                  <Button>سجل الآن</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
```

**Other Layout Components:**
- `Footer` - Site footer with links
- `Sidebar` - Dashboard sidebar navigation
- `MobileNav` - Mobile navigation drawer
- `DashboardLayout` - Wrapper for dashboard pages

---

## 10. Authentication & Authorization

### 10.1 NextAuth Configuration

```typescript
// src/lib/auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            studentProfile: true,
            teacherProfile: true,
            parentProfile: true,
          }
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        if (!user.isActive) {
          throw new Error("Account is deactivated");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image,
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      // Update token when session is updated
      if (trigger === "update" && session) {
        token.name = session.name;
        token.image = session.image;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// src/app/api/auth/[...nextauth]/route.ts
import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

### 10.2 Protected Routes Middleware

```typescript
// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Admin only routes
    if (path.startsWith("/admin") && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Teacher only routes
    if (path.startsWith("/teacher") && token?.role !== "TEACHER") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Student only routes
    if (path.startsWith("/student") && token?.role !== "STUDENT") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Parent only routes
    if (path.startsWith("/parent") && token?.role !== "PARENT") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/student/:path*",
    "/teacher/:path*",
    "/parent/:path*",
    "/admin/:path*",
  ],
};
```

### 10.3 Role-Based Access Control

```typescript
// src/lib/permissions.ts
import { Role } from "@prisma/client";

export const permissions = {
  [Role.STUDENT]: {
    canEnrollCourses: true,
    canViewOwnProgress: true,
    canTakeLiveClasses: true,
    canSubmitAssignments: true,
    canReviewCourses: true,
    canCreateCourses: false,
    canManageUsers: false,
  },
  [Role.TEACHER]: {
    canCreateCourses: true,
    canEditOwnCourses: true,
    canDeleteOwnCourses: true,
    canGradeAssignments: true,
    canScheduleLiveSessions: true,
    canViewStudentProgress: true,
    canManageUsers: false,
  },
  [Role.PARENT]: {
    canViewChildProgress: true,
    canManagePayments: true,
    canMessageTeachers: true,
    canCreateCourses: false,
  },
  [Role.ADMIN]: {
    canManageAllUsers: true,
    canManageAllCourses: true,
    canViewAllPayments: true,
    canAccessAnalytics: true,
    canModerateContent: true,
  },
};

export function can(role: Role, permission: string): boolean {
  return permissions[role]?.[permission] ?? false;
}

// Usage in components/pages:
// if (can(user.role, 'canCreateCourses')) { ... }
```

---

## 11. Third-Party Integrations

### 11.1 Supabase Setup

```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// File upload utility
export async function uploadFile(
  bucket: string,
  path: string,
  file: File
): Promise<string> {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path);

  return publicUrl;
}

// Create storage buckets:
// - course-thumbnails
// - course-videos
// - lesson-resources
// - user-avatars
```

### 11.2 Stripe Integration

```typescript
// src/lib/stripe.ts
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Create payment intent
export async function createPaymentIntent(
  amount: number,
  metadata: Record<string, string>
) {
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency: 'iqd',
    metadata,
    automatic_payment_methods: {
      enabled: true,
    },
  });
}

// Webhook handler
// src/app/api/payments/webhook/route.ts
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response('Webhook signature verification failed', { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      
      // Update payment record
      await prisma.payment.update({
        where: { paymentIntentId: paymentIntent.id },
        data: {
          status: 'COMPLETED',
          paidAt: new Date(),
        },
      });

      // Grant course access or session registration
      const metadata = paymentIntent.metadata;
      if (metadata.type === 'COURSE_PURCHASE') {
        await prisma.enrollment.create({
          data: {
            studentId: metadata.studentId,
            courseId: metadata.courseId,
          },
        });
      }
      break;

    case 'payment_intent.payment_failed':
      // Handle failed payment
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
```

### 11.3 Daily.co Integration (Live Sessions)

```typescript
// src/lib/daily.ts
import axios from 'axios';

const DAILY_API_KEY = process.env.DAILY_API_KEY!;
const DAILY_API_URL = 'https://api.daily.co/v1';

export async function createDailyRoom(
  name: string,
  config: {
    maxParticipants?: number;
    startTime?: number;
    exp?: number;
  } = {}
) {
  const response = await axios.post(
    `${DAILY_API_URL}/rooms`,
    {
      name,
      privacy: 'private',
      properties: {
        max_participants: config.maxParticipants || 30,
        start_audio_off: true,
        start_video_off: false,
        enable_chat: true,
        enable_screenshare: true,
        enable_recording: 'cloud',
        exp: config.exp, // Expiry timestamp
      },
    },
    {
      headers: {
        Authorization: `Bearer ${DAILY_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}

export async function createMeetingToken(
  roomName: string,
  properties: {
    user_name: string;
    is_owner?: boolean;
    enable_recording?: boolean;
  }
) {
  const response = await axios.post(
    `${DAILY_API_URL}/meeting-tokens`,
    {
      properties: {
        room_name: roomName,
        user_name: properties.user_name,
        is_owner: properties.is_owner || false,
        enable_recording: properties.enable_recording || false,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${DAILY_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.token;
}

export async function deleteRoom(name: string) {
  await axios.delete(`${DAILY_API_URL}/rooms/${name}`, {
    headers: {
      Authorization: `Bearer ${DAILY_API_KEY}`,
    },
  });
}
```

### 11.4 Resend Email Integration

```typescript
// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`;

  await resend.emails.send({
    from: 'Edariss <noreply@edariss.com>',
    to: email,
    subject: 'Verify your email - Edariss',
    html: `
      <div dir="rtl">
        <h2>مرحباً بك في أدرس أونلاين</h2>
        <p>الرجاء تأكيد بريدك الإلكتروني بالضغط على الرابط التالي:</p>
        <a href="${verifyUrl}">تأكيد البريد الإلكتروني</a>
        <p>إذا لم تقم بإنشاء حساب، يمكنك تجاهل هذه الرسالة.</p>
      </div>
    `,
  });
}

export async function sendEnrollmentConfirmation(
  email: string,
  courseName: string
) {
  await resend.emails.send({
    from: 'Edariss <noreply@edariss.com>',
    to: email,
    subject: 'تأكيد التسجيل في الدورة',
    html: `
      <div dir="rtl">
        <h2>تم تسجيلك بنجاح!</h2>
        <p>تم تسجيلك في دورة: <strong>${courseName}</strong></p>
        <p>يمكنك البدء بالدراسة الآن من خلال لوحة التحكم.</p>
        <a href="${process.env.NEXTAUTH_URL}/dashboard">انتقل إلى لوحة التحكم</a>
      </div>
    `,
  });
}

export async function sendLiveSessionReminder(
  email: string,
  sessionTitle: string,
  sessionTime: Date
) {
  await resend.emails.send({
    from: 'Edariss <noreply@edariss.com>',
    to: email,
    subject: 'تذكير: جلسة مباشرة قريباً',
    html: `
      <div dir="rtl">
        <h2>تذكير بجلسة مباشرة</h2>
        <p>لديك جلسة مباشرة قريباً:</p>
        <p><strong>${sessionTitle}</strong></p>
        <p>الوقت: ${sessionTime.toLocaleString('ar-IQ')}</p>
        <a href="${process.env.NEXTAUTH_URL}/live-classes">الانضمام للجلسة</a>
      </div>
    `,
  });
}
```

---

## 12. Development Phases

### Phase 1: Foundation (Weeks 1-2)

**Goal:** Set up project infrastructure and basic authentication

**Tasks:**
1. Initialize Next.js project with TypeScript
2. Set up Prisma with Supabase
3. Configure Tailwind CSS and shadcn/ui
4. Implement authentication (NextAuth)
5. Create basic layouts (Header, Footer)
6. Build homepage with hero section
7. Set up Git repository and push to GitHub
8. Deploy to Vercel (initial deployment)

**Deliverables:**
- Working authentication system
- Basic homepage
- Live deployment on Vercel

### Phase 2: Course System (Weeks 3-4)

**Goal:** Build core course functionality

**Tasks:**
1. Create course creation flow for teachers
2. Build course listing and detail pages
3. Implement course enrollment
4. Create basic video player
5. Build lesson management
6. Add resource uploads
7. Implement course search and filters

**Deliverables:**
- Teachers can create courses
- Students can browse and enroll
- Basic course player

### Phase 3: Assessment System (Week 5)

**Goal:** Add quizzes and assignments

**Tasks:**
1. Build quiz creation interface
2. Implement quiz-taking functionality
3. Create auto-grading system
4. Add assignment submission
5. Build teacher grading interface
6. Implement progress tracking

**Deliverables:**
- Working quiz system
- Assignment submission and grading
- Progress tracking

### Phase 4: Live Sessions (Week 6)

**Goal:** Integrate live class functionality

**Tasks:**
1. Integrate Daily.co or Zoom API
2. Build session scheduling interface
3. Create session registration flow
4. Implement live session room
5. Add recording storage
6. Build session history

**Deliverables:**
- Live session scheduling
- Working video conferencing
- Session recordings

### Phase 5: Payments (Week 7)

**Goal:** Integrate payment system

**Tasks:**
1. Set up Stripe account
2. Implement payment intent creation
3. Build checkout flow
4. Add webhook handling
5. Create earnings dashboard for teachers
6. Implement payout system
7. Add payment history

**Deliverables:**
- Working payment system
- Teacher earnings tracking
- Student payment history

### Phase 6: Dashboards (Week 8)

**Goal:** Complete user dashboards

**Tasks:**
1. Build student dashboard with widgets
2. Create teacher dashboard
3. Implement parent dashboard
4. Add admin panel
5. Create analytics views
6. Implement notifications system
7. Add messaging between users

**Deliverables:**
- Role-specific dashboards
- Admin panel
- Messaging system

### Phase 7: Polish & Testing (Weeks 9-10)

**Goal:** Refinement and quality assurance

**Tasks:**
1. Comprehensive testing (manual)
2. Performance optimization
3. Mobile responsiveness fixes
4. Arabic/English language refinement
5. Add loading states and error handling
6. Implement email notifications
7. Create help documentation
8. Bug fixes

**Deliverables:**
- Polished, production-ready platform
- Documented features
- All major bugs fixed

### Phase 8: Launch (Week 11)

**Goal:** Official launch

**Tasks:**
1. Final deployment
2. Database seeding with sample data
3. Domain configuration (www.edariss.com)
4. Set up monitoring and analytics
5. Create promotional materials
6. Soft launch with beta users
7. Collect feedback
8. Marketing push

**Deliverables:**
- Live platform on edariss.com
- Beta user feedback
- Marketing campaign

---

## 13. Testing Requirements

### 13.1 Manual Testing Checklist

**Authentication:**
- [ ] Register as student, teacher, parent
- [ ] Email verification flow
- [ ] Login with correct/incorrect credentials
- [ ] Password reset flow
- [ ] Session persistence
- [ ] Logout functionality

**Course Management:**
- [ ] Create course as teacher
- [ ] Edit course details
- [ ] Upload thumbnail and video
- [ ] Add lessons and resources
- [ ] Publish course
- [ ] Browse courses as student
- [ ] Search and filter courses
- [ ] Enroll in course
- [ ] Watch lessons
- [ ] Track progress

**Quizzes:**
- [ ] Create quiz with multiple question types
- [ ] Take quiz as student
- [ ] Submit answers
- [ ] View results
- [ ] Retake quiz (if allowed)

**Live Sessions:**
- [ ] Schedule session as teacher
- [ ] Register for session as student
- [ ] Join session
- [ ] Video/audio controls
- [ ] Screen sharing
- [ ] Recording

**Payments:**
- [ ] Purchase course
- [ ] Payment success flow
- [ ] Payment failure handling
- [ ] View payment history
- [ ] Teacher earnings dashboard

**Dashboards:**
- [ ] Student dashboard widgets
- [ ] Teacher dashboard statistics
- [ ] Parent child monitoring
- [ ] Admin user management
- [ ] Admin analytics

**Mobile Responsiveness:**
- [ ] Test on mobile devices
- [ ] Navigation menu
- [ ] Form inputs
- [ ] Video player
- [ ] All major pages

### 13.2 Automated Testing (Phase 2)

```typescript
// Example test structure
// tests/auth.test.ts
describe('Authentication', () => {
  it('should register a new user', async () => {
    // Test implementation
  });

  it('should not register with invalid email', async () => {
    // Test implementation
  });

  it('should login with valid credentials', async () => {
    // Test implementation
  });
});
```

---

## 14. Deployment Instructions

### 14.1 Environment Variables

Create `.env.local` file:

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Google OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."

# Daily.co
DAILY_API_KEY=""

# Resend
RESEND_API_KEY=""

# Cloudflare (optional)
CLOUDFLARE_ACCOUNT_ID=""
CLOUDFLARE_API_TOKEN=""
```

### 14.2 GitHub Setup

```bash
# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository (via GitHub website)

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/edariss-platform.git
git branch -M main
git push -u origin main
```

### 14.3 Vercel Deployment

**Steps:**

1. **Sign up/Login to Vercel:**
   - Go to https://vercel.com
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Environment Variables:**
   - Add all variables from `.env.local`
   - Important: Change `NEXTAUTH_URL` to your Vercel domain

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Get deployment URL

6. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add `www.edariss.com`
   - Copy provided DNS records
   - Add to Namecheap:
     ```
     Type: CNAME
     Host: www
     Value: cname.vercel-dns.com
     
     Type: A
     Host: @
     Value: 76.76.21.21
     ```
   - Wait for DNS propagation (5-60 minutes)

7. **Configure Webhooks:**
   - For Stripe webhook: Use `https://www.edariss.com/api/payments/webhook`
   - Add webhook URL in Stripe Dashboard

### 14.4 Database Migrations

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Run seed data
npx prisma db seed

# View database (GUI)
npx prisma studio
```

### 14.5 Post-Deployment Checklist

- [ ] Verify homepage loads
- [ ] Test authentication flow
- [ ] Create test accounts (student, teacher)
- [ ] Upload test course
- [ ] Test payment flow (with Stripe test cards)
- [ ] Verify email sending
- [ ] Test live session creation
- [ ] Check all dashboard pages
- [ ] Test on mobile devices
- [ ] Monitor error logs in Vercel
- [ ] Set up monitoring alerts

---

## 15. Security & Performance

### 15.1 Security Best Practices

**Implemented:**
1. Password hashing with bcrypt (10 rounds)
2. JWT-based authentication
3. Protected API routes with middleware
4. Role-based access control
5. CSRF protection (NextAuth built-in)
6. SQL injection prevention (Prisma ORM)
7. XSS protection (React escaping)
8. Rate limiting on auth endpoints
9. Secure file uploads (type validation, size limits)
10. HTTPS only (Vercel enforced)

**Input Validation:**
```typescript
// Always validate user input
import * as z from 'zod';

const courseSchema = z.object({
  title: z.string().min(10).max(200),
  price: z.number().min(0).max(1000000),
  subject: z.enum(['MATH', 'SCIENCE', ...]),
});

// Use in API routes
export async function POST(req: Request) {
  const body = await req.json();
  
  try {
    const validated = courseSchema.parse(body);
    // Proceed with validated data
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid input' },
      { status: 400 }
    );
  }
}
```

**Content Security Policy:**
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

### 15.2 Performance Optimization

**Implemented:**

1. **Image Optimization:**
```tsx
import Image from 'next/image';

<Image
  src={course.thumbnail}
  alt={course.title}
  width={400}
  height={225}
  priority // For above-the-fold images
  placeholder="blur" // For better UX
/>
```

2. **Code Splitting:**
```tsx
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
```

3. **Database Query Optimization:**
```typescript
// Use select to fetch only needed fields
const courses = await prisma.course.findMany({
  select: {
    id: true,
    title: true,
    thumbnail: true,
    price: true,
    teacher: {
      select: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    },
  },
});

// Use include efficiently
// Use pagination
// Add database indexes on frequently queried fields
```

4. **Caching:**
```typescript
// Use Next.js built-in caching
export const revalidate = 3600; // Revalidate every hour

// Or per-request caching
const data = await fetch('...', {
  next: { revalidate: 3600 },
});
```

5. **Lazy Loading:**
```tsx
// For non-critical components
const Comments = lazy(() => import('./Comments'));

<Suspense fallback={<Loading />}>
  <Comments />
</Suspense>
```

6. **Bundle Analysis:**
```bash
# Add to package.json
"analyze": "ANALYZE=true next build"

# Install
npm install @next/bundle-analyzer

# Run
npm run analyze
```

### 15.3 Monitoring

**Vercel Analytics:**
- Automatic performance monitoring
- Real-time error tracking
- Web vitals tracking

**Error Handling:**
```typescript
// Global error boundary
// src/app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to service (Sentry, LogRocket, etc.)
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

---

## Appendices

### A. API Endpoint Summary

```
Authentication:
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/forgot-password
POST   /api/auth/reset-password

Courses:
GET    /api/courses
GET    /api/courses/:id
POST   /api/courses
PUT    /api/courses/:id
DELETE /api/courses/:id
POST   /api/courses/:id/publish

Lessons:
GET    /api/lessons/:id
POST   /api/lessons
PUT    /api/lessons/:id
DELETE /api/lessons/:id

Enrollments:
POST   /api/enrollments
GET    /api/enrollments/my-courses
DELETE /api/enrollments/:id

Progress:
POST   /api/progress
GET    /api/progress/course/:courseId

Quizzes:
GET    /api/quizzes/:id
POST   /api/quizzes/:id/submit
GET    /api/quizzes/:id/attempts

Live Sessions:
GET    /api/live-sessions
POST   /api/live-sessions
POST   /api/live-sessions/:id/register
GET    /api/live-sessions/:id/join

Payments:
POST   /api/payments/create-intent
POST   /api/payments/webhook
GET    /api/payments/history

Users:
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/users/avatar
GET    /api/users/notifications

Admin:
GET    /api/admin/users
PUT    /api/admin/users/:id/status
GET    /api/admin/courses/pending
PUT    /api/admin/courses/:id/approve
GET    /api/admin/analytics
```

### B. Package.json

```json
{
  "name": "edariss-platform",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@next-auth/prisma-adapter": "^1.0.7",
    "@prisma/client": "^5.7.0",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "@stripe/stripe-js": "^2.2.0",
    "@supabase/supabase-js": "^2.38.4",
    "axios": "^1.6.2",
    "bcryptjs": "^2.4.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.294.0",
    "next": "14.0.4",
    "next-auth": "^5.0.0-beta.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.49.2",
    "resend": "^3.0.0",
    "stripe": "^14.9.0",
    "tailwind-merge": "^2.1.0",
    "zod": "^3.22.4",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@hookform/resolvers": "^3.3.2",
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.0.4",
    "postcss": "^8.4.32",
    "prettier": "^3.1.1",
    "prisma": "^5.7.0",
    "tailwindcss": "^3.3.6",
    "typescript": "^5.3.3"
  }
}
```

### C. Glossary

- **Enrollment**: Student registration in a course
- **Lesson**: Individual content unit within a course
- **Quiz**: Assessment with auto-graded questions
- **Assignment**: Manually-graded submission task
- **Live Session**: Real-time video class
- **Progress**: Student completion tracking
- **JWT**: JSON Web Token for authentication
- **ORM**: Object-Relational Mapping (Prisma)
- **RTL**: Right-to-Left (for Arabic text)
- **CDN**: Content Delivery Network
- **API**: Application Programming Interface
- **CRUD**: Create, Read, Update, Delete operations

---

## Contact & Support

**Project Owner:** Edariss Team
**Domain:** www.edariss.com
**Tech Stack:** Next.js 14 + TypeScript + Prisma + Supabase
**Deployment:** Vercel
**Target Launch:** Q1 2025

---

**Document Status:** ✅ Ready for Development
**Last Updated:** December 2024
**Version:** 1.0

---

## Implementation Notes for Claude Code

**Priority Order:**
1. Set up project structure and authentication first
2. Build course system (most critical feature)
3. Add quizzes and progress tracking
4. Integrate payments
5. Add live sessions
6. Polish and test

**Key Files to Create First:**
1. `/prisma/schema.prisma` - Database schema
2. `/src/lib/auth.ts` - Authentication config
3. `/src/lib/db.ts` - Prisma client
4. `/src/lib/utils.ts` - Utility functions
5. `/src/components/ui/*` - Base UI components
6. `/src/app/layout.tsx` - Root layout
7. `/src/app/page.tsx` - Homepage

**Best Practices:**
- Follow TypeScript strict mode
- Use server components by default, client components when needed
- Implement error boundaries
- Add loading states
- Follow REST API conventions
- Use Prisma for all database operations
- Validate all inputs with Zod
- Use environment variables for secrets
- Write clean, documented code
- Follow Next.js 14 App Router patterns

**Testing Strategy:**
- Manual testing for MVP
- Automated tests in Phase 2
- Test each feature as it's built
- Use Stripe test cards for payments
- Test on mobile devices regularly

---

END OF DOCUMENT
