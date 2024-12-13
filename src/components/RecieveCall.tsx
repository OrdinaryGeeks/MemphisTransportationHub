import {useState,useEffect} from 'react';
const PersonalInformaton = ({register}) => {
    return (
    <>
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
    </>
    )
}

const ApprovedAddress = ({register, label, register_name}) => {
    return (
        <>
            <div>
                    <label>{label}:
                    <input {...register(register_name)} />
                </label>
            </div>
        </>
    )
}

const ApprovedAddresses = ({register, addresses}) => {
    const approved =  [];
    for (let i = 0; i < addresses.length; i += 1) {
        const label = addresses[i].label;
        const r = addresses[i].register
        approved[i] = <ApprovedAddress key={label} register={register} label={label} register_name={r}/>
    }

    return (
        <>
            <h2>Approved Addresses</h2>
            {approved}
        </>
    )
}

const DailySchedulePickup = ({register, dayOfWeek, id, addresses, removeDailyPickup}) => {
    const options = []
    for(let i = 0; i < addresses.length; i = i + 1){
        options[i] = <option key={addresses[i].label} value={addresses[i].label}>{addresses[i].label}</option>
    }
    const times = []
    for(let i = 0; i < 24; i = i + 1) {
        for(let j = 0; j < 60; j = j + 15) {
            let timePadded = `${i}`.padStart(2, '0') + ":" + `${j}`.padStart(2, '0')
            times.push(<option key={timePadded} value={timePadded}>{timePadded}</option>)
        }
    }
    return (<div style={{display: "block"}}>
    <input type="button" onClick={removeDailyPickup(id)}>Delete</input>
    <select selected={options[0]} {...register(`${dayOfWeek}_pickup`)}>
        {options}
    </select>
    <select selected={options[0]} {...register(`${dayOfWeek}_dropoff`)}>
        {options}
    </select>
    <select selected={options[0]} {...register(`${dayOfWeek}_restriction`)}>
        <option value="Pickup Before">Pickup Before</option>
        <option value="Pickup After">Pickup After</option>
        <option value="Dropoff Before">Dropoff Before</option>
        <option value="Dropoff After">Dropoff After</option>
    </select>
    <select selected={options[0]} {...register(`${dayOfWeek}_time`)}>
        {times}
    </select>
</div>)
}

const DailySchedule = ({register, watch, addresses}) => {
    const dayOfWeek = watch("dayOfWeek")
    let id = 0
    let removed = 0
    let [dailyPickups, setDailyPickups] = useState(new Map<number, JSX.Element>())
    let [dailyPickupList, setDailyPickupList] = useState<JSX.Element[]>([])
    const removeDailyPickup = (id: number) => {
        dailyPickups.delete(id)
        removed = removed + 1
    }

    const addDailyPickup = () => {
        dailyPickups.set(id, <DailySchedulePickup register={register} dayOfWeek={dayOfWeek} addresses={addresses} id={id} removeDailyPickup={removeDailyPickup}/>)
        id = id + 1
    }
    useEffect(() => {
        setDailyPickups(dailyPickups)
        let list: JSX.Element[] = [];
        for(let i = 0; i < id; i = i + 1) {
            let pickup = dailyPickups.get(i)
            if (pickup !== undefined) {
                list.push(pickup)
            }
        }
        setDailyPickupList(list)
    }, [id, removed])

    return (
        <>
            <h2>{dayOfWeek} Schedule</h2>
            <div id={dayOfWeek}>
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
            </div>

        </>
    )
}

const Schedule = ({register, watch, addresses}) => {
    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const options = [];
    for (let i = 0; i < daysOfWeek.length; i = i + 1 ) {
        options[i] = <option key={daysOfWeek[i]} value={daysOfWeek[i]}>{daysOfWeek[i]}</option>;
    }

    return (
        <>
            <h2>Schedule</h2>   
            <label>
                Day of Week:
                <select {...register("dayOfWeek")}>
                    {options}
                </select>
                <DailySchedule register={register} watch={watch} addresses={addresses}/>
            </label>
        </>
    )
}

const RecieveCall = ({handleSubmit, register, watch}) => {
    const approvedAddresses = [
        {
            label: "Home Address",
            register: "home_address",
        },
        {
            label: "Work Address",
            register: "work_address",
        },
        {
            label: "School Address #1",
            register: "school_address_1",
        },
        {
            label: "School Address #2",
            register: "school_address_2",
        },
        {
            label: "Addtnl. Address (Religious)",
            register: "additional_address_religious",
        },
        {
            label: "Addtnl. Address (Shopping)",
            register: "additional_address_shopping",
        },
    ]
    return (
        <>
        <h1>Employee Transit Network (ETN)</h1>

        <form onSubmit={handleSubmit}>
            <PersonalInformaton register={register}/>
            <ApprovedAddresses register={register} addresses={approvedAddresses}/>
            <Schedule register={register} watch={watch} addresses={approvedAddresses}/>
            <input type="submit" value="Process" />
        </form>
        </>
    )
}
export default RecieveCall