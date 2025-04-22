import React, { useContext, useState } from 'react';
import { CocirculerContext } from '../../../context/cocirculer';

const Addgallery = () => {
  const { handelAddGallery } = useContext(CocirculerContext);

  const [filesData, setFilesData] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryDescription, setGalleryDescription] = useState('');
  const [socialLinks, setSocialLinks] = useState({
    youtube: '',
    linkedin: '',
    googlePhoto: '',
    instagram: '',
    facebook: '',
  });

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (filesData.length + selectedFiles.length > 6) return;

    const filesWithData = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      title: '',
      description: ''
    }));

    setFilesData((prev) => [...prev, ...filesWithData]);
  };

  const handleInputChange = (index, field, value) => {
    const newData = [...filesData];
    newData[index][field] = value;
    setFilesData(newData);
  };

  const handleSocialChange = (field, value) => {
    setSocialLinks((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const formData = new FormData();

    filesData.forEach((data, index) => {
      formData.append(`images[${index}]`, data.file);
      formData.append(`titles[${index}]`, data.title);
      formData.append(`descriptions[${index}]`, data.description);
    });

    if (thumbnail) formData.append('thumbnail', thumbnail);
    formData.append('galleryTitle', galleryTitle);
    formData.append('galleryDescription', galleryDescription);

    Object.entries(socialLinks).forEach(([key, value]) => {
      formData.append(key, value);
    });

    handelAddGallery(formData)
      .then((res) => {
        console.log("Upload success", res);
        // optionally reset form here
      })
      .catch((err) => {
        console.error("Upload error", err);
      });
  };

  return (
    <div className="p-4 space-y-4">
      <input type="file" multiple className='border-2' onChange={handleImageChange} />
      
      {filesData.map((data, index) => (
        <div key={index} className="border p-2 rounded shadow space-y-2">
          <img src={data.preview} alt="Preview" className="w-32 h-32 object-cover" />
          <input
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={(e) => handleInputChange(index, 'title', e.target.value)}
            className="block w-full border rounded px-2 py-1"
          />
          <textarea
            placeholder="Description"
            value={data.description}
            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
            className="block w-full border rounded px-2 py-1"
          />
        </div>
      ))}

      {filesData.length === 0 && <div className="text-red-500  ">Please Upload Gallery Photos</div>}
      {filesData.length > 6 && <div className="text-red-500">You can upload up to 6 images only</div>}

      <div className='bg-gray-100'>
        <label className='text-2xl'>Gallery Thumbnail</label>
        <input className='border-2' type="file" onChange={(e) => setThumbnail(e.target.files[0])} />
      </div>

      <div>
        <label>Title</label>
        <input
          type="text"
          value={galleryTitle}
          onChange={(e) => setGalleryTitle(e.target.value)}
          className="block w-full border rounded px-2 py-1"
        />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          value={galleryDescription}
          onChange={(e) => setGalleryDescription(e.target.value)}
          className="block w-full border rounded px-2 py-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['youtube', 'linkedin', 'googlePhoto', 'instagram', 'facebook'].map((platform) => (
          <div key={platform}>
            <label className="capitalize">{platform.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              value={socialLinks[platform]}
              onChange={(e) => handleSocialChange(platform, e.target.value)}
              className="block w-full border rounded px-2 py-1"
            />
          </div>
        ))}
      </div>

      {filesData.length > 0 && filesData.length <= 6 && (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add Gallery
        </button>
      )}
    </div>
  );
};

export default Addgallery;
