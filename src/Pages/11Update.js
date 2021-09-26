import Main from "../components/Main";

function Update() {
  const info = [
    { name: "Pause updates", desc: "", icon: "" },
    { name: "Update history", desc: "", icon: "" },
    { name: "Advanced options", desc: "Delivery optimisations, optional updates, active hours, other update settings", icon: "" },
    { name: "Windows Insider Programme", desc: "Get preview builds of Windows to share feedback to new features and updates", icon: "" },
  ];
  return (
    <>
      <Main pageName="Windows Update" info={info} />
    </>
  );
}

export default Update;
