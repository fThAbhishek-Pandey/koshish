import React from "react";

const Wedo = () => {
  return (
    <div className="bg-gray-50 p-6 sm:p-10 rounded-xl shadow-lg max-w-5xl mx-auto border-l-4 border-green-500 ">
  {/* Section Title */}
  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">WHAT DO WE DO?</h2>

  {/* Main Description */}
  <p className="text-gray-700 text-lg leading-relaxed mb-6">
    We read, we play, we paint, and we do experiments. Quite understandably, we also provide financial help to some really needy students. There's a library to foster learning and support their studies. Students are also taught music in their free time.  
    Beyond academics, we instill moral and social values like discipline, punctuality, and awareness about various social issues. Our volunteers even visit the students' homes in villages to better understand their challenges.
  </p>

  {/* Highlights Section */}
  <div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Major Highlights of Our Activities:</h3>
    <ol className="space-y-6">
      {/* Entrance Exam Classes */}
      <li className="p-5 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-green-700">📚 Special JNV/CHS Entrance Exam Classes:</h3>
        <p className="text-gray-700 mt-2">
          Considering the financial status of our students, Navodaya Vidyalaya and Central Hindu School provide excellent opportunities. We conduct special classes for students of Class 5th and 8th to help them prepare for these entrance exams.
        </p>
      </li>

      {/* Udaan Event */}
      <li className="p-5 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-green-700">🚀 Udaan:</h3>
        <p className="text-gray-700 mt-2">
          Udaan is an annual event conducted at the end of the odd semester, featuring technical and sports activities organized by the KOSHISH team.
        </p>

        <ol className="mt-4 space-y-4">
          <li className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">🔬Science-Based Project Exhibition:</h4>
            <p className="text-gray-700 mt-1">
              Volunteers assist students in creating projects using waste materials. These projects are then presented before a panel for judgment. Awards are given based on creativity and execution.
            </p>
          </li>

          <li className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">⚽ Sports Events:</h4>
            <p className="text-gray-700 mt-1">Both formal and informal sports events are organized to promote physical fitness and teamwork.</p>
          </li>

          <li className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">🖌️ General Knowledge & Art Competition:</h4>
            <p className="text-gray-700 mt-1">
              A general knowledge and art competition is conducted at the end of each semester. Students are ranked and awarded accordingly.
            </p>
          </li>
        </ol>
      </li>

      {/* Independence Day Celebration */}
      <li className="p-5 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-green-600">🇮🇳 Independence Day Celebration:</h3>
        <p className="text-gray-700 mt-2">
          Among all national festivals, 15th August is celebrated collectively. We conduct a quiz related to Independence Day and fundamental duties towards our nation.
        </p>
      </li>

      {/* Annual Function - Abhyudaya */}
      <li className="p-5 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-green-700">🎭 Abhyudaya (Annual Function of KOSHISH):</h3>
        <p className="text-gray-700 mt-2">
          The biggest celebration of KOSHISH! This function provides a platform for students to showcase their talents in dance, music, speech, poetry, drama, and fine arts. Last year, students performed on the theme 
          <span className="font-semibold text-green-700"> “Necessity of Education in Rural Areas”</span> to spread awareness. The event witnessed participation from KOSHISH alumni, teachers, and all team members.
        </p>
      </li>
    </ol>
  </div>
</div>

  
  );
};

export default Wedo;
