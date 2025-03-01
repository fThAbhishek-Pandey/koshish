import React from 'react';
import prachi from '../../image/person_1.jpg.webp';
import prachi1 from '../../image/person_2.jpg.webp';
import prachi2 from '../../image/person_3.jpg.webp';

const IndexMentor = () => {
  const teachers = [
    { img: prachi, name: 'Benjamin Stone', subject: 'Physics Teacher' },
    { img: prachi1, name: 'Katleen Stone', subject: 'Mathematics Teacher' },
    { img: prachi2, name: 'Sadie White', subject: 'Chemistry Teacher' }
  ];

  return (
    <div className="mt-10 mb-2 text-center">
      <h2 className="text-5xl font-bold">Our Teachers</h2>
      <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
        Meet our experienced and dedicated teachers who strive to provide the best education.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center w-80">
            <div className="flex justify-center">
              <img 
                src={teacher.img} 
                alt={teacher.name} 
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" 
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-900">{teacher.name}</h2>
              <p className="text-gray-500">{teacher.subject}</p>
              <p className="text-gray-600 mt-2 text-sm">
                Passionate about teaching and committed to student success.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexMentor;
