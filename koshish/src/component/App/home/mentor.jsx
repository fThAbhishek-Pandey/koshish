import React from 'react';
import pic1 from '../../image/person_1.jpg.webp';
import pic2 from '../../image/person_2.jpg.webp';
import pic3 from '../../image/person_3.jpg.webp';

const Mentor = () => {
  const teachers = [
    { 
      img: pic1, 
      name: 'Benjamin Stone', 
      subject: 'Physics Teacher',  
      about: 'Passionate about teaching and committed to student success.'
    },
    { 
      img: pic2, 
      name: 'Katleen Stone', 
      subject: 'Mathematics Teacher',
      about: 'Passionate about teaching and committed to student success.'
    },
    { 
      img: pic3, 
      name: 'Sadie White', 
      subject: 'Chemistry Teacher',
      about: 'Passionate about teaching and committed to student success.' 
    },
    { 
      img: pic3, 
      name: 'Sadie White', 
      subject: 'Chemistry Teacher',
      about: 'Passionate about teaching and committed to student success.' 
    }
  ];

  return (
    <div className="bg-black pb-20 sm:pb-16 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white pt-16 text-center">
          Our Teachers
        </h1>
        <p className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] my-10 text-gray-400 text-center mx-auto text-sm sm:text-base">
          Meet our experienced and dedicated teachers who strive to provide the best education.
        </p>
          <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
            {teachers.map((teacher, index) => (
              <div 
                key={index} 
                className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 text-center w-full sm:w-[45%] lg:w-[22%] transition-transform duration-300"
              >
                <div className="flex justify-center">
                  <img 
                    src={teacher.img} 
                    alt={teacher.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 my-2">
                    {teacher.name}
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {teacher.subject}
                  </p>
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                    {teacher.about}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Mentor;
