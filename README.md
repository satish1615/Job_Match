# Job Match Analyzer

A browser-based prototype that compares a resume with a job description and prepares a clear skill-match analysis.

## Mission idea

Job Match Analyzer helps job seekers see how well their resume fits a job.  
Users paste their resume and a job description, and the tool shows their job-match analysis.  
The first version will focus on match score, matching skills, and missing skills.

## Current status

**Sprint 0: Project foundation**

The repository now contains the base browser interface, responsive styling, input validation, and the structure needed for Version 1.

The actual matching algorithm will be added in Sprint 1.

## Planned Version 1 scope

- Paste resume text
- Paste job-description text
- Detect relevant technical skills
- Calculate a transparent match score
- Show matched skills
- Show missing skills
- Handle empty input safely

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages for free hosting

## Privacy approach

The prototype is designed to analyze text directly in the user's browser. No resume data needs to be sent to a backend service.

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
