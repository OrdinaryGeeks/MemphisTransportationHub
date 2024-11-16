import { useForm } from 'react-hook-form';

const RecieveCall = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        return 
    }
    return(

        <>
        <h1>Employee Transit Network (ETN)</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Personal Information</h2>
            <div>
                <label>Full Name:
                    <input {...register("name")} />
                </label>
            </div>
            <div>
                <label>
                    Callback Phone Number:
                    <input {...register("phone")} />
                </label>
            </div>
            <h2>Approved Addresses</h2>
            <div>
                <label htmlFor="home_address">Home Address:</label>
                <input type="text" name="home_address" id="home_address" required />
            </div>
            <div>
                <label htmlFor="work_address">Work Address:</label>
                <input type="text" name="work_address" id="work_address" required />
            </div>
            <div>
                <label htmlFor="school_address_1">School Address #1:</label>
                <input type="text" name="school_address_1" id="school_address_1" required />
            </div>
            <div>
                <label htmlFor="school_address_2">School Address #2:</label>
                <input type="text" name="school_address_2" id="school_address_2" required />
            </div>
            <div>
                <label htmlFor="religious_address">Addtnl. Address (Religious):</label>
                <input type="text" name="religious_address" id="religious_address" required />
            </div>
            <div>
                <label htmlFor="shopping_address">Addtnl. Address (Shopping):</label>
                <input type="text" name="shopping_address" id="shopping_address" required />
            </div>
            <h2>Schedule</h2>

            <div id="Monday">
                <div style={{display: "block"}}>
                    <div style={{display: "inline-block"}}>
                        Pickup
                    </div>
                    <div style={{display: "inline-block"}}>
                        Dropoff
                    </div>
                    <div style={{display: "inline-block"}}>
                        Before/After
                    </div>
                    <div style={{display: "inline-block"}}>
                        Time
                    </div>
                </div>
                <div style={{display: "block"}}>
                    <div style={{display: "inline-block"}}>
                        Home
                    </div>
                    <div style={{display: "inline-block"}}>
                        Work
                    </div>
                    <div style={{display: "inline-block"}}>
                        Dropoff Before
                    </div>
                    <div style={{display: "inline-block"}}>
                        8:00 am
                    </div>
                </div>
                <div style={{display: "block"}}>
                    <div style={{display: "inline-block"}}>
                        Work
                    </div>
                    <div style={{display: "inline-block"}}>
                        Home
                    </div>
                    <div style={{display: "inline-block"}}>
                        Pickup After
                    </div>
                    <div style={{display: "inline-block"}}>
                        5:00 pm
                    </div>
                </div>
            </div>

            <div>
                <input type="submit" value="Process" />
            </div>
        </form>
        </>

    )
}
export default RecieveCall