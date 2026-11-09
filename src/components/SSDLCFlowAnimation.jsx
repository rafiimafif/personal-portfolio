import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  Cloud,
  Terminal,
  Activity,
  ArrowRight,
  GitBranch,
  Box,
  Check,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const stages = [
  {
    id: 1,
    name: "01. SCM & Secrets",
    shortName: "SCM & Secrets",
    icon: <GitBranch className="w-5 h-5" aria-hidden="true" />,
    badge: "SHIFT-LEFT",
    borderColor: "border-emerald-500/60",
    tools: ["Source Control", "Gitleaks Secret Scan", "Checkov IaC Audit"],
    metrics: "0 Credentials Leaked • IaC Compliance 100%",
    description:
      "Repository check-in triggers automated commit history secret detection & Infrastructure-as-Code policy validation.",
    logs: [
      "git clone https://scm.internal/org/app-repository.git --branch main",
      "gitleaks detect --source=. --report-format=json --verbose",
      "[SUCCESS] Gitleaks: 0 plain-text credentials or private keys found.",
      "checkov -d . --framework terraform,kubernetes,dockerfile --skip-download",
      "[SUCCESS] Checkov IaC Audit: Passed (0 critical misconfigurations).",
    ],
  },
  {
    id: 2,
    name: "02. Build & SAST Gating",
    shortName: "Build & SAST",
    icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />,
    badge: "QUALITY GATE",
    borderColor: "border-cyan-500/60",
    tools: ["SonarQube SAST", "Snyk Code", "Checkmarx", "verifyQualityGate"],
    metrics: "Coverage 85%+ • Quality Gate: PASSED",
    description:
      "Multi-stack compilation with automated SonarQube API Quality Gate verification & static code security analysis.",
    logs: [
      "mvn clean package -DskipTests=false (or dotnet build / npm run build)",
      "sonar-scanner -Dsonar.projectKey=service-app -Dsonar.sources=src",
      "curl -s https://sonarqube.internal/api/qualitygates/project_status",
      "[QUALITY GATE] Status: OK | Vulnerabilities: 0 | Bugs: 0 | Code Smells: 0",
      "snyk code test --severity-threshold=high",
      "[SUCCESS] Snyk Code SAST: 0 critical vulnerabilities detected.",
    ],
  },
  {
    id: 3,
    name: "03. SCA & Supply Chain",
    shortName: "SCA & SBOM",
    icon: <Box className="w-5 h-5" aria-hidden="true" />,
    badge: "ATTRIBUTION",
    borderColor: "border-amber-500/60",
    tools: ["Snyk OpenSource", "Trivy FS", "CycloneDX SBOM", "Artifactory"],
    metrics: "SBOM: CycloneDX v1.5 • Repository Verified",
    description:
      "Dependency vulnerability scanning, automated CycloneDX SBOM inventory generation, and binary artifact publishing.",
    logs: [
      "snyk test --all-subprojects --json-file-output=snyk-report.json",
      "trivy fs --security-checks vuln,secret,config .",
      "cyclonedx-py --format json --output sbom.cdx.json",
      "[SBOM] Generated CycloneDX Software Bill of Materials manifest.",
      "jfrog rt upload release-v1.4.0.zip generic-release-local/service-app/",
      "[ARTIFACTORY] Published immutable binary package & Build Info.",
    ],
  },
  {
    id: 4,
    name: "04. CD, Attestation & DAST",
    shortName: "CD & DAST",
    icon: <Cloud className="w-5 h-5" aria-hidden="true" />,
    badge: "DEPLOYS & SIGNS",
    borderColor: "border-emerald-500/60",
    tools: ["Playwright E2E", "Container CD", "Sigstore Cosign v3", "OWASP ZAP DAST"],
    metrics: "Cosign Signed • Container SHA256 Pinned",
    description:
      "Playwright E2E regression, container build rollout, Sigstore Cosign v3 offline image signing, and OWASP ZAP DAST.",
    logs: [
      "npx playwright test --config=playwright.config.js (Artifact Mirror)",
      "oc start-build service-app --follow --commit=HEAD",
      "RESOLVED IMAGE SHA256: sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b9...",
      "cosign sign --key k8s://cluster-ingress/cosign-key --tlog-upload=false sha256:e3b0c...",
      "[COSIGN] Signed container digest. Generated local .sig bundle.",
      "kubectl port-forward svc/service-app 8080:80 & zap-baseline.py -t http://localhost:8080",
      "[SUCCESS] OWASP ZAP DAST Scan: Passed 0 High/Critical alerts.",
      "[RELEASE] Release v1.4.0 created successfully!",
    ],
  },
];

