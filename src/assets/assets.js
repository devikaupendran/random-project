import landingPageVideo from '../assets/videos/landingVideo.mp4'
import tricta_logo from '../assets/images/logo/tricta_logo.svg'
import project from '../assets/images/project.svg'
import robot from '../assets/images/robot.png'
import contactBanner from '../assets/images/contactBanner.jpg'
import innovation from '../assets/images/innovation.png'


// ------------------ about Section Images ------------------
import about_img1 from '../assets/images/about/about2.png'
import about_img2 from '../assets/images/about/about1.jpg'

// ------------------ about Page Images ------------------
import aboutusBanner from '../assets/images/about/about-us-banner.jpg'
import about from '../assets/images/about/about.png'
import jomonJacob from '../assets/images/about/jomon.png'
import arunGToms from '../assets/images/about/Arun-G-Toms.png'
import antonyVincent from '../assets/images/about/Antony-Vincent.png'
import aboutusbanner1 from '../assets/images/about/aboutSample1.jpg'
import aboutusbanner2 from '../assets/images/about/aboutSample2.jpg'

// ------------------ clients logo ------------------
import adhi_schools from '../assets/images/clients-logo/adhi-schools-logo.png'
import alzamram from '../assets/images/clients-logo/alzamram-logo.png'
import apix_energy from '../assets/images/clients-logo/apix-energy.png'
import crash_course from '../assets/images/clients-logo/crash-course-logo.png'
import farming_cards from '../assets/images/clients-logo/farming-cards-logo.png'
import life_bee from '../assets/images/clients-logo/life-bee-logo.png'
import metroscans from '../assets/images/clients-logo/metroscans-logo.png'
import mobiloud from '../assets/images/clients-logo/mobiloud-logo.png'
import wheelsOwner from '../assets/images/clients-logo/wheels-owner-logo.png'

// ------------------ services images  ------------------
import mobileDevelopmentImage from '../assets/images/services/mobile-development.png'
import webDevelopmentImage from '../assets/images/services/web-development.png'
import ecommerceSolution from '../assets/images/services/ecommerce-solutions.png'
import design from '../assets/images/services/design.png'
import digitalMarketing from '../assets/images/services/digital-marketing.png'
import iot from '../assets/images/services/iot.png'
import testing from '../assets/images/services/testing.png'
import serverSupport from '../assets/images/services/server-support.png'
import wordpress from '../assets/images/services/wordpress.png'

// ------------------ Portfolio images  ------------------
import lifeBeeMobile from '../assets/images/portfolio/life-bee-mobile.png'
import vuz360 from '../assets/images/portfolio/360-vuz.png'
import newYouMobile from '../assets/images/portfolio/new-you-mobile.png'
import vuzMobile from '../assets/images/portfolio/vuz-mobile.jpg'
import crashCourseOnlineMobile from '../assets/images/portfolio/CrashCourseOnline-mobile.jpg'
import desiMusic from '../assets/images/portfolio/desi-music.jpg'
import videomyjob from '../assets/images/portfolio/videomyjob.jpg'
import ranker from '../assets/images/portfolio/ranker.jpg'

import adhiSchools from '../assets/images/portfolio/adhi-schools.png'
import crashCourseOnlineWeb from '../assets/images/portfolio/crash-course-online-web.png'
import vuz from '../assets/images/portfolio/vuz.png'
import lifeBeeWeb from '../assets/images/portfolio/life-bee-web.png'
import driver4u from '../assets/images/portfolio/driver-4-u.png'
import digits from '../assets/images/portfolio/digits.png'
import cryptoBriefing from '../assets/images/portfolio/crypto-briefing.png'
import farmingCards from '../assets/images/portfolio/farming-cards.png'
import newYouWeb from '../assets/images/portfolio/newyouhairapp.jpg'
import spotisan from '../assets/images/portfolio/spotisan.jpg'
import metroScans from '../assets/images/portfolio/metro-scans.png'
import matshepo from '../assets/images/portfolio/matshepo.jpg'

