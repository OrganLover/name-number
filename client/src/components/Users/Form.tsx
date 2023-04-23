interface IProps {
  modalTitle: string
  submitButtonTitle: string
  onSubmitClick: () => void
  onCancelClick: () => void
  name: string | null
  number: string | null
  setName: (value: string) => void
  setNumber: (value: string) => void
}

export function Form({
  modalTitle,
  submitButtonTitle,
  onSubmitClick,
  onCancelClick,
  name,
  number,
  setName,
  setNumber,
}: IProps) {
  return (
    <form onSubmit={onSubmitClick}>
      <span className='modalTitle'>{modalTitle}</span>
      <div className='modalInputs'>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)} required value={name || ''} />
        <input
          placeholder='Number'
          onChange={(e) => setNumber(e.target.value)}
          required
          value={number || ''}
        />
      </div>
      <div className='modalButtons'>
        <button type='submit' className='modalAddButton'>
          {submitButtonTitle}
        </button>
        <button type='button' className='modalCancelButton' onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  )
}
