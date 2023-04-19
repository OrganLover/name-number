import {useState, useEffect} from 'react'
import UsersList from './UsersList'

function UsersListContainer() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState({isOpened: false, mode: ''})
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.sort((a, b) => b.id - a.id)))
  }, [users.length])

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
      .then((data) => setUsers([...users, data]))
    setName('')
    setNumber('')
    setModal({isOpened: false, mode: ''})
  }

  const onCancelClick = () => {
    setName('')
    setNumber('')
    setModal({isOpened: false, mode: ''})
  }

  const onEditClick = (user) => {
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
          id: user.id,
          name: name,
          number: number,
        }),
      })
        .then((response) => response.json())
        .then((data) =>
          setUsers(
            users.filter((item) => item.id != user.id),
            data
          )
        )
      setUsers([...users.filter((item) => item.id !== user.id), {id: user.id, name: name, number: number}])
    }
    setName('')
    setNumber('')
    setUser({})
    setModal({isOpened: false, mode: ''})
  }

  const onDeleteClick = (user) => {
    setUser(user)
    setModal({isOpened: true, mode: 'delete'})
  }

  const onDeleteConfirmClick = () => {
    fetch(`/api/users/${user.id}`, {
      method: 'delete',
    })
    setUsers(users.filter((item) => item.id !== user.id))
    setModal({isOpened: false, mode: ''})
    setUser({})
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
