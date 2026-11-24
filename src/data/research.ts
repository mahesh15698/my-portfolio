
export type WorkType =
  | 'Case Study'
  | 'Analysis Paper'
  | 'Presentation'
  | 'Infographic'

export type AcademicWork = {
  id: string
  title: string
  type: WorkType
  date: string
  description: string
  topics: string[]
  insights: string[]
  document: string
  documentReady: boolean
}

export type Subject = {
  id: string
  code: string
  title: string
  university: string
  term: string
  description: string
  topics: string[]
  works: AcademicWork[]
}

export const subjects: Subject[] = [
  {
    id: 'its834',

    code: 'ITS 834',

    title: 'Emerging Threats & Countermeasures',

    university: 'University of the Cumberlands',

    term: 'Fall 2026',

    description:
      'Exploring emerging cybersecurity threats, real-world security incidents, AI-driven attacks, risk assessment, and technical and organizational countermeasures.',

    topics: [
      'AI Security',
      'Cybersecurity',
      'IoT Security',
      'Cyber-Physical Systems',
      'Cloud Security',
      'Risk Assessment',
    ],

    works: [
      {
        id: 'multicloud-security',

        title:
          'Cloud Security in Multicloud Environments: ML-Driven Threats, Data Integrity, and Countermeasures',

        type: 'Analysis Paper',

        date: '2026-11-22',

        description:
          'An analysis of machine learning-enabled threats, data integrity risks, and security countermeasures across multicloud environments.',

        topics: [
          'Multicloud',
          'Machine Learning',
          'Data Integrity',
          'Zero Trust',
        ],

        insights: [
          'Evaluates ML-assisted reconnaissance, phishing, and adaptive malware.',
          'Examines SQL injection, ransomware, and data poisoning.',
          'Prioritizes Zero Trust identity controls and unified cloud security governance.',
          'Analyzes data integrity verification and recovery strategies.',
        ],

        document: 'academic/its834/multicloud-security.pdf',

        documentReady: true,
      },

      {
        id: 'mitigation-failures',

        title:
          'Cybersecurity Case Mitigation Failures: Lessons From Deepfake Fraud and Cloud Security Breaches',

        type: 'Presentation',

        date: '2026-11-15',

        description:
          'An executive security briefing examining mitigation failures in the Arup deepfake fraud and Capital One cloud data breach.',

        topics: [
          'Deepfake Fraud',
          'Cloud Security',
          'Risk Management',
          'Countermeasures',
        ],

        insights: [
          'Compares human, procedural, and technical security failures.',
          'Examines verified callbacks and dual payment authorization.',
          'Evaluates cloud IAM and configuration assurance.',
          'Proposes a risk-based 90-day action plan.',
        ],

        document: 'academic/its834/mitigation-failures.pdf',

        documentReady: true,
      },

      {
        id: 'risk-based-countermeasures',

        title:
          'Risk-Based Countermeasures for AI-Driven and Cloud Security Threats in Financial Services',

        type: 'Analysis Paper',

        date: '2026-11-15',

        description:
          'A risk-based assessment of emerging AI and cloud security threats within a hypothetical financial services organization.',

        topics: [
          'Risk Assessment',
          'AI Phishing',
          'Deepfake Fraud',
          'Cloud APIs',
        ],

        insights: [
          'Evaluates four emerging cybersecurity threats.',
          'Applies a likelihood-impact risk assessment framework.',
          'Prioritizes cloud vulnerabilities and AI-generated phishing.',
          'Recommends technical and organizational safeguards with measurable evaluation criteria.',
        ],

        document:
          'academic/its834/risk-based-countermeasures.pdf',

        documentReady: true,
      },

      {
        id: 'cps-vulnerabilities',

        title:
          'Cyber-Physical System Vulnerabilities: Remote Access, Sensor Manipulation, and Supply-Chain Compromise',

        type: 'Analysis Paper',

        date: '2026-11-08',

        description:
          'An evaluation of cybersecurity vulnerabilities affecting interconnected digital and physical systems, including medical, transportation, and industrial applications.',

        topics: [
          'Cyber-Physical Systems',
          'Sensor Security',
          'Hardware Security',
          'Adversarial AI',
        ],

        insights: [
          'Examines insecure remote interfaces and runtime control.',
          'Analyzes manipulated sensor inputs and AI perception.',
          'Evaluates hardware and firmware supply-chain risks.',
          'Discusses authentication, independent verification, and safety-oriented fallback mechanisms.',
        ],

        document: 'academic/its834/cps-vulnerabilities.pdf',

        documentReady: true,
      },

      {
        id: 'mirai-botnet',

        title:
          'The 2016 Mirai Botnet Attack on Dyn: An IoT Security Analysis',

        type: 'Case Study',

        date: '2026-11-08',

        description:
          'A case study examining how compromised IoT devices were used in coordinated DDoS attacks targeting DNS infrastructure.',

        topics: [
          'IoT Security',
          'Botnets',
          'DDoS',
          'Network Security',
        ],

        insights: [
          'Examines the Mirai botnet attack architecture.',
          'Identifies insecure default credentials as a major vulnerability.',
          'Analyzes the impact on confidentiality, integrity, and availability.',
          'Recommends secure device configuration, network monitoring, and resilient infrastructure.',
        ],

        document: 'academic/its834/mirai-botnet.pdf',

        documentReady: true,
      },

      {
        id: 'padre-nino',

        title:
          'AI-Enabled Religious Impersonation in the Philippines: An Analysis of the Padre Niño Scam',

        type: 'Case Study',

        date: '2026-10-31',

        description:
          'An analysis of AI-assisted digital impersonation, authority-based social engineering, and the exploitation of trust through manipulated media.',

        topics: [
          'Generative AI',
          'Social Engineering',
          'Digital Impersonation',
          'Cybercrime',
        ],

        insights: [
          'Examines the reported Padre Niño impersonation incident.',
          'Analyzes authority-based psychological manipulation.',
          'Distinguishes documented evidence from unverified technical assumptions.',
          'Discusses identity verification and cybersecurity awareness.',
        ],

        document: 'academic/its834/padre-nino.pdf',

        documentReady: true,
      },

      {
        id: 'ai-threat-evolution',

        title:
          'AI Threat Evolution: From Traditional Deception to AI-Powered Threats',

        type: 'Infographic',

        date: '',

        description:
          'A visual comparison of the historical evolution of voice cloning, vishing, and AI-enabled terrorism risks, including explicitly labeled future projections.',

        topics: [
          'Voice Cloning',
          'Vishing',
          'AI Threats',
          'Threat Evolution',
        ],

        insights: [
          'Visualizes the evolution of voice-based deception.',
          'Examines emerging synthetic media risks.',
          'Compares human-led deception with AI-assisted amplification.',
          'Separates historical developments from projected future risks.',
        ],

        document: 'academic/its834/ai-threat-evolution.pdf',

        documentReady: true,
      },
    ],
  },
]
