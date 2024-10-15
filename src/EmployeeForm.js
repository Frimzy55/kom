import React from 'react';
//import logo from '../assets/komlogo.jpeg'; // Adjust the path to your logo file
import logo from './assets/pres.png'; // Ensure this path is correct relative to your EmployeeForm.js file

const EmployeeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Submitted:', data);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" >
      <div className="border rounded bg-light overflow-auto" style={{ maxHeight: '80vh', width: '400px', backgroundColor: '#ADD8E6' }} >
        <div className="text-center mb-3" >
          <h1 className="text-center mb-4">Presbyterian Hospital, Kom</h1>
          <img src={logo} alt="Hospital Logo" className="img-fluid" style={{ maxHeight: '100px', width: 'auto' }} />
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <h4 className="text-center mb-4">Staff Information</h4>

          {/* Other fields like Full Name, Date of Birth, etc. */}

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="fullName" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dateOfBirth" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Staff ID</label>
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
            <label className="form-label">Contact Number</label>
            <input type="text" name="contactDetails" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Department</label>
            <input type="text" name="department" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Hire</label>
            <input type="date" name="dateOfHire" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input type="text" name="jobTitle" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Qualifications</label>
            <select name="qualifications" className="form-select" required>
              <option value="" disabled selected>Select your qualification</option>
              <option value="High School Diploma">High School Diploma</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
              <option value="Professional Certification">Professional Certification</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Dependent</label>
            <input type="text" name="dependent" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Number of Children</label>
            <input type="number" name="numberOfChildren" className="form-control" min="0" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Leave</label>
            <select name="leave" className="form-select">
              <option value="" disabled selected>Select leave type</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Maternity Leave">Maternity Leave</option>
              <option value="Paternity Leave">Paternity Leave</option>
              <option value="Parental Leave">Parental Leave</option>
              <option value="Study Leave">Study Leave</option>
              <option value="Unpaid Leave">Unpaid Leave</option>
              <option value="Emergency Leave">Emergency Leave</option>
              <option value="Public Holiday">Public Holiday</option>
              <option value="not yet">Not Yet</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