// ------------------ Technology Logos Mobile ------------------
import android from '../assets/images/technology-logos/android.png'
import flutter from '../assets/images/technology-logos/flutter.png'
import ios from '../assets/images/technology-logos/ios.png'
import reactNative from '../assets/images/technology-logos/react-native.png'
import jquery from '../assets/images/technology-logos/jquery.png'

// ------------------ Technology Logos Web ------------------
import html from '../assets/images/technology-logos/html.png'
import css from '../assets/images/technology-logos/css.png'
import javascript from '../assets/images/technology-logos/javascript.png'
import bootstrap from '../assets/images/technology-logos/bootstrap.png'
import tailwindcss from '../assets/images/technology-logos/tailwindcss.png'
import java from '../assets/images/technology-logos/java.png'
import php from '../assets/images/technology-logos/php.png'
import laravel from '../assets/images/technology-logos/laravel.png'
import react from '../assets/images/technology-logos/react.png'
import angular from '../assets/images/technology-logos/angular.png'
import node from '../assets/images/technology-logos/node.png'
import mongodb from '../assets/images/technology-logos/mongodb.png'
import python from '../assets/images/technology-logos/python.png'
import postgreSql from '../assets/images/technology-logos/postgresql.png'
import mariaDB from '../assets/images/technology-logos/mariaDB.png'
import wordPress from '../assets/images/technology-logos/wordpress.png'
import mySql from '../assets/images/technology-logos/mysql.png'
import aws from '../assets/images/technology-logos/aws.png'
import cloud from '../assets/images/technology-logos/gCloud.png'
import azure from '../assets/images/technology-logos/microsoftAzure.png'

import { animationSettings } from './animationSettings'


// ------------------ main assets  ------------------
export const assets = {
    landingPageVideo,
    tricta_logo,
    about_img1,
    about_img2,
    innovation,
    project,
    robot,
    contactBanner,
    aboutusBanner,
    about,
    aboutusbanner1,
    aboutusbanner2
}

// ------------------ clients data ------------------
export const clients_logo = [
    { id: 1, logo: adhi_schools },
    { id: 2, logo: alzamram },
    { id: 3, logo: apix_energy },
    { id: 4, logo: crash_course },
    { id: 5, logo: farming_cards },
    { id: 6, logo: life_bee },
    { id: 7, logo: metroscans },
    { id: 8, logo: mobiloud },
    { id: 9, logo: wheelsOwner },
];



// ------------------ Portfolio Home Page Data ------------------
export const portfolioHome = [
    {
        image: lifeBeeWeb,
        title: "Life Bee",
        type: "Web Application"
    },
    {
        image: farmingCards,
        title: "Farming Cards",
        type: "Web Application"
    },
    {
        image: vuz360,
        title: "360 VUZ",
        type: "Web Application"
    },
    {
        image: adhiSchools,
        title: "Adhi Schools",
        type: "Web Application",
        span: "col-span-1 xl:col-span-2 xl:h-80 hidden xl:block"
    },
    {
        image: crashCourseOnlineWeb,
        title: "Crash Course Online",
        type: "Web Application"
    }
];

