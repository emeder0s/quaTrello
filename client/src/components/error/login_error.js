import Alert from 'react-bootstrap/Alert';

function LoginError() {
    return (
        <>
            <Alert style={{ height: '3vh', fontSize : 10, paddingTop: 2 }} key="danger" variant="danger">
Email y/o contraseña incorrectos.
            </Alert>
        </>
      );
}

export default LoginError;

