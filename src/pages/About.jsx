import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <h1 style={{ color: "#181818", fontWeight: 800, fontSize: "1.5rem", marginBottom: "1rem" }}>
                About Sri Shankar Traders
            </h1>
            <p style={{ color: "#222", fontSize: "1.08rem", marginBottom: "1.2em", lineHeight: 1.7 }}>
                <strong>Sri Shankar Traders</strong> is a licensed and trusted supplier of high-quality fertilizers, pesticides, and agricultural solutions. 
                For decades, we have proudly served the farming community with a commitment to quality, trust, and innovation.
            </p>
            <div style={{
                background: "#f7f7f9",
                border: "1px solid #ececec",
                borderRadius: "10px",
                padding: "1.2em 1em",
                marginBottom: "1.5em"
            }}>
                <ul style={{ color: "#222", lineHeight: 1.7, listStyle: "none", padding: 0 }}>
                    <li><strong>Founder:</strong> Sri late Madappa</li>
                    <li><strong>Owner:</strong> K. M. Shankar</li>
                    <li><strong>Established:</strong> 1980</li>
                    <li><strong>Location:</strong> Kesthur, Maddur taluk, Mandya district, Karnataka</li>
                    <li><strong>Specialty:</strong> Fertilizers, pesticides, and expert farming guidance</li>
                    <li><strong>Customers:</strong> Farmers, agri-businesses, and rural communities</li>
                </ul>
            </div>
            <h2 style={{ fontSize: "1.13rem", color: "#181818", margin: "1.2em 0 0.7em" }}>Our Mission</h2>
            <p style={{ color: "#222", fontSize: "1.05rem", marginBottom: "1.2em", lineHeight: 1.7 }}>
                To empower farmers with the best products, knowledge, and technology—helping them achieve higher yields, sustainable growth, and a better livelihood.
            </p>
            <h2 style={{ fontSize: "1.13rem", color: "#181818", margin: "1.2em 0 0.7em" }}>Why Choose Us?</h2>
            <ul style={{ margin: "0 0 1.5em 1.2em", color: "#222", lineHeight: 1.7 }}>
                <li>Decades of experience and trust in the agri-sector</li>
                <li>Only genuine, certified products</li>
                <li>Personalized advice for every farmer</li>
                <li>Continuous support and after-sales service</li>
                <li>Now featuring our <strong>AI-powered farming assistant</strong> for instant, tailored recommendations</li>
            </ul>
            <h2 style={{ fontSize: "1.13rem", color: "#181818", margin: "1.2em 0 0.7em" }}>Contact Us</h2>
            <div style={{
                background: "#fafbfc",
                border: "1px solid #ececec",
                borderRadius: "10px",
                padding: "1em 1em",
                marginBottom: "1.5em"
            }}>
                <p style={{ color: "#222", fontSize: "1.03rem", marginBottom: "0.5em" }}>
                    <strong>Address:</strong> Main Road, Kesthur, Maddur taluk, Mandya district, Karnataka<br />
                    <strong>Phone:</strong> +91-70194-46638<br />
                    <strong>Email:</strong> info@shankartraders.com
                </p>
            </div>
            <div style={{ color: "#888", fontSize: "0.97rem", marginTop: "2em", textAlign: "center" }}>
                Quality. Trust. Innovation.<br />
                Serving the farming community since 1980.
            </div>
        </div>
    );
};

export default About;