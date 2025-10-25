export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Tekst */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Odkryj moc Tailwind CSS
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-xl mx-auto lg:mx-0">
            Twórz piękne i responsywne interfejsy bez wychodzenia z HTML-a. 
            Mobilne-first, dark mode i pełna kontrola nad designem.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold shadow-md hover:shadow-xl hover:bg-indigo-50 transition"
            >
              Zacznij teraz
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-2xl bg-indigo-500 text-white font-semibold shadow-md hover:shadow-xl hover:bg-indigo-400 transition"
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>

        {/* Obrazek */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-400/30 to-indigo-900/30 blur-3xl rounded-full"></div>
          <img
            src="https://source.unsplash.com/600x400/?technology"
            alt="Example"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}