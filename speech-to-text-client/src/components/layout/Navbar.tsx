import { Mic, History } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2">
            <Mic size={22} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Procucev
            </h1>

            <p className="text-xs text-slate-500">
              SpeechToText
              AI Transcription
            </p>
          </div>
        </NavLink>

        {/* Navigation */}

        <nav className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition ${
                isActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`
            }
          >
            <History size={18} />
            History
          </NavLink>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;