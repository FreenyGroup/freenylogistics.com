import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shuttle Service",
  description: "This is the Shuttle Service page for Freeny Logistics",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/shuttle.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Shuttle Service
                </h2>

                <h4 className="mb-5 font-semibold dark:text-white">
                  Convenient Shuttle Service
                </h4>

                <div className="blog-details">
                  <p>
                    Our shuttle service is designed to provide reliable and
                    efficient transportation for various needs across
                    Pennsylvania. Whether you're commuting to work, heading to a
                    local event, or simply need a ride within the city, our
                    professional drivers and well-maintained fleet ensure a
                    comfortable and timely journey. We prioritize your
                    convenience and aim to make your travel experience as smooth
                    as possible.
                  </p>

                  <p>
                    With flexible scheduling and a commitment to punctuality,
                    our shuttle service is perfect for individuals and groups
                    alike. Our vehicles are equipped with modern amenities to
                    enhance your ride, and our team is dedicated to delivering
                    exceptional service every step of the way.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/shuttle-1.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/shuttle-2.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">Flexible and Affordable</h3>

                  <p>
                    We offer a range of shuttle options to accommodate your
                    specific requirements. From daily commutes to special
                    events, our service is tailored to meet your needs without
                    breaking the bank. Our competitive rates and flexible plans
                    make it easy for you to choose the best transportation
                    solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
