import { Mic, AudioWaveform, Bot, Database } from "lucide-react";

const steps = [
  {
    icon: <Mic size={42} className="text-blue-600" />,
    title: "Start Recording",
    description: "Click the microphone button and allow microphone access.",
  },
  {
    icon: <AudioWaveform size={42} className="text-green-600" />,
    title: "Speak Naturally",
    description: "Speak in English, Hindi, Telugu, or mixed languages.",
  },
  {
    icon: <Bot size={42} className="text-purple-600" />,
    title: "AI Transcribes",
    description: "The AI converts your speech into text in real time.",
  },
  {
    icon: <Database size={42} className="text-orange-600" />,
    title: "Save History",
    description: "Store transcripts in the database and manage them anytime.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-4 text-slate-600">
            Four simple steps to convert your speech into text.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;