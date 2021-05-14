import { useRef } from 'react'

const Search = () => {
    const inputRef = useRef("Search")
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row text-black">
            {/* <div className="">
                <label htmlFor="categoria"></label> */}
                <select id='categoria' name='categoria'>
                    <option value='hogar'>Hogar</option>
                    <option value='deporte'>Deporte</option>
                </select>
            {/* </div> */}
            <input type="input" ref={inputRef} defaultValue="Search" className=" w-60 focus:outline-none rounded-xl pl-2 py-1 text-black"/>
            <button type="submit" className="bg-yellow-700 rounded-r-xl w-18 px-4 relative right-12">Buscar</button>
        </form>
    )
}

export default Search
