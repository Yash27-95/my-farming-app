const Footer = () => (
  <footer
    style={{
      background: "#fff",
      color: "#181818",
      textAlign: "center",
      padding: "1em 0.5em",
      fontSize: "1rem",
      borderTop: "1px solid #ececec",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      marginTop: "auto",
      boxShadow: "0 -2px 8px rgba(0,0,0,0.04)",
      letterSpacing: "0.5px",
      width: "100%",
      maxWidth: "100vw",
      boxSizing: "border-box",
    }}
  >
    <div style={{ maxWidth: 480, margin: "0 auto", wordBreak: "break-word" }}>
      <strong>Sri Shankar Traders</strong>
      <span style={{ display: "inline-block", margin: "0 0.3em" }}>&middot;</span>
      Quality. Trust. Innovation.
      <br />
      <small>
        Serving the farming community since 1980
        <span style={{ display: "inline-block" }}> &mdash; Kesthur, Maddur taluk, Mandya district, Karnataka</span>
      </small>
      <br />
      <small style={{ color: "#888" }}>
        &copy; {new Date().getFullYear()} Sri Shankar Traders. All rights reserved.
      </small>
    </div>
  </footer>
);

export default Footer;