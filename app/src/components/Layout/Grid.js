
import {
    COMP_LAYOUT_CARD
} from '../../config/import'

const Grid = (props) => {

    console.log('[GRID]', props.data)

    return(
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-12">
            {props.data.map((d, index) => {
                return <COMP_LAYOUT_CARD
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