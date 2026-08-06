import { saveTranscript } from "../../services/transcriptService";

interface Props {
  transcript: string;
}

const TranscriptBox = ({ transcript }: Props) => {
  const handleSave = async () => {
    if (!transcript.trim()) {
      alert("No transcript available.");
      return;
    }

    try {
      const result = await saveTranscript(transcript);
      alert(result.message);
    } catch (error) {
      console.error(error);
      alert("Failed to save transcript.");
    }
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">
        Live Transcript
      </h2>

      <div className="min-h-[250px] rounded-xl border border-slate-300 bg-slate-50 p-6">
        <p className="text-lg text-slate-700 whitespace-pre-wrap">
          {transcript || "Start speaking..."}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Save Transcript
        </button>
      </div>
    </div>
  );
};

export default TranscriptBox;