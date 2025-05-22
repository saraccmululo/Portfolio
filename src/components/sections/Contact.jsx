import RevealOnScroll from "../RevealOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from from-[#f6552d] to-[#bb8476] bg-clip-text text-transparent text-center">
            Let's Connect
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#bb8476] focus:bg-[#bb8476]/50"
                placeholder="Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#bb8476] focus:bg-[#bb8476]/50"
                placeholder="example@email.com"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#bb8476] focus:bg-[#bb8476]/50"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="w-full bg-[#915c4f] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(145,92,79,0.4)]">Send Message</button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
