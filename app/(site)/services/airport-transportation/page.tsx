import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Airport Transportation",
  description: "This is the Airport Transportation page for Freeny Logistics",
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
                      src={"/images/blog/airport.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Airport Transportation
                </h2>

                <h4 className="mb-5 font-semibold dark:text-white">
                  Stress-Free Airport Transfers
                </h4>

                <div className="blog-details">
                  <p>
                    Traveling can be stressful, but our airport transportation
                    service is here to make your journey smoother. We offer
                    reliable and punctual transfers to and from all major
                    airports in Pennsylvania. Our professional drivers are
                    knowledgeable about the best routes and traffic conditions,
                    ensuring you reach your destination on time.
                  </p>

                  <p>
                    Our vehicles are equipped with modern amenities to make your
                    ride comfortable and enjoyable. Whether you're traveling for
                    business or leisure, we provide a hassle-free experience
                    from the moment you book with us to the moment you arrive at
                    your destination.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/airport-1.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/airport-2.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">Flight Tracking and Flexibility</h3>

                  <p>
                    We understand that flight schedules can change. That's why
                    we offer real-time flight tracking and flexible scheduling
                    to accommodate any adjustments. Our goal is to provide a
                    seamless and stress-free airport transfer, so you can focus
                    on your travel plans.
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
