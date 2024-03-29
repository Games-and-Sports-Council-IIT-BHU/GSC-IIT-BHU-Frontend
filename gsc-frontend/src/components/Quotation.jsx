import { Carousel, IconButton } from "@material-tailwind/react";

const Quotation = () => {
  const Quote = [
    {
      quote:
        "IITBHU sports is a community of sports enthusiasts who are maintaining their fitness even in these tough times.",
      person: "Person",
    },
    {
      quote:
        "IITBHU sports is a community of sports enthusiasts who are maintaining their fitness even in these tough times.",
      person: "Person",
    },
    {
      quote:
        "IITBHU sports is a community of sports enthusiasts who are maintaining their fitness even in these tough times.",
      person: "Person",
    },
    {
      quote:
        "IITBHU sports is a community of sports enthusiasts who are maintaining their fitness even in these tough times.",
      person: "Person",
    },
  ];
  return (
    <div className="bg-[url('/assets/QuotationBackground.svg')] bg-no-repeat bg-cover">
      <div className="bg-[url('/assets/Swimmer.svg')] bg-no-repeat  bg-right-bottom bg-[length:150px]  sm:bg-[length:250px]">
        <div className="bg-[url('/assets/Quotationleftbottom.svg')] bg-no-repeat bg-[length:150px] sm:bg-[length:250px]  bg-left-bottom ">
          <div className="bg-[url('/assets/Quotationrighttop.svg')] bg-no-repeat bg-[length:150px] sm:bg-[length:250px]  bg-right-top">
            <div className="bg-[url('/assets/Quotation.svg')] bg-no-repeat bg-top-2 bg-[length:25px] sm:bg-[length:50px]  sm:bg-top-4">
              {" "}
              <Carousel
                loop={true}
                navigation={false}
                autoplay={true}
                autoplaySpeed={3000}
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="large"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 sm:left-14 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-6  sm:h-9 sm:w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="large"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 sm:!right-14 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-6 sm:h-9 sm:w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </IconButton>
                )}
              >
                {Quote.map((quote, index) => (
                  <div key={index}>
                    <div className="text-center font-inter pt-12 pb-8 pl-12 pr-12 sm:pl-40 sm:pr-40 sm:pt-36 sm:pb-32">
                      <div className="text-white font-medium sm:font-semibold text-xl sm:text-3xl pt-6">
                        {quote.quote}
                      </div>{" "}
                      <div className="text-white font-medium sm:font-semibold text-md sm:text-lg pt-6 sm:pt-10">
                        {quote.person}
                      </div>
                      <div className="text-white font-bold text-3xl sm sm:text-2xl pt-2 sm:pt-4">
                        ---
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
