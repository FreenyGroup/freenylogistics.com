import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Place of Worship Transportation",
  description:
    "This is the Place of Worship transportation page for Freeny Logistics",
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
                      src={"/images/blog/worship.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Place Of Worship Transportation
                </h2>

                <h4 className="mb-5 font-semibold dark:text-white">
                  Seamless Place of Worship Transportation
                </h4>

                <div className="blog-details">
                  <p>
                    Our place of worship transportation service is dedicated to
                    providing safe and reliable rides for your congregation. We
                    understand the importance of community and spiritual
                    gatherings, and our goal is to make transportation to these
                    events as convenient as possible. Our professional drivers
                    are courteous and punctual, ensuring you arrive at your
                    destination on time.
                  </p>

                  <p>
                    With our well-maintained vehicles and flexible scheduling,
                    we cater to groups of all sizes. Whether it's for regular
                    services, special events, or retreats, we offer
                    transportation solutions that meet your needs, allowing you
                    to focus on your spiritual journey.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/church-1.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/church-2.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">Community-Focused Service</h3>

                  <p>
                    We pride ourselves on being a part of the community. Our
                    services are designed to support the transportation needs of
                    local congregations, providing a dependable and stress-free
                    travel experience. Let us handle the logistics so you can
                    concentrate on what matters most.
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
