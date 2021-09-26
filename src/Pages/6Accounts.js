import Main from "../components/Main";

function Accounts() {
  const info = [
    { name: "Your info", desc: "Accounts used by email, calendar, and contacts", icon: "" },
    { name: "Email & accounts", desc: "Accounts used by email, calendar, and contacts", icon: "" },
    { name: "Sign-in options", desc: "Windows Hello, security key, password, dynamic lock", icon: "" },
    { name: "Family & other users", desc: "Device access, work or school users, kiosk assighned access", icon: "" },
    { name: "Windows backup", desc: "Back up your files, apps, preferences to restore them across devices", icon: "" },
    { name: "Access work or school", desc: "Organisation resources like email, apps, and network", icon: "" },
  ];
  return (
    <>
      <Main pageName="Accounts" info={info} />
    </>
  );
}

export default Accounts;
