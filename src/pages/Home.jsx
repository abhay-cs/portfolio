import React, { useState, useEffect } from 'react';
import { FolderCode, Linkedin, Send, ExternalLink, ArrowUpRight, ArrowLeft } from 'lucide-react';
import Animation from '../components/Animation'; // adjust path as needed
import TorusKnot from '../components/ThreeDodecahedron';
const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [currentView, setCurrentView] = useState('main'); // 'main' or 'project'
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (currentView !== 'main') return;

            const sections = ['home', 'projects', 'about', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentView]);

    const scrollToSection = (sectionId) => {
        if (currentView !== 'main') {
            setCurrentView('main');
            setSelectedProject(null);
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const showProjectDetails = (project) => {
        setSelectedProject(project);
        setCurrentView('project');
        window.scrollTo(0, 0);
    };

    const backToMain = () => {
        setCurrentView('main');
        setSelectedProject(null);
    };

    const projects = [
        {
            name: "Zuno - Task Tracker App",
            description: "A collaborative task management application with real-time updates, user authentication, and team workspaces. Built with a focus on clean UI and seamless user experience.",
            stack: ["React", "Node.js", "MongoDB", "Socket.io"],
            github: "https://github.com/abhay-cs/zuno",
            demo: "https://abhaycs.com/zuno",
            fullDescription: "TaskTracker is a comprehensive project management solution built for small to medium-sized teams. The application features real-time collaboration, allowing team members to see updates instantly as they happen. Users can create projects, assign tasks, set deadlines, and track progress through an intuitive dashboard.",
            features: [
                "Real-time collaboration with WebSocket integration",
                "User authentication and role-based permissions",
                "Drag-and-drop task management interface",
                "Team workspaces with customizable boards",
                "Email notifications for task assignments and deadlines",
                "Progress tracking and reporting dashboard"
            ],
            challenges: "One of the main challenges was implementing real-time updates without overwhelming the database with frequent queries. I solved this by using Socket.io for instant updates and implementing efficient caching strategies with Redis.",
            learned: "This project taught me a lot about real-time web applications, database optimization, and user experience design. I also gained experience with deployment and scaling considerations."
        },
        // {
        //     name: "Personal Finance Dashboard",
        //     description: "Interactive dashboard for tracking expenses, budgeting, and financial goal setting. Features data visualization and automated categorization of transactions.",
        //     stack: ["Vue.js", "Python", "FastAPI", "Chart.js"],
        //     github: "https://github.com/yourusername/finance-dashboard",
        //     demo: "https://finance-dashboard-demo.netlify.app",
        //     fullDescription: "A comprehensive personal finance management tool that helps users track their spending, create budgets, and visualize their financial health. The application automatically categorizes transactions and provides insights through interactive charts and graphs.",
        //     features: [
        //         "Automatic transaction categorization using machine learning",
        //         "Interactive data visualizations with Chart.js",
        //         "Budget creation and tracking with alerts",
        //         "Financial goal setting and progress monitoring",
        //         "Secure bank account integration (simulated)",
        //         "Monthly and yearly financial reports"
        //     ],
        //     challenges: "The biggest challenge was implementing accurate transaction categorization. I used natural language processing to analyze transaction descriptions and built a machine learning model that learns from user corrections.",
        //     learned: "This project deepened my understanding of data visualization, API design, and machine learning integration. I also learned about financial data security and privacy considerations."
        // },
        // {
        //     name: "Recipe Sharing Platform",
        //     description: "Community-driven platform for sharing and discovering recipes. Includes user profiles, ratings, and advanced search with dietary filters.",
        //     stack: ["Next.js", "Prisma", "Tailwind CSS", "Vercel"],
        //     github: "https://github.com/yourusername/recipe-platform",
        //     demo: "https://recipe-platform-demo.vercel.app",
        //     fullDescription: "A social platform where cooking enthusiasts can share their favorite recipes, discover new dishes, and connect with other home cooks. The platform features advanced search capabilities, user profiles, and a rating system to help users find the best recipes.",
        //     features: [
        //         "User authentication and personalized profiles",
        //         "Recipe creation with rich text editor and image uploads",
        //         "Advanced search with dietary filters (vegan, gluten-free, etc.)",
        //         "Rating and review system",
        //         "Recipe collections and favorites",
        //         "Social features including following and recipe sharing"
        //     ],
        //     challenges: "Implementing the search functionality was complex, especially handling multiple filters and dietary restrictions. I used Prisma's advanced querying capabilities and implemented full-text search for recipe names and ingredients.",
        //     learned: "This project taught me about content management systems, image handling, and building social features. I also learned about SEO optimization and how to structure data for better discoverability."
        // },
        // {
        //     name: "API Rate Limiter",
        //     description: "Lightweight, configurable rate limiting middleware for REST APIs. Supports multiple algorithms and storage backends with detailed analytics.",
        //     stack: ["Node.js", "Redis", "Express", "TypeScript"],
        //     github: "https://github.com/yourusername/api-rate-limiter",
        //     demo: null,
        //     fullDescription: "A production-ready rate limiting middleware designed to protect APIs from abuse and ensure fair usage across all clients. The library supports multiple rate limiting algorithms and can be easily integrated into existing Express.js applications.",
        //     features: [
        //         "Multiple rate limiting algorithms (Token Bucket, Sliding Window)",
        //         "Redis and in-memory storage backends",
        //         "Configurable limits per endpoint or user",
        //         "Detailed analytics and monitoring",
        //         "TypeScript support with full type definitions",
        //         "Easy integration with Express.js middleware"
        //     ],
        //     challenges: "The main challenge was designing a flexible architecture that could support different algorithms and storage options while maintaining high performance. I had to carefully consider memory usage and implement efficient algorithms.",
        //     learned: "This project taught me about system design, performance optimization, and creating reusable libraries. I also learned about different rate limiting strategies and their trade-offs."
        // }
    ];

    const writings = [
        {
            title: "Learning in Public: My First Year as a Developer",
            summary: "Reflections on the challenges, victories, and lessons learned during my transition from student to professional developer.",
            date: "March 15, 2024",
            readTime: "6 min read"
        },
        {
            title: "Building Better APIs: Lessons from Real Projects",
            summary: "Practical insights gained from designing and implementing APIs for production applications, including common pitfalls and best practices.",
            date: "February 28, 2024",
            readTime: "8 min read"
        },
        {
            title: "Understanding React Hooks: A Practical Guide",
            summary: "A comprehensive walkthrough of React Hooks with real-world examples and patterns I've found useful in my projects.",
            date: "February 12, 2024",
            readTime: "10 min read"
        },
        {
            title: "The Power of Small Contributions",
            summary: "How making small, consistent contributions to open source projects helped me grow as a developer and connect with the community.",
            date: "January 25, 2024",
            readTime: "5 min read"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Navigation */}
            <nav className="sticky top-0 bg-gray-50/90 backdrop-blur-sm z-50 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-lg font-semibold text-gray-900 hover:text-emerald-700 transition-colors"
                        >
                            Abhay Sharma
                        </button>

                        <div className="hidden md:flex space-x-8">
                            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-sm transition-colors ${activeSection === item.toLowerCase()
                                        ? 'text-emerald-700 font-medium'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile menu - simplified */}
                        <div className="md:hidden">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-sm text-gray-600 hover:text-gray-900"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {currentView === 'main' ? (
                <>
                    {/* Home Section */}
                    <section id="home" className="pt-20 pb-16 px-6">
                        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-12">

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 mt-10 md:mt-0 pt-15">
                                <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">
                                    I build things.
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                                    I like figuring things out and building stuff.
                                </p>
                                <div className="flex space-x-6">
                                    <a href="https://github.com/abhay-cs" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                                        <FolderCode className="w-5 h-5 mr-2" />
                                        GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/in/abhaycs/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                                        <Linkedin className="w-5 h-5 mr-2" />
                                        LinkedIn
                                    </a>
                                    <a href="mailto:abhay.msgs@gmail.com" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                                        <Send className="w-5 h-5 mr-2" />
                                        Email
                                    </a>
                                </div>
                            </div>

                            {/* Animation Section */}
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
                                <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px]">
                                    <Animation />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="pt-4 pb-20 px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-16">
                                Projects
                            </h2>

                            <div className="space-y-16">
                                {projects.map((project, index) => (
                                    <div key={index} className="group">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                            <button
                                                onClick={() => showProjectDetails(project)}
                                                className="text-xl font-semibold text-gray-900 mb-2 md:mb-0 hover:text-emerald-700 transition-colors text-left"
                                            >
                                                {project.name}
                                            </button>
                                            <div className="flex space-x-4 text-sm">
                                                <a
                                                    href={project.github}
                                                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                                                >
                                                    GitHub
                                                    <ArrowUpRight className="w-3 h-3 ml-1" />
                                                </a>
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                                                    >
                                                        Live Demo
                                                        <ExternalLink className="w-3 h-3 ml-1" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.stack.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => showProjectDetails(project)}
                                            className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-800 transition-colors font-medium"
                                        >
                                            Read more
                                            <ArrowUpRight className="w-3 h-3 ml-1" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Writing Section */}
                    {/* <section id="writing" className="py-20 px-6 bg-white">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-16">
                                Writing
                            </h2>

                            <div className="space-y-12">
                                {writings.map((post, index) => (
                                    <article key={index} className="group cursor-pointer">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                            <h3 className="text-lg font-medium text-gray-900 group-hover:text-emerald-700 transition-colors mb-1 md:mb-0">
                                                {post.title}
                                            </h3>
                                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed max-w-3xl">
                                            {post.summary}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section> */}

                    {/* About Section */}

                    <section id="about" className="py-20 px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-12">
                                About
                            </h2>

                            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
                                <div className="max-w-3xl space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        I’m a Computer Science grad who likes building useful software. I'm focusing currently on full-stack development and enjoying both frontend and backend work.
                                    </p>
                                    <p>
                                        I love working with people who build things. I’m looking for opportunities to grow and contribute.
                                    </p>
                                </div>

                                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-[-60px]">
                                    <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px]">
                                        <TorusKnot />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-20 px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-8">
                                Let's connect
                            </h2>

                            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                                I'm always interested in new opportunities, or just a good
                                convo.
                            </p>

                            <a
                                href="mailto:abhay.msgs@gmail.com"
                                className="inline-flex items-center text-lg text-emerald-700 hover:text-emerald-800 transition-colors font-medium"
                            >
                                abhay.msgs@gmail.com
                                <ArrowUpRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-12 px-6 border-t border-gray-200">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-600 text-sm mb-4 md:mb-0">
                                © 2025 Abhay Sharma.
                            </p>

                            <div className="flex space-x-6">
                                <a
                                    href="https://github.com/abhay-cs"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <FolderCode className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/abhaycs"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:abhay.msgs@gmail.com"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </footer>
                </>
            ) : (
                /* Project Detail Page */
                <div className="pt-20 pb-32 px-6">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={backToMain}
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to projects
                        </button>

                        <div className="max-w-3xl">
                            <h1 className="text-4xl font-serif font-medium text-gray-900 mb-6">
                                {selectedProject?.name}
                            </h1>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {selectedProject?.stack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-6 mb-12">
                                <a
                                    href={selectedProject?.github}
                                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <FolderCode className="w-5 h-5 mr-2" />
                                    View on GitHub
                                </a>
                                {selectedProject?.demo && (
                                    <a
                                        href={selectedProject.demo}
                                        className="inline-flex items-center text-emerald-700 hover:text-emerald-800 transition-colors font-medium"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>

                            <div className="space-y-8 text-gray-700 leading-relaxed">
                                <div>
                                    <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">Overview</h2>
                                    <p>{selectedProject?.fullDescription}</p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">Key Features</h2>
                                    <ul className="space-y-2">
                                        {selectedProject?.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-emerald-700 mr-3 mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">Challenges & Solutions</h2>
                                    <p>{selectedProject?.challenges}</p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">What I Learned</h2>
                                    <p>{selectedProject?.learned}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;