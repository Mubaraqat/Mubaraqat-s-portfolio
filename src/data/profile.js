// ─────────────────────────────────────────────────────────────
// Everything you'll want to edit lives in this one file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Yemi Mubaraqat Onifade",
  shortName: "Yemi Mubaraqat Onifade",
  role: "Data Scientist",
  headline: "I turn health and public-service data into models and dashboards people can act on.",
  location: "Nigeria",
  email: "yemimubaraqat@gmail.com",
  github: "Mubaraqat", // GitHub username: projects are pulled from here
  githubUrl: "https://github.com/Mubaraqat",
  linkedinUrl: "https://linkedin.com/in/yemi-onifade",
  cvFile: "/Yemi_Onifade_Data_Scientist_CV.pdf", // file lives in /public
  summary: [
    "I'm a data scientist with a background in Medical Laboratory Science. Years of working with clinical records taught me to care about accuracy, validation and clear documentation before any model gets trained.",
    "Today I work in Python, SQL, Power BI and Scikit-learn: cleaning messy data, exploring it, building predictive models and packaging the results into interactive dashboards.",
  ],
  highlights: [
    "Built end-to-end data science projects with Python and Streamlit.",
    "Applied machine learning techniques including SMOTE and GridSearchCV.",
    "Analysed healthcare and public health data to uncover meaningful insights.",
  ],
};

// Proficiency is a self-assessment. Adjust the numbers to whatever you feel is honest.
export const skillGroups = ["Programming", "Analysis", "Visualization", "Machine Learning", "Tools", "Professional"];

export const skills = [
  { name: "Python", level: 85, group: "Programming" },
  { name: "SQL", level: 75, group: "Programming" },
  { name: "Pandas", level: 85, group: "Programming" },
  { name: "NumPy", level: 85, group: "Programming" },
  { name: "Excel", level: 90, group: "Programming" },

  { name: "Data Cleaning", level: 95, group: "Analysis" },
  { name: "Data Validation", level: 85, group: "Analysis" },
  { name: "Exploratory Analysis", level: 95, group: "Analysis" },
  { name: "Statistical Analysis", level: 75, group: "Analysis" },
  { name: "Reporting", level: 95, group: "Analysis" },

  { name: "Power BI", level: 85, group: "Visualization" },
  { name: "Matplotlib", level: 85, group: "Visualization" },
  { name: "Plotly", level: 75, group: "Visualization" },
  { name: "Tableau", level: 60, group: "Visualization" },

  { name: "Scikit-learn", level: 85, group: "Machine Learning" },
  { name: "Logistic Regression", level: 85, group: "Machine Learning" },
  { name: "Classification", level: 85, group: "Machine Learning" },
  { name: "Regression", level: 85, group: "Machine Learning" },
  { name: "Feature Engineering", level: 85, group: "Machine Learning" },
  { name: "Model Evaluation", level: 85, group: "Machine Learning" },
  { name: "Hyperparameter Tuning", level: 85, group: "Machine Learning" },
  { name: "SMOTE", level: 85, group: "Machine Learning" },

  { name: "Jupyter", level: 85, group: "Tools" },
  { name: "Streamlit", level: 75, group: "Tools" },
  { name: "GitHub", level: 85, group: "Tools" },
  { name: "Microsoft Office", level: 95, group: "Tools" },

  { name: "Quality Control", level: 90, group: "Professional" },
  { name: "Documentation", level: 95, group: "Professional" },
  { name: "Problem Solving", level: 85, group: "Professional" },
  { name: "Team Collaboration", level: 95, group: "Professional" },
];

// Optional polish for specific GitHub repos (key = exact repo name).
// Anything not listed here still appears, using its GitHub description.
export const repoOverrides = {
  "Diabetes-Risk-Model": {
    title: "Diabetes Risk Prediction",
    description:
      "End-to-end machine learning pipeline predicting diabetes risk from patient health records: cleaning, EDA, StandardScaler, SMOTE for class imbalance, Logistic Regression tuned with GridSearchCV.",
    featured: true,
  },
};

// Repos to leave out of the grid (e.g. your profile README repo).
export const hiddenRepos = ["Mubaraqat"];

// Projects that aren't on GitHub (or don't have a public repo). Add a `url` if you have one.
export const extraProjects = [
  {
    id: "santrack",
    title: "SanTrack: Sanitation Tracking Platform",
    description:
      "Web dashboard for a sanitation tracking application. Pandas analysis surfaces sanitation trends, and interactive Plotly charts present them in a Streamlit app.",
    language: "Python",
    topics: ["streamlit", "plotly", "pandas"],
    featured: true,
  },
];

export const experience = [
  {
    role: "Medical Laboratory Scientist Intern / Chief Intern",
    org: "Lagos University Teaching Hospital (LUTH), Lagos",
    period: "2024 – 2025",
    points: [
      "Managed and documented operational information, supporting accurate data recording across clinical departments.",
      "Applied quality-control procedures to keep records and results accurate, reliable and consistent.",
      "Coordinated intern schedules across departments and organised professional development activities.",
    ],
  },
  {
    role: "Laboratory Intern, CENTRAL-NTDs (ANDI)",
    org: "Lagos University Teaching Hospital, Lagos",
    period: "Research experience",
    points: [
      "Managed documentation and quality-control records for 1,700+ malaria slides and dried blood spot samples from multiple states.",
      "Used Excel formulas and functions to organise, validate and analyse laboratory records, and flagged inconsistencies for correction.",
    ],
  },
  {
    role: "Undergraduate Research Project",
    org: "University of Ibadan",
    period: "Research project",
    points: [
      "Investigated parasitic contamination of fresh fruits retailed at major markets in Ibadan.",
      "Contributed to data collection, laboratory analysis, interpretation and scientific reporting.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Medical Laboratory Science (B.MLS)",
  school: "University of Ibadan, College of Medicine, Nigeria",
};

export const training = {
  title: "Data Science & Engineering Fellowship",
  org: "Tech4Dev, Women Techsters Fellowship",
  period: "2025 – 2026",
  topics: "Excel, Python, SQL, data analysis, visualization, machine learning, Power BI, statistics and dashboard development.",
};

export const certifications = [
  { name: "Google Advanced Data Analytics", issuer: "Google", year: "2026" },
  { name: "Data Science: Python for Data Analysis Full Bootcamp", issuer: "Udemy", year: "2026" },
  { name: "Excel Basics for Data Analysis", issuer: "IBM", year: "2024" },
  { name: "Bioinformatics for Biologist", issuer: "FutureLearn", year: "2023" },
];

export const publication = {
  citation:
    "Makanjuola, O. B., Onifade, Y. M., & Dada-Adegbola, H. O. (2025). Factors associated with parasitic contamination of fresh fruits retailed at major markets in Ibadan, Nigeria: A public health concern.",
  journal: "African Journal of Clinical and Experimental Microbiology, 26(4), 341–351.",
};
