import { useForm } from "react-hook-form";
import "../modal/FormModal.css";
import { addOwner } from "../api/ApiRequest";

const FormOwner = ({setOpen, setModal}) => { 

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      addOwner(data)
      setOpen(false);
      setModal("");
    };

    return (
    <>
        <h2>New Owner</h2>  
        <div className="container">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card">
                <label>First Name</label>
                    <input 
                    {...register("firstName", { required:"First name is required", maxLength: 30 })} 
                    aria-invalid={errors.firstName ? "true" : "false"} />
                </div>
                
                <div className="card">
                <label>Last Name</label>
                    <input {...register("lastName", { required:"Last name is required", maxLength: 30 })} 
                    aria-invalid={errors.lastName ? "true" : "false"} />
                
                </div>

                <div className="card">
                <label>Driver Lincense</label>
                    <input {...register("driverLicense", { required:"Driver Lincense is required", maxLength: 30 })} 
                    aria-invalid={errors.driverLicense ? "true" : "false"} />
                </div>
                
                {errors.firstName && <p role="alert" className="required">{errors.firstName?.message}</p>}
                {errors.lastName && <p role="alert" className="required">{errors.lastName?.message}</p>}
                {errors.driverLicense && <p role="alert" className="required">{errors.driverLicense?.message}</p>}

                <button type="submit">Submit</button>
            </form>

        </div>
    </>
    )
}

export default FormOwner;