// validation.js

export const validateForm = (data) => {
    const errors = {};
  
    // Validate Full Name
    if (!data.fullName) {
      errors.fullName = "Full Name is required.";
    }
  
    // Validate Date of Birth
    if (!data.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required.";
    }
  
    // Validate Staff ID
    if (!data.employeeId) {
      errors.employeeId = "Staff ID is required.";
    }
  
    // Validate Gender
    if (!data.gender) {
      errors.gender = "Gender is required.";
    }
  
    // Validate Email
    if (!data.emailAddress) {
      errors.emailAddress = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.emailAddress)) {
      errors.emailAddress = "Email Address is invalid.";
    }
  
    // Validate Marital Status
    if (!data.maritalStatus) {
      errors.maritalStatus = "Marital Status is required.";
    }
  
    // Validate Digital Address
    if (!data.address) {
      errors.address = "Digital Address is required.";
    }
  
    // Validate Contact Number
    if (!data.contactDetails) {
      errors.contactDetails = "Contact Number is required.";
    } else if (!/^\d+$/.test(data.contactDetails)) {
      errors.contactDetails = "Contact Number must be numeric.";
    }
  
    // Validate Department
    if (!data.department) {
      errors.department = "Department is required.";
    }
  
    // Validate Date of Hire
    if (!data.dateOfHire) {
      errors.dateOfHire = "Date of Hire is required.";
    }
  
    // Validate Job Title
    if (!data.jobTitle) {
      errors.jobTitle = "Job Title is required.";
    }
  
    // Validate Qualifications
    if (!data.qualifications) {
      errors.qualifications = "Qualifications are required.";
    }
  
    // Validate Dependent
    if (data.dependent && data.dependent.length > 50) {
      errors.dependent = "Dependent name cannot exceed 50 characters.";
    }
  
    // Validate Number of Children
    if (!data.numberOfChildren) {
      errors.numberOfChildren = "Number of Children is required.";
    } else if (data.numberOfChildren < 0) {
      errors.numberOfChildren = "Number of Children cannot be negative.";
    }
  
    // Validate Leave
    if (data.leave === "") {
      errors.leave = "Leave type is required.";
    }
  
    return errors;
  };
  