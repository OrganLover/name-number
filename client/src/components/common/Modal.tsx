import {IModal} from '../Users/UsersListContainer'
import './modal.css'

interface IProps {
  modalOpened: boolean
  setModalOpened: (modal: IModal) => void
  children: React.ReactNode
}

export function Modal({modalOpened, setModalOpened, children}: IProps) {
  return (
    <div className='modal' onClick={() => setModalOpened({isOpened: false, mode: ''})}>
      <div className='modalContent' onClick={(e) => e.stopPropagation()}>
        <span className='modalCloseButton' onClick={() => setModalOpened({isOpened: false, mode: ''})}>
          x
        </span>
        {children}
      </div>
    </div>
  )
}
