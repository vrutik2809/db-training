import React from 'react';

const PhotoItem = ({ photo, onEdit, onRemove }) => {
    return (
        <div className="photo-item">
            <img src={photo.url} alt={photo.description} />
            <p>{photo.description}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};

export default PhotoItem;