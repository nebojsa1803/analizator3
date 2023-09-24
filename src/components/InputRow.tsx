type InputRowProp = {
  inputType: string
  inputName: string
  labelText: string
}
const InputRow = ({ inputType, inputName, labelText }: InputRowProp) => {
  return (
    <div className='form-row'>
      <label htmlFor={inputName} className='form-label'>
        {labelText}
      </label>
      <input
        type={inputType}
        className='form-input'
        id={inputName}
        name={inputName}
      />
    </div>
  )
}

export default InputRow
