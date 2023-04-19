import {BsFillTrash3Fill} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'

function User({user, onEditClick, onDeleteClick}) {
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

export default User
