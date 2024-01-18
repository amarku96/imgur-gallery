import React, { useState } from 'react';
import useFetchImages from '../../api/fetchImages';
import styles from './ImageGallery.module.scss'; 
import  { renderMedia } from '../../utility/helperfunctions';
import ImageDetails from './ImageDetails';

const ImageGallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [params, setParams] = useState({
    section: 'hot',
    sort: 'viral',
    window: 'day',
    page: 1,
    showViral: true
  });

  const { data, isLoading, error } = useFetchImages(params);

  const setSection = (newSection) => {
    setParams({ ...params, section: newSection });
  };
  const handleViralToggle = (event) => {
    setParams({ ...params, showViral: event.target.checked });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
console.log(selectedImage);


if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

 

  return (
    <>
       <div className={styles.sectionSelector}>
        <button onClick={() => setSection('hot')}>Hot</button>
        <button onClick={() => setSection('top')}>Top</button>
        <button onClick={() => setSection('user')}>User</button>
        <label>
          Show Viral Images
          <input 
            type="checkbox" 
            checked={params.showViral} 
            onChange={handleViralToggle} 
          />
        </label>
      </div>
    <div className={styles.galleryContainer}>
      {data?.map((image) => (
        <div key={image.id} className={styles.galleryItem } onClick={() => handleImageClick(image)}>
          {image.images && image.images.length > 0 &&  renderMedia(image, styles.galleryImage)}
          <p className={styles.galleryTitle}>{image.title}</p>
        </div>
      ))}
    </div>
      {selectedImage && (
        <ImageDetails image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}</>
  );
};

export default ImageGallery;
