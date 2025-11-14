import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from from-[#f6552d] to-[#bb8476] bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">PlanAhead App</h3>
            <p className="text-gray-400 mb-4">
              Digital calendar where authenticated users can view and manage their tasks by month or by week.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Flask", "SQLite", "Bootstrap"].map(
                (item, key) => (
                  <span
                    key={key}
                    className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://planahead-daa2.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
  
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">CSV to Database Importer</h3>
            <p className="text-gray-400 mb-4">
              Python app to import CSV files into SQLite database while cleaning and validating data.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "SQLite"].map((item, key) => (
                <span
                  key={key}
                  className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/saraccmululo/CSV_to_Database_Importer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →{" "}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">Plant Pals Web App</h3>
            <p className="text-gray-400 mb-4">
              Plant care web app to help gardeners manage their plant
              collections.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "CSS", "Firebase (Auth & Firestore)"].map(
                (item, key) => (
                  <span
                    key={key}
                    className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://saraccmululo.github.io/Plant-Pal-Web-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">Website Traffic Analysis Database 
            </h3>
            <p className="text-gray-400 mb-4">
              Database system designed to analyze website traffic and user behavior.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["SQLite", "SQL", "ER Modeling"].map((item, key) => (
                <span
                  key={key}
                  className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://chat-messaging-app-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">Game Collection Web App</h3>
            <p className="text-gray-400 mb-4">
              Game manager app to organize game collection by title, genre, and
              platform (built while following a course tutorial).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "CSS", "Express(Node.js)"].map((item, key) => (
                <span
                  key={key}
                  className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://game-manager-app-vite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          
          {/*  
          <h3 className="text-xl font-bold mb-2">Chat Messaging Web App</h3>
            <p className="text-gray-400 mb-4">
              Real-time chat message web app (built while following a course tutorial).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TypeScript", "Supabase"].map((item, key) => (
                <span
                  key={key}
                  className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://chat-messaging-app-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
            <p className="text-gray-400 mb-4">
              Quiz web app with score and restart functionalities (built while following a course tutorial).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "CSS"].map((item, key) => (
                <span
                  key={key}
                  className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://saraccmululo.github.io/Quiz-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →{" "}
              </a>
            </div>
          </div>
        */}

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">Project Manager App</h3>
            <p className="text-gray-400 mb-4">
              Project manager to help users track, edit, and delete tasks (built while following a course tutorial).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwind CSS"].map((item, key) => (
                <span
                  key={key}
                  className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://saraccmululo.github.io/Project-Management-Webpage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →{" "}
              </a>
            </div>
          </div>
          {/* 
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
           
            <h3 className="text-xl font-bold mb-2">Food Order App</h3>
            <p className="text-gray-400 mb-4">
              Food web app with checkout functionality (built while following a course tutorial).
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "CSS"].map((item, key) => (
                <span
                  key={key}
                  className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover:shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://food-order-app-gtqx.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →{" "}
              </a>
            </div>
           
          </div>
          */}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
