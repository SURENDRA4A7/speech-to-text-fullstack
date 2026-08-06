import { Link } from "react-router-dom";
import { Mic, History, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-medium">
              <Sparkles size={18} />
              Speech Recognition System
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Real-Time
              <span className="text-blue-600"> Multilingual </span>
              Speech to Text
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Convert your voice into accurate text instantly using AI.
              Supports English, Hindi, Telugu and mixed-language conversations
              with real-time transcription.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/recorder"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Mic size={20} />
                Start Recording
              </Link>

              <Link
                to="/history"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <History size={20} />
                View History
              </Link>

            </div>
          </div>

          {/* Right Side */}
         <div className="group relative flex justify-center">

  <div className="absolute h-72 w-72 rounded-full bg-blue-400 blur-3xl opacity-20 transition duration-500 group-hover:opacity-60"></div>

  <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white shadow-2xl transition duration-500 group-hover:scale-110">

    {/* Animated Waves */}
    <div className="absolute h-48 w-48 rounded-full border-4 border-blue-300 opacity-0 group-hover:animate-ping"></div>

    <div className="absolute h-56 w-56 rounded-full border-2 border-blue-200 opacity-0 group-hover:animate-pulse"></div>

    {/* Mic */}
    <div className="flex h-40 w-40 items-center justify-center rounded-full bg-blue-600 transition duration-500 group-hover:bg-red-500">

      <Mic
        size={80}
        className="text-white transition duration-500 group-hover:scale-125"
      />

    </div>

  </div>

  

</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;