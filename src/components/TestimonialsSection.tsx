
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useSiteConfig } from '@/context/SiteConfigContext';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    quote: "Working with Pixelify was a game-changer for our business. They delivered a website that perfectly captures our brand and has significantly improved our online conversions.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthCo",
    quote: "The team at Pixelify went above and beyond our expectations. Our new website is not only beautiful but also performant and easy to manage.",
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, StyleShop",
    quote: "I couldn't be happier with the e-commerce solution that Pixelify built for my business. Sales have increased by 40% since our launch!",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const TestimonialsSection = () => {
  const { config } = useSiteConfig();
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    testimonialRefs.current.forEach((testimonial) => {
      if (testimonial) {
        observer.observe(testimonial);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialRefs.current.forEach((testimonial) => {
        if (testimonial) {
          observer.unobserve(testimonial);
        }
      });
    };
  }, []);

  if (!config.visibleSections.testimonials) return null;

  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container mx-auto">
        <div 
          ref={sectionRef} 
          className="transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="section-title text-center mb-16 mx-auto">
            Client <span className="text-pixelify-orange">Testimonials</span>
            <span className="block w-20 h-1 bg-pixelify-orange mx-auto mt-4"></span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="transition-all duration-700 opacity-0 translate-y-10 bg-white border border-gray-100 hover:shadow-lg"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-pixelify-orange" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
