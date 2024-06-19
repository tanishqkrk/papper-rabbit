import React from "react";

function Map() {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0907319310522!2d77.53153757574748!3d12.966045714998634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc16b0ab867%3A0x2eb955d504f605dd!2sPaper%20Rabbit%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1712222699054!5m2!1sen!2sin"
        className=" border-0 w-full h-[100%] "
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
