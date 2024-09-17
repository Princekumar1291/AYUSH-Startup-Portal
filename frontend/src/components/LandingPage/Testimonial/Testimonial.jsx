const Testimonial = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="md:flex bg-white rounded-xl p-8 md:p-0 shadow-lg">
          <img
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/placeholder.svg"
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                {` "The AYUSH Startup Portal streamlined our registration process and provided invaluable resources. It's been instrumental in our growth."`}
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-green-600">Sarah Patel</div>
              <div className="text-gray-500">CEO, Ayurveda Innovations</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
};
export default Testimonial;
