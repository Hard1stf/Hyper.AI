import toast from 'react-hot-toast';
import assets from '../assets/assets';
import Title from '../components/Title';

const ContactUs = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formDate = new FormData(e.target);
    formDate.append('access_key', 'dec05f1d-f90b-4bad-b3f4-725a2605bff0');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDate,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission!');
        e.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <section
        id="contact-us"
        className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      >
        <Title
          title={'Reach out to us'}
          desc={'From strategy to execution, we craft digital solutions that move your business forward.'}
        />

        <form
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        >
          <div>
            <p className="mb-2 text-sm font-medium">Your Name</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.person_icon} alt="person-icon" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 text-sm outline-none"
                name="name"
                required
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">Email Id</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.email_icon} alt="email-icon" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 text-sm outline-none"
                name="email"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
              rows={8}
              placeholder="Enter your message"
              className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
              name="message"
            />
          </div>

          <button
            type="submit"
            className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            Submit{' '}
            <img src={assets.arrow_icon} alt="submit-icon" className="w-4" />
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
