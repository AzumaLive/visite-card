import { NavLink } from 'react-router-dom';
import { personsData } from '../data/personsData';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <h1 className="nav-title">5 кадров</h1>
        <ul className="nav-list">
          {personsData.map((person, index) => (
            <li key={index}>
              <NavLink
                to={`/person${index + 1}`}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {person.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
