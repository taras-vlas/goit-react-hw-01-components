    
import FriendListItem from './FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <div className="">
            <ul className={styles.friend_list}>
                
                <FriendListItem  friends={friends} />
            </ul>
        </div>
    );
}

export default FriendList;