import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDownload, 
  FaAddressBook, 
  FaTools, 
  FaFolderOpen, 
  FaStar 
} from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-300 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">Charulata</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 px-6 relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl z-10"
        >
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">Hi, I'm Charulata 🤖</h1>
          <p className="text-xl mb-6 text-gray-300">Aspiring Full Stack Developer</p>
          <p className="mb-8 text-lg opacity-90 text-gray-400">
            Passionate about building modern web applications and exploring AI & ML technologies.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg inline-block"
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* AI/robot background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://cdn.pixabay.com/photo/2020/12/01/13/20/robot-5794464_1280.png"
            alt="AI Robot Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 text-center bg-gray-900 relative overflow-hidden">

        {/* Floating AI Emojis */}
        <motion.div
          className="absolute top-10 left-5 text-4xl opacity-70"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          🤖
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-4xl opacity-70"
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          🧠
        </motion.div>

        <motion.h2
          className="text-4xl font-bold mb-6 text-cyan-400 animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me 🤖
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-gray-300 text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m <span className="text-cyan-400 font-semibold">a second-year Computer Science student </span>, 
          specializing in 
          <span className="text-purple-400 font-semibold"> Artificial Intelligence</span> 🤖.  
          I’m passionate about building innovative AI-driven solutions, exploring 
          modern technologies, and contributing to impactful tech projects ⚡.
        </motion.p>

        {/* Download Resume Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          <FaDownload />
          <span>Download Resume 📄</span>
        </motion.a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12 text-white flex justify-center items-center gap-3">
          <FaFolderOpen />
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* PORTFOLIO PROJECT */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl transition-all duration-300 hover:border-gray-600 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Portfolio Website
            </h3>
            <p className="text-gray-400 mb-4">
              A responsive personal portfolio website built using React, Tailwind CSS, and Framer Motion. It showcases skills, projects, and includes a resume download.
            </p>
            <p className="text-sm text-gray-300 mb-4">
              React • Tailwind CSS • Framer Motion • Vite
            </p>
            <a
              href="https://github.com/charulata871/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Github  →
            </a>
          </motion.div>

          {/* BLACKJACK (New) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl transition-all duration-300 hover:border-gray-600 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Blackjack Game (GitHub Repo)
            </h3>
            <p className="text-gray-400 mb-4">
              A JavaScript game repository with Blackjack logic and interactive UI.
            </p>
            <p className="text-sm text-gray-300 mb-4">HTML • CSS • JavaScript</p>
            <a
              href="https://github.com/charulata871/Black-jack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Github  →
            </a>
          </motion.div>

          {/* GREEN PATH */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl transition-all duration-300 hover:border-gray-600 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              The Green Path
            </h3>
            <p className="text-gray-400 mb-4">
              Interactive web-based game focusing on DOM manipulation and responsive design.
            </p>
            <p className="text-sm text-gray-300 mb-4">HTML • CSS • JavaScript</p>
            <a
              href="https://github.com/AS-pngg/The-Green-Path"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Github  →
            </a>
          </motion.div>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-24 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 flex justify-center items-center gap-3">
          <FaStar />
          Activities & Interests
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300 text-lg"
        >
          <ul className="space-y-3">
            <li>• FM Radio Host 📻</li>
            <li>• Youth Parliament Participant 🏛️</li>
            <li>• Poetry Recitation ✍️</li>
          </ul>
          <ul className="space-y-3">
            <li>• Hackathon Enthusiast 💻</li>
            <li>• Open-source Exploration 🌐</li>
          </ul>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 flex justify-center items-center gap-3">
          <FaTools />
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-300">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Languages</h3>
            <p>C, C++, JavaScript</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Web Technologies</h3>
            <p>HTML, CSS, Responsive Design, React</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Tools & Concepts</h3>
            <p>Git, GitHub, DOM Manipulation, Data Structures, Problem Solving</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900 overflow-hidden">
        <h2 className="text-5xl font-bold text-center mb-12 text-cyan-400 animate-pulse flex justify-center items-center gap-3">
          <FaAddressBook />
          Contact Me
        </h2>
        <div className="max-w-xl mx-auto text-center space-y-8 z-10 relative">
          <p className="text-gray-300 text-lg">Let's collaborate on AI & ML projects 🚀✨</p>

          <div className="flex justify-center gap-12 text-5xl">
            <motion.a href="https://github.com/charulata871" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, color: "#0ff" }} className="transition-colors duration-300 text-gray-300">
              <FaGithub />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/charu-lata-022a32354"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#8a2be2" }}
              className="transition-colors duration-300 text-gray-300"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a href="mailto:cln.charulata.871@gmail.com" whileHover={{ scale: 1.3, color: "#00ffff" }} className="transition-colors duration-300 text-gray-300">
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* AI/robot background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://cdn.pixabay.com/photo/2020/12/01/13/20/robot-5794464_1280.png"
            alt="AI Robot Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </section>
    </div>
  );
}

export default App;