export const SSDLCFlowAnimation = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() =>
    typeof window !== "undefined"
      ? !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : true,
  );
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [selectedStage, setSelectedStage] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    if (!isPlaying) return;
    const intervalTime = 3800 / speedMultiplier;
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => {
        const next = (prev + 1) % stages.length;
        setSelectedStage(next);
        return next;
      });
    }, intervalTime);
    return () => clearInterval(timer);
  }, [isPlaying, speedMultiplier]);

  const handleStageClick = (index) => {
    setActiveStageIndex(index);
    setSelectedStage(index);
    setIsPlaying(false);
  };

  const handleReset = () => {
    setActiveStageIndex(0);
    setSelectedStage(0);
    setIsPlaying(true);
  };

  const currentStageObj = stages[selectedStage];

  return (
    <div
      className={`w-full border rounded-2xl p-5 sm:p-8 overflow-hidden relative my-8 transition-colors ${
        isLight
          ? "bg-white border-slate-200 text-slate-900 shadow-sm"
          : "bg-slate-900/90 border-slate-800 text-white"
      }`}
    >
      <div
        className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b ${
          isLight ? "border-slate-200" : "border-slate-800"
        }`}
      >
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
              isLight ? "text-emerald-700" : "text-emerald-400"
            }`}>
              Live Pipeline Orchestration
            </span>
          </div>
          <h3
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Enterprise SSDLC DevSecOps Flow
          </h3>
          <p
            className={`text-xs sm:text-sm mt-1 ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            End-to-end zero-trust CI/CD pipeline reference architecture
          </p>
        </div>

        <div
          className={`flex items-center gap-2 self-start lg:self-auto p-1.5 rounded-xl border ${
            isLight
              ? "bg-slate-50 border-slate-200"
              : "bg-slate-950 border-slate-800"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-lg border text-xs font-mono font-semibold transition-colors ${
              isLight
                ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                : "bg-slate-900 border-slate-700 text-emerald-400 hover:bg-slate-800"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" aria-hidden="true" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" aria-hidden="true" /> Resume
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className={`flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-lg text-xs font-mono font-semibold border transition-colors ${
              isLight
                ? "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
            title="Re-run pipeline from Stage 1"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> Run Pipeline
          </button>

          <button
            type="button"
            onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
            aria-label={`Playback speed ${speedMultiplier}x`}
            className={`px-3 py-2 min-h-[44px] min-w-[44px] rounded-lg text-xs font-mono font-semibold border transition-colors ${
              isLight
                ? "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:text-white"
            }`}
          >
            {speedMultiplier}x
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative mb-8">
        {stages.map((stage, idx) => {
          const isActive = activeStageIndex === idx;
          const isSelected = selectedStage === idx;
          const isPassed =
            activeStageIndex > idx || (activeStageIndex === 3 && idx === 3);

          return (
            <div
              key={stage.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => handleStageClick(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleStageClick(idx);
                }
              }}
              className={`cursor-pointer relative rounded-xl p-4 transition-colors border flex flex-col justify-between min-h-[176px] text-left ${
                isSelected
                  ? isLight
                    ? `bg-slate-50 ${stage.borderColor} ring-2 ring-emerald-600/20`
                    : `bg-slate-950 ${stage.borderColor} ring-1 ring-emerald-500/30`
                  : isLight
                  ? "bg-white border-slate-200 hover:border-slate-300"
                  : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="relative flex items-center justify-center w-4">
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isPassed
                          ? "text-emerald-500"
                          : isLight
                          ? "text-slate-300"
                          : "text-slate-700"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mb-3">
                <div
                  className={`p-2.5 rounded-lg border ${
                    isLight
                      ? "bg-slate-100 border-slate-200 text-slate-800"
                      : "bg-slate-900 border-slate-700 text-emerald-400"
                  }`}
                >
                  {stage.icon}
                </div>

                <div className="flex items-center gap-1.5 font-mono">
                  {isPassed ? (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border ${
                      isLight
                        ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                        : "bg-emerald-950/60 text-emerald-400 border-emerald-800/60"
                    }`}>
                      <Check className="w-3 h-3" aria-hidden="true" /> PASSED
                    </span>
                  ) : isActive ? (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold border ${
                      isLight
                        ? "bg-amber-50 text-amber-800 border-amber-300"
                        : "bg-amber-950/60 text-amber-400 border-amber-800/60"
                    }`}>
                      <Activity className="w-3 h-3 animate-spin" aria-hidden="true" /> RUNNING
                    </span>
                  ) : (
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                        isLight
                          ? "bg-slate-100 text-slate-600 border-slate-200"
                          : "bg-slate-900 text-slate-400 border-slate-800"
                      }`}
                    >
                      PENDING
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h4
                  className={`text-sm font-bold mb-1 flex items-center gap-1.5 ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}
                >
                  {stage.shortName}
                </h4>
                <p
                  className={`text-[11px] font-mono leading-tight mb-3 ${
                    isLight ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {stage.tools.join(" · ")}
                </p>
              </div>

              <div
                className={`w-full h-1.5 rounded-full overflow-hidden mt-2 ${
                  isLight ? "bg-slate-200" : "bg-slate-800"
                }`}
              >
                <motion.div
                  className="h-full bg-emerald-500"
                  initial={{ width: "0%" }}
                  animate={{
                    width: isPassed ? "100%" : isActive ? "65%" : "0%",
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className={`grid lg:grid-cols-12 gap-6 rounded-xl p-5 border ${
            isLight
              ? "bg-slate-50 border-slate-200"
              : "bg-slate-950/90 border-slate-800"
          }`}
        >
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border ${
                    isLight
                      ? "bg-white text-emerald-700 border-slate-200"
                      : "bg-slate-900 text-emerald-400 border-slate-800"
                  }`}
                >
                  STAGE {currentStageObj.id} OF 4
                </span>
                <span
                  className={`text-xs font-mono ${
                    isLight ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {currentStageObj.metrics}
                </span>
              </div>

              <h4
                className={`text-xl font-bold mb-2 ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {currentStageObj.name}
              </h4>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isLight ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {currentStageObj.description}
              </p>

              <div className="space-y-2">
                <p
                  className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Automated Security Controls Active:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentStageObj.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`px-2.5 py-1 text-xs font-mono rounded border flex items-center gap-1.5 ${
                        isLight
                          ? "bg-white text-slate-800 border-slate-200"
                          : "bg-slate-900 text-slate-200 border-slate-800"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`pt-4 mt-4 border-t flex items-center justify-between text-xs font-mono flex-wrap gap-2 ${
                isLight
                  ? "border-slate-200 text-slate-600"
                  : "border-slate-800 text-slate-400"
              }`}
            >
              <span>
                Status:{" "}
                <strong className={isLight ? "text-emerald-700 font-semibold" : "text-emerald-400 font-semibold"}>
                  100% SSDLC Compliant
                </strong>
              </span>
              <span>
                Target:{" "}
                <strong className={isLight ? "text-slate-900" : "text-white"}>
                  OpenShift &amp; On-Prem
                </strong>
              </span>
            </div>
          </div>

          <div
            className={`lg:col-span-7 rounded-xl p-4 border font-mono text-xs overflow-hidden flex flex-col ${
              isLight
                ? "bg-white border-slate-200"
                : "bg-[#0b0f17] border-slate-800"
            }`}
          >
            <div
              className={`flex items-center justify-between pb-2 mb-3 border-b text-[11px] ${
                isLight
                  ? "border-slate-200 text-slate-600"
                  : "border-slate-800 text-slate-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <Terminal
                  className={`w-4 h-4 ${
                    isLight ? "text-emerald-700" : "text-emerald-400"
                  }`}
                  aria-hidden="true"
                />
                <span className="font-semibold">Jenkins Pipeline Console Log</span>
              </div>
              <span
                className={`flex items-center gap-1.5 font-semibold ${
                  isLight ? "text-emerald-700" : "text-emerald-400"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                ACTIVE
              </span>
            </div>

            <div className="space-y-1.5 overflow-y-auto max-h-48 pr-1">
              {currentStageObj.logs.map((log, i) => {
                const isSuccess =
                  log.includes("[SUCCESS]") ||
                  log.includes("[QUALITY GATE]") ||
                  log.includes("[SBOM]") ||
                  log.includes("[COSIGN]") ||
                  log.includes("[RELEASE]");
                const isCommand =
                  log.includes("git") ||
                  log.includes("checkov") ||
                  log.includes("mvn") ||
                  log.includes("snyk") ||
                  log.includes("trivy") ||
                  log.includes("oc");

                return (
                  <div
                    key={i}
                    className={`leading-relaxed ${
                      isSuccess
                        ? isLight
                          ? "text-emerald-700 font-bold"
                          : "text-emerald-400 font-semibold"
                        : isCommand
                        ? isLight
                          ? "text-slate-900 font-semibold"
                          : "text-slate-200"
                        : isLight
                        ? "text-slate-600"
                        : "text-slate-400"
                    }`}
                  >
                    <span
                      className={`select-none mr-2 ${
                        isLight ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      $
                    </span>
                    {log}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SSDLCFlowAnimation;
