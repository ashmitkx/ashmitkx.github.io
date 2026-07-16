// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "* = equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-work",
          title: "work",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/work/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/ashmit_khandelwal_cv.pdf";
          },
        },{id: "news-our-work-on-defining-and-benchmarking-deep-research-was-accepted-at-iclr-2026",
          title: 'Our work on defining and benchmarking Deep Research was accepted at ICLR 2026!...',
          description: "",
          section: "News",},{id: "news-interwhen-our-work-on-test-time-monitoring-and-steering-for-llm-agents-is-up-on-arxiv",
          title: 'interwhen, our work on test-time monitoring and steering for LLM agents, is up...',
          description: "",
          section: "News",},{id: "news-i-ll-be-joining-cmu-s-msml-program-in-fall-2026",
          title: 'I’ll be joining CMU’s MSML program in Fall 2026.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%68%6D%69%74%6B@%63%73.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ashmitkx", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UDAxK0YAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ashmitkx", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
