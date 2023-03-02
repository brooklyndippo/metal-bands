import Like from "./Like"

export default function Band(props) {
    const {name, formed, origin, fans, styles, split} = props

    const stylesArray = styles.split(',')

    console.log(stylesArray)

    const styleList = stylesArray.map((style) => <li>{style}</li>)

    const totalFans = (fans * 1000).toLocaleString('en')
    return (
        <div style={{"border": "2px solid white", "width": "20vw", "margin": "5px", "padding": "30px", "textAlign": "left"}}>
            <h2>{name}</h2>
            <ul>
                <li><strong>Origin:</strong> {origin}</li>
                <li><strong>Formed:</strong> {formed}</li>
                <li><strong>Fans:</strong> {totalFans}</li>
                <li><strong>Styles:</strong></li>
                <ul>
                    {styleList}
                </ul>
            </ul>
            {split === "-" && <Like />}
        </div>
    )
}