// ------------------ Portfolio Page Data ------------------
export const portfolio = [
    {
        id: 1,
        image: adhiSchools,
        category: 'Web Application',
        title: 'ADHI Schools',
        subTitle: 'Real estate portal for California client',
        link: 'https://www.adhischools.com/'
    },
    {
        id: 2,
        image: farmingCards,
        category: 'Web Application',
        title: 'Farming Cards',
        subTitle: 'Online postcard sending platform for US client',
        link: 'https://www.farming.cards/'
    },
    {
        id: 3,
        image: crashCourseOnlineWeb,
        category: 'Web Application',
        title: 'Crash Course Online',
        subTitle: 'Another Real estate portal for California client',
        link: 'https://www.crashcourseonline.com/'
    },

    {
        id: 4,
        image: spotisan,
        category: 'Web Application',
        title: 'Spotisan',
        subTitle: 'Artisan community ecommerce site for New York client',
        link: 'https://www.spotisan.com/'
    },
    {
        id: 5,
        image: vuz,
        category: 'Web Application',
        title: '360vuz',
        subTitle: 'Another Real estate portal for California client',
        link: 'https://vuz.com/'
    },
    {
        id: 6,
        image: digits,
        category: 'Web Application',
        title: 'Digits ME',
        subTitle: 'Website for a dubai company',
        link: 'https://www.digits-me.com/'
    },
    {
        id: 7,
        image: lifeBeeWeb,
        category: 'Web Application',
        title: 'Life Bee',
        subTitle: 'Website for a healthcare company in Trivandrum',
        link: 'https://life-bee.com/'
    },
    {
        id: 8,
        image: metroScans,
        category: 'Web Application',
        title: 'Metro Scans & Laboratory',
        subTitle: 'Website for scans and lab in Trivandrum',
        link: 'https://www.metroscans.in/'
    },
    {
        id: 9,
        image: driver4u,
        category: 'Web Application',
        title: 'Driver4u',
        subTitle: 'Website for a driver on demand company in Triavandrum',
        link: 'https://www.driver4u.in/'
    },
    {
        id: 10,
        image: newYouWeb,
        category: 'Web Application',
        title: 'New You Hair & Beauty',
        subTitle: 'Website for a US client',
        link: 'https://newyouhairapp.com/'
    },
    {
        id: 11,
        image: cryptoBriefing,
        category: 'Web Application',
        title: 'Crypto Briefing',
        subTitle: 'For a US crypto company',
        link: 'https://cryptobriefing.com/'
    },
    {
        id: 12,
        image: newYouMobile,
        category: 'Mobile Application',
        title: 'NewYou',
        subTitle: 'Try-On & Customize Realistic 3D Hairstyles (Early Access',
        link: 'https://play.google.com/store/apps/details?id=com.newyou.app'
    },
    {
        id: 13,
        image: lifeBeeMobile,
        category: 'Mobile Application',
        title: 'LifeBee',
        subTitle: 'Healthcare android application',
        link: 'https://play.google.com/store/apps/details?id=com.lifebee.android'
    },
    {
        id: 14,
        image: vuzMobile,
        category: 'Mobile Application',
        title: '360 VUZ',
        subTitle: 'Immersive Video Views',
        link: 'https://apps.apple.com/in/app/360-vuz-360-videos-vr-player/id964118383'
    },
    {
        id: 15,
        image: crashCourseOnlineMobile,
        category: 'Mobile Application',
        title: 'Crash Course Online',
        subTitle: 'California state exam prep app',
        link: 'https://play.google.com/store/apps/details?id=com.adhischool.cco '
    },
    {
        id: 16,
        image: desiMusic,
        category: 'Mobile Application',
        title: 'Desimusic',
        subTitle: 'Hindi Songs & Radio',
        link: 'https://apps.apple.com/us/app/hindi-songs-desi-bollywood/id364595835'
    },
    {
        id: 17,
        image: videomyjob,
        category: 'Mobile Application',
        title: 'VideoMyJob',
        subTitle: 'Create, edit and share video job ads',
        link: 'https://play.google.com/store/apps/details?id=com.videomyjob.vmjandroid&amp;hl=en'
    },
    {
        id: 18,
        image: ranker,
        category: 'Mobile Application',
        title: 'Ranker',
        subTitle: 'Vote on Everything',
        link: 'https://apps.apple.com/us/app/ranker/id1418695073'
    },
    {
        id: 19,
        image: matshepo,
        category: 'Web Application',
        title: 'Matshepo',
        subTitle: 'Moving Picture Company',
        link: 'https://www.matshepo.com/'
    },
]

