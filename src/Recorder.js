/** @format */

// src/Recorder.js

import React, { useRef, useState } from "react";

function Recorder() {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => {
      const blob = new Blob([event.data], { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recording.webm";
      a.click();
    };
    recorder.start();
    setRecording(true);
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };

  return (
    <div className="p-4">
      <button
        className={`btn ${recording ? "btn-red" : "btn-green"}`}
        onClick={recording ? stopRecording : startRecording}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
}

export default Recorder;
