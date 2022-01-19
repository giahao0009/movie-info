import {useContext} from 'react'
import Context from "../../store/context"
import * as actions from '../../store/actions'
import './Modal.scss'

function Modal() {
    const [state, dispatch] = useContext(Context)

    const handleCloseModal = () => {
        dispatch(actions.openModal(false))
    }

    console.log(state.video)

    return (
        <div className="modal-container">
            <div className="backdrop" onClick={handleCloseModal}></div>
            <div className="modal">
                    <div className="movie">
                        <iframe
                            src={`https://www.youtube.com/embed/${state.video}`}
                            width="100%"
                            height="100%"
                            title='video'
                        ></iframe>
                    </div>
                
            </div>
        </div>
    )
}

export default Modal