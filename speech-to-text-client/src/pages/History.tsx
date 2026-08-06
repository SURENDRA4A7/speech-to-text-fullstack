import { useEffect, useState } from "react";
import {
  getAllTranscripts,
  deleteTranscript,
  updateTranscript,
} from "../services/transcriptService";

interface Transcript {
  id: number;
  transcript: string;
  created_at: string;
}

const History = () => {
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    loadTranscripts();
  }, []);

  const loadTranscripts = async () => {
    try {
      const data = await getAllTranscripts();
      setTranscripts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this transcript?")) return;

    try {
      await deleteTranscript(id);
      loadTranscripts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item: Transcript) => {
    setEditingId(item.id);
    setEditedText(item.transcript);
  };

  const handleUpdate = async () => {
    if (editingId === null) return;

    try {
      await updateTranscript(editingId, editedText);

      setEditingId(null);
      setEditedText("");

      loadTranscripts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">
          Transcription History
        </h1>

        <div className="mt-10 space-y-6">

          {transcripts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex justify-between">

                <div className="w-full">

                  <h2 className="font-bold text-blue-600">
                    Transcript #{item.id}
                  </h2>

                  {editingId === item.id ? (
                    <>
                      <textarea
                        value={editedText}
                        onChange={(e) =>
                          setEditedText(e.target.value)
                        }
                        className="mt-4 w-full border rounded-lg p-3"
                        rows={5}
                      />

                      <div className="mt-4 flex gap-3">

                        <button
                          onClick={handleUpdate}
                          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => setEditingId(null)}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
                        >
                          Cancel
                        </button>

                      </div>
                    </>
                  ) : (
                    <>
                      <p className="mt-4 whitespace-pre-wrap">
                        {item.transcript}
                      </p>

                      <p className="mt-3 text-sm text-gray-400">
                        {new Date(item.created_at).toLocaleString()}
                      </p>
                    </>
                  )}

                </div>

                {editingId !== item.id && (
                  <div className="flex gap-3 ml-6">

                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg h-fit"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg h-fit"
                    >
                      Delete
                    </button>

                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default History;