import { useState } from 'react'
import team from './data/team'
import TeamList from './components/TeamList/TeamList'
import DetailPanel from './components/DetailPanel/DetailPanel'
import './App.css'

function App() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = team.find(m => m.id === selectedId)

  return (
    <div className="layout">
      <TeamList
        team={team}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <DetailPanel
        member={selected}
        onClose={() => setSelectedId(null)}
      />
    </div>
  )
}

export default App
