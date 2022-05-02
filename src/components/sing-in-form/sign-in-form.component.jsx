import { useState } from 'react'

import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signinWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

import Button from '../button/button.component'

import FormInput from '../form-input/form-input.component'

import './sing-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFieds, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFieds

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signinWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const handleChange = event => {
    const { name, value } = event.target

    setFormFields({ ...formFieds, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break

        case 'auth/user-not-found':
          alert('no user associated with this email')
          break

        default:
          console.log(error)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
