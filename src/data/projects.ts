
export type Project = {
  id: string
  title: string
  type: 'Enterprise' | 'Independent Project'
  categories: string[]
  description: string
  technologies: string[]
  highlight: string
  problem: string
  solution: string
  architecture: string[]
  implementation: string[]
  evaluation: string[]
  results: {
    value: string
    label: string
  }[]
}

export const projects: Project[] = [
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI Knowledge Assistant',
    type: 'Enterprise',

    categories: ['GenAI', 'RAG'],

    description:
      'Secure enterprise knowledge retrieval and intelligent document assistance supporting research, document review, and service operations.',

    technologies: [
      'Azure AI Foundry',
      'Azure OpenAI',
      'Azure AI Search',
      'LangGraph',
      'FastAPI',
    ],

    highlight: '120K+ enterprise documents indexed',

    problem:
      'Enterprise users needed a reliable way to retrieve information across large, distributed document collections while maintaining security, answer quality, and source traceability.',

    solution:
      'An enterprise RAG platform combining hybrid retrieval, semantic ranking, metadata filtering, reranking, grounded generation, and source citations.',

    architecture: [
      'Enterprise Data Sources',
      'Document Ingestion',
      'Azure AI Search',
      'Hybrid Retrieval & Reranking',
      'Azure OpenAI',
      'Grounded Response & Citations',
    ],

    implementation: [
      'Indexed documents from SharePoint, Blob Storage, SQL, and internal sources.',
      'Implemented hybrid retrieval and semantic ranking.',
      'Applied document-level access permissions.',
      'Integrated AI services through FastAPI.',
      'Established production monitoring and tracing.',
    ],

    evaluation: [
      'Human-reviewed answer correctness.',
      'Groundedness and citation quality.',
      'Retrieval relevance and safety.',
      'Prompt injection and data leakage regression testing.',
    ],

    results: [
      { value: '120K+', label: 'Documents indexed' },
      { value: '1,200+', label: 'Users supported' },
      { value: '2,500+', label: 'Daily queries' },
      { value: '~89%', label: 'Evaluated correctness' },
      { value: '18 to <6 min', label: 'Research time' },
    ],
  },

  {
    id: 'multi-agent-ai',
    title: 'Multi-Agent AI Platform',
    type: 'Enterprise',

    categories: ['GenAI', 'Agentic AI'],

    description:
      'Production AI agents coordinating knowledge retrieval, document comparison, validation, calculations, API execution, and human-review workflows.',

    technologies: [
      'LangGraph',
      'LangChain',
      'DeepAgents',
      'MCP',
      'FastAPI',
      'Azure OpenAI',
    ],

    highlight: '8 production AI agents',

    problem:
      'Complex enterprise workflows required coordination across multiple tools, information sources, and business processes with appropriate validation and escalation.',

    solution:
      'A stateful agent orchestration platform using structured tool execution, workflow routing, retries, validation, and human-review checkpoints.',

    architecture: [
      'User Request',
      'Workflow Routing',
      'Agent Orchestration',
      'Enterprise Tools & MCP',
      'Validation & Human Review',
      'Final Response',
    ],

    implementation: [
      'Developed eight production AI agents.',
      'Managed shared workflow state using LangGraph.',
      'Integrated structured tool calls and API execution.',
      'Implemented standardized MCP tool interfaces.',
      'Added retries, validation, and escalation checkpoints.',
    ],

    evaluation: [
      'Workflow execution quality.',
      'Tool execution correctness.',
      'Response safety and groundedness.',
      'Operational latency and reliability.',
    ],

    results: [
      { value: '8', label: 'Production agents' },
      { value: '14', label: 'Business tools' },
      { value: '25 to 8 min', label: 'Triage time' },
    ],
  },

  {
    id: 'adshield-ai',
    title: 'ADShield AI',
    type: 'Independent Project',

    categories: ['GenAI', 'RAG', 'Agentic AI'],

    description:
      'An AI compliance auditing platform for influencer and YouTube advertising against FTC, YouTube, and brand policies.',

    technologies: [
      'Azure OpenAI',
      'LangGraph',
      'Azure AI Search',
      'FastAPI',
      'LangSmith',
      'RAG',
    ],

    highlight: 'End-to-end AI compliance workflows',

    problem:
      'Advertising compliance reviews require evaluating content against multiple policy sources while maintaining explainable and auditable decisions.',

    solution:
      'A policy-grounded AI auditing system integrating retrieval, content analysis, structured compliance reporting, guardrails, and human review.',

    architecture: [
      'Policy Documents & Media',
      'Document Ingestion',
      'Azure AI Search',
      'LangGraph Compliance Workflow',
      'Validation & Human Review',
      'Compliance Report',
    ],

    implementation: [
      'Implemented policy document ingestion and semantic retrieval.',
      'Integrated OCR and video transcript processing.',
      'Developed compliance auditing workflows using LangGraph.',
      'Implemented prompt injection and content safety guardrails.',
      'Generated structured compliance reports with citations.',
      'Integrated tracing and application monitoring.',
    ],

    evaluation: [
      'Policy retrieval relevance.',
      'Grounded compliance decisions.',
      'Citation accuracy.',
      'Structured output validation.',
      'Safety and human-review escalation.',
    ],

    results: [
      { value: 'RAG', label: 'Policy-grounded auditing' },
      { value: 'HITL', label: 'Human-in-the-loop review' },
      { value: 'Structured', label: 'Compliance reporting' },
    ],
  },

  {
    id: 'legal-eval',
    title: 'Legal-eval',
    type: 'Independent Project',

    categories: ['LLM Evaluation'],

    description:
      'A reproducible evaluation harness for comparing language models on legal clause extraction, output quality, and reliability.',

    technologies: [
      'Python',
      'NLP',
      'OpenAI',
      'Anthropic',
      'AWS Bedrock',
      'LLM-as-Judge',
    ],

    highlight: '150 legal clause evaluation examples',

    problem:
      'Language models may extract legal clauses inconsistently or omit legally operative conditions, requiring systematic evaluation beyond basic output similarity.',

    solution:
      'A reproducible evaluation framework combining structured extraction, automated validation, statistical analysis, and LLM-as-judge assessment.',

    architecture: [
      'Legal Evaluation Dataset',
      'Reproducible Preprocessing',
      'Model Inference',
      'Structured Output Validation',
      'Metric Calculation',
      'Evaluation Report',
    ],

    implementation: [
      'Compared models from OpenAI, Anthropic, and AWS Bedrock.',
      'Evaluated 150 legal clause-extraction examples.',
      'Implemented reproducible preprocessing and automated validation.',
      'Used pinned model versions and dataset integrity checks.',
      'Analyzed systematic extraction and truncation failures.',
    ],

    evaluation: [
      'Presence F1 score.',
      'Span Jaccard similarity.',
      'Bootstrap confidence intervals.',
      'LLM-as-judge agreement using Cohen’s kappa.',
      'Structured output parse errors.',
    ],

    results: [
      { value: '150', label: 'Evaluation examples' },
      { value: '0.88–0.90', label: 'Presence F1' },
      { value: '0.67–0.70', label: 'Span Jaccard' },
      { value: '0.754', label: 'Cohen’s kappa' },
      { value: '0%', label: 'Parse errors' },
    ],
  },
]
