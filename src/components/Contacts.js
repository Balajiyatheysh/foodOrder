const Contacts = () => {
  return (
    <div>
      <h1 className="contact-header">Contact Us Page</h1>
      <form>
        <input type="text" className="contact-input" placeholder="name" />
        <input type="text" className="contact-input" placeholder="message" />
        <button className="contact-button">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;
