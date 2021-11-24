import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="nav_top">
          <Link to="accounts" className="navLink account">
            <img src="img/defAccount.webp" width="60" height="60" alt="" />
            <div>
              <p>
                <b>Yashash</b>
              </p>
              <p>
                <small>Local Account</small>
              </p>
            </div>
          </Link>
          <input type="text" className="search" placeholder="Find a setting " name="search" />
        </div>
        <div className="nav_bottom">
          <Link className="navLink active" to="system">
            <img src="img/nav/system.webp" alt="" height="16" width="16" /> System
          </Link>
          <Link className="navLink" to="bluetooth">
            <img src="img/nav/bluetooth.webp" alt="" height="16" width="16" /> Bluetooth &amp; devices
          </Link>
          <Link className="navLink" to="network">
            <img src="img/nav/wifi.webp" alt="" height="16" width="16" /> Network &amp; internet
          </Link>
          <Link className="navLink" to="personalisation">
            <img src="img/nav/theme.webp" alt="" height="16" width="16" /> Personalisation
          </Link>
          <Link className="navLink" to="apps">
            <img src="img/nav/apps.webp" alt="" height="16" width="16" /> Apps
          </Link>
          <Link className="navLink" to="accounts">
            <img src="img/nav/user.webp" alt="" height="16" width="16" /> Accounts
          </Link>
          <Link className="navLink" to="time">
            <img src="img/nav/time.webp" alt="" height="16" width="16" /> Time &amp; language
          </Link>
          <Link className="navLink" to="gaming">
            <img src="img/nav/gaming.webp" alt="" height="16" width="16" /> Gaming
          </Link>
          <Link className="navLink" to="accessibility">
            <img src="img/nav/acessbility.webp" alt="" height="16" width="16" /> Accessibility
          </Link>
          <Link className="navLink" to="privacy">
            <img src="img/nav/defender.webp" alt="" height="16" width="16" /> Privacy &amp; security
          </Link>
          <Link className="navLink" to="update">
            <img src="img/nav/update.webp" alt="" height="16" width="16" /> Windows Update
          </Link>
        </div>
      </nav>
      <div className="hamburger">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
      </div>
    </header>
  );
}

function Main(props) {
  return (
    <main>
      <h1>{props.pageName}</h1>
      <div className="tileCont">
        {props.info.map((i) => {
          return <Tile info={i} />;
        })}
      </div>
    </main>
  );
}

function Tile({ info }) {
  return (
    <div className="tile">
      <span>{info.icon}</span>
      <div>
        <p>{info.name}</p>
        <p className="tile_desc">{info.desc}</p>
      </div>
    </div>
  );
}

