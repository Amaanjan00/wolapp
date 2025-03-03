import styles from './Inquiry.module.css'

function Inquiry(){
    return(
        <>
            <div className={styles.inquirycontainer}>
                <h1 className={styles.h1inquiry}>Send Inquiry</h1>
                <form className={styles.form} method='POST' action="https://script.google.com/macros/s/AKfycbxnDXiST9s4Ey_JegupKbmLhYXplmS48hoYXRxvVOAx_24LV5NTOSfLeX4VUJdxI91bog/exec">

                    <div className={styles.inputfield}>
                        <label>Name</label>
                        <input placeholder='Enter your name' name='Name' type="text" />
                    </div>

                    <div className={styles.inputfield}>
                        <label>Age</label>
                        <input name='Age' placeholder='Age' type="text" />
                    </div>

                    <div className={styles.inputfield}>
                        <label>City</label>
                        <select name='City' className={styles.City} id="">
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                        </select>
                    </div>

                    <div className={styles.date}>
                        <label>Start Date</label>
                        <input name='Start Date' type="date" />
                        <label>End Date</label>
                        <input name='End Date' type="date" />
                    </div>

                    <div className={styles.inputfield}>
                        <label>Address</label>
                        <input name='Address' placeholder='Address' type="text" className={styles.address} />
                    </div>
                    
                    <div className={styles.inputfield}>
                        <label>Nationality</label>
                        <select name="Nationality" id="">
                            <option value="India">India</option>
                            <option value="Bangladesh">Bangladesh</option>
                        </select>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Inquiry