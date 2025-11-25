import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-black text-white px-6 py-4 z-50 flex justify-between">
      <div className="font-bold">LOGO</div>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/saved">Saved</Link>
      </div>
    </nav>
  );
}
