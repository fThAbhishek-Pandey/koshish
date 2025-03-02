import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Markdown from 'react-markdown'
import {  toast } from 'react-toastify';
// import {
//   AnnouncementContainer,
//   Content,
//   Title,
//   AnnouncementForm,
//   FormGroup,
//   Label,
//   TextArea,
//   Button,
//   AnnouncementList,
//   AnnouncementItem,
//   AnnouncementContent,
// } from '../../styles/AnnouncementStyles';

const Announcement = () => {
  // State for managing announcement
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };
  

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/announcements', {
        announcement: announcement, // Ensure that the key matches the backend model
      });
      console.log('Announcement sent:', response.data);
      // Display success toast message
      toast.success('Announcement sent successfully');
      // Clear the form
      setAnnouncement('');
      // Fetch announcements again to update the list
      fetchAnnouncements();
    } catch (error) {
      console.error('Error sending announcement:', error);
      // Display error toast message
      toast.error('Error sending announcement');
    }
  };

  return (
    <div>
        <div className='flex col-span-2'>
            <div className='bg-amber-400'>
                <textarea type="textarea" value={announcement} onChange={(e)=>setAnnouncement(e.target.value) }  />
            </div>
        <Markdown>
        {
            announcement
        }
       </Markdown>
        </div>
      
    </div>
  );
};

export default Announcement;