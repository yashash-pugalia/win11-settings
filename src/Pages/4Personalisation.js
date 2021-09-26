import Main from "../components/Main";

function Personalisation() {
  const info = [
    { name: "Background", desc: "Background image, colour, slideshow", icon: "" },
    { name: "Colours", desc: "Accent colours, transparency effects, colour theme", icon: "" },
    { name: "Themes", desc: "Install, create, manage", icon: "" },
    { name: "Lock screen", desc: "Lock screen images, apps, animations", icon: "" },
    { name: "Touch keyboard", desc: "Theme, size", icon: "" },
    { name: "Start", desc: "Recent apps and items, folders", icon: "" },
    { name: "Taskbar", desc: "Taskbar behaviours, system pins", icon: "" },
    { name: "Fonts", desc: "Install, manage", icon: "" },
    { name: "Device usage", desc: "Select all the ways you plan to use your device to get personalised tips, ads and recommendations within Microsoft experiences", icon: "" },
  ];
  return (
    <>
      <Main pageName="Personalisation" info={info} />
    </>
  );
}

export default Personalisation;
