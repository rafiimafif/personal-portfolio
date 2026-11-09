import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Command, ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/projects'

const baseSearchData = [
  {
    title: 'Home',
    category: 'Page',
    description: 'Overview, CV download, key metrics, and direct social channels',
    path: '/',
    keywords: ['home', 'cv', 'resume', 'start', 'welcome', 'portfolio', 'Rafii Afif', 'rafiimafif', 'DevSecOps Engineer', 'Freelance Software Engineer', 'AXA'],
  },
  {
    title: 'About & Experience',
    category: 'Page',
    description: 'Professional timeline at AXA Insurance Indonesia, Great Eastern, AccelByte & skills',
    path: '/about',
    keywords: ['about', 'background', 'education', 'bio', 'profile', 'experience', 'career', 'AXA Insurance Indonesia', 'Great Eastern', 'Accelbyte', 'Universitas Jenderal Achmad Yani', 'gpa'],
  },
  {
    title: 'Technical Skills & Security Stack',
    category: 'AXA DevSecOps',
    description: 'SSDLC, SonarQube, Snyk, Trivy, Gitleaks, Checkov, Cosign, OWASP ZAP, Jenkins, OpenShift',
    path: '/about',
    keywords: ['skills', 'technologies', 'DevSecOps', 'SSDLC', 'Snyk', 'Trivy', 'SonarQube', 'Gitleaks', 'CycloneDX', 'Checkmarx', 'Checkov', 'Cosign', 'OWASP ZAP', 'Playwright', 'Jenkins', 'Docker', 'OpenShift', 'Kubernetes', 'AWS', 'Grafana', 'Artifactory', 'Groovy', 'Bash'],
  },
  {
    title: 'Enterprise SSDLC DevSecOps Flow',
    category: 'AXA DevSecOps',
    description: 'Interactive 4-stage zero-trust CI/CD pipeline orchestrator & console logs',
    path: '/projects',
    keywords: ['ssdlc', 'pipeline', 'jenkins shared library', 'cosign', 'sbom', 'cyclonedx', 'gitleaks', 'checkov', 'owasp zap', 'dast', 'sast', 'sca', 'axa'],
  },
  {
    title: 'Projects & Client Deliveries',
    category: 'Page',
    description: 'Verified client contracts, full-stack platforms, and engineering labs',
    path: '/projects',
    keywords: ['projects', 'portfolio', 'work', 'freelance', 'client', 'github', 'code'],
  },
  {
    title: 'Certificates & Credentials',
    category: 'Certificate',
    description: 'End-to-End DevOps, ITIL v4 Foundation, Cisco CCNA 200-301, Jira & Confluence',
    path: '/certificates',
    keywords: ['certificates', 'certifications', 'ccna', 'cisco', 'itil', 'axelos', 'jira', 'confluence', 'devops', 'aws'],
  },
  {
    title: 'Contact & Inquiry',
    category: 'Page',
    description: 'Send a direct message, copy email, or connect via WhatsApp & LinkedIn',
    path: '/contact',
    keywords: ['contact', 'email', 'whatsapp', 'phone', 'message', 'connect', 'hire', 'freelance', 'collaboration'],
  },
]

