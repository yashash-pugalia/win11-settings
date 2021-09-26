import Main from "../components/Main";

function Accessibility() {
  const info = [
    { name: "Text size", desc: "Text size that appears throughout Windows and your apps", icon: "" },
    { name: "Visual effects", desc: "Scroll bars, transparency, animations, notification timeout", icon: "" },
    { name: "Mouse pointer and touch", desc: "Mouse pointer colour, size", icon: "" },
    { name: "Text cursor", desc: "Appearance and thickness, text cursor indicator", icon: "" },
    { name: "Magnifier", desc: "Magnifier reading, zoom increment", icon: "" },
    { name: "Colour filters", desc: "Colour-blindness filters, grey scale, inverted", icon: "" },
    { name: "Contrast themes", desc: "Colours theme for low vision, light sensitivity", icon: "" },
    { name: "Narrator", desc: "Voice, verbosity, keyboard, braille", icon: "" },
    { name: "Audio", desc: "Mono audio, audio notifications", icon: "" },
    { name: "Captions", desc: "Styles", icon: "" },
    { name: "Speech", desc: "Windows Speech Recognition, voice typing", icon: "" },
    { name: "Keyboard", desc: "Sticky, Filter, and Toggle keys, on-screen keyboard", icon: "" },
    { name: "Mouse", desc: "Mouse keys, speed, acceleration", icon: "" },
    { name: "Eye control", desc: "Eye tracker, text-to-speech", icon: "" },
  ];
  return (
    <>
      <Main pageName="Accessibility" info={info} />
    </>
  );
}

export default Accessibility;