// ------------------ ABOUT vision, mission and history Data ------------------
export const cardsData = [
    {
        id: 'vision',
        title: 'Our Vision',
        content: {
            text: 'Our vision is to be a global leader in software innovation, known for revolutionizing industries, transforming lives, and shaping the future of technology. We aspire to create groundbreaking solutions that redefine the possibilities of what software can achieve, driving positive change and unlocking new opportunities for businesses and individuals around the world. With a relentless focus on excellence, creativity, and customer-centricity, we aim to inspire the next generation of innovators and leave a lasting legacy of technological advancement and positive impact on society.',
            image: '🔮'
        }
    },
    {
        id: 'mission',
        title: 'Our Mission',
        content: {
            text: 'Our mission is to empower businesses and individuals by delivering cutting-edge software solutions that streamline processes, drive efficiency, and unlock new possibilities. We are committed to leveraging the latest technologies, embracing innovation, and exceeding customer expectations to drive sustainable growth and create lasting value for our stakeholders. Through our passion for excellence and dedication to customer success, we aim to be a trusted partner in driving digital transformation and shaping the future of technology.',
            image: '🎯'
        }
    },
    {
        id: 'history',
        title: 'Our History',
        content: {
            text: 'Launched in 2017 with a small office in India, Tricta Technologies began its journey with a vision to deliver quality digital solutions. Over the years, we have expanded our presence to multiple centers across Asia, Australia, and North America. Our growth has been driven by a strong commitment to innovation, collaboration, and client satisfaction. Today, we proudly serve a diverse global clientele from these regions and beyond.',
            image: '✍🏻'
        }
    }
];

// ------------------ TEAM Members Data------------------
export const teamMembersData = [
    {
        image: jomonJacob,
        name: "Jomon Jacob",
        title: "CEO",
        url: 'https://www.linkedin.com/in/jomonjacob/',
        description: "Jomon Jacob is a highly experienced IT professional with over 20 years in leading Indian and international software projects. Known for his expertise in agile methodologies, he is always approachable and supportive to colleagues and clients. In addition to his work in IT, he is involved in various business ventures, including film production. His film The Great Indian Kitchen was honored with the Kerala State Award for Best Film in 2020."
    },
    {
        image: arunGToms,
        name: "Arun G Toms",
        title: "CTO",
        url: 'https://www.linkedin.com/in/arungtoms/',
        description: "Arun manages the operations team and plays a key role in the smooth day-to-day running of the company. He is an AWS Certified Solutions Architect – Professional with 12 years of experience in architecting, implementing, and managing robust cloud solutions.Arun specializes in optimizing AWS services to meet business requirements, enhance performance, ensure cost-effectiveness and compliance with industry standards."
    },
    {
        image: antonyVincent,
        name: "Antony Vincent",
        title: "COO",
        url: 'https://www.linkedin.com/',
        description: "Antony works behind the scenes, focusing on the management and financial side of the company, which is his area of expertise. With 12 years of experience, he has led financial strategies across various industries. He is skilled in financial planning, risk management, and improving operations to boost business performance. Antony is a strategic thinker with a strong record of driving growth and increasing value for stakeholders."
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "Name",
        title: "position",
        url: 'https://www.linkedin.com/',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    }
];

// ------------------  ------------------
export const techIcon = {
    mobile: {
        title: "Mobile Development",
        icons: [
            { name: "iOS", icon: ios },
            { name: "Android", icon: android },
            { name: "Flutter", icon: flutter },
            { name: "React Native", icon: reactNative },
            { name: "JQuery", icon: jquery },
        ]
    },
    web: {
        title: "Web Development & Cloud Technologies",
        icons: [
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "Javascript", icon: javascript },
            { name: "Bootstrap", icon: bootstrap },
            { name: "Tailwind CSS", icon: tailwindcss },
            { name: "Java", icon: java },
            { name: "PHP", icon: php },
            { name: "Laravel", icon: laravel },
            { name: "React", icon: react },
            { name: "Angular", icon: angular },
            { name: "Node.js", icon: node },
            { name: "MongoDB", icon: mongodb },
            { name: "Python", icon: python },
            { name: "PostgreSQL", icon: postgreSql },
            { name: "MariaDB", icon: mariaDB },
            { name: "WordPress", icon: wordPress },
            { name: "MySQL", icon: mySql },
            { name: "AWS", icon: aws },
            { name: "Google Cloud", icon: cloud },
            { name: "Microsoft Azure", icon: azure },
        ]
    }
};

