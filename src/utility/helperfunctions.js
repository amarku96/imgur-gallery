export default function isVideo(url) {
  return url.match(/\.(mp4)$/) != null;
}

export function renderMedia(image, style, referrerPolicy) {
  if (isVideo(image.images[0].link)) {
    return (
      <video controls className={style}>
        <source src={image.images[0].link} type="video/mp4" />
      </video>
    );
  } else {
    return (
      <img
        src={image.images[0].link}
        alt={image.title}
        className={style}
        referrerPolicy="no-referrer"
      />
    );
  }
}
export const usePagination = (currentPage, itemsPerPage, data) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Object.values(data || {}).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return currentItems;
};
