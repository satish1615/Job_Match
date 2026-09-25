const SKILL_CATALOG = [
  { name: 'Python', patterns: [/\bpython\b/i] },
  { name: 'Java', patterns: [/\bjava\b/i] },
  { name: 'C++', patterns: [/(^|[^a-z0-9])c\+\+(?=$|[^a-z0-9])/i] },
  { name: 'C#', patterns: [/(^|[^a-z0-9])c#(?=$|[^a-z0-9])/i] },
  { name: '.NET', patterns: [/(^|[^a-z0-9])\.net(?=$|[^a-z0-9])/i, /\bdotnet\b/i] },
  { name: 'JavaScript', patterns: [/\bjavascript\b/i, /(^|[^a-z0-9.])js(?=$|[^a-z0-9.])/i] },
  { name: 'TypeScript', patterns: [/\btypescript\b/i] },
  { name: 'HTML', patterns: [/\bhtml5?\b/i] },
  { name: 'CSS', patterns: [/\bcss3?\b/i] },
  { name: 'SQL', patterns: [/\bsql\b/i] },
  { name: 'AWS', patterns: [/\baws\b/i, /\bamazon web services\b/i] },
  { name: 'Azure', patterns: [/\bazure\b/i, /\bmicrosoft azure\b/i] },
  { name: 'GCP', patterns: [/\bgcp\b/i, /\bgoogle cloud(?: platform)?\b/i] },
  { name: 'EC2', patterns: [/\bec2\b/i, /\bamazon ec2\b/i] },
  { name: 'S3', patterns: [/(^|[^a-z0-9])s3(?=$|[^a-z0-9])/i, /\bamazon s3\b/i] },
  { name: 'AWS Lambda', patterns: [/\baws lambda\b/i, /\bamazon lambda\b/i, /\blambda functions?\b/i] },
  { name: 'CloudWatch', patterns: [/\bcloudwatch\b/i, /\baws cloudwatch\b/i] },
  { name: 'Docker', patterns: [/\bdocker\b/i] },
  { name: 'Kubernetes', patterns: [/\bkubernetes\b/i, /\bk8s\b/i] },
  { name: 'Terraform', patterns: [/\bterraform\b/i] },
  { name: 'Jenkins', patterns: [/\bjenkins\b/i] },
  { name: 'Linux', patterns: [/\blinux\b/i] },
  { name: 'CI/CD', patterns: [/(^|[^a-z0-9])ci\s*\/\s*cd(?=$|[^a-z0-9])/i, /\bcontinuous integration\b/i, /\bcontinuous (?:delivery|deployment)\b/i] },
  { name: 'Git', patterns: [/(^|[^a-z0-9])git(?=$|[^a-z0-9])/i] },
  { name: 'GitHub Actions', patterns: [/\bgithub actions?\b/i] },
  { name: 'REST API', patterns: [/\brest(?:ful)?\s+apis?\b/i] },
  { name: 'FastAPI', patterns: [/\bfastapi\b/i] },
  { name: 'Flask', patterns: [/\bflask\b/i] },
  { name: 'Django', patterns: [/\bdjango\b/i] },
  { name: 'React', patterns: [/\breact(?:\.js|js)?\b/i] },
  { name: 'Node.js', patterns: [/\bnode(?:\.js|js)?\b/i] },
  { name: 'MySQL', patterns: [/\bmysql\b/i] },
  { name: 'PostgreSQL', patterns: [/\bpostgresql\b/i, /\bpostgres\b/i] },
  { name: 'MongoDB', patterns: [/\bmongodb\b/i] },
  { name: 'Redis', patterns: [/\bredis\b/i] },
  { name: 'Kafka', patterns: [/\bkafka\b/i, /\bapache kafka\b/i] },
  { name: 'Apache Spark', patterns: [/\bapache spark\b/i, /\bpyspark\b/i] },
  { name: 'Snowflake', patterns: [/\bsnowflake\b/i] },
  { name: 'Apache Airflow', patterns: [/\bapache airflow\b/i, /\bairflow\b/i] },
  { name: 'Prometheus', patterns: [/\bprometheus\b/i] },
  { name: 'Grafana', patterns: [/\bgrafana\b/i] },
  { name: 'OpenTelemetry', patterns: [/\bopentelemetry\b/i, /\botel\b/i] },
  { name: 'Machine Learning', patterns: [/\bmachine[- ]learning\b/i, /\bml\b/i] },
  { name: 'Deep Learning', patterns: [/\bdeep[- ]learning\b/i] },
  { name: 'Generative AI', patterns: [/\bgenerative ai\b/i, /\bgenai\b/i, /\bgen ai\b/i] },
  { name: 'LLM', patterns: [/\bllms?\b/i, /\blarge language models?\b/i] },
  { name: 'RAG', patterns: [/\brag\b/i, /\bretrieval[- ]augmented generation\b/i] },
  { name: 'LangChain', patterns: [/\blangchain\b/i] },
  { name: 'LangGraph', patterns: [/\blanggraph\b/i] },
  { name: 'Qdrant', patterns: [/\bqdrant\b/i] },
  { name: 'TensorFlow', patterns: [/\btensorflow\b/i] },
  { name: 'PyTorch', patterns: [/\bpytorch\b/i] },
];

const resumeText = document.getElementById('resumeText');
const jobText = document.getElementById('jobText');
const analyzeButton = document.getElementById('analyzeButton');
const formMessage = document.getElementById('formMessage');
const resultsSection = document.getElementById('resultsSection');
const scorePanel = document.getElementById('scorePanel');
const matchScore = document.getElementById('matchScore');
const matchSummary = document.getElementById('matchSummary');
const resultsMessage = document.getElementById('resultsMessage');
const matchedSkillsList = document.getElementById('matchedSkillsList');
const missingSkillsList = document.getElementById('missingSkillsList');
const matchedSkillsSection = document.getElementById('matchedSkillsSection');
const missingSkillsSection = document.getElementById('missingSkillsSection');

function extractSkills(text) {
  if (typeof text !== 'string' || !text.trim()) {
    return [];
  }

  return SKILL_CATALOG
    .filter((skill) => skill.patterns.some((pattern) => pattern.test(text)))
    .map((skill) => skill.name);
}

function analyzeMatch(resume, job) {
  const resumeSkills = extractSkills(resume);
  const jobSkills = extractSkills(job);
  const resumeSkillSet = new Set(resumeSkills);
  const matchedSkills = jobSkills.filter((skill) => resumeSkillSet.has(skill));
  const missingSkills = jobSkills.filter((skill) => !resumeSkillSet.has(skill));

  return {
    resumeSkills,
    jobSkills,
    matchedSkills,
    missingSkills,
    score: jobSkills.length > 0
      ? Math.round((matchedSkills.length / jobSkills.length) * 100)
      : null,
  };
}

function clearMessages() {
  formMessage.textContent = '';
  resultsSection.hidden = true;
}

function validateInputs() {
  const resume = resumeText.value.trim();
  const job = jobText.value.trim();

  if (!resume && !job) {
    return 'Paste your resume and a job description before analyzing.';
  }

  if (!resume) {
    return 'Paste your resume before analyzing.';
  }

  if (!job) {
    return 'Paste a job description before analyzing.';
  }

  return '';
}

function renderSkillList(listElement, skills, emptyMessage) {
  listElement.replaceChildren();

  if (skills.length === 0) {
    const item = document.createElement('li');
    item.className = 'empty-skill-message';
    item.textContent = emptyMessage;
    listElement.appendChild(item);
    return;
  }

  skills.forEach((skill) => {
    const item = document.createElement('li');
    item.className = 'skill-chip';
    item.textContent = skill;
    listElement.appendChild(item);
  });
}

function renderAnalysis(result) {
  resultsSection.hidden = false;

  if (result.score === null) {
    scorePanel.hidden = true;
    matchedSkillsSection.hidden = true;
    missingSkillsSection.hidden = true;
    resultsMessage.hidden = false;
    resultsMessage.textContent = "We couldn't detect enough supported skills in this job description to calculate a detected skill match.";
    return;
  }

  scorePanel.hidden = false;
  matchedSkillsSection.hidden = false;
  missingSkillsSection.hidden = false;
  resultsMessage.hidden = true;

  matchScore.textContent = `${result.score}%`;
  matchSummary.textContent = `${result.matchedSkills.length} of ${result.jobSkills.length} detected job skills matched your resume.`;

  renderSkillList(
    matchedSkillsList,
    result.matchedSkills,
    'No detected job skills matched your resume.'
  );

  renderSkillList(
    missingSkillsList,
    result.missingSkills,
    'All detected job skills were found in your resume.'
  );
}

analyzeButton.addEventListener('click', () => {
  clearMessages();

  const validationError = validateInputs();
  if (validationError) {
    formMessage.textContent = validationError;
    return;
  }

  const result = analyzeMatch(resumeText.value, jobText.value);
  renderAnalysis(result);
});

resumeText.addEventListener('input', clearMessages);
jobText.addEventListener('input', clearMessages);
