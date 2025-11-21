import { useEffect, useState } from "react";
import axios from "axios";

export default function Saved() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/outfits")
      .then((res) => setSaved(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Saved Outfits</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {saved.map((o) => (
          <div key={o._id} className="p-4 bg-white rounded shadow">
            <img src={o.top} className="w-40" />
            <img src={o.pants} className="w-40 mt-4" />
            <p className="mt-4 text-gray-600">
              {o.season} · {o.style}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
