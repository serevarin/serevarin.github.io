import './App.css'
import ContactInfo from './components/ContactInfo'
import TOSModal from './components/TOSModal'

const App = () => {
  const openModal = () => {
    ;(document.getElementById('tos-modal') as HTMLDialogElement).showModal()
  }
  return (
    <div className="flex justify-center items-center h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[rgba(48,17,17,0.75)] z-0" />
      <div className="relative z-10 card bg-base-100 shadow-sm lg:card-side max-w-1/2 lg:max-h-1/2 sm:max-h-2/3">
        <div className="card-body">
          <h2 className="card-title">serevarin</h2>
          <ContactInfo />
          <div className="card-actions mt-auto">
            <button
              className="btn btn-primary"
              type="button"
              onClick={openModal}
            >
              terms of service
            </button>
            <TOSModal />
          </div>
        </div>
        <figure>
          <img src="/serevarin.jpg" alt="my sona!!!" />
        </figure>
      </div>
    </div>
  )
}

export default App
