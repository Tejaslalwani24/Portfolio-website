import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileImg from "./assets/Profile-img.png";
import LogoImg from "./assets/Logo.png";

function App() {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Devicon CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      {/* Navbar */}
      <nav
        className="
    sticky top-0 z-50
    h-15 bg-[#29272B]
    text-white text-sm
    flex items-center justify-end
  "
      >
        <ul className="mr-12 flex gap-6">
          {navItems.map(({ label, id }) => (
            <li
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
          cursor-pointer
          transition-all
          duration-200
          ease-out
          hover:opacity-70
          hover:-translate-y-1
          hover:scale-105
        "
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Section */}
      <main
        className="bg-[#1C1B1A] text-white min-h-screen scroll-mt-24"
        id="home"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={ProfileImg}
            alt="Profile"
            className="mt-11 w-48 h-48 rounded-full object-cover"
          />
        </div>

        {/* Headline */}
        <div className="flex justify-center mt-7 text-5xl text-center">
          <div>
            <h1>Code. Create. Learn.</h1>
            <h1>Repeat.</h1>
          </div>
        </div>

        {/* Description */}
        <div className="flex justify-center">
          <p className="mt-10 max-w-xl text-center text-base font-medium text-neutral-300">
            Hi, I’m Tejas Lalwani, a student at Rutgers University – New
            Brunswick, double majoring in Computer Science and Data Science. I
            enjoy turning ideas into real-world projects and sharing what I
            learn along the way.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-6">
          <button
            className="
      px-6 py-2 rounded-3xl font-medium
      bg-white text-[#1C1B1A]
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:scale-105
      hover:bg-[#29272B] hover:text-white
    "
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </button>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
      px-6 py-2 rounded-3xl font-medium border
      text-white  bg-[#29272B]
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:scale-105
      hover:bg-white hover:text-[#1C1B1A]
    "
          >
            View Resume
          </a>
        </div>

        {/* Skills */}
        <div className="flex justify-center mt-14">
          <h2 className="font-medium">Experience With</h2>
        </div>

        <div className="flex items-center justify-center gap-10 text-4xl mt-6">
          <i className="devicon-java-plain" />
          <i className="devicon-python-plain" />
          <i className="devicon-javascript-plain" />
          <i className="devicon-react-original" />
          <i className="devicon-express-original" />
          <i className="devicon-html5-plain" />
          <i className="devicon-css3-plain" />
          <i className="devicon-tailwindcss-plain" />
          <i className="devicon-mongodb-plain" />
        </div>

        {/* Projects */}
        <div
          className="flex justify-center text-4xl mt-16 font-bold scroll-mt-24"
          id="projects"
        >
          Projects
        </div>
        <div className="max-w-2xl mx-auto mt-10">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-5">
            <img src={LogoImg} alt="Rutgers" className="h-10 opacity-85" />
            <h1 className="font-bold text-lg text-white">
              Habitus – Habit Tracker App Website
            </h1>
          </div>

          {/* Bullet points */}
          <div className="text-base font-medium text-neutral-300">
            <p>
              ● Developed a frontend website to showcase a habit-tracking
              application using HTML and JavaScript (React) with a
              component-based architecture.
              <br />
              <br />
              ● Implemented animations and smooth UI transitions using Framer
              Motion and CSS, enhancing interactivity and visual flow across
              pages.
              <br />
              <br />
              ● Integrated React Router to enable seamless navigation between
              multiple pages, improving user experience through client-side
              routing and structured page organization.
              <br />
              <br />● Live Link:{" "}
              <a
                href="https://habitus-habit-tracker-website.vercel.app/"
                className="text-white hover:underline"
              >
                Habitus Website
              </a>
            </p>
          </div>
        </div>

        {/* Experience */}
        <div
          className="flex justify-center text-4xl mt-16 font-bold scroll-mt-24"
          id="experience"
        >
          Experience
        </div>

        {/* Experience Item 1 */}
        <div className="max-w-2xl mx-auto mt-10">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-5">
            <img
              src="https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fscarletknights.com%2Fimages%2F2020%2F9%2F30%2FBlackR.png&width=540&type=webp"
              alt="Rutgers"
              className="h-10 opacity-85"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-lg text-white">
                Data Manager · Busch Learning Center
              </h1>
              <p className="text-sm text-neutral-400">Oct 2025 – Present</p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="text-base font-medium text-neutral-300">
            <p>
              ● Validated and maintained a database of 165,290+ student records,
              performing 100+ data corrections daily.
              <br />
              <br />
              ● Processed manual sign-in data during kiosk outages and escalated
              critical anomalies.
              <br />
              <br />● Supported technical workflows and maintained accurate data
              pipelines across the organization.
            </p>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="max-w-2xl mx-auto mt-12">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-5">
            <img
              src="https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fscarletknights.com%2Fimages%2F2020%2F9%2F30%2FBlackR.png&width=540&type=webp"
              alt="Rutgers"
              className="h-10 opacity-85"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-lg text-white">
                Office Manager · Busch Learning Center
              </h1>
              <p className="text-sm text-neutral-400">Sep 2025 – Present</p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="text-base font-medium text-neutral-300">
            <p>
              ● Managed front-desk operations for 500+ daily visitors.
              <br />
              <br />
              ● Addressed 100+ weekly inquiries from students and faculty.
              <br />
              <br />● Maintained 99% record accuracy while enforcing center
              policies.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <section
        id="contact"
        className="bg-[#1C1B1A] text-white py-24 px-6 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>

          <p className="text-gray-300 text-base font-medium max-w-xl mb-8">
            Interested in working together or have a question? I’m always open
            to new opportunities, collaborations, and interesting projects.
          </p>

          <a
            href="mailto:tejaslalwani24@outlook.com"
            className="text-base font-medium text-white hover:underline"
          >
            tejaslalwani24@outlook.com
          </a>

          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://github.com/Tejaslalwani24"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <i className="devicon-github-original text-3xl"></i>
            </a>

            <a
              href="https://linkedin.com/in/tejas-lalwani-a456962ab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <i className="devicon-linkedin-plain text-3xl"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
