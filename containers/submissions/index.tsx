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
    
    const listSubmissions = () => {
        return stubData(10).map(d => {
            return (
                <Draggable key={d.name}>
                    {() => {
                        return <h3>{d.name}</h3>
                    }}
                </Draggable>
            )
        })
    }

    return(
        <Droppable droppableId='submissions'>
            { listSubmissions }
        </Droppable>
    )
} 

export default Submissions;