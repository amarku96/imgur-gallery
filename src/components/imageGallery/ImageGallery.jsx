import React, { useEffect, useState } from "react";
import useFetchImages from "../../api/fetchImages";
import styles from "./ImageGallery.module.scss";
import { renderMedia, usePagination } from "../../utility/helperfunctions";
import ImageDetails from "./ImageDetails";
import Filter from "../Filters/Filter";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Pagination from "../Pagination/Pagination";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(0);

  const [params, setParams] = useState({
    section: "hot",
    sort: "viral",
    window: "day",
    page: currentPage,
    showViral: true,
  });

  const { data, isLoading, error } = useFetchImages(params);
  const currentItems = usePagination(currentPage, itemsPerPage, data);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    }
    setParams((prevParams) => ({ ...prevParams, page: currentPage }));
  }, [currentPage, data, itemsPerPage]);

  const setSection = (newSection) => {
    setParams({ ...params, section: newSection });
    setCurrentPage(1);
  };
  const handleViralToggle = (event) => {
    setParams({ ...params, showViral: event.target.checked });
    setCurrentPage(1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ImageGallery;
