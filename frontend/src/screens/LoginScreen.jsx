import React, {useState} from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async(e) =>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
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
<Button type='submit' className='mt-3' variant='primary'>rty</Button>
<Row className='py-3'>
        <Col>
        New Customer? <Link to="/register">Register</Link>
        </Col>
      </Row>
      </Form>

    
    </FormContainer>
  )
}

export default LoginScreen
