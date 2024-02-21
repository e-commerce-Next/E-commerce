import React from "react";
import Nav from "../Navbar/page";
// import Footer from "../Footer/page"

export const About = () => {
  return (
    <>
      <div>
        <Nav/>
        <div className="bg-white flex flex-row justify-center w-full">
          <div className="bg-bg w-[1437px] h-[596px] relative">
            <div className="gap-[40px] absolute top-[70px] left-[87px] inline-flex flex-col items-start">
              <div className="relative w-fit mt-[-1.00px] font-heading-54px-semibold font-[number:var(--heading-54px-semibold-font-weight)] text-black text-[length:var(--heading-54px-semibold-font-size)] text-justify tracking-[var(--heading-54px-semibold-letter-spacing)] leading-[var(--heading-54px-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-54px-semibold-font-style)]">
                Our Story
              </div>
              <div className="gap-[24px] relative flex-[0_0_auto] inline-flex flex-col items-start">
                <p className="relative w-[525px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
                Welcome to Exclusive! We're a passionate team dedicated to creating an exceptional online shopping experience for you.

                At Exclusive, we believe in the power of convenience, quality, and community. Our platform is designed to bring together buyers and sellers from around the world, offering a diverse range of products to suit every need and taste.

                With a user-friendly interface and innovative features, we strive to make your shopping experience seamless and enjoyable. Whether you're looking for fashion, electronics, home goods, or more, you'll find it all here at Exclusive.

                But we're more than just a marketplace – we're a community.
                </p>
                <p className="relative w-[505px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
                We're committed to supporting small businesses and artisans, and we're dedicated to fostering connections between buyers and sellers.

                Join us on this journey as we continue to grow and evolve, always with your needs in mind. Thank you for choosing Exclusive for all your online shopping needs!
                </p>
              </div>
            </div>
            <div className="absolute w-[700px] h-[500px] top-[70px] left-[686px] bg-[#eb7ea8] rounded-[4px_0px_0px_4px] overflow-hidden">
              <img
                className="absolute w-[705px] h-[500px] top-0 left-0"
                alt="pho"
                src="https://shorturl.at/vDEN3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;