import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  
  const handleSignUpSubmit = data =>{
    console.log('Sign up data', data);
  }

  const handleUpdateProfile = data => {
    console.log('Update Profile', data);
  }

  return (
    <>
      <h1>Form Master</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <ReusableForm 
     formTitle={'Sign UP'} 
     handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>Sign UP</h2>
        <p>Please Sign up right now</p>
      </div>
     </ReusableForm>

     <ReusableForm 
     formTitle={'Profile Update'} 
     handleSubmit={handleUpdateProfile} 
     submitBtnText='Update'>
      <div>
        <h2>Update Profile</h2>
        <p>ALways Keep your profile update</p>
      </div>
     </ReusableForm>
    </>
  )
}

export default App