// ------------------ service data ------------------
export const servicesData = [
    {
        id: 1,
        title: 'Mobile Application Development',
        subTitle: 'Let your business go further with a thoughtfully crafted mobile application.',
        about: 'At Tricta Technologies, we work closely with you to design and develop mobile solutions that align with your vision and goals. Whether you’re enhancing customer engagement or streamlining internal processes, we’re here to support you every step of the way.',
        image: mobileDevelopmentImage,
        height: 'h-auto',
        animation1: animationSettings.fadeInBottomToTop,
        animation2: animationSettings.fadeInRightToLeft,
    },
    {
        id: 2,
        title: 'Web Application Development',
        subTitle: 'Drive your business forward with a powerful web application.',
        about: 'At Tricta Technologies, we work closely with you to create web solutions that reflect your vision and support your business objectives. From improving user experiences to streamlining workflows, we’re committed to delivering applications that grow with you and add lasting value.',
        image: webDevelopmentImage,
        height: 'h-auto',
        animation1: animationSettings.fadeInBottomToTop,
        animation2: animationSettings.fadeInLeftToRight,
    },
    {
        id: 3,
        title: 'Ecommerce Solutions',
        subTitle: 'Build a Smarter eCommerce Experience for Your Customers.',
        about: 'At Tricta Technologies, we build secure and scalable eCommerce platforms tailored to your business needs. From smooth checkout experiences to seamless payment integration, our solutions are designed to enhance usability and drive growth. We focus on delivering reliable, user-friendly systems that help you grow your online presence with confidence and ease.',
        image: ecommerceSolution,
        height: 'h-[400px]',
        animation1: animationSettings.fadeInLeftToRight,
        animation2: animationSettings.fadeInRightToLeft,
    },
    {
        id: 4,
        title: 'Digital Marketing',
        subTitle: 'Accelerate your brand’s growth with strategic digital marketing.',
        about: 'At Tricta Technologies, we help you connect with your audience through data-driven, results-focused digital marketing strategies. From SEO and content creation to social media and paid campaigns, we tailor each approach to meet your unique goals—ensuring your brand stands out, engages effectively, and drives measurable success.',
        image: digitalMarketing,
        height: 'h-[400px]',
        animation1: animationSettings.fadeInTopToBottom,
        animation2: animationSettings.fadeInLeftToRight,
    },
    {
        id: 5,
        title: 'Testing',
        subTitle: 'Ensure quality and reliability with expert software testing.',
        about: 'At Tricta Technologies, we provide comprehensive software testing services to help you deliver flawless, high-performing applications. From functional and performance testing to security and usability checks, our approach is thorough, efficient, and tailored to your product’s needs—ensuring every release meets the highest standards of quality and user satisfaction.',
        image: testing,
        height: 'h-[400px]',
        animation1: animationSettings.fadeInBottomToTop,
        animation2: animationSettings.fadeInRightToLeft,
    },
    {
        id: 6,
        title: 'IOT Solutions',
        subTitle: 'Empower Your Business with Smart IoT Solutions.',
        about: 'At Tricta Technologies, we transform the way you operate by integrating intelligent IoT systems tailored to your needs. From smart devices and real-time analytics to automation and connectivity, our end-to-end IoT solutions help you streamline operations, improve efficiency, and unlock new growth opportunities—driving innovation at every level.',
        image: iot,
        height: 'h-[400px]',
        animation1: animationSettings.fadeInBottomToTop,
        animation2: animationSettings.fadeInLeftToRight,
    },

    {
        id: 7,
        title: 'Website Designing',
        subTitle: 'Elevate Your Brand with Intelligent UI/UX Design.',
        about: 'At Tricta Technologies, we transform user interactions into meaningful experiences through smart, intuitive UI/UX design. By blending creativity with data-driven insights, our tailored designs enhance engagement, simplify journeys, and empower your business to connect deeper with customers—making every digital touchpoint count.',
        image: design,
        height: 'h-[400px]',
        animation1: animationSettings.fadeInLeftToRight,
        animation2: animationSettings.fadeInRightToLeft,
    },
    {
        id: 8,
        title: 'Server & Cloud Support',
        subTitle: 'Keep Your Infrastructure Secure, Scalable, and Always Online with Expert Server & Cloud Support.',
        about: 'At Tricta Technologies, we provide expert server and cloud support services to ensure your digital infrastructure is always secure, optimized, and ready for growth. From proactive monitoring and system tuning to cloud migration and data recovery, we manage the backend—so you can power your business without interruption.',
        image: serverSupport,
        height: 'h-[400px]',
        animation1: animationSettings.fadeInTopToBottom,
        animation2: animationSettings.fadeInLeftToRight,
    },
    // {
    //     id: 8,
    //     title: 'WordPress maintenance & Support',
    //     subTitle: 'Keep Your Website Secure, Fast, and Up-to-Date with Expert WordPress Support.',
    //     about: 'At Tricta Technologies, we offer reliable WordPress maintenance and support services to ensure your website runs smoothly 24/7. From regular updates and security monitoring to performance optimization and issue resolution, we handle the technical side—so you can focus on growing your business with confidence.',
    //     image: wordpress,
    //     height: 'h-[400px]'
    // },

]


