/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jackie Li",
  title: "Hi all, I'm Jackie",
  subTitle: emoji(
    "(You can also call me by my Chinese name — Man Yip / 文業)"),
  subSubTitle:  `I'm a Data Analyst and AI Practitioner specialising in ASR, 
  audio signal processing, and NLP. I build analytical and machine learning 
  solutions using Python, SQL, and Power BI, with a focus on turning messy, 
  real world data into clear insights and practical tools.`,
  resumeLink:
    "https://drive.google.com/file/d/1-188b8DHL-JK9blOPQSuk9NlxxW3rvuk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JackieLi1/",
  linkedin: "https://www.linkedin.com/in/jackie-man-yip-li-66b720aa/",
  gmail: "jackie.li92@gmail.com",
  //gitlab: "https://gitlab.com/JackieLi1",
  facebook: "https://www.facebook.com/jackieli1105/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: emoji(
  `I'm drawn to the kind of problems where the data is messy, the answer isn't obvious, 
  and getting it right actually matters. My work sits at the intersection of data analysis, 
  machine learning, and speech technology — I've spent time building ASR evaluation frameworks, 
  digging into NLP pipelines, and turning sprawling datasets into something a person can 
  actually use. Below are the tools and technologies I work with to get there.`
),
  skills: [
  "I work across the full data lifecycle — from raw, messy inputs to models, dashboards, and findings that hold up to scrutiny.",
  "⚡ Analyse and transform complex datasets using Python and SQL — structured, unstructured, time series, and audio",
  "⚡ Build and evaluate machine learning models for classification, regression, NLP, and speech recognition tasks",
  "⚡ Evaluate ASR systems across diverse accents — assessing error patterns, model robustness, and real-world performance",
  "⚡ Design Power BI dashboards that give stakeholders a clear, honest view of what the data shows",
  "⚡ Process audio signals for speech tasks — feature extraction (MFCCs), noise reduction, and model-ready data preparation",
  "⚡ Apply NLP techniques to unstructured text: tokenisation, sentiment analysis, and text classification",
  "⚡ Write clean, documented, version-controlled code — notebooks and scripts that others can actually follow and build on",
  "⚡ Build lightweight data pipelines to automate repetitive tasks and keep analysis focused on the harder problems"
],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "ASR / Speech Processing",
      fontAwesomeClassname: "fas fa-microphone"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Data Visualisation",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jupyter Notebook",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Edinburgh",
      logo: require("./assets/images/ediLogo.png"),
      subHeader: "Postgraduate Studies in Data Science",
      duration: "January 2024 - January 2025",
      desc: "Completed two Masters-level coursework focused on data science as part of my CPD. Achieved Distinction in one module.",
      descBullets: [
        "Data Science for Manufacturing (A3)",
        "Practical Introduction to Data Science (B1)"
      ]
    },
    {
      schoolName: "University of Strathclyde, Glasgow",
      logo: require("./assets/images/strathLogo.png"),
      subHeader: "Master of Science in Artificial Intelligence with Merit",
      duration: "September 2019 - November 2021",
      desc: "Developed advanced expertise in artificial intelligence, machine learning, deep learning, and data analytics. The programme combined theoretical foundations with practical, industry‑focused applications, emphasising intelligent systems, autonomous decision‑making, and the ethical deployment of AI technologies. Strengthened analytical thinking, research capability, and the ability to design, evaluate, and implement AI‑driven solutions.",
      descBullets: [
        "Machine learning, deep learning, neural networks, and quantitative analysis", 
        "Big data technologies, data mining, and information retrieval",
        "Autonomous systems, intelligent agents, and decision‑making models",
        "Time series analysis and predictive modelling",
        "Natural language processing and text classification",
        "Legal, ethical, and professional issues in AI deployment", 
        "Dissertation: Evaluated speech recognition systems to improve closed‑captioning accuracy across diverse accents, analysing the performance of commercial ASR models and identifying limitations in accent generalisation. Conducted experimental testing, error analysis, and comparative evaluation to assess model robustness and real‑world applicability."
      ]
    },
       {
      schoolName: "University of Strathclyde, Glasgow",
      logo: require("./assets/images/strathLogo.png"),
      subHeader: "Bachelor of Science in Computer Science, Second Class Honours",
      duration: "September 2012 - June 2017",
      desc: "Developed a strong foundation in computer science, combining theoretical understanding with extensive practical experience. Gained skills in programming, algorithms, software engineering, databases, computer systems, and artificial intelligence. The degree emphasised analytical thinking, problem solving, and the design and development of sophisticated computing systems. ",
      descBullets: [   
  "Programming in Java and Python, object‑oriented design, and software development",
  "Algorithms, data structures, computational theory, and logic",
  "Databases, information systems, and user/data modelling",
  "Computer systems architecture, operating systems, and concurrency",
  "Web and mobile application development",
  "Artificial intelligence, machine learning foundations, and information mining",
  "Functional programming and quantitative methods in computing",
  "Security, ethical hacking, and human‑computer interaction", 
  "Dissertation: Designed and developed an interactive mobile application to support children's vocabulary learning, incorporating natural language processing and automatic speech recognition."
]

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Investigative Assistant",
      company: "UK Civil Service",
      companylogo: require("./assets/images/ukcc.jpg"),
      date: "Dec 2025 – Present",
      desc: `Experienced in supporting complex investigations through 
      strong analytical judgement, structured problem‑solving, and 
      clear communication. Skilled in managing time‑sensitive casework, 
      interpreting large volumes of information, and collaborating with police,
       legal teams, and external stakeholders. Brings strengths in evidence 
       evaluation, risk awareness, group coordination, and delivering accurate, 
       insight‑driven reports under strict time bars and procedural requirements.`,
      descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Estates Administrator and Climate Change Data Analyst",
      company: "UK Civil Service",
      companylogo: require("./assets/images/ukcc.jpg"),
      date: "Sep 2023 – Dec 2025",
      desc: `Experienced in supporting estates operations through strong 
      risk management, contractor coordination, and incident response, 
      alongside analytical work on climate‑change reporting. 
      Skilled in assessing building‑related risks, managing faults and 
      maintenance activities, and ensuring safe, compliant operations. 
      Brings strengths in data interpretation, stakeholder communication, 
      and delivering clear, actionable insights across both operational 
      and environmental reporting contexts.`
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "placeholder1...",
      projectDesc: "placeholder1...",
      footerLink: [
        {
          name: "placeholder1...Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "placeholder2...",
      projectDesc: "placeholder2...",
      footerLink: [
        {
          name: "placeholder2...visit website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "",
    //"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Science for Manufacturing",
      subtitle:
        "University of Edinburgh",
      image: require("./assets/images/uoedsm.png"),
      imageAlt: "Data Science for Manufacturing",
      footerLink: [
        /*{
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }*/
      ]
    },
    {
      title: "Practical Introduction to Data Science",
      subtitle:
        "University of Edinburgh",
      image: require("./assets/images/uoeds.png"),
      imageAlt: "Practical Introduction to Data Science",
      footerLink: [
        /*{
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }*/
      ]
    },

    {
      title: "Data Analytics for Business Decision Making",
      subtitle: "Robert Gordon University",
      image: require("./assets/images/rguda.png"),
      imageAlt: "Data Analytics for Business Decision Making",
      footerLink: [
        /*{name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }*/
      ]
    },

       {
      title: "Introduction to Data Science with Python",
      subtitle: "Robert Gordon University",
      image: require("./assets/images/rguds2.png"),
      imageAlt: "Introduction to Data Science with Python",
      footerLink: [
        /*{name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }*/
      ]
    },

       {
      title: "Computer Vision for the Energy Sector",
      subtitle: "Robert Gordon University",
      image: require("./assets/images/rgucv.png"),
      imageAlt: "Computer Vision for the Energy Sector",
      footerLink: [
        /*{name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }*/
      ]
    },

       {
      title: "Fundamentals of Python for Data Science",
      subtitle: "Edinburgh Napier University",
      image: require("./assets/images/enuds.png"),
      imageAlt: "Fundamentals of Python for Data Science",
      footerLink: [
        /*{name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }*/
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "About",
  subtitle:
    `Hi, I'm Jackie — a Glasgow-based AI and data professional with a passion for technology, languages, and building things that matter.

From a young age, I was fascinated by computers. Getting my first PC in 2003 was a pivotal moment — it wasn't long before I was tinkering under the hood and writing small programs in Visual Basic, completely self-taught and driven purely by curiosity. That early spark never went out.

My journey into formal tech education began with a BSc in Computer Science at the University of Strathclyde, where a third-year module in the Foundations of AI sparked something that would shape the rest of my career. Even before applying for my masters, I had a feeling that AI was going to be transformative — that the world was on the cusp of something enormous. Returning to Strathclyde to pursue an MSc in Artificial Intelligence and Applications felt less like a career pivot and more like following through on a conviction. Graduating in 2021, right as the AI boom truly took hold, felt like vindication of that instinct — and it only deepened my enthusiasm for what was possible.

Since graduating, I've never stopped learning. A string of certifications from the University of Edinburgh reflects my genuine commitment to continuous professional development and lifelong learning in data science and AI. For me, keeping pace with the field isn't a box to tick; it's a way of life.

When it comes to projects, I'm drawn consistently to NLP and Automatic Speech Recognition. My undergraduate dissertation tackled children's vocabulary learning through NLP and ASR, and my masters dissertation explored speech recognition systems to improve closed captioning accuracy across diverse accents. That thread runs through everything I build — I'm always looking for the next opportunity to create solutions at the intersection of language and machine intelligence.

I also care deeply about the environment. Working at the Crown Office as part of a Climate Change initiative — collecting, analysing, and reporting on carbon footprint and greenhouse gas data — gave me a chance to put my data skills to work in service of something meaningful. Scotland's ambition to reach net zero by 2045 isn't just government policy to me; it's a cause I want to contribute to.

Outside of work, I'm equally drawn to finance and markets — I follow stocks and shares closely and enjoy applying my analytical skills to financial projects in my own time. I'm also a people person with a genuine love of cultures and languages. Living as an expat is something I aspire to, and I'm currently studying both Mandarin and Cantonese with the goal of reaching full proficiency — working towards HSK 9 and beyond.

On the lighter side, you'll find me at the snooker table or playing 8-ball pool, diving into video games, or indulging my love of retro gaming — particularly the Game Boy era. I'm even coding my own GBA games, which manages to combine nostalgia with software craft in the most satisfying way.

I'm a pretty laid-back person and always happy to chat — whether it's AI, climate, finance, language learning, or why the Game Boy Advance had one of the best game libraries of all time. If any of that resonates with you, feel free to reach out or check out my blog where I write about my adventures in tech and beyond.`,
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://jackieli1105.blogspot.com/",
      title: "Jackie's Data Science Blog",
      description:
        "."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+44-7720652642 or 07720652642",
  email_address: "jackie.li92@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
