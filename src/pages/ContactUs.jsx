
const ContactUs = () => {
    return (
        <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-xl font-semibold mb-3">Feedback</h2>
                <p>We value your feedback. Share your thoughts, suggestions, or concerns with us by filling out the form below:</p>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows="6"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Send
                        </button>
                    </div>
                </form>
            </div>
            
            <div>
                <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
                <p className="text-lg mb-5">
                    Have questions? We are here to help. Get in touch with us using the contact information provided below:
                </p>
                
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Customer Support</h2>
                    <p>Email: <a href="mailto:support@carbysell.com">support@carbysell.com</a></p>
                    <p>Phone: +1-800-CAR-SELL (1-800-227-7355)</p>
                    <p>Working Hours: Monday to Friday, 9:00 AM - 5:00 PM (IST)</p>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Sales Department</h2>
                    <p>Email: <a href="mailto:sales@carbysell.com">sales@carbysell.com</a></p>
                    <p>Phone: +1-800-555-SELL (1-800-555-7355)</p>
                    <p>Working Hours: Monday to Friday, 9:00 AM - 6:00 PM (IST)</p>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Technical Support</h2>
                    <p>Email: <a href="mailto:techsupport@carbysell.com">techsupport@carbysell.com</a></p>
                    <p>Phone: +1-800-123-HELP (1-800-123-4357)</p>
                    <p>Working Hours: Monday to Friday, 8:00 AM - 7:00 PM (IST)</p>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Visit Us</h2>
                    <p>CarBySell Headquarters</p>
                    <p>123 Car Avenue</p>
                    <p>Pune, Maharashtra, 441122</p>
                    <p>India</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
