import React from "react";

function PracticeAreas() {
  const areas = [
    "Trademark Registration",
    "IPR Litigation & Enforcement",
    "Copyright Law",
    "Patent Law",
    "Licensing & Transactions",
    "Brand Protection Strategies"
  ];

  return (
    <section id="practice" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">Practice Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-medium mb-2 text-blue-800">{area}</h3>
              <p className="text-gray-600 text-sm">Comprehensive solutions tailored to individual and corporate needs.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;