import React from "react";
import pythonIcon from "./python-icon.png";
import javascriptIcon from "./javascript-icon.png";
import reactIcon from "./react-icon.png";

const description = {
  title: "Career Profile",
  content: (
    <React.Fragment>
      <p>
        I am a self-taught developer with an entrepreneurial mindset. I am a
        planner and strategic thinker who is patient and perseveres toward my
        goals. I am a strong generalist with a broad range of experience which
        include mechanical repair, starting my own business and teaching. I am
        passionate about creating new things and am focused on software
        development.
      </p>
      <p>
        My main interests are in making visual tools, but I love all kinds of
        software, coding languages and creating new things with code. I’m not
        afraid to dive right in and make a plan to reach my goals.
      </p>
    </React.Fragment>
  ),
  japaneseTitle: "求人情報",
  japaneseContent: (
    <React.Fragment>
      <p>
        私は起業家精神のある独学の開発者です。
        私はプランナーであり、忍耐強く、戦略的な思想家です。
        私は機械の修理、自分のビジネスの開始、および指導の幅広い経験を持つ強力なジェネラリストです。
        私は新しいものを作成し、ソフトウェア開発に集中することに情熱を傾けています。
      </p>
      <p>
        私の主な関心はビジュアルツールの作成ですが、あらゆる種類のソフトウェア、コーディング言語、コードを使用して新しいものを作成するのが大好きです。
        私はすぐにジャンプして自分の目標を計画することを恐れていません。
      </p>
    </React.Fragment>
  ),
};

const webPresence = {
  title: "My Web Presence",
  japaneseTitle: "ウェブプレッスンス",
  content: [
    {
      what: "Project Site",
      japaneseWhat: "プロジェクトサイト（自分の）",
      url: "https://www.wmcooper2.com/",
      logo: "",
    },

    {
      what: "GitHub",
      japaneseWhat: "GitHub",
      url: "https://github.com/wmcooper2",
      logo: "",
    },

    {
      what: "LinkedIn",
      japaneseWhat: "LinkedIn",
      url: "https://www.linkedin.com/in/wandalcooper/",
      logo: "",
    },
  ],
};

const professionalExperience = [
  {
    company: "Borderlink, Inc.",
    location: "Tokyo, Japan",
    year: ["2017", "Present"],
    jobTitle: "ALT",
    talkingPoints: [
      "Developing software to assist in teaching English as a foreign language.",
      "Developing lesson plans, worked with Japanese teachers to target difficult concepts in English learning.",
      "Creating new games that the students could understand and enjoy.",
      "Leading English lessons at elementary schools.",
    ],
  },

  {
    company: "MorphoTrust USA",
    location: "Sacramento, CA",
    year: ["2015", "2017"],
    jobTitle: "Machine Operator 1",
    talkingPoints: [
      "Protected customer’s personal information following NASPO International security guidelines.",
      "Controlled the flow of batch jobs through a computer network.",
      "Performed quality control inspections on drivers licenses for 5 states.",
      null,
    ],
  },

  {
    company: "Bubba Mac's Link Shack",
    location: "Sacramento, CA",
    year: ["2010", "2011"],
    jobTitle: "Entrepreneur",
    talkingPoints: [
      "Developed well-researched plans and communicated my vision to the general public.",
      "Developed my own computer-based record keeping and inventory control system.",
      "Maintained detailed and accurate records for use in statistical analysis and planning.",
      null,
    ],
  },

  {
    company: "US Navy",
    location: "Various locations",
    year: ["2007", "2010"],
    jobTitle: "Nuclear Machinist Mate",
    talkingPoints: [
      "Trusted with sensitive information and classified documents.",
      "Pursued knowledge with a passion, studying 16 to 18 hours daily for weeks at a time.",
      "Studied Nuclear propulsion.",
      null,
    ],
  },

  {
    company: "CTI Leasing",
    location: "Laveen, AZ",
    year: ["2005", "2006"],
    jobTitle: "Maintenance Mechanic",
    talkingPoints: [
      "Performed preventive maintenance and repairs on class 8 vehicles, trailers and forklifts.",
      "Maintained DOT compliance with vehicle repairs, troubleshooted problems with vehicles and inspected equipment regularly to maintain a high standard of operational safety.",
      "Communicated technical information to customers who do not have a technical background.",
      null,
    ],
  },
];

const skills = {
  title: "Primary Skills",
  content: [
    { what: "Python3", logo: pythonIcon },
    { what: "Javascript", logo: javascriptIcon },
    { what: "React", logo: reactIcon },
  ],
  japaneseTitle: "専門技術",
};

const education = {
  title: "Education",
  content: [
    {
      name: "DeVry University",
      location: "Elk Grove, CA",
      degree:
        "B.S., Business Administration, Concentration in Entrepreneurship",
      year: "2014",
      url:
        "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/images/DeVryDegree.jpeg",
    },

    {
      name: "Naval Nuclear Power Training Command",
      location: "Goose Creek, SC",
      degree: "Certificate of Completion",
      year: "2008",
      url:
        "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/images/NNPTCcert.jpeg",
    },

    {
      name: "Universal Technical Institute",
      location: "Sacramento, CA",
      degree: "Diploma, Automotive/Diesel and Industrial Technology",
      year: "2007",
      url:
        "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/images/UTIdiploma.jpeg",
    },
  ],
};

const certifications = {
  title: "Certifications",
  content: [
    {
      location: "edX",
      name: "Introduction to Computer Science and Programming Using Python",
      url:
        "https://courses.edx.org/certificates/4117ecd2c2ee46a0a39e7622d71e93b1",
    },

    {
      location: "Free Code Camp",
      name: "Responsive Web Design",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/responsive-web-design",
    },

    {
      location: "Free Code Camp",
      name: "Javascript Algorithms and Data Structures",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/javascript-algorithms-and-data-structures",
    },

    {
      location: "Free Code Camp",
      name: "Front End Libraries",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/front-end-libraries",
    },

    {
      location: "Free Code Camp",
      name: "Data Visualization",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/front-end-libraries",
    },

    {
      location: "Free Code Camp",
      name: "APIs and Microservices",
      url:
        "https://www.freecodecamp.org/certification/wmcooper2/apis-and-microservices",
    },

    {
      location: "International TEFL Academy",
      name: "TEFL Certificate",
      url:
        "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/images/TEFLcert.jpeg",
    },

    {
      location: "Tokyo, Japan",
      name: "JLPT N3",
      url:
        "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/images/N3cert.jpeg",
    },
  ],
};

export {
  description,
  webPresence,
  skills,
  education,
  professionalExperience,
  certifications,
};
