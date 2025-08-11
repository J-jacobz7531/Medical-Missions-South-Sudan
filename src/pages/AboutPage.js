import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../assets/images/background.jpg';

const AboutPage = () => {
  // Animation variants
  const headingVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.5 
      } 
    }
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.7 
      } 
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#65a8b0] to-[#d1dfe0] py-24">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroBackground})`, opacity: 0.6 }}
        ></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
            variants={headingVariants}
            initial="initial"
            animate="animate"
          >
            About Medical Mission
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
          >
            A Christian Humanitarian Non-Governmental Organisation dedicated to bringing hope
            and healing to the most vulnerable in South Sudan and East Africa, transforming lives
            holistically through healthcare and humanitarian aid.
          </motion.p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-6 border-t-4 border-blue-600 bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:border-t-[6px]">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="mb-4">
                Transform unreached sub-Saharan East African communities via
                subsidised medical services, mobile surgery, training, and
                education.
              </p>
              <p className="mb-4">
                Impact communities with hope and love, based on teachings of
                Jesus Christ, partnering with local communities, leaders,
                government, churches, and medical teams.
              </p>
              <p>
                Address critical healthcare needs of the marginalised, guided by
                our commitment to serve others and Matthew 6:9-10.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 border-t-4 border-green-600 bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:border-t-[6px]">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h2>
              <p>
                To bring hope and healing to the most vulnerable in South Sudan
                and East Africa, transforming lives holistically through healthcare
                and humanitarian aid, promoting human dignity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p>
              Medical Mission was founded in 2020 by South Sudanese medical students who recognized the
              significant challenges in providing adequate medical services in South Sudan, especially in rural areas.
            </p>
            <p>
              The Greater Kapoeta region lacked functioning hospitals and had severely limited healthcare access.
              Existing dispensaries struggled with complex cases, and many individuals, including Toposa families,
              lacked proper diagnosis and treatment.
            </p>
            <p>
              Officially registered on September 27, 2021, under the Republic of South Sudan Relief and Rehabilitation
              Commission (Registration No. 3871), we began our mission to transform unreached communities
              through comprehensive healthcare and humanitarian services.
            </p>
            <p>
              Today, under the leadership of CEO and Founder Lobai Thomas Lowi, we operate as a national and
              community-based organization, working hand-in-hand with local communities to address root causes of
              health challenges and build sustainable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Values List */}
            {[
              ['Love and Faith', 'Christian principles, compassion, and empathy guide all our interactions and services.', 'text-blue-600'],
              ['Integrity & Professionalism', 'Maintaining high standards, accountability, and ethics in all our operations.', 'text-green-600'],
              ['Mutual Respect', 'Recognizing the dignity and potential of all individuals we serve and work with.', 'text-orange-600'],
              ['Solidarity', 'Standing with vulnerable communities, especially women, children, and the elderly.', 'text-purple-600'],
              ['Equality', 'Respecting all races, ethnicities, religions, and promoting inclusivity.', 'text-red-600'],
              ['Partnership', 'Collaboration with like-minded entities, through egalitarian power structures.', 'text-blue-600']
            ].map(([title, desc, color], i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className={`text-xl font-semibold ${color} mb-3`}>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Team Cards */}
            {[
              ['Lobai Thomas Lowi', 'Chief Executive Officer & Founder', 'Visionary leader guiding Medical Mission\'s strategic direction and day-to-day management, committed to healthcare transformation in South Sudan.', 'Photo'],
              ['Timothy Hendra', 'Managing Director', 'Leading the management team and overseeing operational excellence across all program areas and functional departments.', 'TH'],
              ['Louise Hendra', 'Board Chair', 'Providing overall guidance, direction, and oversight through the Board of Directors to ensure organizational excellence.', 'LH'],
              ['Lawrence Alabo', 'Secretary & Legal Specialist', 'Overseeing legal compliance, agreements, and documentation while ensuring organizational operations align with regulatory requirements.', 'Photo']
            ].map(([name, title, desc, initials], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              >
                <div className="w-36 h-36 mx-auto mb-4 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-500 text-xl font-semibold">
                  {initials}
                </div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-blue-600 mb-2">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Head Office */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Head Office</h3>
              <p className="mb-2"><strong>Address:</strong></p>
              <p className="mb-1">Palakwat Junction, Kapoeta town Rd</p>
              <p className="mb-1">3km Singaita FM</p>
              <p className="mb-1">Kapoeta Municipality</p>
              <p className="mb-1">Eastern Equatoria State</p>
              <p className="mb-1">South Sudan</p>
              <p className="mb-2 mt-4"><strong>Phone:</strong> +211929562970</p>
              <p className="mb-2"><strong>Email:</strong> medicalmission@gmail.com</p>
              <p><strong>Website:</strong> www.mmsud.org</p>
            </div>

            {/* Registration Details */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Registration Details</h3>
              <p className="mb-2"><strong>Established:</strong> 2020</p>
              <p className="mb-2"><strong>Registered:</strong> 27/09/2021</p>
              <p className="mb-2"><strong>Registration No:</strong> 3871</p>
              <p className="mb-2"><strong>Registered Under:</strong></p>
              <p>Republic of South Sudan Relief and Rehabilitation Commission (SSRRC), NGO Act, 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
