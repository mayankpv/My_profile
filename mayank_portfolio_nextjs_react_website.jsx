import { motion } from "framer-motion";


export default function PortfolioWebsite() {
  const experiences = [
    {
      company: "Taboola",
      role: "Frontline PS Sr. Support Engineer",
      duration: "Sep 2025 – Present",
      points: [
        "Mentoring engineers and conducting onboarding training",
        "Investigating campaign discrepancies and tracking issues",
        "Improving workflows using AI tools like Claude",
        "Maintaining high CSAT and SLA adherence",
      ],
    },
    {
      company: "Taboola",
      role: "Frontline PS Support Engineer",
      duration: "Dec 2023 – Sep 2025",
      points: [
        "Campaign optimization and tracking analysis",
        "Root cause analysis for discrepancy investigations",
        "GA4 attribution and campaign monitoring",
        "Cross-functional collaboration with Account Managers",
      ],
    },
    {
      company: "Fareye",
      role: "Technical Engineer",
      duration: "Sep 2021 – Nov 2023",
      points: [
        "API testing using Postman",
        "SQL troubleshooting and backend modifications",
        "Monitoring systems with New Relic",
        "Client customization and enterprise support",
      ],
    },
    {
      company: "Tata Consultancy Services",
      role: "Programmer",
      duration: "Sep 2018 – Jul 2019",
      points: [
        "Server monitoring and alert management",
        "Security and performance analysis",
        "Operational troubleshooting and support",
      ],
    },
  ];

  const skills = [
    "GA4",
    "SQL",
    "API Testing",
    "Postman",
    "New Relic",
    "Campaign Optimization",
    "Pixel Tracking",
    "Log Analysis",
    "Root Cause Analysis",
    "Client Success",
    "Team Mentoring",
    "Claude AI",
  ];

  const certifications = [
    "Cisco - Introduction to Cybersecurity",
    "Cisco - Cybersecurity Essentials",
    "Google Digital Garage - Digital Marketing",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
      </div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            Mayank Pandey
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#certifications" className="hover:text-blue-400 transition">
              Certifications
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-gray-950 to-black">
        {/* Floating Tech Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute top-32 left-10 hidden lg:block"
        >
          <div className="text-6xl opacity-30">💾</div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute bottom-32 right-16 hidden lg:block"
        >
          <div className="text-7xl opacity-30">📊</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500 text-blue-400 text-sm mb-6 bg-blue-500/10 backdrop-blur-md">
            <span>✨</span>
            Senior Support Engineer • AdTech Specialist
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-blue-500">Mayank Kumar Pandey</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Results-driven Technical Support Engineer with 6+ years of experience in
            AdTech, campaign optimization, analytics, troubleshooting, and client
            success.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#experience"
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              View Experience
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-blue-500 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              I specialize in solving complex technical issues, campaign
              investigations, tracking analysis, and enterprise support.
              Currently working at Taboola, I collaborate closely with Account
              Managers and clients to deliver high-impact technical solutions.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              My expertise includes GA4, SQL, API testing, monitoring tools,
              tracking implementation, and workflow optimization using AI tools.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 mb-4"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Technology workspace"
                className="rounded-3xl w-full h-64 object-cover border border-gray-800 shadow-2xl"
              />
            </motion.div>
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">6+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">100%</h3>
              <p className="text-gray-400">Client Focused</p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">GA4</h3>
              <p className="text-gray-400">Analytics Expertise</p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">AI</h3>
              <p className="text-gray-400">Workflow Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-gray-950 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Professional Experience
          </h2>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-black/70 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-blue-400 text-lg">{exp.company}</p>
                  </div>

                  <span className="text-gray-400 mt-3 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3 text-gray-400">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.08 }}
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-lg transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 px-6 bg-gray-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={index}
                className="bg-black/70 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl"
              >
                <div className="text-blue-500 text-3xl mb-4">🏆</div>
                <p className="text-gray-300 leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I'm open to discussing AdTech opportunities, technical support
            roles, collaboration, and freelance consulting projects.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex justify-center items-center gap-3 text-gray-300">
              <span className="text-blue-500 text-2xl">📧</span>
              <p>mayankpandey198@gmail.com</p>
            </div>

            <div className="flex justify-center items-center gap-3 text-gray-300">
              <span className="text-blue-500 text-2xl">📍</span>
              <p>Delhi, India</p>
            </div>

            <div className="flex justify-center items-center gap-3 text-gray-300">
              <span className="text-blue-500 text-2xl">💼</span>
              <p>LinkedIn • GitHub • Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        Built with React, Next.js & Tailwind CSS • © 2026 Mayank Kumar Pandey
      </footer>
    </div>
  );
}
