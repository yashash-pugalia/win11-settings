import Main from "../components/Main";

function Network() {
  const info = [
    { name: "WiFi", desc: "Connect, manage known networks, metered network", icon: "" },
    { name: "VPN", desc: "Add, connect, manage", icon: "" },
    { name: "Mobile hotspot", desc: "Share your internet connection", icon: "" },
    { name: "Flight mode", desc: "Stop all wireless communication", icon: "" },
    { name: "Proxy", desc: "Proxy server for WiFi and Ethernet connections", icon: "" },
    { name: "Dial-up", desc: "Set up a dial-up internet connection", icon: "" },
    { name: "Advanced network settings", desc: "View all network adapters, network reset", icon: "" },
  ];
  return (
    <>
      <Main pageName="Network" info={info} />
    </>
  );
}

export default Network;
