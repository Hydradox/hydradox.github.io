import style from './TextArea.module.scss';

function InputField({ label, name, handleInput, className, required }) {
    return (
        <label htmlFor={name} className={style.InputField + (className ? ' ' + className : '')}>
            <textarea className={style.Input} rows="10" name={name} id={name} placeholder="&nbsp;" onInput={handleInput} required={required}></textarea>

            <span className={style.InputLabel}>{label}</span>
        </label>
    )
}

export default InputField