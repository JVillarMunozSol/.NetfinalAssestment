import { fetchOwners, deleteOwner } from "../api/ApiRequest";

const Owners = ({setModal}) => {
    const [owners, setOwners] = useState([]);

    const delOwner = () => {
        deleteOwner(id)
        .then((response) => {
            setOwners([]);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    useEffect(() => {
        setOwners(fetchOwners());
    }, [owners]);
    
    return (
        <div>
            <div>
                <button onClick={() => {setModal("1")}}>Create New Owner</button>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Driver License</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {owners.map((owner) => (
                            <tr key={owner.id}>
                                <td>{owner.firstName}</td>
                                <td>{owner.lastName}</td>
                                <td>{owner.driverLicense}</td>
                                <td>
                                    <button onClick={() => {delOwner(owner.id)}}>❌</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Owners;