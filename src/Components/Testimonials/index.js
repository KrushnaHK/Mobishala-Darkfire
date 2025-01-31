import React from "react";
import "./index.css";

const Testimonials = () => {
  const row1Testimonials = [
    { id: 1, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Mark Roberts", 
      role: "Freelancer", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977641/6766cba00aae0d7555cd7534_Testimonial_Avatar_2_cz7tnm.jpg" 
    },
    { id: 2, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Jenny Walker", 
      role: "CEO, Asia", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977638/6766cba00aae0d7555cd767a_Testimonial_1_gduj7b.jpg" 
    },
    { id: 3, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Emily Davis", 
      role: "Developer, Facelook", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977638/6766cba00aae0d7555cd752b_Testimonial_Avatar_5_eztrau.jpg" 
    },
    { id: 4, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Mark Roberts", 
      role: "Freelancer", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977641/6766cba00aae0d7555cd7534_Testimonial_Avatar_2_cz7tnm.jpg" 
    },
    { id: 5, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Jenny Walker", 
      role: "CEO, Asia", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977638/6766cba00aae0d7555cd767a_Testimonial_1_gduj7b.jpg" 
    },
    { id: 6, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Emily Davis", 
      role: "Developer, Facelook", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977638/6766cba00aae0d7555cd752b_Testimonial_Avatar_5_eztrau.jpg" 
    },
  ];

  const row2Testimonials = [
    { id: 7, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Jenny", 
      role: "Developer, HIL", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd752e_Testimonial_Avatar_6_dfkkjh.jpg" 
    },
    { id: 8, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Michaerl Walker", 
      role: "CEO, RevUp", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd7530_Testimonial_Avatar_4_q0xexh.jpg" 
    },
    { id: 9, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Davis Thomsan", 
      role: "Founder, Agency", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd7678_Testimonial_8_kvmqyt.jpg" 
    },
    { id: 10, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Jenny", 
      role: "Developer, HIL", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd752e_Testimonial_Avatar_6_dfkkjh.jpg" 
    },
    { id: 11, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Michaerl Walker", 
      role: "CEO, RevUp", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd7530_Testimonial_Avatar_4_q0xexh.jpg" 
    },
    { id: 12, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Davis Thomsan", 
      role: "Founder, Agency", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd7678_Testimonial_8_kvmqyt.jpg" 
    },
  ];

  const columnTestimonial = [
    { id: 13, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Jenny", 
      role: "Developer, HIL", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd752e_Testimonial_Avatar_6_dfkkjh.jpg" 
    },
    { id: 14, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Jenny Walker", 
      role: "CEO, Asia", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977638/6766cba00aae0d7555cd767a_Testimonial_1_gduj7b.jpg" 
    },
    { id: 15, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", 
      name: "Michaerl Walker", 
      role: "CEO, RevUp", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd7530_Testimonial_Avatar_4_q0xexh.jpg" 
    },
    { id: 16, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Emily Davis", 
      role: "Developer, Facelook", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977638/6766cba00aae0d7555cd752b_Testimonial_Avatar_5_eztrau.jpg" 
    },
    { id: 17, 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", 
      name: "Davis Thomsan", 
      role: "Founder, Agency", 
      imageUrl: "https://res.cloudinary.com/djifdyfkd/image/upload/v1737977639/6766cba00aae0d7555cd7678_Testimonial_8_kvmqyt.jpg" 
    },
  ]

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">You're in Good Company</h2>
      <p className="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="testimonials-row testimonials-row-1">
        {row1Testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial-card ${index % 2 === 0 ? "small" : "large"}`}>
            <p>"{testimonial.text}"</p>
            <div className="testimonial-profile">
              <img src={testimonial.imageUrl} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
        {row1Testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial-card ${index % 2 === 0 ? "small" : "large"}`}>
            <p>"{testimonial.text}"</p>
            <div className="testimonial-profile">
              <img src={testimonial.imageUrl} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-row testimonials-row-2">
        {row2Testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial-card ${index % 2 === 0 ? "small" : "large"}`}>
            <p>"{testimonial.text}"</p>
            <div className="testimonial-profile">
              <img src={testimonial.imageUrl} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
        {row2Testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial-card ${index % 2 === 0 ? "small" : "large"}`}>
            <p>"{testimonial.text}"</p>
            <div className="testimonial-profile">
              <img src={testimonial.imageUrl} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="column-temstimonial">
      {columnTestimonial.map((testimonial, index) => (
          <div key={testimonial.id} className='column-testimonial-card'>
            <p>"{testimonial.text}"</p>
            <div className="testimonial-profile">
              <img src={testimonial.imageUrl} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;