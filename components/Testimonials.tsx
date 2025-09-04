import React from 'react';

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCard = ({ quote, author, location }: { quote: string, author: string, location: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full text-left">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    {/* This line has been fixed */}
    <p className="text-gray-600 mb-6 flex-grow">&ldquo;{quote}&rdquo;</p>
    <div>
      <p className="font-bold text-gray-900">{author}</p>
      <p className="text-sm text-gray-500">{location}</p>
    </div>
  </div>
);


const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The quality of the charcoal is outstanding. Consistent heat and long burning time. Our customers are very satisfied.",
      author: "Ahmed R.",
      location: "Dubai, UAE"
    },
    {
      quote: "Excellent communication and reliable shipping. Indo Charcoal Supply is a trustworthy partner for our business.",
      author: "Michael B.",
      location: "Berlin, Germany"
    },
    {
      quote: "We were impressed with the custom packaging options. It really helped our brand stand out in a competitive market.",
      author: "Fatima K.",
      location: "Jeddah, Saudi Arabia"
    }
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;