import { 
  Shield, 
  Lock, 
  Activity, 
  FileCheck, 
  Search, 
  Key, 
  Zap, 
  Gavel, 
  FileText, 
  Cpu, 
  Bug, 
  TestTube, 
  Layers, 
  Code, 
  CheckCircle, 
  Network
} from "lucide-react";

export const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "Security & Threat Protection",
    icon: Shield,
    items: [
      "Prompt Injection Detection & Prevention",
      "Data Exfiltration Controls",
      "Jailbreak Resistance Mechanisms",
      "Adversarial Input Detection",
      "Output Filtering (to prevent harmful responses)"
    ]
  },
  {
    id: 2,
    title: "Privacy & Data Governance",
    icon: Lock,
    items: [
      "PII Detection & Masking",
      "Data Minimization & Purpose Limitation",
      "Secure Data Retention Policies",
      "Confidential Data Classification"
    ]
  },
  {
    id: 3,
    title: "Model Governance & Risk Management",
    icon: Activity,
    items: [
      "Model Versioning & Lineage Tracking",
      "Risk Scoring for AI Outputs",
      "Explainability (XAI) Layer",
      "AI Risk Register Integration"
    ]
  },
  {
    id: 4,
    title: "Compliance & Regulatory Mapping",
    icon: FileCheck,
    items: [
      "ISO/IEC 42001 AI Management Controls",
      "GDPR / DPDP Act (India) Compliance",
      "EU AI Act Risk Categorization",
      "NIST AI RMF Alignment"
    ]
  },
  {
    id: 5,
    title: "Auditability & Logging",
    icon: Search,
    items: [
      "Full Prompt-Response Logging",
      "Immutable Audit Trails",
      "Forensic Readiness",
      "Chain-of-Custody Tracking"
    ]
  },
  {
    id: 6,
    title: "Access Control & Identity Security",
    icon: Key,
    items: [
      "RBAC / ABAC",
      "Secure API Gateway Integration",
      "Tokenization & Key Management"
    ]
  },
  {
    id: 7,
    title: "Operational Resilience",
    icon: Zap,
    items: [
      "Drift Detection",
      "Model Monitoring & Alerts",
      "Fail-safe / Safe fallback responses"
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Flagship",
  "Law Enforcement",
  "Governance",
  "Productivity",
  "Sovereign Platform",
  "Security Testing",
  "AI Evaluation",
  "AI Infrastructure",
  "DevSecOps",
  "Quality",
  "Legal Tech"
];

export const PRODUCTS = [
  {
    id: "ffai",
    name: "FFAI",
    fullName: "Federated Firewall for AI",
    tagline: "AI-native firewall protecting LLMs from prompt injection, data leakage, and adversarial attacks in real-time.",
    icon: Shield,
    category: "Flagship",
    status: "Live",
    features: ["Prompt Injection Defense", "Data Leakage Prevention", "Real-time Monitoring"],
    compliance: ["NIST 800-207", "Zero Trust Architecture"]
  },
  {
    id: "cyber-crime",
    name: "CyberCrime Platform",
    fullName: "Digital Forensics & Investigation Suite",
    tagline: "Comprehensive forensic tool for law enforcement and enterprises to investigate, analyze, and document cybercrimes.",
    icon: Search,
    category: "Law Enforcement",
    status: "Live",
    features: ["Evidence Collection", "Chain of Custody", "Forensic Analysis"],
    compliance: ["ISO 27037", "Indian IT Act"]
  },
  {
    id: "gvt360",
    name: "GVT360",
    fullName: "Governance Validation Tool",
    tagline: "End-to-end governance validation ensuring compliance with ISO, NIST, DPDP, and global regulatory frameworks.",
    icon: Gavel,
    category: "Governance",
    status: "Live",
    features: ["ISO 27001 Compliance", "NIST Framework", "DPDP Act Ready"],
    compliance: ["ISO 42001", "SOC2"]
  },
  {
    id: "docdesign",
    name: "DocDesign",
    fullName: "Document Design & Automation",
    tagline: "Intelligent document generation and automation platform with AI-powered templates and workflow integration.",
    icon: FileText,
    category: "Productivity",
    status: "Live",
    features: ["AI Templates", "Workflow Automation", "Multi-format Export"],
    compliance: ["GDPR", "ISO 27001"]
  },
  {
    id: "mii-bharat-os",
    name: "MII - Bharat OS",
    fullName: "Made in India AI Operating System",
    tagline: "Sovereign Linux-based operating system with integrated AI capabilities, designed for government and defense sectors.",
    icon: Cpu,
    category: "Sovereign Platform",
    status: "Live",
    features: ["Indigenous Development", "AI Integration", "Defense-grade Security"],
    compliance: ["Common Criteria", "STQC"]
  },
  {
    id: "redlabs",
    name: "RedLabs",
    fullName: "AI-Driven Red Teaming Platform",
    tagline: "Automated adversarial testing platform simulating sophisticated cyber attacks to identify vulnerabilities.",
    icon: Bug,
    category: "Security Testing",
    status: "Live",
    features: ["Automated Penetration", "AI Attack Simulation", "Vulnerability Mapping"],
    compliance: ["MITRE ATT&CK", "OWASP Top 10"]
  },
  {
    id: "atl",
    name: "ATL",
    fullName: "AI Testing Lab / Evaluation Tool",
    tagline: "Comprehensive AI model evaluation suite for testing bias, fairness, robustness, and performance metrics.",
    icon: TestTube,
    category: "AI Evaluation",
    status: "Live",
    features: ["Bias Detection", "Fairness Analysis", "Performance Benchmarks"],
    compliance: ["ISO 42001", "OECD AI Principles"]
  },
  {
    id: "slm",
    name: "SLM",
    fullName: "Secure Language Model",
    tagline: "Privacy-first language model with built-in security controls, designed for sensitive enterprise applications.",
    icon: Layers,
    category: "AI Infrastructure",
    status: "Development",
    features: ["Privacy by Design", "On-premise Deployment", "Data Sovereignty"],
    compliance: ["Confidential Computing", "AI SBOM"]
  },
  {
    id: "source-code",
    name: "Source Code Review",
    fullName: "AI-Powered Code Security Analysis",
    tagline: "Static and dynamic code analysis tool detecting vulnerabilities, backdoors, and security anti-patterns.",
    icon: Code,
    category: "DevSecOps",
    status: "Live",
    features: ["SAST/DAST Analysis", "Backdoor Detection", "Dependency Scanning"],
    compliance: ["OWASP Top 10", "Secure SDLC"]
  },
  {
    id: "qa-qc",
    name: "QA & QC Tools",
    fullName: "Quality Assurance & Control Suite",
    tagline: "Automated testing framework ensuring software quality with AI-enhanced test generation and execution.",
    icon: CheckCircle,
    category: "Quality",
    status: "Live",
    features: ["Auto Test Generation", "Regression Testing", "Performance Analysis"],
    compliance: ["ISO 9001", "ISO 25010"]
  },
  {
    id: "pravion-ai",
    name: "Pravion-AI",
    fullName: "Legal Tech Intelligence Platform",
    tagline: "AI-powered legal research and document analysis tool for law firms, courts, and legal departments.",
    icon: Gavel,
    category: "Legal Tech",
    status: "Live",
    features: ["Case Law Research", "Contract Analysis", "Legal Document AI"],
    compliance: ["Legal Privilege", "Data Privacy"]
  }
];

export const SERVICES = [
  {
    title: "AI Security",
    desc: "Protect your LLMs and AI systems from prompt injection, data exfiltration, model poisoning, and adversarial attacks with enterprise-grade defenses.",
    features: ["Prompt Injection Defense", "Data Leakage Prevention", "Model Security Audits", "Real-time Threat Detection"],
    icon: Shield
  },
  {
    title: "AI Governance",
    desc: "Ensure compliance with global AI regulations including EU AI Act, ISO standards, NIST frameworks, and India's DPDP Act.",
    features: ["Regulatory Compliance", "Risk Assessment", "Policy Automation", "Audit Trail Management"],
    icon: Activity
  },
  {
    title: "Digital Forensics",
    desc: "Comprehensive cybercrime investigation capabilities for law enforcement and enterprise security teams with court-admissible evidence collection.",
    features: ["Evidence Acquisition", "Chain of Custody", "Malware Analysis", "Incident Reconstruction"],
    icon: Search
  },
  {
    title: "Red Teaming",
    desc: "AI-powered adversarial testing simulating sophisticated attacks to identify vulnerabilities before malicious actors exploit them.",
    features: ["Penetration Testing", "Social Engineering", "Physical Security", "Purple Team Exercises"],
    icon: Bug
  },
  {
    title: "Legal Tech",
    desc: "AI-assisted legal research, contract analysis, and compliance verification for law firms, courts, and corporate legal departments.",
    features: ["Case Law Research", "Contract Intelligence", "Legal Document AI", "eDiscovery Solutions"],
    icon: Gavel
  },
  {
    title: "Sovereign Platforms",
    desc: "Indigenous technology solutions for government and defense sectors ensuring data sovereignty and national security compliance.",
    features: ["On-premise Deployment", "Air-gapped Systems", "Defense-grade Security", "Indigenous Development"],
    icon: Cpu
  }
];

export const WHY_FEATURES = [
  { title: "AI-Native Architecture", desc: "Built from the ground up for AI workloads with specialized security controls and optimizations." },
  { title: "Zero Trust Security", desc: "Every request is verified, every access is authenticated, every action is logged." },
  { title: "Real-time Protection", desc: "Millisecond threat detection and response powered by advanced machine learning models." },
  { title: "Global Compliance", desc: "Meet regulatory requirements across jurisdictions including EU AI Act, GDPR, and DPDP." },
  { title: "Defense-Grade Security", desc: "Security standards that meet the requirements of government and defense organizations." },
  { title: "Complete Visibility", desc: "Full observability into AI operations with detailed audit trails and analytics." },
  { title: "Hybrid Deployment", desc: "Deploy on-premises, in the cloud, or in hybrid configurations based on your needs." },
  { title: "Data Sovereignty", desc: "Keep sensitive data within your jurisdiction with local processing capabilities." }
];

export const TESTIMONIALS = [
  {
    quote: "DefenAI's FFAI has transformed how we protect our AI infrastructure. The real-time threat detection is unmatched.",
    author: "Chief Security Officer",
    company: "Fortune 100 Tech Company"
  },
  {
    quote: "The CyberCrime Platform has significantly improved our investigation capabilities. Evidence collection is now seamless.",
    author: "Director of Cyber Cell",
    company: "State Police Department"
  },
  {
    quote: "GVT360 made our compliance journey effortless. We achieved ISO 27001 certification in record time.",
    author: "Head of Compliance",
    company: "Leading Financial Institution"
  }
];

export const TRUSTED_BY = [
  { name: "Government Agencies", desc: "Central and state government departments" },
  { name: "Defense Organizations", desc: "Armed forces and security agencies" },
  { name: "Fortune 500", desc: "Leading global enterprises" },
  { name: "Law Enforcement", desc: "Police and investigation agencies" },
  { name: "Financial Institutions", desc: "Banks and fintech companies" },
  { name: "Tech Giants", desc: "Technology and software companies" }
];

