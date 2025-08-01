import { Service } from "@/types";
import {
  Bot,
  Cloud,
  Lock,
  PenTool,
  Rocket,
  ShieldCheck,
  Fingerprint,
  Bug,
  FileCode,
  FileWarning,
  RotateCcw,
  Speech,
  LineChart,
  MessageCircle,
  Repeat,
  ServerCog,
  CreditCard,
  Package,
  Smartphone,
  Megaphone,
  GaugeCircle,
  Users,
  Code,
  Settings,
  Cpu,
  Activity,
  DatabaseBackup,
  Stethoscope,
  ClipboardList,
  Shield,
  ShoppingCart,
} from "lucide-react";

// Service data with translation keys instead of hardcoded text
export const getServices = (t: (key: string) => string): Service[] => [
  {
    icon: PenTool,
    title: t("uiUxDesign"),
    items: [
      { icon: Users, desc: t("intuitiveInterfaces") },
      { icon: Smartphone, desc: t("responsiveDesigns") },
      { icon: Rocket, desc: t("highFidelityPrototyping") },
      { icon: FileCode, desc: t("visualIdentityBranding") },
      { icon: LineChart, desc: t("userJourneyMapping") },
      { icon: Activity, desc: t("abTestingFeedback") },
    ],
  },
  {
    icon: Rocket,
    title: t("softwareMvp"),
    items: [
      { icon: Rocket, desc: t("rapidPrototyping") },
      { icon: Package, desc: t("marketReadyFeatures") },
      { icon: ServerCog, desc: t("scalableBackend") },
      { icon: RotateCcw, desc: t("agileIterative") },
      { icon: GaugeCircle, desc: t("costEffectiveLaunch") },
      { icon: Activity, desc: t("userTestingValidation") },
    ],
  },
  {
    icon: Lock,
    title: t("swSecurity"),
    items: [
      { icon: ShieldCheck, desc: t("endToEndEncryption") },
      { icon: Fingerprint, desc: t("secureAuthentication") },
      { icon: Bug, desc: t("vulnerabilityAssessments") },
      { icon: Shield, desc: t("dataPrivacyCompliance") },
      { icon: FileCode, desc: t("codeAuditsTesting") },
      { icon: DatabaseBackup, desc: t("disasterRecovery") },
    ],
  },
  {
    icon: Bot,
    title: t("integrateAiModel"),
    items: [
      { icon: Cpu, desc: t("customAiDeployment") },
      { icon: Speech, desc: t("nlpIntegration") },
      { icon: LineChart, desc: t("predictiveAnalytics") },
      { icon: MessageCircle, desc: t("aiChatbots") },
      { icon: Repeat, desc: t("taskAutomation") },
      { icon: Cloud, desc: t("cloudAiInference") },
    ],
  },
  {
    icon: Code,
    title: t("swDevelopment"),
    items: [
      { icon: FileCode, desc: t("customSoftware") },
      { icon: Smartphone, desc: t("crossPlatformApps") },
      { icon: Cloud, desc: t("cloudNativeArchitecture") },
      { icon: Cpu, desc: t("apiMicroservices") },
      { icon: RotateCcw, desc: t("agileDevops") },
      { icon: Activity, desc: t("automatedTesting") },
    ],
  },
  {
    icon: ShoppingCart,
    title: t("scalableEcommerce"),
    items: [
      { icon: ShoppingCart, desc: t("customStorefront") },
      { icon: CreditCard, desc: t("paymentGateway") },
      { icon: Package, desc: t("inventoryManagement") },
      { icon: Smartphone, desc: t("mobileOptimized") },
      { icon: Megaphone, desc: t("marketingSeoTools") },
      { icon: GaugeCircle, desc: t("performanceTuning") },
    ],
  },
  {
    icon: Cloud,
    title: t("cldComputing"),
    items: [
      { icon: Cloud, desc: t("awsAzureGcp") },
      { icon: ServerCog, desc: t("autoScaling") },
      { icon: Settings, desc: t("cicdPipelines") },
      { icon: Cpu, desc: t("containerization") },
      { icon: Activity, desc: t("realTimeMonitoring") },
      { icon: DatabaseBackup, desc: t("backupRecovery") },
    ],
  },
  {
    icon: Stethoscope,
    title: t("supportMaintenance"),
    items: [
      { icon: RotateCcw, desc: t("preventiveCare") },
      { icon: Bug, desc: t("bugFixing") },
      { icon: FileWarning, desc: t("adaptiveSupport") },
      { icon: GaugeCircle, desc: t("performanceMonitoring") },
      { icon: Shield, desc: t("securityPatching") },
      { icon: ClipboardList, desc: t("ongoingSupport") },
    ],
  },
];