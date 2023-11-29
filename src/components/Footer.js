const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a 
      href="https://www.linkedin.com/in/balaji-e-a1a795182/" 
      target="_blank" 
      title="Balaji .E linkedin profile">
        Balaji Yatheysh
      </a>
      <i className="fa-solid fa-copyright"></i>{year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

export default Footer;