// ---------------- service Details Page ----------------
import mobileAppBanner from '../assets/images/services/mobile-application-banner.png'
import webAppBanner from '../assets/images/services/web-app-banner.png'
import testingBanner from '../assets/images/services/testing-banner.png'
import eCommerceBanner from '../assets/images/services/e-commerce-banner.png'
import webDesignBanner from '../assets/images/services/web-design-banner.jpg'
import digitalMarketingBanner from '../assets/images/services/digital-marketing-banner.png'
import cloudServerBanner from '../assets/images/services/cloud-server-banner.png'
import cloudBanner1 from '../assets/images/services/cloud-banner.png'
import iotBanner from '../assets/images/services/iot-banner.png'

// ------------------ testimonials data ------------------
export const testimonials = [
    {
        name: "Pietro Saccomani",
        role: "Founder, Fifty Pixels Limited",
        content: "We love working with the team at Tricta. They’ve been an invaluable resource for us, allowing us to grow and serve more and more customers with the support of their team of developers and project managers. They’re reliable, always available and communicate well. I’d highly recommend working with them on your next project.",
        rating: 5
    },
    {
        name: "Sunny Clark",
        role: "Founder, Leading Fintech company",
        content: "Tricta is beyond professional in all their dealings and I am only glad to recommend them to anyone who wants to have a good job done on their project. Glad to have worked with them.",
        rating: 5
    },
    {
        name: "Matt",
        role: "Founder, Matshepo",
        content: "I like working with Jomon and his team at Tricta, as they made me quite comfortable in explaining all the technical aspects of my project to me, and was quite attentive to all my requirements, suggestions and remarks. Hope to work with them again.",
        rating: 5
    },
    {
        name: "Beza Worku",
        role: "Founder, Tangerines LLC",
        content: "We've been working with Tricta for quite a long time, and we intend to continue our business relationship because of the ease to doing business with them, and ability to communicate with them at any point. Their dynamic team always comes with quick, yet robust solutions whenever a requirement arises, and hence we don't think we need another partner for any of our IT development needs, anytime soon.",
        rating: 5
    },
    
];
