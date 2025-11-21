import { useState } from "react";
import axios from "axios";
import tops from "../data/tops";
import pants from "../data/pants";
import { useNavigate } from "react-router-dom";

export default function OutfitPicker() {
  const [topIndex, setTopIndex] = useState(0);
  const [pantsIndex, setPantsIndex] = useState(0);
  const [season, setSeason] = useState("Spring");
  const [style, setStyle] = useState("Casual");

  const navigate = useNavigate();

  const saveOutfit = async () => {
    await axios.post("http://localhost:4000/outfits", {
      top: tops[topIndex],
      pants: pants[pantsIndex],
      season,
      style,
    });
    navigate("/saved");
  };

  return (
    <section className="bg-gray-100 pt-10 pb-24">
      <h2 className="text-center text-xl font-semibold mb-6">
        Choose your fit today
      </h2>

      {/* filters */}
      <div className="flex justify-center gap-4 mb-8">
        <select
          className="px-3 py-2 border rounded"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          {["Spring", "Summer", "Autumn", "Winter"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          className="px-3 py-2 border rounded"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          {["Casual", "Formal", "Masc"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* outfit selector */}
      <div className="flex flex-col items-center gap-10">
        {/* top */}
        <div className="flex items-center gap-6">
          <button onClick={() => setTopIndex((topIndex - 1 + tops.length) % tops.length)}>
            ◀
          </button>
          <img src={tops[topIndex]} alt="top" className="w-48 rounded shadow" />
          <button onClick={() => setTopIndex((topIndex + 1) % tops.length)}>
            ▶
          </button>
        </div>

        {/* pants */}
        <div className="flex items-center gap-6">
          <button onClick={() => setPantsIndex((pantsIndex - 1 + pants.length) % pants.length)}>
            ◀
          </button>
          <img src={pants[pantsIndex]} alt="pants" className="w-48 rounded shadow" />
          <button onClick={() => setPantsIndex((pantsIndex + 1) % pants.length)}>
            ▶
          </button>
        </div>

        {/* save */}
        <button
          onClick={saveOutfit}
          className="text-4xl text-blue-500 hover:text-blue-700"
        >
          ★
        </button>
      </div>
    </section>
  );
}
