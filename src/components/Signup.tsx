import { useEffect,useState } from  "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import {
    auth,
    signup
  } from "../firebase";
import { Link,useHistory } from "react-router-dom";

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const user = useAuthState(auth);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password.length < 6){
            return setError('Password should be greater than 6 letter')
        }
        if(password != confirmPassword){
            return setError('Passwords do not match')
        }
        try{
            setError('')
            setLoading(true)
            signup(email, password)
            navigate.push("/")
        }
        catch{
            setError('Faild to create an account')
        }
    }
    useEffect(() => {
        if (loading) return;
        if (user) navigate.replace("/dashboard");
    }, [user, loading]);
    return <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmPassowrd" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Sign up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
        </div>
    </>
}

export default Signup;