import data from './metal.json'
import Band from './Band'

export default function MetalMeta() {

    const bands = data.length // This is the number of bands in the JSON file

    return (
        <div>
            Metal Bands 🤘
            Bands: {bands}
            <div id="band-grid" style={{"display": "grid", "gridTemplateColumns": "1fr 1fr 1fr"}}>
                {data.map((band => 
                    <Band 
                    key={band.band_name}
                    name={band.band_name}
                    formed={band.formed}
                    origin={band.origin}
                    fans={band.fans}
                    styles={band.style}
                    split={band.split}
                    />
                ))}
            </div>
        </div>
    )
    
}