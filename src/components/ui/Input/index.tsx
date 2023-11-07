import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type='text', name='', ...props }, ref) => {
        return(
            <>
                <input type={type} name={name} ref={ref} {...props} />
            </>
        )
    }
)

export default Input;