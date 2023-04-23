import {useState, useEffect} from 'react'
import {UsersList} from './UsersList'

export interface IUser {
  id: number | null
  user_name: string | null
  user_number: string | null
}

export interface IModal {
  isOpened: boolean
  mode: string
}

function UsersListContainer() {
  const [users, setUsers] = useState<Array<IUser>>([])
  const [modal, setModal] = useState<IModal>({isOpened: false, mode: ''})
  const [name, setName] = useState<string | null>(null)
  const [number, setNumber] = useState<string | null>(null)
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        if (data.toString() !== users.toString()) {
          setUsers(data.sort((a: IUser, b: IUser) => b.id! - a.id!))
        }
      })
  }, [users.length, users])

  const onAddClick = () => {
    fetch('/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        number: number,
      }),
    })
      .then((response) => response.json())
      .then((data) => setUsers([...users, data].sort((a: IUser, b: IUser) => b.id! - a.id!)))
    setName('')
    setNumber('')
    setModal({isOpened: false, mode: ''})
  }

  const onCancelClick = () => {
    setName('')
    setNumber('')
    setModal({isOpened: false, mode: ''})
  }

  const onEditClick = (user: IUser) => {
    setUser(user)
    setName(user.user_name)
    setNumber(user.user_number)
    setModal({isOpened: true, mode: 'put'})
  }

  const onSaveClick = () => {
    const value = window.confirm('Are you sure you want to save new data?')
    if (value) {
      fetch('/api/users', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user?.id,
          name: name,
          number: number,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers(
            [...users.filter((item) => item.id != user?.id), data].sort((a: IUser, b: IUser) => b.id! - a.id!)
          )
          // setUsers(users.slice().sort())
        })
    }
    setName('')
    setNumber('')
    setUser(null)
    setModal({isOpened: false, mode: ''})
  }

  const onDeleteClick = (user: IUser) => {
    setUser(user)
    setModal({isOpened: true, mode: 'delete'})
  }

  const onDeleteConfirmClick = () => {
    fetch(`/api/users/${user?.id}`, {
      method: 'delete',
    })
    setUsers(users.filter((item) => item.id !== user?.id))
    setModal({isOpened: false, mode: ''})
    setUser(null)
  }
  const onDeleteAllConfirmClick = () => {
    fetch('/api/users', {
      method: 'delete',
    })
    setUsers([])
    setModal({isOpened: false, mode: ''})
  }
  return (
    <UsersList
      users={users}
      user={user}
      name={name}
      number={number}
      setName={setName}
      setNumber={setNumber}
      modal={modal}
      setModal={setModal}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onAddClick={onAddClick}
      onCancelClick={onCancelClick}
      onSaveClick={onSaveClick}
      onDeleteAllConfirmClick={onDeleteAllConfirmClick}
      onDeleteConfirmClick={onDeleteConfirmClick}
    />
  )
}

export default UsersListContainer
