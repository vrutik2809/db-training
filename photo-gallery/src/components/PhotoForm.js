import React, { useState, useEffect } from 'react';

const PhotoForm = ({ onSubmit, initialPhoto }) => {
  const [url, setUrl] = useState(initialPhoto.url);
  const [description, setDescription] = useState(initialPhoto.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ url, description });
    setUrl('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="photo-form">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Photo URL"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default PhotoForm;