import {SetStateAction} from 'react'
import './usersList.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BsFillTrash3Fill} from 'react-icons/bs'
import {Modal} from '../common/Modal'
import {User} from './User'
import {Form} from './Form'
import {ConfirmModal} from './ConfirmModal'
import {IUser, IModal} from './UsersListContainer'

interface IProps {
  users: IUser[]
  user: IUser | null
  name: string | null
  number: string | null
  setName: (name: string) => void
  setNumber: (number: string) => void
  modal: IModal
  setModal: (modal: IModal) => void
  onEditClick: (user: IUser) => void
  onDeleteClick: (user: IUser) => void
  onAddClick: () => void
  onCancelClick: () => void
  onSaveClick: () => void
  onDeleteAllConfirmClick: () => void
  onDeleteConfirmClick: () => void
}

export function UsersList({
  users,
  user,
  name,
  number,
  setName,
  setNumber,
  modal,
  setModal,
  onEditClick,
  onDeleteClick,
  onAddClick,
  onCancelClick,
  onSaveClick,
  onDeleteAllConfirmClick,
  onDeleteConfirmClick,
}: IProps) {
  return (
    <>
      <ul className='usersList'>
        {users.map((user) => (
          <User key={user.id} user={user} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
        ))}
        <div className='usersControlPanel'>
          <AiOutlinePlusCircle
            className='plusButton'
            size='50px'
            onClick={() => setModal({isOpened: true, mode: 'post'})}
          />
          {users.length > 1 && (
            <BsFillTrash3Fill
              className='deleteAllButton'
              size='40px'
              onClick={() => setModal({isOpened: true, mode: 'deleteAll'})}
            />
          )}
        </div>
      </ul>
      {modal.isOpened && modal.mode === 'post' && (
        <Modal modalOpened={modal.isOpened} setModalOpened={setModal}>
          <Form
            modalTitle='Add user'
            submitButtonTitle='Add'
            onSubmitClick={onAddClick}
            onCancelClick={onCancelClick}
            name={name}
            number={number}
            setName={setName}
            setNumber={setNumber}
          />
        </Modal>
      )}
      {modal.isOpened && modal.mode === 'put' && (
        <Modal modalOpened={modal.isOpened} setModalOpened={setModal}>
          <Form
            modalTitle='Edit user'
            submitButtonTitle='Save'
            onSubmitClick={onSaveClick}
            onCancelClick={onCancelClick}
            name={name}
            number={number}
            setName={setName}
            setNumber={setNumber}
          />
        </Modal>
      )}
      {modal.isOpened && modal.mode === 'delete' && (
        <ConfirmModal
          modalOpened={modal.isOpened}
          setModalOpened={setModal}
          modalConfirmClick={onDeleteConfirmClick}
          modalCancelClick={onCancelClick}
          modalTitle={`Are you sure you want to delete user: ${user!.user_name}?`}
        />
      )}
      {modal.isOpened && modal.mode === 'deleteAll' && (
        <ConfirmModal
          modalOpened={modal.isOpened}
          setModalOpened={setModal}
          modalConfirmClick={onDeleteAllConfirmClick}
          modalCancelClick={onCancelClick}
          modalTitle='Are you sure you want to delete all users?'
        />
      )}
    </>
  )
}
