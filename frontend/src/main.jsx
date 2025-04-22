import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegistrarTareas from './components/registrarTareas/RegistrarTareas'
import NotasRapidas from './components/notasRapidas/NotasRapidas'
import Checklist from './components/checklist/Checklist'
import Pomodoro from './components/pomodoro/Pomodoro'

const App = () => {
  const [activeTab, setActiveTab] = useState('tareas')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Efecto para detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setIsMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const components = {
    tareas: <RegistrarTareas />,
    pomodoro: <Pomodoro />,
    notas: <NotasRapidas />,
    checklist: <Checklist />
  }

  const tabs = [
    { id: 'tareas', icon: '📝', label: 'Tareas' },
    { id: 'checklist', icon: '✅', label: 'Checklist' },
    { id: 'pomodoro', icon: '⏱️', label: 'Pomodoro' },
    { id: 'notas', icon: '📋', label: 'Notas' }
  ]

  return (
    <div className="app-container">
      {/* Header superior para móvil */}
      <header className="mobile-header">
        <button a
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <h1 className="app-title">SmarToDo</h1>
        <div className="user-avatar">
          <span>TE</span>
        </div>
      </header>

      {/* Menú lateral */}
      <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav-menu">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab.id)
                setIsMenuOpen(false)
              }}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="user-info">
          <div className="user-avatar large">
            <span>TE</span>
          </div>
          <div className="user-details">
            <h3>Thomas Espitia</h3>
            <p>El mejor 💖</p>
          </div>
        </div>
      </aside>

      {/* Overlay para móvil */}
      {isMenuOpen && isMobile && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Contenido principal */}
      <main className="main-content">
        {components[activeTab] || <div>Selecciona una opción</div>}
      </main>

      {/* Barra inferior para móvil */}
      {isMobile && (
        <footer className="mobile-footer">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`footer-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </footer>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)