import React, {useState, useEffect} from 'react'

const Email = ()=>
{
        

        const [isValid, setIsValid] = useState(false);
        const [message, setMessage] = useState();
        const [icons, setIcons] = useState();


        const emailRegex = /\S+@\S+\.\S+/;

        const validateEmail = (event) => {
        const email = event.target.value;
            if (emailRegex.test(email)) 
            {
                setIsValid(true);
                setMessage(<span style={{color:'green'}}>Your Email Is Valid</span>)
                setIcons(<i class="fas fa-check-circle" ></i>);
                
            }
            else
            {
                setIsValid(false);
                setMessage('Your Email Is Not Valid')
                setIcons(<i class="fas fa-exclamation-circle"></i>);
            }
  };




    return(
        <>
            <div className={`message ${isValid ? 'success' : 'error'}`}>
                
                <h1>EMAIL VALIDATION</h1>
                <h3>WITH HTML, CSS & JAVASCRIPT</h3>

                <div className="cardsbox">

                    <div className="card1">
                        <h2>Email Id</h2>
                        <input type='text' className='input' placeholder="Enter your email" onChange={validateEmail}></input>
                        
                        <p>{icons}{message}</p>
                    </div>
                    
                </div>

            </div>
        </>
    )
};

export default Email;