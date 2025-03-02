import React, { useState, useContext } from 'react';
import { CocirculerContext } from '../../../context/cocirculer';

const Header = () => {
    const { HeaderHandler } = useContext(CocirculerContext);
    const [image, setImage] = useState(null);
    const [heading, setHeading] = useState('');
    const [para, setPara] = useState('');
    
    const formdata = new FormData();
    formdata.append('image', image);
    formdata.append('heading', heading);
    formdata.append('para', para);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        HeaderHandler(formdata);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10 border border-gray-200">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Add New Header</h2>
            <form onSubmit={onSubmitHandler} className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">Upload Image for Header</h3>
                    <input 
                        type="file" 
                        className="block w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300" 
                        onChange={(e) => setImage(e.target.files[0])} 
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">Header Heading</h3>
                    <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300" 
                        onChange={(e) => setHeading(e.target.value)} 
                        value={heading} 
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">Write Paragraph</h3>
                    <textarea 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 resize-none" 
                        rows="4"
                        onChange={(e) => setPara(e.target.value)} 
                        value={para} 
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-300"
                >
                    Add Header
                </button>
            </form>
        </div>
    );
};

export default Header;
