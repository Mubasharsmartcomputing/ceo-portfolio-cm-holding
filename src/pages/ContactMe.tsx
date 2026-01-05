import ContactSection from '../components/ContactSection';

const ContactMe = () => {
  return (
    <div className="bg-[#101010] min-h-screen pt-32">
      <ContactSection
        alignment="left"
        title={
          <span className="text-[40px] font-semibold tracking-[-0.05em] leading-[134%] bg-gradient-to-r from-[#00EAFF] to-[#FFFFFF] bg-clip-text text-transparent block">
            CONTACT ME
          </span>
        }
        subtitle={
          <span className="text-[20px] font-medium text-[#00EAFF] leading-[32px] tracking-[0.03em] block">
            Start Your Investment Journey Today
          </span>
        }
        description="Get In Touch With Me For Inquiries Or Collaborations. Email Or Call Me Today, I'm Happy To Assist!"
      />
    </div>
  );
};

export default ContactMe;