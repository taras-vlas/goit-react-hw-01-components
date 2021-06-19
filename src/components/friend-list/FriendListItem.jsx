/* фон span.status  можно сделать через разный CSS-класс или Styled Components. */

import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (

        <li className={styles.item}  key={id}>
          {/* <span className={styles.status} */}
          <span 
            className={
              isOnline ? styles.statusOnline : styles.statusOffline
            }
          >
            {isOnline}</span>
         
          <img className={styles.avatar} src={avatar} alt="Аватар користувача" width="48" />
          <p className={styles.name}> {name} </p>
        </li >
      
    );
}

/*** friends.map надо делать в FriendList потому что получается нелогично. FriendListItem - это один френд. а ты внутри него ренедеришь всех френдов */
// const FriendListItem = ({ friend }) => {
//     return (

//         <li className={styles.item}  key={friend.id}>
//           {/* <span className={styles.status} */}
//           <span 
//             className={
//               friend.isOnline ? styles.statusOnline : styles.statusOffline
//             }
//           >
//             {friend.isOnline}</span>
         
//           <img className={styles.avatar} src={friend.avatar} alt="Аватар користувача" width="48" />
//           <p className={styles.name}> {friend.name} </p>
//         </li >
      
//     );
// }

// FriendListItem.defaultProps = {
//   avatar: ,
// };

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

