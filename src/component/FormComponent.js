import React, {useState} from 'react'

export default function FormComponent() {

 let currentStyle=null
const demoStyle={borderColor:"red"}
const [values,setValues] =useState({email:"",subject:"",message:""})
const [errors,setErrors]= useState({email:currentStyle,subject:currentStyle,message:currentStyle})

const handleBlur = (e) =>{

if(e.target.name === "email"){
if(e.target.value.length === 0 || !validateEmail(values.email)){
  currentStyle = demoStyle
}
}else{
  if(e.target.value.length === 0){
    currentStyle = demoStyle
  }
}

setErrors({
  ...errors,
 [e.target.name]:currentStyle 
})


}
const validateEmail = (email) => {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
}
  const handleChange = (e) =>{
setValues({
  ...values,
 [e.target.name]:e.target.value
})
  }

  const loadForm =(e)=>{
e.preventDefault()
  }
const resetForm =()=>{
  setValues({
    email:"",
    subject:"",
    message:""
  })
  setErrors({email:currentStyle,message:currentStyle,subject:currentStyle})
}
const submitBtn =(e)=>{
  return values.email.length == 0 || !validateEmail(values.email) || values.message.length == 0 || values.subject.length == 0
}
  return (
    <form autoComplete="off" onSubmit={loadForm}>
    <input type ="text" label="email" name="email" placeholder="email" name="email" value={values.email} onChange={handleChange} style={errors.email} onBlur={handleBlur}/> 
    <input type ="text" label="subject" name="subject"   placeholder="subject" value={values.subject} onChange={handleChange} style={errors.subject}  onBlur={handleBlur}/> 
    <input type ="text" label="message" name="message"  placeholder="message" value={values.message} onChange={handleChange} style={errors.message}  onBlur={handleBlur}/> 
  
    <button type="submit" disabled={submitBtn()}>Submit</button>
    <button type="reset" onClick={resetForm}>Rest</button>
  </form>
  )
}
