import React from 'react';
import { FaCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-teal-900 text-white grid grid-cols-1 md:grid-cols-3 items-center text-center text-lg md:text-xl p-4">
      <FooterItem title="CopyRight">
        JohnEvan VN
      </FooterItem>
      <FooterItem title="Location">
        Binh Tan, Ho Chi Minh city
      </FooterItem>
      <FooterItem title="Technology">
        ReactVite, TailwindCSS, JavaScript
      </FooterItem>
    </div>
  );
}

function FooterItem({ title, children }) {
  return (
    <div className="p-2">
      <h3 className="border-b-2 p-4 text-2xl md:text-3xl mb-2 w-3/4 md:w-96 mx-auto">{title}</h3>
      <h2 className="mx-2">{children}</h2>
    </div>
  );
}
