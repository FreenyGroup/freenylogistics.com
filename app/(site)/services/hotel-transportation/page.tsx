import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hotel Transportation",
  description: "This is the Hotel Transportation page for Freeny Logistics",
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
                      src={"/images/blog/hotel.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Hotel Transportation
                </h2>

                <h4 className="mb-5 font-semibold dark:text-white">
                  Convenient Hotel Transportation
                </h4>

                <div className="blog-details">
                  <p>
                    Our hotel transportation service offers guests a smooth and
                    comfortable ride to and from their accommodations. Whether
                    you're arriving from the airport, attending a local event,
                    or exploring the city, we ensure a hassle-free travel
                    experience. Our professional drivers are dedicated to
                    providing prompt and courteous service.
                  </p>

                  <p>
                    We cater to both individual travelers and groups, offering
                    flexible scheduling and a fleet of well-maintained vehicles.
                    Our goal is to enhance your stay by providing reliable
                    transportation solutions that meet your needs.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/hotel-1.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/hotel-2.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">Tailored Guest Experience</h3>

                  <p>
                    We work closely with hotels to offer customized
                    transportation services for their guests. From scheduled
                    shuttle services to on-demand rides, we provide options that
                    enhance the overall guest experience. Trust us to deliver
                    exceptional service that complements your stay.
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
