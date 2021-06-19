    
import FriendListItem from './FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <div className="">
            <ul className={styles.friend_list}>
                
                {friends.map( ({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        // friends={friends}
                        key={id} />
                ))}
            </ul>
        </div>
    );
}

export default FriendList;