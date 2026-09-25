# Job Match Analyzer

A browser-based prototype that compares a resume with a job description and prepares a clear skill-match analysis.

## Mission idea

Job Match Analyzer helps job seekers see how well their resume fits a job.  
Users paste their resume and a job description, and the tool shows their job-match analysis.  
Version 1 focuses on match score, matching skills, and skills requested by the job but not detected in the resume.

## Current status

**Sprint 1: Version 1 matching engine**

The prototype now detects supported technical skills in both inputs, calculates a transparent match score, and separates matched skills from skills to review.

The project remains fully browser-based. No resume or job-description text is sent to a backend service.

## Version 1 features

- Paste resume text
- Paste job-description text
- Detect a practical catalog of common technical skills
- Recognize a limited set of common aliases such as AWS / Amazon Web Services, Kubernetes / K8s, and PostgreSQL / Postgres
- Calculate a transparent match score
- Show matched skills
- Show skills requested by the job but not detected in the resume
- Handle empty input safely
- Avoid showing a misleading score when no supported job skills are detected

## How the score works

The score is based only on supported skills detected in the job description:

```text
matched detected job skills / total detected job skills × 100
```

Example: if the job description contains four supported skills and three are also detected in the resume, the score is 75%.

This is a simple prototype score. It is not a hiring prediction and does not measure overall candidate quality.

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages for free hosting

## Privacy approach

The prototype analyzes text directly in the user's browser. No resume data needs to be sent to a backend service.

## Project structure

```text
Job_Match/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── .gitignore
└── README.md
```

## Cost

The project is being built with free tools and services, with a target operating cost of **₹0**.
