function ErrorMessage(props) {
    return !props.errorState ? null : <p className='text-center mt-6 text-red-500 font-semibold text-sm underline'>Please input a valid ingredient</p>
}

export default ErrorMessage