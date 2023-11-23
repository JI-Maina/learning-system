import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "courses",
    href: "/courses",
  },
  {
    name: "pricing",
    href: "/pricing",
  },
  {
    name: "become an instructor",
    href: "/becomeaninstructor",
  },
  {
    name: "login",
    href: "/login",
  },
];

export const hero = {
  title: "Content Management Solution",
  subtitle: "Online E-Learning and Coaching Platform For Learners",
  buttonText: "Get started",
  buttonText1: "About courses",
};

export const whyus = {
  title: "EDUCATION FOR EVERYONE",
  subtitle:
    "Our Learning Management System (LMS) is a comprehensive digital platform that provides a seamless and engaging learning experience for learners and instructors alike.",
  reasons: [
    {
      title: "Scorm Courses",
      subtitle:
        "Generate your desired course content with the help of Chomoka Studio.",
    },
    {
      title: "Content Management",
      subtitle:
        "Manage your meetings and Courses in one place accessible at anytime",
    },
    {
      title: "Custom Domain",
      subtitle:
        "We create extention of a domain for your own institution to access privately",
    },
    {
      title: "Video Conferences",
      subtitle:
        "Enjoy live sessions/meeting and chats with your clients/learners",
    },
  ],
};

export const about = {
  title: "Know Something About us and Culture at Learning Africa",
  subtitle:
    "We aim to help organizations build the skills, knowledge, and confidence of their learners to ensure that they are well positioned for growth in the future; primarily in Africa but not limited to the continent",
  buttonText: "Learn More",
};

export const popularCourses = {
  title: "Popular And Trending Courses",
  caption: "Learn at your own pace",
  subtitle:
    "Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!",
  courses: [
    {
      lessons: "12 Lessons",
      seats: "25 seats",
      title: "Learn How to Learn Basic Web Design (UX/UI)",
      cost: "$256",
      image: "/images/course1.jpg",
      instructor: "John Doe",
      profile: "/avatars/avatar1.jpg",
    },
    {
      lessons: "12 Lessons",
      seats: "25 seats",
      title: "Learn How to Learn Basic Web Development",
      cost: "$25",
      image: "/images/course2.jpg",
      instructor: "John Doe",
      profile: "/avatars/avatar.jpg",
    },
    {
      lessons: "12 Lessons",
      seats: "25 seats",
      title: "Learn How to Learn Advance Web Development",
      cost: "$0",
      image: "/images/course3.jpg",
      instructor: "John Doe",
      profile: "/avatars/avatar1.jpg",
    },
  ],
};

export const cta = {
  title: "Register your team(s) today",
  subtitle: "regestration starts in January",
  buttonText: "Download form",
};

export const testimonial = {
  title: "What people are saying about us",
  subtitle:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ipsam",
  persons: [
    {
      avatar: "/avatars/avatar.jpg",
      name: "Josh Smith",
      title: "Manager of Kenya United",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: "/avatars/avatar1.jpg",
      name: "Brandi Johns",
      title: "Manager of Kenya United",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: "/avatars/avatar.jpg",
      name: "Paula Pfeffer",
      title: "Manager of Kenya United",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const footer = {
  socials: [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "twitter", icon: <FaXTwitter /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "linkedin", icon: <FaLinkedinIn /> },
  ],
  links: [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/courses" },
    { name: "Pricing", link: "/pricing" },
    {
      name: "Become an Instructor",
      link: "/becomeaninstructor",
    },
  ],
  contacts: [
    { icon: <FaPhoneAlt />, contact: "0712345678" },
    { icon: <FaWhatsapp />, contact: "0712345678" },
    {
      icon: <MdEmail />,
      contact: "info@learningafrica.com",
    },
  ],
};
