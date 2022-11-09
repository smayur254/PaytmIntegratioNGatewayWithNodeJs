import React from 'react'
import axios from 'axios'

const App = () => {

    const getData=(data)=>
    {
  
      // return axios({  
      //   method: 'post',  
      //   url: `http://localhost:5000/api/payment`,  
      //   headers:{
      //             Accept:"application/json",
      //             "Content-Type":"application/json"
      //         },
      //         body:JSON.stringify(data),    
      //   data: {  
      //     amount: 100,  
      //     email: 'xyz@gmail.com'  
      //   }  
      // });  
      
      return axios(`http://localhost:5000/api/payment`,{
          method:"POST",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
      }).then(response=>response.json()).catch(err=>console.log(err))
    }
    
    const makePayment=()=>
    {
      getData({amount:500,email:'abc@gmail.com'}).then(response=>{console.log(response)})
    }
   
    

  return (
    <div>
        <button onClick={makePayment}>Pay Using Paytm</button>
    </div>
  )
}

export default App