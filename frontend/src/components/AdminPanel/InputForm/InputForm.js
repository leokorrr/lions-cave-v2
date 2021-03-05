import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { postProjectsToAPI, postLinksToAPI, postPositionsToAPI } from '../../../_helpers/postToAPI'

export default function InputForm(props) {
    const { view } = props
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [url, setUrl] = useState('')
    const [color, setColor] = useState('')
    const [title, setTitle] = useState('')
    const [stack, setStack] = useState([])
    const [responsibilities, setResponsibilities] = useState([])
    const [image, setImage] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [fields, setFields] = useState([])
    const handleFormVisibility = e => {
        e.preventDefault()
        setIsFormVisible(!isFormVisible)
    }
    const handleSubmit = () => {
        switch (view) {
            case 'projects':
                postProjectsToAPI({name: name, type: type, url: url, color: color})
                    .then(()=>{
                        window.location.reload()
                    })
                    .catch(err => {
                        console.log(err);
                    })
                break
            case 'links':
                postLinksToAPI({name: name, url: url, imageTitle: image})
                    .then(()=>{
                        window.location.reload()
                    })
                    .catch(err => {
                        console.log(err);
                    })
                break
            case 'positions':
                postPositionsToAPI({title: title, stack: stack, responsibilities: responsibilities, imageTitle: image, fromDate: fromDate, toDate: toDate})
                    .then(()=>{
                        window.location.reload()
                    })
                    .catch(err => {
                        console.log(err);
                    })
                break
            default:
                break
        } 
    }
    const handleChange = (e, field) => {
        switch (field) {
            case 'name':
                setName(e.target.value)
                break
            case 'type':
                setType(e.target.value) 
                break
            case 'url':
                setUrl(e.target.value) 
                break
            case 'color':
                setColor(e.target.value) 
                break
            case 'title':
                setTitle(e.target.value) 
                break
            case 'stack':
                setStack(e.target.value) 
                break
            case 'responsibilities':
                setResponsibilities(e.target.value) 
                break
            case 'imageTitle':
                setImage(e.target.value) 
                break
            case 'fromDate':
                setFromDate(e.target.value) 
                break
            case 'toDate':
                setToDate(e.target.value) 
                break    
            default:
                break
        }
    }
    useEffect(()=>{
        switch (view) {
            case 'positions':
                setFields(['title', 'stack', 'responsibilities', 'imageTitle', 'fromDate', 'toDate'])
                break
            case 'projects':
                setFields(['name', 'type', 'url', 'color'])
                break
            case 'links':
                setFields(['name', 'url', 'imageTitle'])
                break
            default:
                break
        }

    }, [])
    return (
        <div>
            <Button variant="contained" color="primary" disableElevation onClick={handleFormVisibility}>Add</Button>
            <div>
                <form>
                    {fields.map((field, index) => (<TextField key={index} placeholder={field} onChange={(e) => handleChange(e, field)}/>))}
                    <Button 
                        variant="contained" 
                        color="primary" 
                        disableElevation 
                        onClick={handleSubmit}>Add</Button>
                </form>
            </div>
        </div>
    )
}
