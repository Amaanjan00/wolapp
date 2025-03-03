
function Search(){
    return(
        <>
        <div className="search-container">
           <form
           method="POST" 
           action="https://script.google.com/macros/s/AKfycbzbWfDORkBlzrR0PsdTzZq0asgDBz87rpdEI52FEVGka7pdke0m3pt9aOQYXA0LVs0E/exec">
                <div>
                    <h2>Book Your Ride</h2>
                    <p>The most economical car rental in dubai</p>
                </div>
                <select name="City" id="">
                    <option value="Dubai">Dubai</option>
                </select>
                <input type="date" name="Start-Date" />
                <input type="date" name="End-Date" />
                <input type="tel" name="Phone-No" placeholder="Phone No." />
                <button>Send</button>
            </form> 
        </div>
        </>
    );
}

export default Search