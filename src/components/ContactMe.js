// 📂 components/ContactSection.jsx
export default function ContactMe() {
  return (
    <section className="py-12   w-full scroll-mt-[40px]" id="contact">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mb-10">
        I am currently ✨ <em>open to work</em> ✨ feel free to reach out.
      </p>
      <form className="m-3 space-y-6 font-bold text-accent">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 italic bg-opacity-30 rounded-xl bg-tertiary focus:ring-2 focus:ring-tertiary focus:outline-none transition-all placeholder:text-white  text-lg shadow-md"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 italic bg-opacity-30 rounded-xl bg-tertiary focus:ring-2 focus:ring-tertiary focus:outline-none transition-all placeholder:text-white  text-lg shadow-md"
          />
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <textarea
            placeholder="Your Message"
            className="w-full p-3 h-32 italic rounded-xl bg-tertiary focus:ring-2 focus:ring-tertiary bg-opacity-30 focus:outline-none transition-all placeholder:text-white  text-lg shadow-md resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-1/3 p-3 text-white font-bold text-lg rounded-xl bg-secondary hover:opacity-90 transition-all duration-300 shadow-md"
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}
