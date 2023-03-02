export default function Band(props) {
    const {name, formed, origin, fans} = props
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li>Origin: {origin}</li>
                <li>Formed: {formed}</li>
                <li>Fans: {fans}</li>
            </ul>
        </div>
    )
}