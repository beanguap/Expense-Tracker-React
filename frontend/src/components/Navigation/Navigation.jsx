import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';
import PropTypes from 'prop-types';

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      {/* User info section */}
      <div className="user-con">
        <img src={avatar} alt="User Avatar" />
        <div className="text">
          <h2>Mike</h2>
          <p>Your Money</p>
        </div>
      </div>

      {/* Menu items */}
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      {/* Bottom navigation */}
      <ul className="bottom-nav">
        <li>
          {signout} Sign Out
        </li>
      </ul>
    </NavStyled>
  );
}

Navigation.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

const NavStyled = styled.nav`
  /* Styles for the navigation container */
  padding: 2rem 1.5rem;
  width: 374px;
  z-index: -1;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  /* Styles for the user info section */
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }

    h2 {
      color: rgba(34, 34, 96, 1);
    }

    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  /* Styles for the menu items section */
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  /* Styles for the active menu item */
  .active {
    color: rgba(34, 34, 96, 1);

    i {
      color: rgba(34, 34, 96, 1);
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  /* Styles for the bottom navigation section */
  .bottom-nav {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: color 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);

      i {
        margin-right: 1rem;
      }

      &:hover {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
`;

export default Navigation;
