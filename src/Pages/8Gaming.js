import Main from "../components/Main";

function Gaming() {
  const info = [
    { name: "Xbox Game Bar", desc: "Controller and keyboard shortcuts", icon: "" },
    { name: "Captures", desc: "Save location, recording preferences", icon: "" },
    { name: "Game Mode", desc: "Optimize your PC for play", icon: "" },
  ];
  return (
    <>
      <Main pageName="Gaming" info={info} />
    </>
  );
}

export default Gaming;
