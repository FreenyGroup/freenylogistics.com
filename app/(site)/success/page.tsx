import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Success Page - Freeny Logistics",
  description: "This is the contact success page for Freeny Logistics",
  // other metadata
};

const ErroPage = () => {
  return (
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <div className="success-card">
          <div
            style={{
              borderRadius: "200px",
              height: "200px",
              width: "200px",
              background: "#F8FAF5",
              margin: "0 auto",
            }}
          >
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>
            We received your message;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ErroPage;
