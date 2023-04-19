function Form({
  modalTitle,
  submitButtonTitle,
  onSubmitClick,
  onCancelClick,
  name,
  number,
  setName,
  setNumber,
}) {
  return (
    <form onSubmit={onSubmitClick}>
      <span className='modalTitle'>{modalTitle}</span>
      <div className='modalInputs'>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)} required value={name} />
        <input placeholder='Number' onChange={(e) => setNumber(e.target.value)} required value={number} />
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

export default Form
