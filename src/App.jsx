import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { ThemeProvider } from "./context/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const pageMeta = {
  "/": {
    title: "Rafii Afif - DevSecOps & Freelance Software Engineer",
    description:
      "Rafii Afif: DevSecOps Engineer at AXA Insurance Indonesia & Freelance Software Engineer delivering secure CI/CD pipelines, enterprise automation, and custom full-stack web platforms.",
  },
  "/about": {
    title: "About - Rafii Afif | AXA DevSecOps Engineer",
    description:
      "Learn about Rafii Afif: DevSecOps Engineer at AXA Insurance Indonesia with 5+ years of experience across DevOps, DevSecOps, platform engineering, and enterprise IT operations.",
  },
  "/projects": {
    title: "Projects - Rafii Afif | DevSecOps & Platform Highlights",
    description:
      "Explore personal projects and AXA DevSecOps platform highlights including vulnerability scanning, CycloneDX SBOM generation, and OpenShift deployment automation.",
  },
  "/certificates": {
    title: "Certificates - Rafii Afif | Certifications & Courses",
    description:
      "Professional certifications and achievements of Rafii Afif in DevOps, networking, ITSM (ITIL v4), and Agile project management.",
  },
  "/contact": {
    title: "Contact - Rafii Afif | DevSecOps Engineer",
    description:
      "Get in touch with Rafii Afif for DevSecOps, CI/CD security automation, OpenShift/Kubernetes delivery, or collaboration opportunities.",
  },
};

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const meta = pageMeta[location.pathname] || {
      title: "Rafii Afif - DevSecOps Engineer",
      description:
        "Portfolio of Rafii Afif: DevSecOps Engineer specializing in Jenkins, OpenShift, Kubernetes, security scanning, and CI/CD automation.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://rafii-afif.web.id${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://rafii-afif.web.id${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SEOUpdater />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-emerald-600 focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col relative">
          <Background3D />
          <Navbar />
          <main id="main-content" className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
