import {useContext} from 'react'
import {useScrollY} from '../../components/hooks'
import Context from "../../store/context"
import * as actions from '../../store/actions'
import Slider from '../../components/Slider/Slider'
import BodyHome from '../../components/BodyHome/BodyHome'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import './Homepage.scss'

function Homepage() {
    const [state, dispatch] = useContext(Context)
    const [scrollY] = useScrollY()

    return (
        <div className="homepage">
            <Slider/>
            <BodyHome/>
            <Button type="btn-to-top" style={scrollY < 50 ? {display: 'none'} : null}>^</Button>
            {state.openModal ? (<Modal/>) : null}
        </div>
    )
}

export default Homepage