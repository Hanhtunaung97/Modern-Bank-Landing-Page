import React from "react";

const Container = ({ children, className }) => {
  return (
    <section
      className={`max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 py-5 md:py-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
