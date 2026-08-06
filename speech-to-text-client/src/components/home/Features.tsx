import { Clock3, Languages, Database } from "lucide-react";

const features = [
  {
    icon: <Clock3 size={40} className="text-blue-600" />,
    title: "Real-Time",
    description:
      "Convert speech into text instantly with live AI transcription.",
  },
  {
    icon: <Languages size={40} className="text-green-600" />,
    title: "Multilingual",
    description:
      "Supports English, Hindi, Telugu, and mixed-language conversations.",
  },
  {
    icon: <Database size={40} className="text-purple-600" />,
    title: "History Storage",
    description:
      "Save, edit, delete and manage all transcriptions securely.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Powerful Features
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need for AI-powered speech transcription.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div>{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;