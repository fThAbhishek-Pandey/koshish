import React from "react";
import CultureImg from "../../../assets/cultue.png";
const Culture = () => {
  return (<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-4 md:p-10">
  {/* Text Content */}
  <div className="w-full md:w-3/5">
    <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-4">The Koshish Mantra</h2>
    <div className="text-base sm:text-lg leading-relaxed text-gray-800 space-y-4">
      <p>
        At KOSHISH, we inspire students to dream big and dedicate all our efforts to helping them reach the heights they aspire to —
        with the belief that <span className="italic">"simple efforts can fill colours in many lives."</span>
      </p>
      <p>We live by this shloka:</p>
      <div className=" p-4 rounded-lg  text-blue10 font-semibold text-sm sm:text-lg space-y-2">
        <p>न चौरहार्यं न च राजहार्यं, न भ्रातृभाज्यं न च भारकारि।</p>
        <p>व्यये कृते वर्धत एव नित्यं, विद्याधनं सर्वधनप्रधानम्।।</p>
      </div>
      <p>
        <strong>Meaning:</strong> Knowledge is a wealth that cannot be stolen by thieves, seized by kings, divided among siblings, or burdened by weight. 
        Unlike material wealth, which diminishes when spent, knowledge only grows when shared. It is the greatest of all riches.
      </p>
    </div>
  </div>

  {/* Image */}
  <div className="w-full md:w-2/5">
    <img
      src={CultureImg}
      alt="KOSHISH Culture"
      className="w-full rounded-2xl bg-green-100 shadow-lg object-cover"
    />
  </div>
</div>
)
};

export default Culture;
