import React from 'react';
//import logo from '../assets/komlogo.jpeg'; // Adjust the path to your logo file
import logo from './assets/komlogo.jpeg'; // Ensure this path is correct relative to your EmployeeForm.js file

const EmployeeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Submitted:', data);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border rounded bg-light overflow-auto" style={{ maxHeight: '80vh', width: '400px' }}>
        <div className="text-center mb-3">
          <img src={logo} alt="Hospital Logo" className="img-fluid" style={{ maxHeight: '100px', width: 'auto' }} />
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <h1 className="text-center mb-4">Kom Hospital</h1>
          <h3 className="text-center mb-3">Staff Information</h3>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="fullName" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dateOfBirth" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Employee ID</label>
            <input type="text" name="employeeId" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input type="radio" name="gender" value="Male" className="form-check-input" id="genderMale" required />
              <label className="form-check-label" htmlFor="genderMale">Male</label>
            </div>
            <div className="form-check">
              <input type="radio" name="gender" value="Female" className="form-check-input" id="genderFemale" />
              <label className="form-check-label" htmlFor="genderFemale">Female</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" name="emailAddress" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Marital Status</label>
            <select name="maritalStatus" className="form-select" required>
              <option value="" disabled selected>Select your status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Digital Address</label>
            <input type="text" name="address" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Details</label>
            <input type="text" name="contactDetails" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Department</label>
            <input type="text" name="position" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Hire</label>
            <input type="date" name="dateOfHire" className="form-control" required />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
