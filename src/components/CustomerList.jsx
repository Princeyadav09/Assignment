import axios from "axios";
import React, { useEffect, useState } from "react";

const CustomerList = () => {
  const [customerData, setCustomerData] = useState([]);
  const [token, setToken] = useState(""); //  a state to store the token

  useEffect(() => {
    
    // Function to fetch customer list
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get("/sunbase/portal/api/assignment.jsp", {
          params: {
            cmd: "get_customer_list",
          },
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`, // Use the token obtained from authentication API
          },
        });

        console.log(response);

        // Assuming the response data is an array of customers
        setCustomerData(response.data);
      } catch (error) {
        // Handle error cases here
        console.error("Error fetching customer list:", error);
      }
    };

    // Check if token exists before fetching data

    if (token) {
      fetchCustomerData();
    }
  }, [token]); // Fetch data when 'token' state changes

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the login logic
    console.log("Login ID:", loginId);
    console.log("Password:", password);
    // For actual login functionality, you'd typically make an API call to authenticate users
    // and handle the login process accordingly
    try {
      const response = await axios.post(
        "/sunbase/portal/api/assignment_auth.jsp",
        {
          login_id: loginId,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      // Assuming the API response contains a token
      setToken(response.data.access_token); // Replace 'token' with the actual key for the token

      // Handle successful login, redirect to another page, or perform other actions
      console.log("Login successful");
    } catch (error) {
      // Handle errors, such as incorrect credentials or network issues
      console.error("Login failed:", error);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    address: "",
    city: "",
    state: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData);
    // You can perform further actions like sending the data to a backend API

    const { firstName, lastName, street, address, city, state, email, phone } =
      formData;

    if (!firstName || !lastName) {
      console.error("First Name and Last Name are mandatory.");
      return;
    }

    const requestBody = {
      first_name: firstName,
      last_name: lastName,
      street,
      address,
      city,
      state,
      email,
      phone,
    };

    try {
      const response = await axios.post(
        "/sunbase/portal/api/assignment.jsp",
        requestBody,
        {
          params: {
            cmd: "create",
          },
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
            Authorization: `Bearer ${token}`, // Assuming formData.token holds the Bearer token
          },
        }
      );
      console.log(response);
      console.log("Request successful:", response.data);
      // Further processing if needed
    } catch (error) {
      console.error("Error:", error.message);
      // Handle errors
    }
  };

  const handleEdit = async (uuid) => {
    // Perform edit action here using the UUID
    console.log(`Editing customer with ID: ${uuid}`);
    // You can implement further logic such as opening a modal or navigating to an edit page
    try {
      const apiUrl = '/sunbase/portal/api/assignment.jsp';

      const headers = {
        withCredentials: true,
        Authorization: `Bearer ${token}`,
      };

      const params = {
        cmd: 'update',
        uuid: uuid,
      };

      const data = {
        first_name: 'Jane',
        last_name: 'Doe',
        street: 'Elvnu Street',
        address: 'H no 2',
        city: 'Delhi',
        state: 'Delhi',
        email: 'sam@gmail.com',
        phone: '12345678',
      };

      const response = await axios.post(apiUrl, data, { params, headers });

      console.log('Customer updated:', response.data);
      // You can implement further logic such as updating the UI after successful update
    } catch (error) {
      console.error('Error updating customer:', error.message);
      // Handle errors, such as network issues or server errors
    }
  };

  const handleDelete = async (uuid) => {
    // Perform edit action here using the UUID
    console.log(`Deleting customer with ID: ${uuid}`);
    // You can implement further logic such as opening a modal or navigating to an edit page
    try {

      const response = await axios.post("/sunbase/portal/api/assignment.jsp",
        {
          params: {
            cmd: "delete",
            uuid: uuid,
          },
          headers: {
            withCredentials: true,
            Authorization: `Bearer ${token}`, // Assuming formData.token holds the Bearer token
          },
        }
      );

      console.log("Customer deleted:", response.data);
      // You can implement further logic such as updating the UI after successful deletion
    } catch (error) {
      console.error("Error deleting customer:", error.message);
      // Handle errors, such as network issues or server errors
    }
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 py-8 pt-8"
        >
          <div className="mb-4">
            <label
              htmlFor="loginId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Login ID
            </label>
            <input
              type="text"
              id="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your login ID"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h1 className="text-2xl font-semibold mb-4">Customer List</h1>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">First Name</th>
              <th className="border border-gray-300 px-4 py-2">Last Name</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">State</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.first_name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.last_name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.city}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.state}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center">
                  <button
                    className="mr-2"
                    onClick={() => handleEdit(customer.uuid)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l11-11zM15 5l-3 3-1-1-2 2 3 3 4-4-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button onClick={() => handleDelete(customer.uuid)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.293 5.293a1 1 0 011.414 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 111.414-1.414L10 10.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h1 className="text-2xl font-semibold mb-4">Customer Form</h1>
        <form onSubmit={handleFormSubmit} className="w-full max-w-lg m-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Street
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomerList;
