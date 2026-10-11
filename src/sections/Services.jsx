import assets from '../assets/assets';
import ServicesCard from '../components/Services-card';
import Title from '../components/Title';
import { motion } from 'motion/react';

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description:
        'We turn bold ideas into powerful digital solutions that connect, engage ... ',
      icon: assets.ads_icon,
    },
    {
      title: 'Content marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content writing',
      description:
        'We help you create a marketing strategy that drives results.',
      icon: assets.content_icon,
    },
    {
      title: 'Social media',
      description:
        'We help you build a strong social media presence and engage with your audience.',
      icon: assets.social_icon,
    },
  ];

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        id="services"
        className="relative flex flex-col items-center gap-7 px-4 sm:px-14 lg:px-24 xl:p-40 pt-30 text-gray-700 dark:text-white"
      >
        <img
          src={assets.bgImage2}
          alt="bg-gradient"
          className="absolute -top-110 -left-70 -z-1 dark:hidden"
        />

        <Title
          title={'How can we help?'}
          desc={
            'From strategy to execution, we craft digital solutions that moves your business forward.'
          }
        />

        <div className="flex flex-col md:grid md:grid-cols-2">
          {servicesData.map((service, i) => (
            <ServicesCard key={i} service={service} index={i} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Services;
