
import Card from '../Layout/Card'

const Grid = (props) => {

    console.log('[GRID]', props.data)

    return(
        <div className="
            tw-grid
            tw-grid-cols-1
            md:tw-grid-cols-2
            xl:tw-grid-cols-3
            tw-gap-12
            xl:tw-gap-18"
        >
            {props.data.map((d, index) => {
                return <Card
                    key={index}
                    id={d.id}
                    image={d.image}
                    name={d.name}
                    thumbsUp={d.thumbs_up}
                    thumbsDown={d.thumbs_down}
                />
            })}
        </div>
    )
}

export default Grid