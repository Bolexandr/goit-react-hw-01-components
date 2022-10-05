import css from "./FriendList.module.css"

import PropTypes from 'prop-types';


const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map ( item => (
        <li className={css.item} key={item.id}>
          <span
            className={item.isOnline ? `${css.status} ${css.isOnline}` : `${css.status} ${css.isOffline}`}
          ></span>
          <img
            className={css.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf( PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

  }))
}