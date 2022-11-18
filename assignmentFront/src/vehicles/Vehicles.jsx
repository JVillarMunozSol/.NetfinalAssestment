import { fetchVehicles, deleteVehicle } from "../api/ApiRequest"
import { useState, useEffect } from "react";

const Vehicles = ({setModal}) => {
    const [vehicles, setVehicles] = useState([]);

    const delVehicle = (id) => {
        deleteVehicle(id)
        .then((response) => {
            setVehicles([])
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        setVehicles(fetchVehicles());

    }, [vehicles]);

    return (
        <div>
        <div>
            <button onClick={() => setModal("0")}>Create New Vehicle</button>
        </div>
         <div>
             <table>
                 <thead>
                     <tr>
                         <th>Make</th>
                         <th>Model</th>
                         <th>Year</th>
                         <th>Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                        {vehicles.map((vehicle) => (
                            <tr key={vehicle.id}>
                                <td>{vehicle.vin}</td>
                                <td>{vehicle.brand}</td>
                                <td>{vehicle.year}</td>
                                <td>
                                    <button onClick={() => {delVehicle(vehicle.id)}}>❌</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>               
            </div>
        </div>
    )
}

export default Vehicles;