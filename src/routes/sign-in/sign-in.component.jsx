import SignUpForm from '../../components/sing-up-form/sign-up-form.component'
import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const loginGoogleUser = async () => {
    const { user } = await signinWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={loginGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
