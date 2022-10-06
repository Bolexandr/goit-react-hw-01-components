import PropTypes from 'prop-types';

import {FriendItem} from "./friendItem"

import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>

      {friends.map ( item => (
      FriendItem(item)
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