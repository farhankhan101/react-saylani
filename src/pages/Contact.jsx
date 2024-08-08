const Contact = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-6">
          <h2>Contact Page</h2>
          <p>If you have any questions, feel free to reach out!</p>  
          <h5>Email:</h5>
          <p><a href="mailto:contact@mywebsite.com">contact@mywebsite.com</a></p>
          <h5>Follow Us:</h5>
          <p>
            <a href="#" className="me-3">Facebook</a>
            <a href="#">Twitter</a>
          </p>
        </div>

        <div className="col-lg-6 col-md-6 ">
          <h5>Contact Form</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
