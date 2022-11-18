import { fetchClaims, deleteClaim } from '../api/ApiRequest';

const Claims = ({setModal}) => {
    const [claims, setClaims] = useState([]);

    const delClaim = (id) => {
        deleteClaim(id)
        .then((response) => {
            setClaims([])
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        setClaims(fetchClaims());
    }, [claims]);

    return (
        <div>
            <div>
                <button onClick={() => setModal("2")}>Create New Claim</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Vehicle</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {claims.map((claim) => (
                            <tr key={claim.id}>
                                <td>{claim.description}</td>
                                <td>{claim.status}</td>
                                <td>{claim.date}</td>
                                <td>{claim.vehicle}</td>
                                <td>
                                    <button onClick={() => {delClaim(claim.id)}}>❌</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Claims;