function App() {
  const system = [
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
  const bluetooth = [
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
  const network = [
    { name: "WiFi", desc: "Connect, manage known networks, metered network", icon: "" },
    { name: "VPN", desc: "Add, connect, manage", icon: "" },
    { name: "Mobile hotspot", desc: "Share your internet connection", icon: "" },
    { name: "Flight mode", desc: "Stop all wireless communication", icon: "" },
    { name: "Proxy", desc: "Proxy server for WiFi and Ethernet connections", icon: "" },
    { name: "Dial-up", desc: "Set up a dial-up internet connection", icon: "" },
    { name: "Advanced network settings", desc: "View all network adapters, network reset", icon: "" },
  ];
  const personalisation = [
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
  const apps = [
    { name: "Apps & features", desc: "Installed apps, app execution aliases", icon: "" },
    { name: "Default apps", desc: "Defaults for file and link types, other defaults", icon: "" },
    { name: "Offline maps", desc: "Downloads, storage location, map updates", icon: "" },
    { name: "Optional features", desc: "Extra functionality for your device", icon: "" },
    { name: "Apps for wesites", desc: "Websites that can open in an app instead of a browser", icon: "" },
    { name: "Video playback", desc: "Video adjustments, HDR streaming, battery options", icon: "" },
    { name: "Startup", desc: "Apps that start automatically when you sign in", icon: "" },
  ];
  const accounts = [
    { name: "Your info", desc: "Accounts used by email, calendar, and contacts", icon: "" },
    { name: "Email & accounts", desc: "Accounts used by email, calendar, and contacts", icon: "" },
    { name: "Sign-in options", desc: "Windows Hello, security key, password, dynamic lock", icon: "" },
    { name: "Family & other users", desc: "Device access, work or school users, kiosk assighned access", icon: "" },
    { name: "Windows backup", desc: "Back up your files, apps, preferences to restore them across devices", icon: "" },
    { name: "Access work or school", desc: "Organisation resources like email, apps, and network", icon: "" },
  ];
  const time = [
    { name: "Date & time", desc: "Time zones, automatic clock settings, calendar display", icon: "" },
    { name: "Language & region", desc: "Windows and some apps format dates and times based on your region", icon: "" },
    { name: "Typing", desc: "Touch keyboard, text suggestions, preferences", icon: "" },
    { name: "Speech", desc: "Speech language, speech recognition microphone setup, voices", icon: "" },
  ];
  const gaming = [
    { name: "Xbox Game Bar", desc: "Controller and keyboard shortcuts", icon: "" },
    { name: "Captures", desc: "Save location, recording preferences", icon: "" },
    { name: "Game Mode", desc: "Optimize your PC for play", icon: "" },
  ];
  const accessibility = [
    { name: "Text size", desc: "Text size that appears throughout Windows and your apps", icon: "" },
    { name: "Visual effects", desc: "Scroll bars, transparency, animations, notification timeout", icon: "" },
    { name: "Mouse pointer and touch", desc: "Mouse pointer colour, size", icon: "" },
    { name: "Text cursor", desc: "Appearance and thickness, text cursor indicator", icon: "" },
    { name: "Magnifier", desc: "Magnifier reading, zoom increment", icon: "" },
    { name: "Colour filters", desc: "Colour-blindness filters, grey scale, inverted", icon: "" },
    { name: "Contrast themes", desc: "Colours theme for low vision, light sensitivity", icon: "" },
    { name: "Narrator", desc: "Voice, verbosity, keyboard, braille", icon: "" },
    { name: "Audio", desc: "Mono audio, audio notifications", icon: "" },
    { name: "Captions", desc: "Styles", icon: "" },
    { name: "Speech", desc: "Windows Speech Recognition, voice typing", icon: "" },
    { name: "Keyboard", desc: "Sticky, Filter, and Toggle keys, on-screen keyboard", icon: "" },
    { name: "Mouse", desc: "Mouse keys, speed, acceleration", icon: "" },
    { name: "Eye control", desc: "Eye tracker, text-to-speech", icon: "" },
  ];
  const privacy = [
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
  const update = [
    { name: "Pause updates", desc: "", icon: "" },
    { name: "Update history", desc: "", icon: "" },
    { name: "Advanced options", desc: "Delivery optimisations, optional updates, active hours, other update settings", icon: "" },
    { name: "Windows Insider Programme", desc: "Get preview builds of Windows to share feedback to new features and updates", icon: "" },
  ];

  return (
    <BrowserRouter>
      <Header />

      <Route path="/" exact>
        <Main pageName="System" info={system} />
      </Route>

      <Route path="/system">
        <Main pageName="System" info={system} />
      </Route>

      <Route path="/bluetooth">
        <Main pageName="Bluetooth &amp; devices " info={bluetooth} />
      </Route>

      <Route path="/network">
        <Main pageName="Network &amp; internet" info={network} />
      </Route>

      <Route path="/personalisation">
        <Main pageName="Personalisation" info={personalisation} />
      </Route>

      <Route path="/apps">
        <Main pageName="Apps" info={apps} />
      </Route>

      <Route path="/accounts">
        <Main pageName="Accounts" info={accounts} />
      </Route>

      <Route path="/time">
        <Main pageName="Time &amp; language" info={time} />
      </Route>

      <Route path="/gaming">
        <Main pageName="Gaming" info={gaming} />
      </Route>

      <Route path="/accessibility">
        <Main pageName="Accessibility" info={accessibility} />
      </Route>

      <Route path="/privacy">
        <Main pageName="Privacy &amp; security" info={privacy} />
      </Route>

      <Route path="/update">
        <Main pageName="Windows Update" info={update} />
      </Route>
    </BrowserRouter>
  );
}
export default App;
