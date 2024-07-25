const Contacts = () => {
    return ( 
        <div className="">
            <h2 className="font-bold text-3xl p-4 m-4">Contacts Us</h2>
            <form>
                <input type="text" 
              className="border border-black p-2 m-2" 
                placeholder="Name"/>
                <input type="text" 
             className="border border-black p-2 m-2" 
                placeholder="Message"/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contacts;