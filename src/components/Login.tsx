import { useEffect, useState } from  "react"
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory} from 'react-router-dom';
import { auth, login } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"; 

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const user = useAuthState(auth);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            login(email, password)
            navigate.push("/")
        }
        catch{
            setError('Faild to sign in')
        }
    }
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);
    return <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Log in</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign up</Link>
        </div>
    </>
}

export default Login;
