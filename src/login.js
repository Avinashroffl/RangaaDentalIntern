import React from 'react';


function login() {
    return (
        <div>
            <div className="login-header">
                <img className="logo" alt="logo" src="data:image/png;base64,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"></img>
                <h1 style={{color:"#3cb889",textAlign:"center",padding:'2% 0%'}}>Rangaa Dental Care</h1>
                
            </div>
            <div className="login">
            
                        <label>
                            <input type="text" name="username" placeholder="User Name"/><br />
                        </label>
                        
                        <label>
                             <input type="password" name="password"placeholder="Pas****" />
                        </label>
                        <br />

                        <button type="submit" className="btn">Login</button>
              
            </div>
        </div>
    )
}

export default login
