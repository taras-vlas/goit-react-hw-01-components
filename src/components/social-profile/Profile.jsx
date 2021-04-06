import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import styles from './profile.module.css';

const Profile = ({
    name,      // — имя пользователя
    tag,       // — тег в социальной сети без @
    location,  // — город и страна
    avatar,    // — url на изображение
    stats,     // — объект с информацией об активности
  }) => {
    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img           
            src={avatar}
            alt="Аватар користувача"
            className={styles.avatar}
          />
          <p className={styles.name}> {name} </p>
          <p className={styles.tag}> @{tag} </p>
          <p className={styles.location}> {location} </p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}> {stats.followers} </span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}> {stats.views} </span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}> {stats.likes} </span>
          </li>
        </ul>
      </div>
   );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};

Profile.defaultProps = {  
  avatar: defaultImage,
};

export default Profile;