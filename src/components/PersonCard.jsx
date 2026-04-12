import './PersonCard.css';

function PersonCard({ person, colorTheme }) {
  return (
    <div className={`person-card theme-${colorTheme}`}>
      <div className="card-header">
        <h2 className="person-name">{person.name}</h2>
        <p className="person-subtitle">{person.subtitle}</p>
      </div>

      <div className="card-sections">
        {person.sections.map((section, index) => (
          <div key={index} className="section">
            <h3 className="section-title">{section.title}</h3>
            <p className="section-content">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonCard;