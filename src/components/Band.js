import Like from "./Like"

export default function Band(props) {
    const {name, formed, origin, fans, split} = props

    const totalFans = (fans * 1000).toLocaleString('en')
    return (
        <div style={{"border": "2px solid white", "width": "20vw", "margin": "5px", "padding": "30px", "textAlign": "left"}}>
            <h2>{name}</h2>
            <ul>
                <li>Origin: {origin}</li>
                <li>Formed: {formed}</li>
                <li>Fans: {totalFans}</li>
            </ul>
            {split === "-" && <Like />}
        </div>
    )
}