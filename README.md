# Job Match Analyzer

A free, browser-based prototype that compares a resume with a job description and shows a transparent detected-skill match, matched skills, and skills to review.

## Live demo

**Try it here:** https://satish1615.github.io/Job_Match/

## What it does

Job Match Analyzer helps job seekers quickly compare the technical skills mentioned in their resume with the skills detected in a job description.

The user pastes:

1. resume text
2. job-description text

The app then returns:

- a **Detected skill match** percentage
- skills detected in both inputs
- skills requested by the job but not detected in the resume

The score is intentionally limited to supported technical skills. It is not an overall candidate suitability score or hiring prediction.

## How to use

1. Open the live demo.
2. Paste your resume text into **Your resume**.
3. Paste the full job description into **Job description**.
4. Click **Analyze Match**.
5. Review the detected match percentage, matched skills, and skills to review.

No account, API key, installation, or paid service is required.

## Current features

- Paste resume and job-description text directly in the browser
- Detect a practical catalog of software, cloud, DevOps, data, and AI skills
- Recognize common aliases such as:
  - AWS / Amazon Web Services
  - Kubernetes / K8s
  - PostgreSQL / Postgres
  - JavaScript / JS
  - Node.js / Node
  - Generative AI / GenAI
- Detect technologies including Python, Java, C++, C#, .NET, JavaScript, TypeScript, AWS, Azure, GCP, Docker, Kubernetes, Terraform, Jenkins, Linux, Git, GitHub Actions, FastAPI, Flask, Django, React, Node.js, PostgreSQL, MySQL, MongoDB, Redis, Kafka, Apache Spark, Snowflake, Apache Airflow, Prometheus, Grafana, OpenTelemetry, Machine Learning, Generative AI, LLMs, RAG, LangChain, LangGraph, Qdrant, TensorFlow, and PyTorch
- Calculate a transparent detected-skill match
- Show matched skills and skills to review
- Handle empty inputs safely
- Avoid showing a percentage when no supported job skills are detected
- Responsive desktop and mobile layout
- Fully client-side processing

## How the score works

The score uses only supported technical skills detected in the job description:

```text
matched detected job skills / total detected job skills × 100
```

Example:

```text
8 matched skills / 10 detected job skills × 100 = 80%
```

Because the prototype uses a defined skill catalog, technologies outside that catalog are not included in the percentage.

## Version 1 → testing → Version 2

This project was intentionally improved after testing the first working version.

### Version 1

The first working version accepted resume and job-description text, extracted supported skills, calculated a match percentage, and displayed matched and missing skills.

### What testing found

Testing exposed several practical weaknesses:

- `JS` did not match `JavaScript`
- `Node` did not match `Node.js`
- `.NET` was not recognized
- several common technologies such as Kafka, Apache Spark, Snowflake, and Apache Airflow were missing from the catalog
- a job description containing unsupported technologies could make the percentage look stronger than the full description justified

For example, a test with a resume containing only Python and a job description containing Python, Kafka, Apache Spark, Snowflake, and Apache Airflow initially appeared as a 100% match because only Python was recognized.

### Version 2 improvement

Version 2 was changed directly in response to those findings:

- added JavaScript / JS alias support
- added Node.js / Node alias support
- expanded the supported skill catalog
- changed the result heading to **Detected skill match**
- added an explicit explanation that the percentage is based only on supported technical skills

After the update, the same break-test example produced a 20% detected-skill match instead of a misleading 100%.

## Live validation

The deployed GitHub Pages version was tested with this example:

**Resume skills:** Python, FastAPI, AWS, Docker, PostgreSQL, Git, RAG, LangChain

**Job skills:** Python, FastAPI, AWS, Docker, Kubernetes, PostgreSQL, Git, Terraform, RAG, LangChain

Expected and observed result:

- **Detected skill match:** 80%
- **Matched:** Python, AWS, Docker, Git, FastAPI, PostgreSQL, RAG, LangChain
- **Skills to review:** Kubernetes, Terraform

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

## Architecture

The project is intentionally simple:

```text
Browser
  ↓
HTML interface
  ↓
Vanilla JavaScript skill extraction and comparison
  ↓
Results rendered in the page
```

There is no backend, database, external AI API, or authentication layer.

## Privacy

Resume and job-description text are processed directly in the user's browser. The prototype does not send that text to a backend service.

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

The prototype is built and hosted with free tools and services.

**Current operating cost: ₹0**

## Future improvements

Possible next steps include:

- PDF resume upload
- broader skill coverage
- skill categories such as Cloud, DevOps, AI/ML, and Databases
- deeper resume-improvement suggestions
- optional local or free AI-assisted analysis
