import { useState } from "react"

const InputField = ({type,placeholder,icon}) => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-wrapper">
        <input type={showPassword ? 'text' : type} placeholder={placeholder} className="input-field" required />
        <i className="material-symbols-rounded">{icon}</i>
        {type === "password" && (
            <i onClick={() => setShowPassword(prevState => !prevState)} className="material-symbols-rounded eye-icon">
                {showPassword ? "visibility" : "visibility_off"}
            </i>
        )}
    </div>
  )
}

export default InputField