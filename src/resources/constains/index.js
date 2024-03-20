import BlogSpring from '../projectpictures/BlogSpring.png';
import Portfolio from '../projectpictures/Portfolio.png';
import ThaiTuanBlog from '../projectpictures/ThaiTuanBlog.png';

export const projects = [
  {
    Id: 1,
    // Image: BlogSpring,
    Title: 'Blog Spring',
    Side: 'right',
    Description:
      'A full-stack self-taught blog website created for applying Spring boot technology',
    Linkgit: 'https://github.com/javier1234559/Blog_Spring.git',
    Linkview: 'https://github.com/javier1234559/Blog_Spring.git'
  },
  {
    Id: 2,
    // Image: Portfolio,
    Title: 'Ecommerce MERN',
    Side: 'left',
    Description: 'A school project created to applying MERN stack technology.',
    Linkgit: 'https://github.com/javier1234559/Ecommerce_MERN',
    Linkview: 'https://github.com/javier1234559/Ecommerce_MERN'
  },
  {
    Id: 3,
    // Image: Portfolio,
    Title: 'Notion blog',
    Side: 'right',
    Description: 'A side project created to applying Nextjs technology, and build a personal blog website',
    Linkgit: 'https://github.com/javier1234559/notion-blog',
    Linkview: 'https://www.weebuns.social/'
  },
  {
    Id: 4,
    // Image: Portfolio,
    Title: 'Recuitment service API',
    Side: 'left',
    Description: 'Backend api to connect job seekers and employers',
    Linkgit: 'https://github.com/javier1234559/recruitment-service',
    Linkview: 'https://github.com/javier1234559/recruitment-service'
  },
];


//Dont forget to change the number of position-absolute:nth-child(1) to number of projects
export const roadmaps = [
  {
    Id: 1,
    Date: '06/2021',
    Title: 'Basic Programming',
    Side: 'left',
    Subtitle: 'I start to learn programing and learn the basics of programming',
    Skills: ['C/C++', 'DSA', 'Python'],
  },
  {
    Id: 2,
    Date: '02/2022',
    Title: 'Basic Front End',
    Side: 'right',
    Subtitle: 'In this time I start to learn web development and learn the basics of front-end web',
    Skills: ['HTML/CSS/JS', 'Git', 'Reactjs'],
  },
  {
    Id: 3,
    Date: '12/2022',
    Title: 'Basic Back End',
    Side: 'left',
    Subtitle: 'Curious about server and how it works, I start to learn back-end web development',
    Skills: ['Java', 'C#', 'SQL', 'OOP', 'Cloud', 'Flask', 'Servlet/JSP'],
  },
  {
    Id: 4,
    Date: '2/2023',
    Title: 'Learning Spring Boot',
    Side: 'right',
    Subtitle: 'Start to learn Spring boot , a powerful framework for Java web development.',
    Skills: ['Springboot', 'Thymeleaf', 'JPA'],
  },
  {
    Id: 5,
    Date: '6/2023',
    Title: 'Deep Learning React and MERN stack',
    Side: 'left',
    Subtitle: 'Build a full-stack web application using MERN stack',
    Skills: ['MongoDB', 'Express', 'React', 'Nodejs', 'Redux', 'JWT', 'RESTful API'],
  },
  {
    Id: 6,
    Date: '11/2023',
    Title: 'Learning Nextjs by building a blog website',
    Side: 'right',
    Subtitle: '',
    Skills: ['Nextjs13', 'Notion api'],
  },
  {
    Id: 7,
    Date: '12/2023',
    Title: 'Deep dive into spring boot and backend development',
    Side: 'left',
    Subtitle: 'I build a recruitment api to connect seeker and employer.',
    Skills: ['Spring boot', 'Redis', 'Docker', 'GCP', 'Prometheus', 'Grafana', 'Sentry'],
  }
];
