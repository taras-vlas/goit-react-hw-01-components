/* фон span.status  можно сделать через разный CSS-класс или Styled Components. */

import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const FriendListItem = ({ friends }) => {

    return (
      friends.map(friend => (
        <li className={styles.item}  key={friend.id}>
          <span className={styles.status}
           className={
            friend.isOnline ? styles.statusOnline : styles.statusOffline
          }>{friend.isOnline}</span>
         
          <img className={styles.avatar} src={friend.avatar} alt="Аватар користувача" width="48" />
          <p className={styles.name}> {friend.name} </p>
        </li >
      ))
    );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendListItem;

