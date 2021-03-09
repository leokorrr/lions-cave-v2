import React, {useEffect} from 'react'
import { getLinks } from '../../_actions/data'
import { useDispatch, useSelector } from "react-redux"

export default function ReduxTest() {
    const links = useSelector(state => state.data)
    const view = useSelector(state => state.view)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getLinks())
            .then(()=> {
                console.log('succ')
            })
            
    }, [dispatch])
    const handleDis = () => {
        dispatch(getLinks())
        console.log(links.links)
    }
    return (
        <div>
        {view.name}
            {/* {(links.links && links.links.length > 0) ? links.links.map(link => (<span>{link.name}</span>)) : (<span>aaa</span>)} */}
            {/* <button onClick={handleDis}>aaa</button> */}
        </div>
    )
}
