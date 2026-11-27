
import { useState } from 'react'
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Research from './pages/Research'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import ResearchSubjects from './pages/ResearchSubjects'
import SubjectDetail from './pages/SubjectDetail'
import AcademicWork from './pages/AcademicWork'
import Publications from './pages/Publications'
import AskMaheshChat from './pages/AskMaheshChat'
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Research', path: '/research' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-blue-50 px-3 py-2 text-xl font-bold text-blue-700">
            MJ.
          </div>

          <div>
            <p className="font-bold text-[#182848]">
              Mahesh Jadhav
            </p>
            <p className="text-xs text-slate-500">
              AI Engineer & Researcher
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Download Resume
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="text-2xl">
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm ${
                  isActive
                    ? 'bg-blue-50 font-semibold text-blue-700'
                    : 'text-slate-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="mt-3 block rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[#F8FBFF]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Mahesh Jadhav
        </p>

        <p className="text-sm text-slate-500">
          AI Engineering · Applied Research
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-white text-[#182848]">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/subjects" element={<ResearchSubjects />} />
            <Route path="/research/subjects/:subjectId" element={<SubjectDetail />} />
            <Route path="/research/subjects/:subjectId/:workId" element={<AcademicWork />} />
            <Route path="/research/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ask-mahesh" element={<AskMaheshChat />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  )
}
