const resumeText = document.getElementById('resumeText');
const jobText = document.getElementById('jobText');
const analyzeButton = document.getElementById('analyzeButton');
const formMessage = document.getElementById('formMessage');
const resultsSection = document.getElementById('resultsSection');
const resultsMessage = document.getElementById('resultsMessage');

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

analyzeButton.addEventListener('click', () => {
  clearMessages();

  const validationError = validateInputs();
  if (validationError) {
    formMessage.textContent = validationError;
    return;
  }

  resultsMessage.textContent = 'The foundation is ready. Skill matching and the match score will be added in Sprint 1.';
  resultsSection.hidden = false;
});

resumeText.addEventListener('input', clearMessages);
jobText.addEventListener('input', clearMessages);
