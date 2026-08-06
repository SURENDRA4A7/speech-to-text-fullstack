const API_URL = "https://speech-to-text-fullstack.onrender.com/api/transcripts";

// Save Transcript
export const saveTranscript = async (transcript: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ transcript }),
  });

  if (!response.ok) {
    throw new Error("Failed to save transcript");
  }

  return response.json();
};

// Get All Transcripts
export const getAllTranscripts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch transcripts");
  }

  return response.json();
};

// Delete Transcript
export const deleteTranscript = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete transcript");
  }

  return response.json();
};

// Update Transcript
export const updateTranscript = async (
  id: number,
  transcript: string
) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ transcript }),
  });

  if (!response.ok) {
    throw new Error("Failed to update transcript");
  }

  return response.json();
};