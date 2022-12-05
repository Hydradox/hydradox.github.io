import style from './InputField.module.scss';

function InputField({ type, label, name, handleInput, icon, className }) {
    return (
        <label htmlFor={name} className={style.InputField + (className ? ' ' + className : '')}>
            <input className={style.Input + (icon ? ' ' + style.HasIcon : '')} type={type} name={name} id={name} placeholder="&nbsp;" onInput={handleInput} />
            {icon && <span className={style.InputIcon}>{icon}</span>}

            <span className={style.InputLabel + (icon ? ' ' + style.HasIcon : '')}>{label}</span>
        </label>
    )
}

export default InputField