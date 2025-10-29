import React from "react";

const MapPage: React.FC = () => {
  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.3695426549057!2d-71.56671732406797!3d42.37727357119131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e38cb6e51954d1%3A0xda0bb66fdddb9607!2s10%20Technology%20Dr%2C%20Hudson%2C%20MA%2001749%2C%20USA!5e0!3m2!1sen!2sin!4v1761747274538!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapPage;
