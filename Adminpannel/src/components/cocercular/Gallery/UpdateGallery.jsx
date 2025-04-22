import React, { useContext, useEffect, useState } from 'react';
import { CocirculerContext } from '../../../context/cocirculer';
import { useParams } from 'react-router-dom';

const UpdateGallery = () => {
  const { id } = useParams();

  const {
    GalleryById,
    handelGalleryById,
    handelUpdateGallery,
  } = useContext(CocirculerContext);

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

  useEffect(() => {
    handelGalleryById(id);
  }, [id]);

  useEffect(() => {
    if (GalleryById) {
      setGalleryTitle(GalleryById.galleryTitle || '');
      setGalleryDescription(GalleryById.galleryDescription || '');
      setSocialLinks({
        youtube: GalleryById.youtube || '',
        linkedin: GalleryById.linkedin || '',
        googlePhoto: GalleryById.googlePhoto || '',
        instagram: GalleryById.instagram || '',
        facebook: GalleryById.facebook || '',
      });

      if (GalleryById.Photo) {
        const preloadedImages = GalleryById.Photo.map((img) => ({
          file: null,
          preview: img.image,
          title: img.tittle || '',
          description: img.desc || '',
          isExisting: true,
        }));
        setFilesData(preloadedImages);
      }
    }
  }, [GalleryById]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (filesData.length + selectedFiles.length > 6) return;

    const newImages = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      title: '',
      description: '',
      isExisting: false,
    }));

    setFilesData((prev) => [...prev, ...newImages]);
  };

  const handleReplaceImage = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const updated = [...filesData];
    updated[index].file = file;
    updated[index].preview = URL.createObjectURL(file);
    updated[index].isExisting = false; // mark as new since it's replaced
    setFilesData(updated);
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...filesData];
    updated[index][field] = value;
    setFilesData(updated);
  };

  const handleSocialChange = (field, value) => {
    setSocialLinks((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('galleryTitle', galleryTitle);
    formData.append('galleryDescription', galleryDescription);
    formData.append('thumbnailUrl', GalleryById.thumbnail|| '')
    filesData.forEach((data, index) => {
      if (!data.isExisting && data.file) {
        formData.append(`newImages`, data.file);
        formData.append(`newTitles`, data.title);
        formData.append(`newDescriptions`, data.description);
      } else {
        formData.append(`existing[${index}][preview]`, data.preview);
        formData.append(`existing[${index}][title]`, data.title);
        formData.append(`existing[${index}][description]`, data.description);
      }
    });

    if (thumbnail) formData.append('thumbnail', thumbnail);

    Object.entries(socialLinks).forEach(([key, value]) => {
      formData.append(key, value);
    });

    handelUpdateGallery(id, formData)
      .then((res) => {
        console.log('Gallery updated:', res);
      })
      .catch((err) => {
        console.error('Update failed:', err);
      });
  };

  return (
    <div className="p-4 space-y-4">
       <h2>Update Album</h2>
      <input type="file" multiple onChange={handleImageChange} />

      {filesData && filesData.map((data, index) => (
        <div key={index} className="border p-2 rounded shadow space-y-2">
          <img
            src={data.preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded"
          />

          {/* Replace Image */}
          <input
            type="file"
            accept="image/*"
            id={`replace-img-${index}`}
            style={{ display: 'none' }}
            onChange={(e) => handleReplaceImage(e, index)}
          />
          <button
            onClick={() => document.getElementById(`replace-img-${index}`).click()}
            className="text-blue-600 underline text-sm"
          >
            Replace Image
          </button>

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
            onChange={(e) =>
              handleInputChange(index, 'description', e.target.value)
            }
            className="block w-full border rounded px-2 py-1"
          />
        </div>
      ))}

      <div>
        <label>Gallery Thumbnail</label>
        <input type="file" onChange={(e) => setThumbnail(e.target.files[0])} />
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
        <textarea
          type="text"
          value={galleryDescription}
          onChange={(e) => setGalleryDescription(e.target.value)}
          className="block w-full border rounded px-2 py-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['youtube', 'linkedin', 'googlePhoto', 'instagram', 'facebook'].map(
          (platform) => (
            <div key={platform}>
              <label className="capitalize">
                {platform.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                value={socialLinks[platform]}
                onChange={(e) =>
                  handleSocialChange(platform, e.target.value)
                }
                className="block w-full border rounded px-2 py-1"
              />
            </div>
          )
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        Update Gallery
      </button>
    </div>
  );
};

export default UpdateGallery;
