import React, { useState, useEffect } from 'react';
import PhotoForm from './components/PhotoForm';
import PhotoItem from './components/PhotoItem';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const App = () => {
  const [photos, setPhotos] = useLocalStorage('photos',[]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const updatePhoto = (index, updatedPhoto) => {
    const newPhotos = [...photos];
    newPhotos[index] = updatedPhoto;
    setPhotos(newPhotos);
    setEditingIndex(null);
    setModalIsOpen(false);
  };

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  const openModalForEdit = (index) => {
    setEditingIndex(index);
    setModalIsOpen(true);
  };

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <PhotoForm
        onSubmit={editingIndex !== null ? (photo) => updatePhoto(editingIndex, photo) : addPhoto}
        initialPhoto={editingIndex !== null ? photos[editingIndex] : { url: '', description: '' }}
      />
      <div className="gallery">
        {photos.map((photo, index) => (
          <PhotoItem
            key={index}
            photo={photo}
            onEdit={() => openModalForEdit(index)}
            onRemove={() => removePhoto(index)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Edit Photo"
        className="modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={false}
      >
        <h2>Edit Photo</h2>
        {editingIndex !== null && (
          <PhotoForm
            onSubmit={(photo) => updatePhoto(editingIndex, photo)}
            initialPhoto={photos[editingIndex]}
          />
        )}
      </Modal>
    </div>
  );
};

export default App;
