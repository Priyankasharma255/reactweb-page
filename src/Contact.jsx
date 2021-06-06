import React, { useState } from 'react';

const Contact = () => {
const [data, setdata] = useState( {
    fullname: " ",
    phone: " ",
    email: " ",
    message: " ",
})    

const InputEvent = (event) => {
    const {name, value} = event.target;

    setdata((preVal) => {
        return {
            ...preVal,
            [name]: value,

        };
    });
};

const formSubmit = () => {};


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Welcome Contact page</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" 
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Full Name" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your Phone Number</label>
                                <input type="number" class="form-control" 
                                name="number"
                                value={data.number}
                                onChange={InputEvent}placeholder="Enter Your Phone Number" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" 
                                 name="email"
                                 value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control"  
                                name="message"
                                value={data.message}
                                onChange={InputEvent}rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact; 