import React, { useEffect } from 'react';
import axios from 'axios';

import  Cookie  from 'universal-cookie';


const Users = () => {


 
    // console.log( cookies.get('jwt'));
 
        // const fetchUsers =async()=>{
        //     const cookies = document.cookie.split(';');
        //     console.log(cookies)
     
        //     try {
        //         const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users`,{
        //             method:"GET",
        //             headers:{
        //                 'content-type':'application/json',
        //                 'Authorization': `Bearer jwt`
        //               },
        //             credentials:'include', 
        //         })

        //         const res= await fetchData.json();
        //         
               
        
        //         // Access cookies from the response headers
        
        //         // Handle the rest of the response data
                
        //       } catch (error) {
        //         // Handle errors
        //         console.error('Error fetching data:', error);
        //       }
        // }
        useEffect(() => {
          const fetchData = async () => {
            try {
              // Make a POST request with credentials
              // const response = await axios.post(
              //   'https://your-node-api.com/your-endpoint',
              //   { data: 'your-data' },
              //   {
              //     withCredentials: true, // Send cookies
              //     headers: {
              //       'Content-Type': 'application/json',
              //     },
              //   }
              // );
      
              // console.log('Response from POST request:', response.data);
      
              // Now you can make another request, for example, a GET request to a log API
              const logResponse = await axios.get(
                'https://your-node-api.com/log-endpoint',
                {
                  withCredentials: true, // Send cookies
                }
              );
      
              console.log('Response from log API:', logResponse.data);
            } catch (error) {
              console.error('Error:', error);
            }
          };
      
          fetchData();
        }, []);
   
  return (
    <div>
      <button >All Users</button>
    </div>
  )
}

export default Users
