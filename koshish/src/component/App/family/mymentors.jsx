import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../context/App';

const MyMentor = () => {
    const { id } = useParams();
    const { myMentor, handelgetmyMentor } = useContext(AppContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await handelgetmyMentor(id);
            setLoading(false);
        };
        fetchData();
    }, [id]);

    if (loading || !myMentor) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-green-50 pt-24">
                <p className="text-xl font-semibold text-blue-800 animate-pulse">Loading mentor details...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center pt-24 px-4 pb-32">
            <div className="max-w-4xl w-full bg-green-100 shadow-xl rounded-lg p-6 md:p-10 flex flex-col items-center text-center">
                <h1 className="text-xl md:text-5xl font-extrabold text-blue10 mb-6">About the Mentor</h1>

                <img
                    src={myMentor.image || 'https://via.placeholder.com/150'}
                    alt={myMentor.name || 'Mentor Photo'}
                    className="w-36 h-36 md:w-48 md:h-48 rounded-xl shadow-lg border-2 border-blue-400 object-cover"
                />

                <h2 className="text-3xl md:text-4xl font-bold text-blue10 mt-6">
                    {myMentor.name || 'Unnamed Mentor'}{' '}
                    {myMentor.yog !== 'NAN' && (
                        <span className="block text-base text-blue-400 font-light">
                            {myMentor.yog - 4}-{myMentor.yog}
                        </span>
                    )}
                </h2>

                {myMentor.speciality !== 'NAN' && (
                    <p className="text-blue-700 text-lg font-medium mt-2">{myMentor.speciality}</p>
                )}

                {myMentor.quote !== 'NAN' && (
                    <blockquote className="relative text-gray-600 text-lg italic leading-relaxed bg-blue-100 p-6 mt-6 rounded-lg shadow-md w-full max-w-2xl">
                        <span className="absolute -top-3 -left-3 text-5xl text-blue-500">“</span>
                        {myMentor.quote}
                        <span className="absolute -bottom-3 -right-3 text-5xl text-blue-500">”</span>
                    </blockquote>
                )}

                {(myMentor.aboutHead !== 'NAN' || myMentor.about !== 'NAN') && (
                    <div className="mt-8 w-full px-4">
                        {myMentor.aboutHead !== 'NAN' && (
                            <h3 className="text-2xl md:text-3xl font-bold text-blue10 underline decoration-blue-500 decoration-4 underline-offset-4">
                                {myMentor.aboutHead}
                            </h3>
                        )}
                        {myMentor.about !== 'NAN' && (
                            <p className="text-gray-700 text-lg mt-4 leading-relaxed bg-gray-100 p-4 rounded-lg shadow-sm">
                                {myMentor.about}
                            </p>
                        )}
                    </div>
                )}

                <div className="mt-8 w-full px-4 space-y-2">
                    {myMentor.subject !== 'NAN' && (
                        <p className="text-gray-800 text-lg font-semibold">📖 Subject: {myMentor.subject}</p>
                    )}
                    {myMentor.classTeacher !== 'NAN' && (
                        <p className="text-gray-800 text-lg">👨‍🏫 Class Teacher: {myMentor.classTeacher}</p>
                    )}
                    {myMentor.joinTime && (
                        <p className="text-gray-500 text-sm mt-2">
                            Joined on {new Date(myMentor.joinTime).toDateString()}
                        </p>
                    )}
                </div>

                {myMentor.isActive && (
                    <span className="inline-block mt-6 px-5 py-2 text-lg font-semibold rounded-full bg-green-200 text-green-800">
                        Active Mentor
                    </span>
                )}
            </div>
        </div>
    );
};

export default MyMentor;
