import {BsFillTrash3Fill} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'
import {IUser} from './UsersListContainer'

interface IProps {
  user: IUser
  onEditClick: (user: IUser) => void
  onDeleteClick: (user: IUser) => void
}

export function User({user, onEditClick, onDeleteClick}: IProps) {
  return (
    <li className='usersListItem'>
      <div className='userInfoBlock'>
        <span>
          <b>{user.user_name}</b>
        </span>
        <span>{user.user_number}</span>
      </div>
      <div className='buttonsBlock'>
        <BiEditAlt
          color='#333'
          size='25px'
          cursor='pointer'
          className='editButton'
          onClick={() => onEditClick(user)}
        />
        <BsFillTrash3Fill
          color='#ff3333'
          size='25px'
          cursor='pointer'
          className='deleteButton'
          onClick={() => onDeleteClick(user)}
        />
      </div>
    </li>
  )
}
