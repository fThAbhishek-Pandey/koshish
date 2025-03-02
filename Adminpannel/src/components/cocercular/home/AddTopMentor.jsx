import React, { useState, useContext } from 'react';
import { CocirculerContext } from '../../../context/cocirculer';

const AddTopMentor = () => {
    const { TopMentorHandler } = useContext(CocirculerContext);
    const [image, setImage] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [linkedinURL, setLinkedinURL] = useState('');
    const [year, setYear] = useState('');

    const formdata = new FormData();
    formdata.append('image', image);
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('speciality', speciality);
    formdata.append('linkedinURL', linkedinURL);
    formdata.append('year', year);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        TopMentorHandler(formdata);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Add Top Mentor</h2>
            <form onSubmit={onSubmitHandler} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Top Mentor Image</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Speciality</label>
                    <input
                        type="text"
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Year</label>
                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                    <input
                        type="text"
                        value={linkedinURL}
                        onChange={(e) => setLinkedinURL(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg transition">Add Top Mentor</button>
            </form>
        </div>
    );
};

export default AddTopMentor;
