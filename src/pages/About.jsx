import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Globe,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
  Calendar,
  BookOpen,
  FileDown,
  Eye,
  Award,
  Server,
  Layout,
  Database,
  Cloud,
  Terminal,
  Wrench,
  Users,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useTheme } from "../context/ThemeContext";
import {
  NodeLogo,
  GitLogo,
  AWSLogo,
  BashLogo,
  WindowsLogo,
  LinuxLogo,
} from "@/components/TechLogos";
import profileImg from "@/assets/profile/profile.jpg";
import collegeImg from "@/assets/education/college_img.jpg";
import bTechPdf from "@/assets/files/education_pdf/Transkrip Nilai.pdf";

const About = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const achievements = [
    {
      icon: <Briefcase className="w-6 h-6" aria-hidden="true" />,
      title: "5+ Years",
      description: "DevOps, DevSecOps & IT Experience",
    },
    {
      icon: <Code2 className="w-6 h-6" aria-hidden="true" />,
      title: "6 Positions",
      description: "Across Support, Operations, DevOps & DevSecOps",
    },
    {
      icon: <GraduationCap className="w-6 h-6" aria-hidden="true" />,
      title: "3.41 GPA",
      description: "Informatics Engineering",
    },
  ];

  const experiences = [
    {
      title: "DevSecOps Engineer",
      company: "AXA Insurance Indonesia",
      location: "Jakarta, Indonesia",
      period: "05/2026 - Present",
      type: "Full-time",
      description: [
        "Successfully implemented an end-to-end SSDLC (Secure Software Development Life Cycle) framework across enterprise application pipelines, embedding 100% security gate compliance from source code check-in through production release.",
        "Integrated SAST (SonarQube, Snyk Code, Checkmarx), SCA (Snyk Open Source, Trivy FS, DependencyCheck), DAST (OWASP ZAP), and IaC Scanning (Checkov) into automated CI/CD workflows, shifting security left.",
        "Engineered Sigstore Cosign v3 offline container image signing using OpenShift SHA256 digests and local .sig bundles to ensure artifact authenticity and container supply chain security.",
        "Automated OWASP ZAP DAST scanning with Kubernetes API port-forwarding tunnels and reachability auto-detection to assess deployed staging and pre-prod endpoints.",
        "Enforced Gitleaks secret detection across git commit histories, preventing plain-text credentials and private key exposures.",
        "Standardized SBOM (Software Bill of Materials) generation using CycloneDX across Java, Node.js, and PHP projects for complete supply chain transparency.",
        "Implemented SonarQube Quality Gates with automated API verification to enforce strict code quality, security coverage, and build gating rules.",
        "Modernized zero-boilerplate Jenkins Shared Libraries, enabling multi-stack development teams (Java Maven, .NET, Node.js, PHP Symfony/Pimcore) to adopt standardized DevSecOps controls effortlessly.",
        "Established non-blocking warning stage handling and automated weekly workspace maintenance to maintain pipeline resilience and clean CI environment hygiene.",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "AXA Insurance Indonesia",
      location: "Jakarta, Indonesia",
      period: "05/2025 - 05/2026",
      type: "Full-time",
      description: [
        "Designed and automated Jenkins CI/CD pipelines, eliminating manual deployment bottlenecks and accelerating the software delivery lifecycle.",
        "Integrated Jenkins with OpenShift to streamline continuous integration and application deployment.",
        "Created reusable Jenkins Shared Libraries, standardizing CI/CD across multiple teams and significantly reducing pipeline setup time for new projects.",
        "Managed Kubernetes resources, including Deployments, Services, ConfigMaps, Secrets, Ingress, and Routes in OpenShift.",
        "Configured rolling updates and Pod Disruption Budgets (PDBs) in OpenShift, ensuring continuous application availability and zero user disruption during releases.",
        "Optimized cluster resource utilization through Kubernetes CronJobs and scheduled workloads.",
        "Configured and managed JFrog Artifactory for centralized artifact storage, versioning, and dependency management.",
        "Developed comprehensive Grafana dashboards, enabling real-time monitoring and proactive resolution of system anomalies before they impacted end users.",
        "Automated build validation, smoke testing, and deployment processes to improve release reliability.",
        "Collaborated with development teams to troubleshoot build failures, deployment issues, and runtime incidents.",
        "Standardized CI/CD workflows across multiple projects to improve release consistency and developer productivity.",
        "Managed application configuration across environments using Kubernetes ConfigMaps and Secrets.",
        "Supported Git-based development workflows, including pull request validation and automated pipeline execution.",
        "Replaced manual, error-prone deployment processes with automated pipelines, greatly increasing release reliability and reducing operational overhead.",
        "Participated in troubleshooting production issues and performing root cause analysis to improve platform stability.",
      ],
    },
    {
      title: "IT Operations",
      company: "Great Eastern General Insurance",
      location: "Jakarta, Indonesia",
      period: "12/2024 - 05/2025",
      type: "Full-time",
      description: [
        "Maintain and troubleshoot: Manage laptops, desktops, printers, peripherals, and software.",
        "Application support: Manage and support email (Outlook), Teams, Office applications, and backup policies.",
        "Security and user management: Implement data security protocols, manage user access permissions, and handle user accounts in Active Directory.",
        "Ticketing and remote support: Create, monitor, and resolve ServiceNow tickets and provide remote support using LANDesk.",
        "Asset management and monitoring: Track and maintain IT asset inventory, generate status reports, and perform regular security scans.",
      ],
    },
    {
      title: "IT Support Engineer II",
      company: "Accelbyte",
      location: "Jakarta, Indonesia",
      period: "01/2023 - 11/2024",
      type: "Full-time",
      description: [
        "Troubleshoot and Support: Address hardware, software, and network issues, escalate when needed, and assist users with technical problems using tools like Jira and NinjaRMM.",
        "Setup and Maintenance: Install and configure systems, applications, and hardware, manage user accounts and permissions, and ensure system security.",
        "IT Projects: Implement system upgrades and migrations, track progress in Jira, and document workflows in Confluence.",
        "Automation and Monitoring: Develop automation scripts, monitor system performance, and report issues using NinjaRMM.",
        "Asset and Vendor Management: Maintain IT asset inventory using Excel, track changes, and collaborate with vendors for support and procurement.",
        "Performance and Security: Monitor system performance, ensure security through updates and protocols, and maintain records, user guides, and reports.",
      ],
    },
    {
      title: "Business Operations Associate",
      company: "Hubster Indonesia",
      location: "Jakarta, Indonesia",
      period: "04/2021 - 12/2022",
      type: "Full-time",
      description: [
        "Respond quickly to perform troubleshooting or other technical assistance required by customers.",
        "Analyze new ways to solve problems faster and more efficiently.",
        "Provide professional technical solutions that are responsive to customer's needs.",
        "Provide online or offline technical training and presentations.",
        "Make reports/tickets if there are bugs to the product team.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "PT. Cemara Agung Mandiri",
      location: "Jakarta, Indonesia",
      period: "01/2020 - 06/2020",
      type: "Full-time",
      description: [
        "Responsible for working on both front-end and back-end development processes.",
        "Created design, developed, and maintained fully-fledged and functioning platforms with databases using supply chain management method and PHP programming language with CodeIgniter Framework.",
      ],
    },
  ];

  const skills = [
    {
      category: "DevSecOps & Security",
      icon: <Wrench className="w-6 h-6" aria-hidden="true" />,
      items: [
        { name: "SSDLC Framework", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "SonarQube", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Snyk", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Trivy", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Gitleaks", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Checkov (IaC)", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Cosign (Signing)", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "OWASP ZAP (DAST)", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Checkmarx", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "CycloneDX (SBOM)", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
      ],
    },
    {
      category: "CI/CD & Orchestration",
      icon: <Server className="w-6 h-6" aria-hidden="true" />,
      items: [
        { name: "Jenkins", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Jenkins Shared Library", icon: <Code2 className="w-4 h-4" aria-hidden="true" /> },
        { name: "Playwright E2E", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "GitHub Enterprise", icon: <GitLogo /> },
        { name: "GitOps", icon: <GitLogo /> },
      ],
    },
    {
      category: "Containerization & Cloud",
      icon: <Cloud className="w-6 h-6" aria-hidden="true" />,
      items: [
        { name: "Docker", icon: <Server className="w-4 h-4" aria-hidden="true" /> },
        { name: "OpenShift", icon: <Cloud className="w-4 h-4" aria-hidden="true" /> },
        { name: "Kubernetes", icon: <Server className="w-4 h-4" aria-hidden="true" /> },
        { name: "AWS", icon: <AWSLogo /> },
      ],
    },
    {
      category: "Scripting & Automation",
      icon: <Code2 className="w-6 h-6" aria-hidden="true" />,
      items: [
        { name: "Groovy", icon: <Code2 className="w-4 h-4" aria-hidden="true" /> },
        { name: "Bash", icon: <BashLogo /> },
        { name: "Node.js", icon: <NodeLogo /> },
        { name: "Shell Scripting", icon: <Terminal className="w-4 h-4" aria-hidden="true" /> },
        { name: "PHP", icon: <Code2 className="w-4 h-4" aria-hidden="true" /> },
      ],
    },
    {
      category: "Observability & Registry",
      icon: <Database className="w-6 h-6" aria-hidden="true" />,
      items: [
        { name: "Grafana", icon: <Database className="w-4 h-4" aria-hidden="true" /> },
        { name: "JFrog Artifactory", icon: <Server className="w-4 h-4" aria-hidden="true" /> },
      ],
    },
    {
      category: "IT Support & Collaboration",
      icon: <Users className="w-6 h-6" aria-hidden="true" />,
      items: [
        { name: "Linux", icon: <LinuxLogo className="w-4 h-4" /> },
        { name: "Windows", icon: <WindowsLogo className="w-4 h-4" /> },
        { name: "Active Directory", icon: <Users className="w-4 h-4" aria-hidden="true" /> },
        { name: "ServiceNow", icon: <Wrench className="w-4 h-4" aria-hidden="true" /> },
        { name: "Jira", icon: <Layout className="w-4 h-4" aria-hidden="true" /> },
        { name: "Confluence", icon: <Layout className="w-4 h-4" aria-hidden="true" /> },
      ],
    },
  ];

  const educationData = [
    {
      school: "Universitas Jenderal Achmad Yani",
      location: "Cimahi / Jakarta, Indonesia",
      duration: "Sept 2016 - Oct 2020",
      degree: "Bachelor of Informatics Engineering",
      grade: "GPA: 3.41 / 4.00",
      image: collegeImg,
      resultUrl: bTechPdf,
      coursework: ["Data Software Engineering", "Computer Science", "Information Technology", "Data Analysis"],
      description:
        "Informatics Engineering specializing in Data Software Engineering combining software architecture, enterprise systems, and data analysis.",
    },
  ];

  const interests = [
    "Enterprise SSDLC Framework Implementation",
    "DevSecOps & Shift-Left Security Controls",
    "Jenkins Shared Libraries & Groovy Macro Pipeline Design",
    "Container Attestation (Sigstore Cosign) & IaC Security (Checkov)",
    "Containerization & Kubernetes / OpenShift Cloud Platforms",
    "Observability & Monitoring (Grafana Dashboards)",
  ];

  const axaHighlights = [
    {
      title: "Enterprise SSDLC Framework",
      icon: <Wrench className="w-6 h-6" aria-hidden="true" />,
      description:
        "Implemented a 100% compliant SSDLC framework embedding automated security gates, SAST (SonarQube, Snyk Code, Checkmarx), SCA (Snyk, Trivy), Gitleaks secret detection, Checkov IaC, Cosign image signing, OWASP ZAP DAST, and CycloneDX SBOM.",
    },
    {
      title: "Reusable Jenkins Shared Library",
      icon: <Server className="w-6 h-6" aria-hidden="true" />,
      description:
        "Modernized modular Groovy pipeline orchestrators (templatePipelineOnprem, pipelineTemplate, legacyDotnetPipeline) allowing multi-stack teams (Java, .NET, Node.js, PHP) to consume standard DevSecOps logic with zero boilerplate.",
    },
    {
      title: "OpenShift & Kubernetes Management",
      icon: <Cloud className="w-6 h-6" aria-hidden="true" />,
      description:
        "Automated deployment of Deployments, Services, ConfigMaps, Secrets, Ingress, and Routes on OpenShift with rolling updates, Pod Disruption Budgets, and CronJobs.",
    },
    {
      title: "SonarQube & Grafana Observability",
      icon: <Layout className="w-6 h-6" aria-hidden="true" />,
      description:
        "Enforced Quality Gates with SonarQube API verification and built real-time Grafana dashboards for proactive incident management and system anomaly tracking.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-32 px-4 max-w-6xl mx-auto pb-20 overflow-x-hidden">
      <ScrollAnimation>
        <motion.h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 ${isLight ? "text-slate-900" : "text-white"}`}>
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <img
              src={profileImg}
              alt="Rafii Afif"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className={`leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              I am Rafii Muhammad Afif, a DevSecOps Engineer at AXA Insurance Indonesia with 5+ years of hands-on experience across DevOps, platform engineering, DevSecOps, and enterprise IT operations. I focus on automating software delivery while embedding security gates, reliability, and developer velocity into every stage of the release lifecycle.
            </p>
            <p className={`leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              With a background spanning full-stack development, IT operations, and cloud infrastructure, I bridge development, security, and operations—building zero-trust CI/CD pipelines, standardizing release automation, and enforcing shift-left security controls.
            </p>
            <p className={`leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              My daily stack includes Jenkins, OpenShift, Kubernetes, Docker, SonarQube, Snyk, Trivy, Gitleaks, Checkmarx, OWASP ZAP, CycloneDX, and JFrog Artifactory.
            </p>
          </div>

          <div className="pt-4">
            <h3 className={`text-2xl font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
              Quick Facts
            </h3>
            <ul className="list-none space-y-3">
              {[
                "DevSecOps Engineer at AXA Insurance Indonesia",
                "Based in Jakarta, Indonesia",
                "B.Sc. in Informatics Engineering (GPA: 3.41)",
                "5+ Years IT & Cloud Experience",
              ].map((fact) => (
                <li
                  key={fact}
                  className={`flex items-center space-x-2.5 ${isLight ? "text-slate-700 font-medium" : "text-slate-300"}`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-lg font-semibold transition-colors flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800"
              }`}
            >
              <Eye className="w-5 h-5" aria-hidden="true" />
              View CV
            </a>
            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              download="DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-lg font-semibold transition-colors flex items-center gap-2 border ${
                isLight
                  ? "bg-slate-900 border-slate-900 text-white hover:bg-slate-800"
                  : "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-500"
              }`}
            >
              <FileDown className="w-5 h-5" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className={`text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-3 ${isLight ? "text-slate-900" : "text-white"}`}>
            <Server className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            AXA DevOps Platform Highlights
          </h3>
          <p className={`max-w-3xl mb-8 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
            Delivery platform engineering maintained at AXA Insurance Indonesia—focused on reusable automation, consistent release controls, and deterministic rollouts from commit to OpenShift.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {axaHighlights.map((item) => (
              <ScrollAnimation key={item.title}>
                <div className={`p-6 rounded-xl border transition-colors h-full ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg border ${isLight ? "bg-slate-100 text-slate-900 border-slate-200" : "bg-slate-800 text-white border-slate-700"}`}>
                      {item.icon}
                    </div>
                    <h4 className={`text-lg sm:text-xl font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                      {item.title}
                    </h4>
                  </div>
                  <p className={`leading-relaxed text-sm sm:text-base ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 flex items-center gap-3 ${isLight ? "text-slate-900" : "text-white"}`}>
            <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            Professional Experience
          </h3>
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp) => (
              <ScrollAnimation key={`${exp.company}-${exp.title}`}>
                <div className={`group relative rounded-xl sm:rounded-2xl overflow-hidden transition-colors border ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-colors ${
                        isLight
                          ? "bg-slate-100 border-slate-200 text-slate-900"
                          : "bg-slate-800 border-slate-700 text-white"
                      }`}>
                        <Building2 className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className={`text-xl sm:text-2xl font-bold mb-1 ${isLight ? "text-slate-900" : "text-white"}`}>
                          {exp.title}
                        </h4>
                        <p className={`text-base sm:text-lg ${isLight ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className={`flex flex-wrap items-center gap-2 mb-4 sm:mb-6 text-sm font-mono ${
                      isLight ? "text-slate-600" : "text-slate-300"
                    }`}>
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span>{exp.location}</span>
                      <span>&bull;</span>
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-3 sm:space-y-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 text-sm sm:text-base ${
                            isLight ? "text-slate-700" : "text-slate-300"
                          }`}
                        >
                          <ArrowRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isLight ? "text-emerald-700" : "text-emerald-400"}`} aria-hidden="true" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className={`text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-3 ${isLight ? "text-slate-900" : "text-white"}`}>
            <Code2 className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            Technical Skills
          </h3>
          <p className={`mb-10 max-w-2xl ${isLight ? "text-slate-600" : "text-slate-400"}`}>
            Core platforms, security scanners, and automation tooling used in production.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <ScrollAnimation key={skillGroup.category}>
                <div className={`p-6 rounded-xl transition-colors border h-full ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 rounded-lg border ${isLight ? "bg-slate-100 text-slate-900 border-slate-200" : "bg-slate-800 text-white border-slate-700"}`}>
                      {skillGroup.icon}
                    </div>
                    <h4 className={`text-lg font-bold ${isLight ? "text-slate-900" : "text-white"}`}>{skillGroup.category}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-3 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors group border ${
                          isLight
                            ? "bg-slate-50 border-slate-200 hover:bg-slate-100"
                            : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className={isLight ? "text-slate-600 group-hover:text-slate-900" : "text-slate-400 group-hover:text-white"}>
                          {skill.icon}
                        </div>
                        <span className={`text-xs sm:text-sm font-medium ${isLight ? "text-slate-800 group-hover:text-slate-900" : "text-slate-300 group-hover:text-white"}`}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className={`text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3 ${isLight ? "text-slate-900" : "text-white"}`}>
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            Education
          </h3>
          <div className="space-y-12">
            {educationData.map((edu) => (
              <ScrollAnimation key={edu.school}>
                <div className={`relative rounded-xl overflow-hidden transition-colors border ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm"
                    : "bg-slate-900/80 border-slate-800"
                }`}>
                  <div className={` sm:absolute top-0 right-0 px-4 py-2 sm:rounded-bl-xl flex items-center gap-2 z-10 border-b sm:border-l text-xs font-mono ${
                    isLight
                      ? "bg-slate-100 text-slate-800 border-slate-200"
                      : "bg-slate-950 text-slate-300 border-slate-800"
                  }`}>
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>{edu.duration}</span>
                  </div>

                  <div className="grid md:grid-cols-[300px,1fr]">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={edu.image}
                        alt={edu.school}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex items-end">
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-2 text-white">{edu.school}</h4>
                          <div className="flex items-center gap-2 text-slate-200 mb-1">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-200 font-mono">
                            <Award className="w-4 h-4" aria-hidden="true" />
                            <span className="text-sm">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className={`w-5 h-5 ${isLight ? "text-slate-600" : "text-slate-400"}`} aria-hidden="true" />
                        <h4 className={`text-lg font-bold ${isLight ? "text-slate-900" : "text-white"}`}>{edu.degree}</h4>
                      </div>

                      <p className={`text-sm leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {edu.coursework.map((item) => (
                          <span key={item} className={`px-3 py-1 rounded-md text-xs font-mono border ${
                            isLight
                              ? "bg-slate-50 text-slate-700 border-slate-200"
                              : "bg-slate-950 text-slate-300 border-slate-800"
                          }`}>
                            {item}
                          </span>
                        ))}
                      </div>

                      {edu.resultUrl && (
                        <a
                          href={edu.resultUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg transition-colors text-sm font-semibold border ${
                            isLight
                              ? "bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-300"
                              : "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
                          }`}
                        >
                          <span>View Academic Transcript</span>
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 ${isLight ? "text-slate-900" : "text-white"}`}>
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <div className={`p-6 rounded-xl h-full flex flex-col items-center text-center border ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm text-slate-900"
                    : "bg-slate-900/80 border-slate-800 text-white"
                }`}>
                  <div className={`mb-4 ${isLight ? "text-emerald-700" : "text-emerald-400"}`}>{achievement.icon}</div>
                  <h4 className={`text-xl font-bold font-mono mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 ${isLight ? "text-slate-900" : "text-white"}`}>
            Areas of Focus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className={`p-4 rounded-xl flex items-center gap-3 border h-full ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm"
                    : "bg-slate-900/80 border-slate-800"
                }`}>
                  <Globe className={`w-5 h-5 shrink-0 ${isLight ? "text-emerald-700" : "text-emerald-400"}`} aria-hidden="true" />
                  <span className={`text-sm font-medium ${isLight ? "text-slate-800" : "text-slate-300"}`}>{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
