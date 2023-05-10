import { useEffect, useState } from 'react';

function Navbar() {
  const [userEmail, setUserEmail] = useState('');
  const [adminEmails, setAdminEmails] = useState([]);

  useEffect(() => {
    // Get the user email from local storage
    const storedEmail = localStorage.getItem('userEmail');
    console.log(storedEmail)
    if (storedEmail) {
      setUserEmail(storedEmail);
    }

    // Fetch the admin emails from the endpoint
    fetch('http://localhost:5000/admin')
      .then(response => response.json())
      .then(data => {
        setAdminEmails(data.Admin_email);
        console.log(data.Admin_email)
      })
      .catch(error => {
        console.error('Failed to fetch admin emails:', error);
      });
  }, []);

  const isUserAdmin = adminEmails.includes(userEmail);

  return (
    <div className="flex items-center justify-between z-50">
      <div className="z-50">
        <a href="../" className="font-bold z-50">Home</a>
      </div>
      <div className="hidden sm:flex items-center space-x-12 z-50">
        <a href="/plans" className="font-semibold">View Plans</a>
        <a href="/cms" className="font-semibold">Content Management</a>
        {isUserAdmin && (
          <a href="/admin" className="font-semibold">Admin Panel</a>
        )}
        <a href="../" className="border px-4 py-1.5 rounded-md border-black font-semibold">Contact us</a>
      </div>
      <div className="sm:hidden z-50">
        <a href="../" className="border px-4 py-1.5 rounded-md border-black font-semibold">Contact us</a>
      </div>
    </div>
  );
}

export default Navbar;
