import React, {useState} from "react";



function Form(){

    const[data,setData]=useState({

        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dateofBirth: "",
        phoneNumber: "",
        email: "",
    });

        const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({ ...data,[name]:value});

        };

        console.log(data);

    return(
        <div className='h-screen bg-gradient-to-br from-orange-400 to-red-500 flex justify-center items-center' >
            <div className="max-w-2xl w-full bg-white rounded-xl p-10 ">
                
            <form>
                <div className="space-y-4">
                    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-x-2">

                        <div>
                            <label htmlFor='firstName'  className="form-label">First Name</label>
                            <input type="text" 
                            name="firstName" 
                            id="firstName"
                            className="form-input"
                            value={data.firstName}
                            onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor='middleName' className= "form-label">Middle Name</label>
                            <input type="text" 
                            name="middleName" 
                            id="middleName" 
                            className="form-input"
                            value={data.middleName}
                            onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='lastName' className="form-label">Last Name</label>
                            <input type="text" 
                            name="lastName" 
                            id="lastName" 
                            className="form-input"
                            value={data.lastName}
                            onChange={handleChange}/>
                        </div>
                        

                    </div>
                
                    <div>

                        <label htmlFor="gender" className="form-label">Gender</label>
                        <label htmlFor="male">
                            <input type="radio"
                            name="gender" 
                            value="male" 
                            id="male"
                            onChange={handleChange}/>Male</label>
                        <label htmlFor="female">
                            <input type="radio" 
                            name="gender" 
                            value="female" 
                            id="female"
                            onChange={handleChange}/>{" "}Female</label>
                    </div>
                
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" 
                        placeholder="xxx-xxx-xxxx"
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange}/>
                    </div>
                
                    <div>
                        <label htmlFor='dateofBirth'>Date of Birth</label>
                        <input type="date" 
                        name="dateofBirth"
                        value={data.dateofBirth}
                        onChange={handleChange}/> 
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                        placeholder="matthew@gmail.com"
                        name="email"
                        id="email" 
                        value={data.email}
                        onChange={handleChange}/>
                    </div>
                    
                    <div >
                        <button type="submit" className="bg-blue-900 rounded-lg text-white" >Register</button>
                    </div>
                </div>
            </form>
            </div>
         </div>
    );

}






export default Form;