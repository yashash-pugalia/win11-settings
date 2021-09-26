import Main from "../components/Main";

function Bluetooth() {
  const info = [
    { name: "Bluetooth", desc: "Bluetooth is turned off", icon: "" },
    { name: "Devices", desc: "Mouse, keyboard, pen, audio, displays and docks, other devices", icon: "" },
    { name: "Printers & scanners", desc: "Preferences, troubleshoot", icon: "" },
    { name: "Your Phone", desc: "Instantly access your Android device's photos, texts and more", icon: "" },
    { name: "Cameras", desc: "Connected cameras, default image settings", icon: "" },
    { name: "Mouse", desc: "Buttons, mouse pointer speed, scrolling", icon: "" },
    { name: "Touchpad", desc: "Taps, gestures, scrolling, zooming", icon: "" },
    { name: "Pen & Windows Ink", desc: "Right-handed or left-handed, pen button shortcuts, handwriting", icon: "" },
    { name: "AutoPlay", desc: "Defaults for removable drives and memory cards", icon: "" },
    { name: "USB", desc: "Notifications, USB battery saver, mobile device preferences", icon: "" },
  ];
  return (
    <>
      <Main pageName="Bluetooth" info={info} />
    </>
  );
}

export default Bluetooth;
