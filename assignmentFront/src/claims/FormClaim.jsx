import { useForm } from "react-hook-form";
import "../modal/FormModal.css";
import { fetchVehicles, addClaim } from "../api/ApiRequest";

const FormClaim = ({setOpen, setModal}) => { 
    const vehicles = fetchVehicles();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        addClaim(data);
        console.log(data);
        setOpen(false);
        setModal("");
    };
    
    return (
    <>
        <h2>New Claim</h2>  
        <div className="container">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card">
                <label>Description</label>
                    <input 
                    {...register("description", { required:"Description is required", maxLength: 30 })} 
                    aria-invalid={errors.description ? "true" : "false"} />
                </div>
                
                <div className="card">
                <label>Status</label>
                    <select {...register("status", { required:"Status is required"})}
                        aria-invalid={errors.status ? "true" : "false"}>
                            <option value="">Select a status</option>
                        <option value="open">Open</option>
                        <option value="on process">On Process</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>

                <div className="card">
                <label>Date</label>
                    <input type="date" {...register("date", { required:"Date is required, format dd/mm/yyyy" })} 
                    aria-invalid={errors.date ? "true" : "false"} />
                </div>

                <div className="card">
                <label>Vehicle</label>
                    <select {...register("vehicle", { required: "Vehicle is required" })} 
                        aria-invalid={errors.vehicle ? "true" : "false"}>
                            <option value="">Select a vehicle</option>
                        {vehicles.map((vehicle) => (
                            <option value={vehicle.id}>{vehicle.brand}, {vehicle.owner}, {vehicle.plate}</option>
                        ))}
                    </select>
                </div>
                
                {errors.description && <p role="alert" className="required">{errors.description?.message}</p>}
                {errors.status && <p role="alert" className="required">{errors.status?.message}</p>}
                {errors.date && <p role="alert" className="required">{errors.date?.message}</p>}
                {errors.vehicle && <p role="alert" className="required">{errors.vehicle?.message}</p>}

                <button type="submit">Submit</button>
            </form>

        </div>
    </>
    )
}
    
export default FormClaim;
