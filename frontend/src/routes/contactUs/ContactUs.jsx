import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
     <h1 className="text-center pt-20 text-3xl">Sorry, This page is not working</h1>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-16">
     
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Info Panel */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-blue-100 mb-8">
              Have questions about resumes, templates, or features?  
              We’re here to help you build a job-winning resume.
            </p>

            <div className="space-y-5 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <span>tamalkumarkhan006@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl" />
                <span>+91 7439479174</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-blue-200 mt-10">
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </p>
        </div>

        {/* Right Form Panel */}
        <div className="p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
