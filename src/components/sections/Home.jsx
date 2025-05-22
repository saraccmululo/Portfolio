import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f6552d] to-[#bb8476] bg-clip-text leading-right text-transparent">
          Hi, I'm Sara CCM
        </h1>
        <p className="text-white text-lg mb-8 max-w-lg mx-auto">
          I'm a web developer specialized in building responsive, user-friendly websites and creating innovative solutions that make an impact.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-[#915c4f] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(145,92,79,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-3 border-[#915c4f] text-[#915c4f] py-3 px-6 rounded font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(145,92,79,0.2)] hover:bg-[#915c4f] hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
