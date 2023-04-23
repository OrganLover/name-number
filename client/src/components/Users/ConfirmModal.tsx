import {Modal} from '../common/Modal'
import {IModal} from './UsersListContainer'

interface IProps {
  modalOpened: boolean
  setModalOpened: (modal: IModal) => void
  modalConfirmClick: () => void
  modalCancelClick: () => void
  modalTitle: string
}

export function ConfirmModal({
  modalOpened,
  setModalOpened,
  modalConfirmClick,
  modalCancelClick,
  modalTitle,
}: IProps) {
  return (
    <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
      <div>
        <span className='modalTitle'>{modalTitle}</span>
        <div className='modalButtons'>
          <button className='modalConfirmButton' onClick={modalConfirmClick}>
            Confirm
          </button>
          <button className='modalCancelButton' onClick={modalCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}
