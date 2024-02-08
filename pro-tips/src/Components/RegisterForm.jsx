import React,{ useState} from "react";
import './Register.css';


function RegisterForm () {
    const [validSuccess, setValidSuccess] = useState(false);
    const [FirstNameerror, setFirstNameerror] = useState(false);
    const [LastNameerror, setLastNameerror] = useState(false);
    const [Emailerror, setEmailerror] = useState(false);
    const [Phoneerror, setPhoneerror] = useState(false);
    const [Mastererror, setMastererror] = useState(false);
    const [data, setdata] = useState({
        firstName:'',       
        lastName:'',
        email:'',
        phone:'',
    });

    const handleSetState = (e) => {
        const value = e.target.value;
        const InputFeildName = e.target.name;

        setdata({...data, [InputFeildName]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {firstName, lastName, email, phone} = data;
        if(email == '' || phone == '' || email.includes(' ')){
            setMastererror(true);
        }

        if(firstName == ''){
            return setFirstNameerror(true);
        }

        if(lastName == ''){
            return setLastNameerror(true);
        }
        if(phone.length !== 10){
            return setPhoneerror(true);
        }

        if(!email.includes('@kalvium.community')){
            return setEmailerror(true);
        }
        let symbols = './,<>;:[]{}-=+*!@#$%^&()|~Ee'
        
        for (let i=0;i<10;i++){
            if(symbols.includes(phone[i])){
                return setPhoneerror(true);
            }
        }

        let checkingEmail = email.split('@')[0];

        let smalLetters = 'abcdefghijklmnopqrstuvwxyz';
        for(let i =0; i<checkingEmail.length;i++){
            if(!smalLetters.includes(checkingEmail[i])){
                console.log('here 2')
                return setEmailerror(true);
            }
        }
        setValidSuccess(true);
        console.log(data);
       };

    

    return(
        <div>
            <div className="container">
                <div className="child-container">
                    <div>
                        {validSuccess == true ? (
                            <div className="banner">
                                <p>Registration Successfull</p>
                            </div>
                        ):(
                            ' '
                        )}
                    </div>
            
           <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="firstName">First Name :</label>
                </div>
                <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleSetState}
                value={data.firstName} />
                {FirstNameerror == true ?(
                    <p>Do not keep input feild empty</p>
                ) : (
                    ''
                )}
            </div>
            <div>
                <div>
                    <label htmlFor="lastName">Last Name :</label>
                </div>
                <input type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={handleSetState}
                value={data.lastName} />
                {LastNameerror == true ? (
                    <p>Do not keep input feild empty</p>
                ) : (
                    ''
                )}
            </div>
            <div>
                <div>
                    <label htmlFor="email">Email :</label>
                </div>
                <input type="email" 
                name="email"
                id="email"
                placeholder="...@kalvium.community"
                onChange={handleSetState}
                value={data.email}/>
                {Emailerror == true ? (
                    <p>Enter correct format for email</p>
                ):(
                    ''
                )}
            </div>
            <div>
                <div>
                    <label htmlFor="contact">Contact :</label>
                </div>
                <input type="number" 
                name="phone"
                id="contact"
                placeholder="Contact"
                onChange={handleSetState}
                value={data.phone}
                maxLength={10}/>
                {Phoneerror == true ? (
                    <p>Enter coorect format for phone</p>
                ):(
                    ''
                )}
            </div>
            <div>
               {Mastererror == true ?(
                <p>Please enter the input feild as expected</p>
               ):(
                ''
               )}
            </div>
            <div >
                <input className="register" type="submit" 
                value={'Register'} />
            </div>
           </form>
        </div>
    </div>
</div> 
    )
}

export default RegisterForm;