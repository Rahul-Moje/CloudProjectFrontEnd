import { useState, useEffect } from "react";
import moment, { months, suppressDeprecationWarnings } from "moment";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import HttpClient from "../../services/issueBook-service";
toast.configure()

const IssueBook = () => {
    // bookID will be fetched from URL
    const bookID = "12345";
    sessionStorage.setItem("email", "sourav.mlk2@gmail.com");
    const userEmail = sessionStorage.getItem("email");

    const [book, setBook] = useState(null);
    const [contact, setcontactNumber] = useState(null);

    const fetchBookById = async (id) => {
        const bookResponse = await HttpClient.get(`getBookByID/${id}`);
        setBook(bookResponse.data.Item);
    };

    const fetchContactNumberByEmail = async (email) => {
        const userResponse = await HttpClient.get(`getContactNumberByEmail/${email}`);
        setcontactNumber(userResponse.data.Item);
    };

    useEffect(() => {
        fetchBookById(bookID);
        fetchContactNumberByEmail(userEmail);
    }, []);

    const bookIssueDate = moment().format("YYYY-MM-DD")
    const bookReturnDate = moment().add(1, 'months').format("YYYY-MM-DD")

    const handleRegister = async (event) => {
        event.preventDefault();
        const issueBookRes = await HttpClient.post("issueBook", {
            "email": userEmail,
            "booksIssued": [
                {
                    "bookTitle": book.bookName
                }
            ],
            "contactNumber": "+1" + contact.contactNumber
        });
        if (issueBookRes.status === 200) {
            toast(issueBookRes.data.message);
        } else {
            toast("Something went wrong.")
        }
    };

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
                            value={book?.bookName}
                            disabled={true}
                        ></input>
                    </div>
                    <div className="field">
                        <label>Book Author:</label>
                        <input
                            className={`text-label`}
                            name="bookauthor"
                            type="text"
                            value={book?.bookAuthor}
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
                            value={contact?.contactNumber}
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