import { useEffect, useState } from "preact/hooks";
import { Synth, start } from "tone";

const TouchPiano = () => {
  const [synth, setSynth] = useState<Synth | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const newSynth = new Synth().toDestination();
    setSynth(newSynth);
  }, []);

  const handleStartSound = async (y: any) => {
    await start();
    if (synth) {
      const note = calculateNoteFromHeight(y);
      synth.triggerAttack(note);
    }
  };

  const handleEndSound = () => {
    if (synth) {
      synth.triggerRelease();
    }
  };

  const handleMouseMove = (e: any) => {
    if (isMouseDown) {
      handleStartSound(e.clientY);
    }
  };

  const calculateNoteFromHeight = (y: any) => {
    const screenHeight = window.innerHeight;
    const noteNumber = Math.floor((1 - y / screenHeight) * 88) + 21;
    return midiNumberToNote(noteNumber);
  };

  const midiNumberToNote = (midiNumber: any) => {
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const octave = Math.floor(midiNumber / 12) - 1;
    const noteIndex = midiNumber % 12;
    return notes[noteIndex] + octave;
  };

  return (
    <div
      onTouchMove={(e) => handleStartSound(e.touches[0].clientY)}
      onTouchEnd={handleEndSound}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={handleEndSound}
      onMouseLeave={handleEndSound}
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "100vh", backgroundColor: "lightblue" }}
    />
  );
};

export default TouchPiano;