const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const allSearchItems = useMemo(() => {
    const projectItems = projects.map((project) => ({
      title: project.title,
      category: project.category === 'freelance' ? 'Client Delivery' : 'Production Build',
      description: `${project.systemType} — ${project.tags.slice(0, 5).join(', ')}`,
      path: '/projects',
      keywords: [
        project.title,
        project.systemId,
        project.systemType,
        project.clientSector,
        project.role,
        ...project.tags,
      ],
    }))
    return [...baseSearchData, ...projectItems]
  }, [])

  const results = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return allSearchItems
    return allSearchItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.keywords.some((keyword) => keyword && keyword.toLowerCase().includes(query))
      )
    })
  }, [searchQuery, allSearchItems])

  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (!isOpen) return

      if (e.key === 'Escape') setIsOpen(false)

      if (e.key === 'ArrowDown' && results.length > 0) {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % results.length)
      }
      if (e.key === 'ArrowUp' && results.length > 0) {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
      }

      if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault()
        const target = results[selectedIndex] || results[0]
        if (target) {
          navigate(target.path)
          setIsOpen(false)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, navigate])

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Search site pages and projects (Ctrl+K)"
        className={`flex items-center space-x-2 px-3.5 py-2 min-h-[44px] transition-colors rounded-xl border ${
          isLight
            ? 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border-slate-200'
            : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border-slate-800'
        }`}
      >
        <Search className="w-4 h-4" aria-hidden="true" />
        <span className="text-sm hidden sm:block">Search...</span>
        <span className={`hidden md:flex items-center space-x-1 px-1.5 py-0.5 text-xs font-mono rounded ${
          isLight ? 'bg-slate-200/80 text-slate-700' : 'bg-slate-800 text-slate-400'
        }`}>
          <Command className="w-3 h-3" aria-hidden="true" />
          <span>K</span>
        </span>
      </button>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Search portfolio pages, projects, and skills"
    >
      <div className="min-h-screen px-4 text-center">
        <div
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
        <div className="inline-block w-full max-w-2xl mt-20 sm:mt-24 text-left align-middle transition-all transform">
          <div className={`relative rounded-2xl shadow-2xl border overflow-hidden ${
            isLight
              ? 'bg-white text-slate-900 border-slate-300'
              : 'bg-slate-900 text-white border-slate-700'
          }`}>
            <div className={`flex items-center px-4 border-b ${
              isLight ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <Search className={`w-5 h-5 shrink-0 ${isLight ? 'text-slate-500' : 'text-slate-400'}`} aria-hidden="true" />
              <input
                type="text"
                aria-label="Search pages, projects, or tools"
                placeholder="Search projects (automateERP, GoCut), tools (Cosign, Trivy), or pages..."
                maxLength={100}
                className={`w-full px-4 py-4 bg-transparent border-0 focus:outline-none focus:ring-0 text-sm sm:text-base ${
                  isLight ? 'text-slate-900 placeholder:text-slate-400' : 'text-white placeholder:text-slate-400'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close search dialog"
                className={`px-2.5 py-1.5 min-h-[36px] text-xs font-mono rounded-lg border shrink-0 ${
                  isLight ? 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                Esc
              </button>
            </div>

            <div className="max-h-[62vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className={`p-6 text-center text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  No matching pages, projects, or tools found for &ldquo;{searchQuery}&rdquo;.
                </div>
              ) : (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      type="button"
                      key={`${result.category}-${result.title}`}
                      className={`w-full px-4 py-3 min-h-[48px] text-left flex items-center justify-between gap-3 transition-colors ${
                        index === selectedIndex
                          ? isLight
                            ? 'bg-slate-100'
                            : 'bg-slate-800/90'
                          : isLight
                          ? 'hover:bg-slate-50'
                          : 'hover:bg-slate-800/50'
                      }`}
                      onClick={() => {
                        navigate(result.path)
                        setIsOpen(false)
                      }}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-semibold text-sm sm:text-base truncate ${isLight ? 'text-slate-900' : 'text-white'}`}>
                            {result.title}
                          </span>
                          <span className={`px-2 py-0.5 text-[10px] font-mono rounded border uppercase tracking-wider ${
                            result.category === 'Client Delivery' || result.category === 'AXA DevSecOps'
                              ? isLight
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                              : isLight
                              ? 'bg-slate-100 text-slate-600 border-slate-200'
                              : 'bg-slate-800 text-slate-400 border-slate-700'
                          }`}>
                            {result.category}
                          </span>
                        </div>
                        <div className={`text-xs sm:text-sm truncate mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                          {result.description}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 ${isLight ? 'text-emerald-700' : 'text-emerald-400'} ${
                          index === selectedIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDialog
