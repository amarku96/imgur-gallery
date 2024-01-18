  
  export default function isVideo (url)  {
    return url.match(/\.(mp4)$/) != null;
  };

  export function renderMedia  (image, style)  {
    if (isVideo(image.images[0].link)) {
      return (
        <video loop autoPlay='' controls className={style}>
          <source src={image.images[0].link} type="video/mp4" />
          Your browser does not support the video tag.
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
    }}