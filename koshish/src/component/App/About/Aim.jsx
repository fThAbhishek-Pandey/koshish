import React from "react";

const Aim = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl mb-4 shadow-md max-w-5xl mx-auto">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Aim:</h2>
  <div>
    <ul className="list-disc list-inside space-y-3 text-gray-700">
      <li>To make quality education accessible to those who are deprived of it.</li>
      <li>To inculcate values and provide moral education to the students.</li>
      <li>
        To promote personal development of the students through various co-curricular activities like
        <span className="font-semibold text-green-700"> Music, Sports, Painting, Debates, Dance, Poetry, Speech, Nukkad, Play</span>, etc.
      </li>
      <li>
        To create awareness about <span className="font-semibold">Health and Social issues</span> and also about the
        <span className="text-blue-600"> "Need of Education"</span> among the students.
      </li>
      <li>
        To develop a methodology of teaching that would attract the kids towards education.
        <span className="font-bold text-green-800"> In short, the Aim of KOSHISH is 'to provide EDUCATION to all'.</span>
      </li>
    </ul>
  </div>
</div>

  );
};

export default Aim;
