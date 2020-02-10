import { Droppable, Draggable } from 'react-beautiful-dnd'
import Film from '../../components/film'

const stubFilm = { 'name': 'TEST', 'imdb': 'TEST URL' }
const stubData = (length) => {
    return Array.from({length}, (v, k) => k).map(
        k => stubFilm
    )
}


const Submissions = ( props ) => {
    const { data } = props;
    
    const listSubmissions = (provided, snapshot) => {
        return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
                {
                    stubData(10).map((d, index) => {
                        return (
                            <Draggable index={index} draggableId={'draggable_'+index}>
                                {(provided, snapshot) => {
                                    return (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                            <h3>{d.name}</h3>
                                        </div>
                                    )
                                }}
                            </Draggable>
                        )
                    })
                }
                {provided.placeholder}
            </div>
        )
        
    }

    return(
        <Droppable droppableId='submissions' >
            { listSubmissions }
        </Droppable>
    )
} 

export default Submissions;