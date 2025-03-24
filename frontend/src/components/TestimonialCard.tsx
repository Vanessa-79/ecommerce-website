import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <p className="text-gray-600 mb-4 line-clamp-4">{testimonial.text}</p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}