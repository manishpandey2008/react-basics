import { useEffect, useState } from 'react'
import './App.css'
import { useForm,useFieldArray } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"

let count=0;
// let FormType={
//   username:string,
//   email:string,
//   channelName: string
// }

function App() {

  // defaultValues:{
  //   username:'ManishPandey',
  //   email:'manish@gmail.com',
  //   channelName:''
  // }

  const form=useForm();

  // {
  //   defaultValues: async ()=>{
  //     let data:any=await fetch('https://jsonplaceholder.typicode.com/users/1');
  //     data = await data.json();
  //     return {
  //       username: data['username'],
  //       email: data['email'],
  //       channelName:""
  //     }
  //   }
  // }


  const { register,control,handleSubmit,formState,watch } =form;
  const { errors } =formState

  // const {name, ref, onChange ,onBlur } = registore("username")

  const onFormSubmit=(data:any)=>{
    console.log(data);
  }

  const { fields,append,remove }=useFieldArray({
    name:"phNumber",
    control
  })

  // const watchForm= watch()

  useEffect(()=>{
    const wathHistory=watch((resp)=>{
      console.log(resp);
    })
    return(()=>wathHistory.unsubscribe())
  })

//   const customValidatio=(fieldData:any)=>{
//     return (
//       fieldData!="manish@gmail.com" || "Enter other email id"
//     )
// }

  count++;
  return (
    <div className='form-container'>
      <h2>Form {count/2}</h2>
      {/* <h4>{JSON.stringify(watchForm)}</h4> */}
      <form action="" onSubmit={handleSubmit(onFormSubmit)}>
        <div className='field-container'>
          <label htmlFor="">Username</label>
          {/* <input 
           type="text"
           className='input'  
           name={name}
           ref={ref}
           onChange={onChange}
           onBlur={onBlur}
           /> */}
          <input type="text"  className='input' id='username' {...register("username",{
            required:"Username is required field"
          })} />
          <p>{errors.username?.message}</p>
        </div>
        <div className='field-container'>
          <label htmlFor="">Email</label>
          <input type="text" id="email"  className='input'  {...register("email",{
            pattern:{
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message:"Email format is not valid"
            },
            validate:{
              noManish: (fieldVal)=>{
                return (
                  fieldVal!="manish@gmail.com" || "Enter other email"
                )
              },
              notBlacklist: (fieldVal)=>{
                return (
                  fieldVal!="pandey@gmail.com" || "Above Email has Blacklisted"
                )
              }
            }
          })} />
           <p>{errors.email?.message}</p>
        </div>
        <div className='field-container'>
          <label htmlFor="">Chanal Name</label>
          <input type="text"  id="channelName"  className='input'  {...register("channelName")} />
        </div>

        <div className='field-container'>
          <label htmlFor="age">Age</label>
          <input type="number"  className='input' id='age' {...register("age",{
            required:"Age is required field",
            valueAsNumber: true
          })} />
        </div>

        <div className='field-container'>
          <label htmlFor="">Chanal Name</label>
          <input type="text"  id="twitter"  className='input'  {...register("social.twitter")} />
        </div>

        <div className='field-container'>
          <label htmlFor="">Chanal Name</label>
          <input type="text"  id="facebook"  className='input'  {...register("social.facebook")} />
        </div>

        <div className='field-container'>
          <label htmlFor="">Phone 1</label>
          <input type="text"  id="facebook"  className='input'  {...register("phoneNumers.0")} />
        </div>

        <div className='field-container'>
          <label htmlFor="">Phone 2</label>
          <input type="text"  id="facebook"  className='input'  {...register("phoneNumers.1")} />
        </div>

        <div className='field-container'>
          <label htmlFor="">Phone List</label>
          <div>
            {
              fields.map((f,index)=>{
                return (
                  <div>
                    <input type="text"  id="facebook" key={f.id}  className='input'  {...register(`phNumber.${index}.name`)} />
                     <button onClick={()=>remove(index)}>Remove Number</button>
                  </div>

                )
              })
            }
          </div>
          <button onClick={()=>append({name:""})}>Add Number</button>

        </div>

        <div className='field-container'>
          <input type="submit" value="Submit"  className='input' />
        </div>
        <DevTool control={control} />
      </form>
    </div>
  )
}

export default App
