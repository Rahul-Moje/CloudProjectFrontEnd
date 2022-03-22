import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment, { months, suppressDeprecationWarnings } from "moment";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
toast.configure()

const IssueBook = () => {
    const values = {
        bookname: "",
        bookauthor: "",
        email: "",
        contactNumber: "",
        issuedate: "",
    };
    // sessionStorage.setItem("email", "sourav.mlk2@gmail.com");
    // sessionStorage.setItem("contactNumber", "9024400722");
    const userEmail = sessionStorage.getItem("email");
    const userContactNumber = sessionStorage.getItem("contactNumber");
    const bookIssueDate = moment().format("YYYY-MM-DD")
    const bookReturnDate = moment().add(1, 'months').format("YYYY-MM-DD")
    const bookTitle = "Breaking Dawn";
    const bookAuthor = "Author Name";

    const [formValues, setValues] = useState(values);
    const [formErrors, setErrors] = useState({});
    const [onSubmit, setOnSubmit] = useState(false);


    const handleRegister = (event) => {
        event.preventDefault();
        // const req = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         bookTitle: bookTitle,
        //         bookAuthor: bookAuthor,
        //         email: userEmail,
        //         contactNumber: userContactNumber,
        //         issueDate: bookIssueDate,
        //         returnDate: bookReturnDate
        //     })
        // };
        // fetch('http://localhost:8080/bookaholic/api/issueBook', req)
        //     .then(response => {
        //         if (response.status >= 400) {
        //             // setInvalidCredError(true);
        //             // throw new Error("Server responds with error!");
        //         } else {
        //             notify("Book issued successfully")
        //             return response.json();
        //         }
        //     })
        //     .then(responseJson => {
        //         // navigate("usersList");
        //     });
        // setOnSubmit(true);
    };
    const notify = (message) => {

        toast(message)
    }

    return (
        <div className="container">

            <Header />
            <div className="issue-book">
                <form onSubmit={handleRegister}>
                    <h2 className="title">Issue Book</h2>
                    <div className="ui divider"></div>
                    <div className="ui form"></div>
                    <div className="field">
                        <label>Book Name:</label>
                        <input
                            className={`text-label`}
                            name="bookname"
                            type="text"
                            value={bookTitle}
                            disabled={true}
                        ></input>
                    </div>
                    <div className="field">
                        <label>Book Author:</label>
                        <input
                            className={`text-label`}
                            name="bookauthor"
                            type="text"
                            value={bookAuthor}
                            disabled={true}
                        ></input>
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        <input
                            className={`text-label`}
                            name="email"
                            type="email"
                            value={userEmail}
                            disabled={true}
                        ></input>
                    </div>
                    <div className="field">
                        <label>Contact number:</label>
                        <input
                            className={`text-label`}
                            name="contactNumber"
                            type="tel"
                            value={userContactNumber}
                            disabled={true}
                        ></input>
                    </div>
                    <div className="field">
                        <div className="field1">
                            <label>Issue Date:</label>
                            <input
                                className={`text-label`}
                                name="issuedate"
                                type="date"
                                value={bookIssueDate}
                                disabled={true}
                            ></input>
                        </div>
                        <div className="field2">
                            <label>Return Date:</label>
                            <input
                                className={`text-label`}
                                name="issuedate"
                                type="date"
                                value={bookReturnDate}
                                disabled={true}
                            ></input>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button className="button" >Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default IssueBook;