import React, { useEffect, useState } from "react";
import useFetchImages from "../../api/fetchImages";
import styles from "./ImageGallery.module.scss";
import { renderMedia, usePagination } from "../../utility/helperfunctions";
import ImageDetails from "./ImageDetails";
import Filter from "../Filters/Filter";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [params, setParams] = useState({
    section: "hot",
    sort: "viral",
    window: "day",
    page: currentPage,
    showViral: true,
  });

  useEffect(() => {
    setParams((prevParams) => ({ ...prevParams, page: currentPage }));
  }, [currentPage]);

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
  const handlePrevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const currentItems = usePagination(currentPage, itemsPerPage, data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Filter
        section={params.section}
        onSectionChange={(e) => setSection(e.target.value)}
        showViral={params.showViral}
        onShowViralChange={handleViralToggle}
      />

      <div className={styles.galleryContainer}>
        {currentItems?.map((image) => (
          <div
            key={image.id}
            className={styles.galleryItem}
            onClick={() => handleImageClick(image)}
          >
            {image.images &&
              image.images.length > 0 &&
              renderMedia(image, styles.galleryImage)}
            <p className={styles.galleryTitle}>{image.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageDetails
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <div className={styles.paginationControls}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
};

export default ImageGallery;
