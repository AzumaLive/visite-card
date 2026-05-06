import TeamCard from '../TeamCard/TeamCard'
import './TeamList.css'

function TeamList({ team, selectedId, onSelect }) {
  return (
    <div className="team-list">
      <div className="team-header">
        <span className="team-label">Наша команда</span>
        <h1 className="team-title">5 Кадров</h1>
        <p className="team-desc">
          Мы — команда студентов, объединённых общими ценностями и стремлением к высоким результатам.
        </p>
      </div>
      <div className="cards">
        {team.map(member => (
          <TeamCard
            key={member.id}
            member={member}
            isActive={selectedId === member.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default TeamList
