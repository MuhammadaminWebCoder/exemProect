import Button from './Button'

const ListForm = ({state,setState}) => {
    const clicked = (e) => {
        e.preventDefault()
        const data = {
            id:state ? state.length + 1: 1,
            value:e.target.input.value
        }
        if (data.value) {
            setState([...state,data])
        }
        e.target.reset()
    }
    return (
        <form onSubmit={clicked} className='flex mb-2'>
            <input name='input' className='p-2 outline-0 border rounded-md me-2 flex-grow' placeholder='add to new name'/>
            <Button type={'submit'} title={'add user'} extraClass={'text-white'}/>
        </form>
    )
}

export default ListForm
