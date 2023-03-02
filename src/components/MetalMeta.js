import data from './metal.json'
import Band from './Band'

export default function MetalMeta() {

    const bands = data.length // This is the number of bands in the JSON file
    console.log(data)
    return (
        <div>
            Metal Bands 🤘
            Bands: {bands}
            <div style={{"display": "flex", "flexWrap": "wrap", "margin": "2vw"}}>
            {data.map((band => 
                <Band 
                key={band.band_name}
                name={band.band_name}
                formed={band.formed}
                origin={band.origin}
                fans={band.fans}
                />
            ))}
            </div>
        </div>
    )
    
}