
import styles from './ImageDetails.module.scss'; 
import { renderMedia } from '../../utility/helperfunctions';

const ImageDetails = ({ image, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2 className={styles.title}>{image.title}</h2>
       {renderMedia(image,styles.image)}
      <div className={styles.votes}>   <p>Upvotes: <b>{image.ups}</b></p>
        <p>Downvotes: <b>{image.downs}</b></p>
        <p>Score:<b>{image.score}</b> </p></div>
     
      </div>
    </div>
  );
};

export default ImageDetails;
