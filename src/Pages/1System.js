import Main from "../components/Main";

function System() {
  const info = [
    { name: "Display", desc: "Monitor, brightness, night light, display profile", icon: "" },
    { name: "Sound", desc: "Volume levels, output, input, sound devices", icon: "" },
    { name: "Notifications", desc: "Alert from apps and system", icon: "" },
    { name: "Focus Assist", desc: "Notifications, automatic rules", icon: "" },
    { name: "Power & battery", desc: "Sleep, battery usage, battery saver", icon: "" },
    { name: "Storage", desc: "Storage space, drives, configuration rules", icon: "" },
    { name: "Nearby sharing", desc: "Discoverability, received files location", icon: "" },
    { name: "Multi-tasking", desc: "Snap windows, desktops, task switching", icon: "" },
    { name: "Activation", desc: "Activation state, subcription, product key", icon: "" },
    { name: "Troubleshoot", desc: "Recommended troubleshooters, preferences, history", icon: "" },
    { name: "Recovery", desc: "Reset, advanced start-up, go back", icon: "" },
    { name: "Projecting to this PC", desc: "Permissions, pairing PIN, discoverability", icon: "" },
    { name: "Remote Desktop", desc: "Remote Desktop users, connection permissions", icon: "" },
    { name: "Clipboard", desc: "Cut and copy history, sync, clear", icon: "" },
    { name: "About", desc: "Device specifications, rename PC, Windows specifications", icon: "" },
  ];

  return (
    <>
      <Main pageName="System" info={info} />
    </>
  );
}

export default System;
