import React, {useState} from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
const RegisterScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async(e) =>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='name' className='my-2'>
  <Form.Label>name</Form.Label>
<Form.Control type='text' value={name} placeholder='Enter name' onChange={(e)=>setName(e.target.value)}>
</Form.Control>
</Form.Group>

<Form.Group controlId='email' className='my-2'>
  <Form.Label>Email Address</Form.Label>
<Form.Control type='email' value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}>

</Form.Control>
</Form.Group>

<Form.Group controlId='password' className='my-2'>
  <Form.Label>Password</Form.Label>
<Form.Control type='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}>

</Form.Control>
</Form.Group>
<Button type='submit' className='mt-3' variant='primary'>gyg</Button>
<Row className='py-3'>
        <Col>
        Already have account? <Link to="/login">Login</Link>
        </Col>
      </Row>
      </Form>

    
    </FormContainer>
  )
}

export default RegisterScreen
