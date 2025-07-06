
export const isValidEmail = (email) => {
    const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);
  };
  
  export const isValidPassword = (password) => {
    // Minimum 6 characters, 1 letter, 1 number
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return pattern.test(password);
  };
  