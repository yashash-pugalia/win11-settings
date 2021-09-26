import Main from "../components/Main";

function Apps() {
  const info = [
    { name: "Apps & features", desc: "Installed apps, app execution aliases", icon: "" },
    { name: "Default apps", desc: "Defaults for file and link types, other defaults", icon: "" },
    { name: "Offline maps", desc: "Downloads, storage location, map updates", icon: "" },
    { name: "Optional features", desc: "Extra functionality for your device", icon: "" },
    { name: "Apps for wesites", desc: "Websites that can open in an app instead of a browser", icon: "" },
    { name: "Video playback", desc: "Video adjustments, HDR streaming, battery options", icon: "" },
    { name: "Startup", desc: "Apps that start automatically when you sign in", icon: "" },
  ];
  return (
    <>
      <Main pageName="Apps" info={info} />
    </>
  );
}

export default Apps;
