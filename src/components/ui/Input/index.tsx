import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ name='', ...props }, ref) => {
        return(
            <>
                <input  name={name} ref={ref} {...props} />
            </>
        )
    }
)

export default Input;