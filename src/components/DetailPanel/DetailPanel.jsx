import './DetailPanel.css'

function DetailPanel({ member, onClose }) {
  return (
    <div className="detail-panel">
      {member ? (
        <div className="detail-content">
          <div className="detail-header">
            <div className="detail-top">
              <button className="detail-back" onClick={onClose}>← Назад</button>
              <button className="detail-close" onClick={onClose}>✕</button>
            </div>
            <h2 className="detail-name">{member.name}</h2>
            <span className="detail-role">{member.role}</span>
            <p className="detail-full-desc">{member.fullDesc}</p>
          </div>

          <hr className="divider" />

          <div className="detail-contacts">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <span>{member.email}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✆</span>
              <span>{member.phone}</span>
            </div>
            {member.location &&
              <div className="contact-item">
                <span className="contact-icon">◎</span>
                <a href={`https://${member.location}`}>{member.location}</a>
              </div>
            }

          </div>

          <hr className="divider" />

          <section className="detail-section">
            <h3 className="section-title">Обо мне</h3>
            <p className="section-text">{member.about}</p>
          </section>

          <hr className="divider" />

          <section className="detail-section">
            <h3 className="section-title">Навыки</h3>
            <div className="skills">
              {member.skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          <hr className="divider" />

          <section className="detail-section">
            {member.additionalInfo.map(({ title, inner }, index) => (
              <div className="additional-info" key={index}>
                <h3 className="section-title">{title}</h3>
                <div className="exp-list">
                  {inner.map((exp, i) => (
                    <div key={i} className="exp-item">
                      <span className="exp-period">{exp.period}</span>
                      <p className="exp-title">{exp.title}</p>
                      <p className="exp-desc">{exp.desc}</p>
                    </div>
                  ))}
                  {index !== member.additionalInfo.length - 1 && <hr className="divider" />}
                </div>
              </div>
            ))}
          </section>

        </div>
      ) : (
        <div className="detail-empty">
          <p>Выберите участника команды</p>
        </div>
      )}
    </div>
  )
}

export default DetailPanel
