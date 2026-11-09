import { useState, useEffect } from "react";
import { Github, ExternalLink, Maximize2, X, Briefcase, Layers, CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { projects } from "@/data/projects";
import { SSDLCFlowAnimation } from "@/components/SSDLCFlowAnimation";
import { useTheme } from "../context/ThemeContext";

const axaHighlights = [
  {
    title: "SSDLC Framework & Zero-Trust Governance",
    label: "Security Engineering",
    description:
      "Engineered an enterprise SSDLC framework embedding 100% security gate compliance, branch-based environment routing (master/release/* vs development), PR checks, and non-blocking warning handling.",
    tags: ["SSDLC", "Zero-Trust", "Shift-Left", "Security Gates", "Branch Policy"],
  },
  {
    title: "Jenkins Shared Library Modernization",
    label: "Platform Engineering",
    description:
      "Created zero-boilerplate Groovy shared library orchestrators (templatePipelineOnprem, pipelineTemplate, legacyDotnetPipeline) standardizing build, SAST, SCA, and deployment flows across Java, .NET, Node.js, and PHP.",
    tags: ["Jenkins", "Groovy", "Shared Library", "Multi-Stack", "Automation"],
  },
  {
    title: "Multi-Tool SAST, SCA, DAST & Secrets",
    label: "Vulnerability Auditing",
    description:
      "Orchestrated SAST (SonarQube, Snyk Code, Checkmarx), SCA (Snyk, Trivy FS, DepCheck), Gitleaks secret detection, Checkov IaC security, and OWASP ZAP DAST with K8s API port-forwarding.",
    tags: ["SonarQube", "Snyk", "Trivy", "Gitleaks", "Checkov", "OWASP ZAP"],
  },
  {
    title: "Supply Chain & Container Attestation",
    label: "Image Signing & SBOM",
    description:
      "Standardized CycloneDX Software Bill of Materials (SBOM) generation and Sigstore Cosign v3 offline container image signing using OpenShift SHA256 digests and local .sig bundles.",
    tags: ["CycloneDX", "SBOM", "Cosign", "Image Signing", "Supply Chain"],
  },
  {
    title: "Playwright E2E & Browser Mirroring",
    label: "Quality Assurance",
    description:
      "Automated Playwright E2E browser regression testing inside Jenkins CI, resolving air-gapped environment constraints by mirroring multi-part browser runtimes from JFrog Artifactory.",
    tags: ["Playwright", "E2E Testing", "Browser Mirroring", "Artifactory", "QA"],
  },
  {
    title: "OpenShift Cloud & Observability",
    label: "Cloud & Infrastructure",
    description:
      "Managed OpenShift BuildConfigs, zero-downtime rolling updates, Pod Disruption Budgets, and JFrog Artifactory package storage alongside real-time Grafana metrics dashboards.",
    tags: ["OpenShift", "Kubernetes", "JFrog Artifactory", "Grafana", "Rolling Deploy"],
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <div className="min-h-screen pt-28 sm:pt-32 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
          Projects &amp; Experience
        </h2>
        <p className={`max-w-3xl text-base sm:text-lg leading-relaxed mb-12 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
          The top section highlights AXA DevSecOps and Platform Engineering work, while the bottom section displays personal software projects.
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div>
              <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${isLight ? "text-emerald-700" : "text-emerald-400"}`}>
                AXA Experience
              </p>
              <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                DevSecOps &amp; Platform Engineering at AXA Insurance Indonesia
              </h3>
            </div>
            <span className={`px-3 py-1 text-xs uppercase tracking-wider font-mono rounded-md border font-medium ${
              isLight
                ? "border-slate-300 bg-slate-100 text-slate-700"
                : "border-slate-700 bg-slate-800/80 text-slate-300"
            }`}>
              Enterprise Work
            </span>
          </div>

          <div className="max-w-3xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono font-medium mb-1 text-slate-500">
              Scope &amp; Governance
            </p>
            <p className={`leading-relaxed text-sm sm:text-base ${isLight ? "text-slate-600" : "text-slate-400"}`}>
              These are the platform, security, and automation outcomes delivered at AXA Insurance Indonesia. Source code remains proprietary; architecture flows and delivery pillars are detailed below.
            </p>
          </div>

          <SSDLCFlowAnimation />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {axaHighlights.map((item) => (
              <ScrollAnimation key={item.title}>
                <div className={`h-full flex flex-col rounded-xl border p-6 transition-colors ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}>
                  <div className={`mb-3 inline-flex self-start rounded-md border px-2.5 py-1 text-xs font-mono font-medium uppercase tracking-wider ${
                    isLight
                      ? "border-slate-200 bg-slate-100 text-slate-700"
                      : "border-slate-700 bg-slate-800 text-slate-300"
                  }`}>
                    {item.label}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 flex-grow ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[11px] font-mono rounded border ${
                          isLight
                            ? "bg-slate-50 text-slate-700 border-slate-200"
                            : "bg-slate-800/60 text-slate-300 border-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${isLight ? "text-emerald-700" : "text-emerald-400"}`}>
              Production Deliverables &amp; Systems
            </p>
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
              Client Engagements &amp; Production Systems
            </h3>
          </div>
          <span className={`px-3 py-1 text-xs uppercase tracking-wider font-mono rounded-md border font-medium ${
            isLight
              ? "border-emerald-300 bg-emerald-50 text-emerald-800"
              : "border-emerald-800/80 bg-emerald-950/40 text-emerald-300"
          }`}>
            Live Deployed Systems
          </span>
        </div>
        <p className={`max-w-3xl text-sm sm:text-base leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
          Verified software ecosystems delivered for client contracts alongside end-to-end engineered platforms. All previews captured from live running deployments.
        </p>

        <div className="flex flex-wrap gap-2.5 mb-8">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-medium border transition-colors flex items-center gap-2 ${
              activeCategory === "all"
                ? isLight
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-emerald-600 text-white border-emerald-600"
                : isLight
                  ? "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                  : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700"
            }`}
          >
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>All Systems ({projects.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("freelance")}
            className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-medium border transition-colors flex items-center gap-2 ${
              activeCategory === "freelance"
                ? isLight
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "bg-emerald-600 text-white border-emerald-600"
                : isLight
                  ? "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                  : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Verified Client Contracts ({projects.filter((p) => p.category === "freelance").length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("build")}
            className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-medium border transition-colors flex items-center gap-2 ${
              activeCategory === "build"
                ? isLight
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-emerald-600 text-white border-emerald-600"
                : isLight
                  ? "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                  : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700"
            }`}
          >
            <span>Production Builds &amp; Labs ({projects.filter((p) => p.category === "build").length})</span>
          </button>
        </div>
      </ScrollAnimation>

      {/* Responsive 2-column grid preserving natural 16:10 widescreen screenshots with zero cropping */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ScrollAnimation key={project.title} className="h-full">
            <div className={`rounded-xl overflow-hidden border h-full flex flex-col transition-colors ${
              isLight
                ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
            }`}>
              <div className={`px-4 py-2 border-b flex items-center justify-between font-mono text-xs select-none ${
                isLight
                  ? "bg-slate-100/90 border-slate-200 text-slate-600"
                  : "bg-slate-950/80 border-slate-800 text-slate-400"
              }`}>
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                  <span className="ml-2 font-medium truncate text-slate-600 dark:text-slate-400">
                    {project.systemId || "system.local"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 min-h-[36px] rounded transition-colors flex-shrink-0 ${
                    isLight
                      ? "hover:bg-slate-200 text-slate-700"
                      : "hover:bg-slate-800 text-slate-300"
                  }`}
                  aria-label={`Inspect full capture for ${project.title}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="font-mono">Inspect</span>
                </button>
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => setActiveModalProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveModalProject(project);
                  }
                }}
                className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label={`Click to expand screenshot of ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} live interface capture`}
                  className="w-full h-full object-contain bg-slate-950 transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/95 text-slate-100 text-xs font-mono px-3 py-1.5 rounded-md border border-slate-700 shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    View Full 1440x900 Capture
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <span className={`text-[11px] uppercase tracking-wider font-mono font-medium ${
                    isLight ? "text-emerald-700" : "text-emerald-400"
                  }`}>
                    {project.systemType || "Production System"}
                  </span>
                  <span className={`px-2 py-0.5 text-[10px] font-mono rounded border font-semibold uppercase tracking-wider ${
                    project.category === "freelance"
                      ? isLight
                        ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                        : "border-emerald-800 bg-emerald-950/60 text-emerald-300"
                      : isLight
                        ? "border-slate-200 bg-slate-100 text-slate-600"
                        : "border-slate-800 bg-slate-800/80 text-slate-400"
                  }`}>
                    {project.badge}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                  {project.title}
                </h3>

                {project.category === "freelance" && (
                  <div className={`mb-4 p-3.5 rounded-lg border text-xs font-mono leading-relaxed space-y-1.5 ${
                    isLight
                      ? "bg-emerald-50/70 border-emerald-200/90 text-slate-800"
                      : "bg-emerald-950/30 border-emerald-800/50 text-slate-300"
                  }`}>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 flex-wrap gap-1">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" aria-hidden="true" />
                        CLIENT: {project.clientSector.toUpperCase()}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-normal">{project.role}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Delivered Impact:</span>{" "}
                      {project.deliveredImpact}
                    </p>
                  </div>
                )}

                <p className={`mb-6 flex-grow text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-[11px] font-mono rounded border ${
                        isLight
                          ? "bg-slate-50 text-slate-700 border-slate-200"
                          : "bg-slate-800/60 text-slate-300 border-slate-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center space-x-3 pt-4 border-t mt-auto ${isLight ? "border-slate-200" : "border-slate-800"}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`min-h-[44px] px-3.5 py-2 rounded-lg border flex items-center space-x-2 text-sm font-medium transition-colors ${
                      isLight
                        ? "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
                        : "border-slate-700 bg-slate-800/60 text-slate-200 hover:bg-slate-800"
                    }`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>{project.category === "freelance" ? "Client Core Repo" : "Source Code"}</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`min-h-[44px] px-3.5 py-2 rounded-lg border flex items-center space-x-2 text-sm font-medium transition-colors ${
                        isLight
                          ? "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
                          : "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-500"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className={`min-h-[44px] px-3 py-2 rounded-lg border flex items-center space-x-1.5 text-xs font-mono ml-auto transition-colors ${
                      isLight
                        ? "border-slate-200 text-slate-600 hover:bg-slate-100"
                        : "border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                    }`}
                    aria-label={`View full screenshot of ${project.title}`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Screenshot</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="screenshot-modal-title"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className={`relative max-w-5xl w-full max-h-[92vh] rounded-xl overflow-hidden border shadow-2xl flex flex-col ${
              isLight
                ? "bg-white border-slate-300 text-slate-900"
                : "bg-slate-900 border-slate-700 text-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`px-4 sm:px-6 py-3 border-b flex items-center justify-between font-mono text-xs sm:text-sm ${
              isLight
                ? "bg-slate-100 border-slate-200 text-slate-800"
                : "bg-slate-950 border-slate-800 text-slate-200"
            }`}>
              <div className="flex items-center gap-2.5 truncate pr-4">
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  activeModalProject.category === "freelance" ? "bg-emerald-500" : "bg-cyan-500"
                }`} aria-hidden="true" />
                <span id="screenshot-modal-title" className="font-semibold truncate">
                  {activeModalProject.title}
                </span>
                <span className="hidden sm:inline text-xs text-slate-400 font-normal">
                  [{activeModalProject.systemId}]
                </span>
                {activeModalProject.category === "freelance" && (
                  <span className="hidden md:inline px-2 py-0.5 text-[10px] rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold uppercase">
                    Client Delivery
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className={`p-2 rounded-lg border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  isLight
                    ? "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                    : "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
                aria-label="Close screenshot preview"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-2 sm:p-4 bg-slate-950 flex items-center justify-center overflow-auto max-h-[78vh]">
              <img
                src={activeModalProject.image}
                alt={`${activeModalProject.title} full high-resolution capture`}
                decoding="async"
                className="w-full h-auto max-h-[74vh] object-contain rounded border border-slate-800 shadow-inner"
              />
            </div>

            <div className={`px-4 sm:px-6 py-2.5 border-t text-xs font-mono flex items-center justify-between flex-wrap gap-2 ${
              isLight
                ? "bg-slate-50 border-slate-200 text-slate-600"
                : "bg-slate-950/80 border-slate-800 text-slate-400"
            }`}>
              <div className="flex items-center gap-2">
                <span>Captured Live Environment &bull; 1440x900 Native Aspect</span>
                {activeModalProject.clientSector && (
                  <span className="hidden sm:inline text-slate-500">
                    &bull; Client: {activeModalProject.clientSector}
                  </span>
                )}
              </div>
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:underline inline-flex items-center gap-1 font-medium min-h-[44px] px-2"
              >
                <span>Inspect Repository</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
