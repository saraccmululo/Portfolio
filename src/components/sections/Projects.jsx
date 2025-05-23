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
            <h3 className="text-xl font-bold mb-2">Plant Pals Website</h3>
            <p className="text-gray-400 mb-4">
              Plant care web app to help gardeners manage their plant
              collections.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "CSS3", "Firebase (Auth & Firestore)"].map(
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
            <h3 className="text-xl font-bold mb-2">Chat Messaging App</h3>
            <p className="text-gray-400 mb-4">
              Real-time chat message web app.
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
            <h3 className="text-xl font-bold mb-2">Game Manager Website</h3>
            <p className="text-gray-400 mb-4">
              A web app to manage game collection by title, genre, and
              platform."
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Express(Node.js)"].map((item, key) => (
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
                href="https://github.com/saraccmululo/Game-Manager-App"
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
              Quiz web app with score and restart functionalities.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Express(Node.js)"].map((item, key) => (
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

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">Blog Post Website</h3>
            <p className="text-gray-400 mb-4">
              Blog web page to create, edit, and delete posts.
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
                href="https://github.com/saraccmululo/Blog-React-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →{" "}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.1)] transition-all ">
            <h3 className="text-xl font-bold mb-2">Food Order App</h3>
            <p className="text-gray-400 mb-4">
              Food web app with checkout functionality.
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
                href="https://github.com/saraccmululo/Food-Order-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b3472c] hover:text-[#915c4f] transition-colors my-4"
              >
                View Project →{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
