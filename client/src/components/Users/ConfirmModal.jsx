import Modal from '../common/Modal'

function ConfirmModal({modalOpened, setModalOpened, modalConfirmClick, modalCancelClick, modalTitle}) {
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

export default ConfirmModal
