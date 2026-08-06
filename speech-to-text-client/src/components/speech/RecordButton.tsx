import { Mic, MicOff } from "lucide-react";

interface Props {
  isListening: boolean;
  onToggle: () => void;
}

const RecordButton = ({ isListening, onToggle }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onToggle}
        className={`h-28 w-28 rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
          isListening
            ? "bg-red-600 animate-pulse"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white`}
      >
        {isListening ? (
          <MicOff size={45} className="mx-auto" />
        ) : (
          <Mic size={45} className="mx-auto" />
        )}
      </button>
    </div>
  );
};

export default RecordButton;