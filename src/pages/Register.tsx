import { AuthForm, AuthFormInputs } from "../components";

export const Register = () => {

    const handleSubmit = (data: AuthFormInputs)=>{
      console.log(data);
     } 
     
  return (
    <div>
      <h1>Welkome back</h1>
      <p>Hello again! Log in to continue</p>
      <AuthForm buttonType={'log'} onSubmit={handleSubmit } />
    </div>
  );
};

