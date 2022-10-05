import PropTypes from 'prop-types';

import CSS from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={CSS.profile}>
      <div className={CSS.description}>
        <img src={avatar} alt="User avatar" className={CSS.avatar} />
        <p className={CSS.name}>{username}</p>
        <p className={CSS.tag}>{tag}</p>
        <p className={CSS.location}>{location}</p>
      </div>

      <ul className={CSS.stats}>
        <li>
          <span className={CSS.label}>Followers</span>
          <span className={CSS.quantity}>{followers}</span>
        </li>

        <li>
          <span className={CSS.label}>Views</span>
          <span className={CSS.quantity}>{views}</span>
        </li>
        
        <li>
          <span className={CSS.label}>Likes</span>
          <span className={CSS.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
