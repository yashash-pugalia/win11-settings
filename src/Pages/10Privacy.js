import Main from "../components/Main";

function Privacy() {
  const info = [
    { name: "Windows Security", desc: "Antivirus, browser, firewall, and network protection for your device", icon: "" },
    { name: "Find my device", desc: "Track your device if you think you've lost it", icon: "" },
    { name: "For developers", desc: "These settings are intended for development use only", icon: "" },
    { name: "General", desc: "Advertising ID, local content, app launches, settings suggestions, productivity tools", icon: "" },
    { name: "Speech", desc: "Online speech recognition for dictation and other voice-based interactions", icon: "" },
    { name: "Inking & typing personalisation", desc: "Personal dictionary, words in your dictionary", icon: "" },
    { name: "Diagnostic &amp; feedback", desc: "Diagnostic data, inking and typing data, tailored experiences, feedback frequency", icon: "" },
    { name: "Activity history", desc: "Options for getting more from your activity history across devices and accounts", icon: "" },
    { name: "Search permissions", desc: "SafeSearch, cloud content search, search history", icon: "" },
    { name: "Searching Windows", desc: "Search indexing for faster results, Find My Files, folders excluded from search", icon: "" },
    { name: "Location", icon: "" },
    { name: "Camera", icon: "" },
    { name: "Microphone", icon: "" },
    { name: "Voice activation", icon: "" },
    { name: "Notification", icon: "" },
    { name: "Account info", icon: "" },
    { name: "Contact", icon: "" },
    { name: "Calendar", icon: "" },
    { name: "Phone calls", icon: "" },
    { name: "Call history", icon: "" },
    { name: "Email", icon: "" },
    { name: "Tasks", icon: "" },
    { name: "Messaging", icon: "" },
    { name: "Radios", icon: "" },
    { name: "Other devices", icon: "" },
    { name: "App diagnostics", icon: "" },
    { name: "Automatic file downloads", icon: "" },
    { name: "Documents", icon: "" },
    { name: "Downloads folder", icon: "" },
    { name: "Music library", icon: "" },
    { name: "Pictures", icon: "" },
    { name: "Videos", icon: "" },
    { name: "File system", icon: "" },
    { name: "Screenshot borders", icon: "" },
    { name: "Screenshot and apps", icon: "" },
  ];
  return (
    <>
      <Main pageName="Privacy &amp; security" info={info} />
    </>
  );
}

export default Privacy;
