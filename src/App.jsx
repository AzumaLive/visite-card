import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import PersonCard from './components/PersonCard';
import { personsData } from './data/personsData';
import './App.css';

function App() {
  const colorThemes = ['blue', 'green', 'purple', 'orange', 'teal'];

  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/person1" replace />} />
            {personsData.map((person, index) => (
              <Route
                key={index}
                path={`/person${index + 1}`}
                element={<PersonCard person={person} colorTheme={colorThemes[index]} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
