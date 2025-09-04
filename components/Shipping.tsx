import React from 'react';

const Shipping: React.FC = () => {
  return (
    <section id="shipping" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Shipping Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ABOUT SHIPPING</h3>
            <p className="text-gray-600 mb-6">
              Our team can provide support with your shipping needs. Please contact us for further information.
            </p>
            <p className="text-gray-600">
              Our minimum order quantity (MOQ) is 1 container 18 tons (20’ft). Contact us to discuss your needs with our team to determine the optimal MOQ for your business.
            </p>
          </div>

          {/* Purchase Guide Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">PURCHASE GUIDE: POLICIES & PROCEDURES</h3>
            <p className="text-gray-600">
              We ensure secure transactions with T/T and L/C payment methods. A 50% deposit confirms your order and starts production. The final 50% is processed upon production completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;