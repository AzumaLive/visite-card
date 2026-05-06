import './TeamCard.css'

function TeamCard({ member, isActive, onSelect }) {
  return (
    <div
      className={`card${isActive ? ' card--active' : ''}`}
      onClick={() => onSelect(member.id)}
    >
      <h3 className="card-name">{member.name}</h3>
      <span className="card-role">{member.role}</span>
      <p className="card-desc">{member.shortDesc}</p>
      <span className="card-arrow">→</span>
    </div>
  )
}

export default TeamCard
