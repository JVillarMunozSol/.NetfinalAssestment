import { useForm } from "react-hook-form";
import "../modal/FormModal.css";
import { fetchOwners, addVehicle } from "../api/ApiRequest";

const FormVehicle = ({setOpen, setModal}) => { 
    const owners = fetchOwners();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        addVehicle(data)
        setOpen(false);
        setModal("");
    };

    return (
    <>
        <h2>New Vehicle</h2>  
        <div className="container">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card">
                <label>Brand</label>
                    <input 
                    {...register("brand", { required:"Brand is required", maxLength: 30 })} 
                    aria-invalid={errors.brand ? "true" : "false"} />
                </div>
                
                <div className="card">
                <label>Vin</label>
                    <input {...register("Vin", { required:"Vin is required", maxLength: 30 })} 
                    aria-invalid={errors.Vin ? "true" : "false"} />
                </div>

                <div className="card">
                <label>Color</label>
                    <input {...register("color", { required:"Color is required", maxLength: 30 })} 
                    aria-invalid={errors.color ? "true" : "false"} />
                </div>

                <div className="card">
                <label>Year</label>
                    <input type="month"
                    {...register("year", { required: "Year Address is required" })} 
                    aria-invalid={errors.year ? "true" : "false"} />
                </div>

                <div className="card">
                <label>Owner</label>
                    <select {...register("owner", { required: "Owner is required" })} 
                        aria-invalid={errors.owner ? "true" : "false"}>
                            <option value="">Select a owner</option>
                        {owners.map((owner) => (
                            <option value={owner.id} key={owner.id}>{owner.firstName} {owner.lastName}, {owner.driverLicense}</option>
                        ))}
                    </select>
                </div>
                
                {errors.brand && <p role="alert" className="required">{errors.brand?.message}</p>}
                {errors.Vin && <p role="alert" className="required">{errors.Vin?.message}</p>}
                {errors.color && <p role="alert" className="required">{errors.color?.message}</p>}
                {errors.year && <p role="alert" className="required">{errors.year?.message}</p>}

                <button type="submit">Submit</button>
            </form>

        </div>
    </>
    )
}

export default FormVehicle;