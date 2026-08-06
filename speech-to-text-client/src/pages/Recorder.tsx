import RecordButton from "../components/speech/RecordButton";
import TranscriptBox from "../components/speech/TranscriptBox";
import useSpeechRecognition from "../hooks/useSpeechRecognition";

const Recorder = () => {
  const {
    transcript,
    isListening,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  const handleToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Live Speech Recorder
          </h1>

          <p className="mt-4 text-slate-600">
            Click the microphone and start speaking.
          </p>
        </div>

        <div className="mt-10">
          <RecordButton
            isListening={isListening}
            onToggle={handleToggle}
          />
        </div>

        <div className="mt-10">
          <TranscriptBox transcript={transcript} />
        </div>

      </div>
    </section>
  );
};

export default Recorder;