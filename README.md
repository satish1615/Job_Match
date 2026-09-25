# Job Match Analyzer

A browser-based prototype that compares a resume with a job description and prepares a clear skill-match analysis.

## Mission idea

Job Match Analyzer helps job seekers see how well their resume fits a job.  
Users paste their resume and a job description, and the tool shows their job-match analysis.  
The prototype focuses on detected skill match, matched skills, and skills requested by the job but not detected in the resume.

## Current status

**Sprint 3: Version 2 improvements after testing Version 1**

Version 1 was tested against normal, edge-case, alias, and deliberately difficult inputs. Testing exposed three practical weaknesses:

- `JS` did not match `JavaScript`
- `Node` did not match `Node.js`
- several common technologies were not in the supported catalog, which could make a score look stronger than the full job description justified

Version 2 addresses those findings by expanding alias recognition, adding more common skills, and making the score wording more explicit.

The project remains fully browser-based. No resume or job-description text is sent to a backend service.

## Version 2 features

- Paste resume text
- Paste job-description text
- Detect a broader catalog of common technical skills
- Recognize common aliases such as AWS / Amazon Web Services, Kubernetes / K8s, PostgreSQL / Postgres, JavaScript / JS, Node.js / Node, and Generative AI / GenAI
- Detect additional technologies including .NET, Kafka, Apache Spark, Snowflake, Apache Airflow, Linux, CI/CD, REST APIs, Prometheus, Grafana, CloudWatch, EC2, S3, AWS Lambda, LangGraph, Qdrant, and OpenTelemetry
- Calculate a transparent detected-skill match
- Show matched skills
- Show skills requested by the job but not detected in the resume
- Handle empty input safely
- Avoid showing a score when no supported job skills are detected

## How the score works

The score is based only on supported technical skills detected in the job description:

```text
matched detected job skills / total detected job skills × 100
```

Example: if the job description contains four supported skills and three are also detected in the resume, the detected-skill match is 75%.

The result is deliberately labeled **Detected skill match**. It is not an overall suitability score, hiring prediction, or measure of candidate quality.

## Version 1 to Version 2 iteration

The mission requires improving the prototype after using it. The Version 1 test pass found that aliases and unsupported technologies could distort the result. Version 2 was changed specifically in response to those findings rather than by adding unrelated features.

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
