import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/index">Index</Link>
        </li>
        <li>
          <Link to="/index/new">Create Preset</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
