import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { getFields } from '../../../_helpers/getFields'
import { postProjectsToAPI, postLinksToAPI, postPositionsToAPI } from '../../../_helpers/postToAPI'

const useStyles = makeStyles({
    button: {
        fontSize: '2rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        paddingLeft: '2.6rem',
        paddingRight: '2.6rem'
    },
    resize: {
        fontSize: '2rem'
    }
})
export default function InputForm() {
    const classes = useStyles()
    const view = useSelector(state => state.view)
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
        switch (view.name) {
            case 'projects':
                postProjectsToAPI({name: name, type: type, url: url, color: color})
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
                break
            case 'links':
                postLinksToAPI({name: name, url: url, imageTitle: image})
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
                break
            case 'positions':
                postPositionsToAPI({title: title, stack: stack, responsibilities: responsibilities, imageTitle: image, fromDate: fromDate, toDate: toDate})
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
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
                let stackArr = e.target.value.split(" ")
                setStack(stackArr) 
                break
            case 'responsibilities':
                let respsArr = e.target.value.split(" ")
                setResponsibilities(respsArr) 
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
        setFields(getFields(view.name))
    }, [view.name])
    return (
        <div className="input-form">
            <Button className={classes.button} variant="contained" color="primary" disableElevation onClick={handleFormVisibility}>Add</Button>
            {isFormVisible &&
                (<div className="input-form__jumbo-wrapper">
                    <form className="input-form__form">
                        <h2 className="input-form__header">Add new {view.name.slice(0, -1)}</h2>
                        {fields.map((field, index) => 
                            (<TextField key={index} 
                                className={classes.textField} 
                                InputProps={{classes: {input: classes.resize}}}
                                placeholder={field} 
                                onChange={(e) => handleChange(e, field)}/>))}
                        <Button 
                            className={classes.button}
                            variant="contained" 
                            color="primary" 
                            disableElevation 
                            onClick={handleSubmit}>Add</Button>
                        <Button
                            className={classes.button} 
                            color="secondary" 
                            disableElevation 
                            onClick={() => setIsFormVisible(false)}>cancel</Button>
                    </form>
                </div>)}
        </div>
    )
}
