import Main from "../components/Main";

function Time() {
  const info = [
    { name: "Date & time", desc: "Time zones, automatic clock settings, calendar display", icon: "" },
    { name: "Language & region", desc: "Windows and some apps format dates and times based on your region", icon: "" },
    { name: "Typing", desc: "Touch keyboard, text suggestions, preferences", icon: "" },
    { name: "Speech", desc: "Speech language, speech recognition microphone setup, voices", icon: "" },
  ];
  return (
    <>
      <Main pageName="Time & language" info={info} />
    </>
  );
}

export default Time;
