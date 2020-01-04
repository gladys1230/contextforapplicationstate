import React, {
  useState,
  useEffect,
  useRef,
  useContext
} from 'react';
import UserContext from './UserContext';

const UserMenu = ({ onLogout }) => {
  const [isMenuVisible, setMenuVisible] = useState(
    false
  );
  const avatarRef = useRef();
  const user = useContext(UserContext);

  const hideMenu = event => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if (event.target !== avatarRef.current) {
      setMenuVisible(false);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(vis => !vis);
  };

  useEffect(() => {
    document.addEventListener('click', hideMenu);

    return () =>
      document.removeEventListener('click', hideMenu);
  });

  return (
    <div className="UserMenu">
      <img
        className="UserAvatar"
        alt="User avatar"
        src={user.avatar}
        onClick={toggleMenu}
        ref={avatarRef}
      />
      {isMenuVisible && (
        <ul>
          <li onClick={onLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;