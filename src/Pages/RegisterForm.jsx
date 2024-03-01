import { useState } from "react"
import { Update } from "../api"
import { json, useNavigate } from "react-router-dom"
import emailjs from '@emailjs/browser'

const developperMode = true

const initialForm = {
    firstName:"",
    lastName:"",
    email:""
}

function RegisterForm({date, tickets}){
    const [formData, setFormData] = useState({...initialForm})
  //  const mollieClient = createMollieClient({apiKey: 'test_tMgvzc3AHne9QymEbmpk2B9DjgJU6c'})


    const navigate = useNavigate()
    const handleChange = (event) =>{
        const {name, value} = event.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setFormData(initialForm)

        fetch(`http://localhost:4000/${date}`, {}).then((response) =>{
            return response.json();
        }).then((jsonData) =>{
            const obj = {
                ...jsonData,
                aanmeldingen: [...jsonData.aanmeldingen, {...formData, "tickets":tickets}],
                capacity: jsonData.capacity + tickets
            }
            Update(date, obj)
        })
        navigate("/")


        if (!developperMode)
        {        
            emailjs.send("service_qm5zcoh", "template_t60l20l", {to_name: formData.firstName, to_email:formData.email}).then(
            (response) => {
                console.log("Succes!", response.status, response.text)
            },
            (error) => {
                console.log("Error", error)
            }
        )
        }


    }
    emailjs.init({
        publicKey:"JKfJpovNNiVJINLud"
    })

    return(
        <form onSubmit={handleSubmit}>
            <label>Voornaam: <input 
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            required/></label>

            <label>Achternaam: <input 
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            required/></label>

            <label>Email: <input 
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}/></label>
            <input type="submit"/>
        </form>
    )
}

export default RegisterForm