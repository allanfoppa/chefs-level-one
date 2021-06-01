
import {
    COMP_LAYOUT_CARD
} from '../../config/import'

const Masonry = (props) => {

    console.log('[MASONRY]', props.data)

    return(
        <div className="md:masonry before:box-inherit after:box-inherit">
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

export default Masonry