const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
    };

    return currentDateTime.toLocaleString('en-US', options).replace(/[/:-]/g, '-');
};
  
export default getCurrentDateTime