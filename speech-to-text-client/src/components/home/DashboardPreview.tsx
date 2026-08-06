import { Mic, Save, Circle } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Live Dashboard Preview
          </h2>

          <p className="mt-4 text-slate-600">
            Experience real-time AI speech transcription.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-8 shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-700 pb-5">

            <div className="flex items-center gap-3">
              <Mic className="text-blue-400" size={28} />

              <h3 className="text-2xl font-semibold text-white">
                Speech Recorder
              </h3>
            </div>

            <div className="flex items-center gap-2 text-red-400">
              <Circle size={14} fill="currentColor" />
              <span className="font-medium">Recording...</span>
            </div>

          </div>

          {/* Transcript */}

          <div className="mt-8 rounded-2xl bg-slate-800 p-6">

            <p className="text-lg leading-8 text-slate-300">
              Hello everyone...
            </p>

            <p className="mt-3 text-lg leading-8 text-slate-300">
              Hello everyone, my name is Surendra...
            </p>

            <p className="mt-3 text-lg leading-8 text-slate-300">
              Hello everyone, my name is Surendra and welcome to our AI-powered Speech to Text application...
            </p>

          </div>

          {/* Button */}

          <div className="mt-8 flex justify-end">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              <Save size={20} />
              Save Transcript
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;