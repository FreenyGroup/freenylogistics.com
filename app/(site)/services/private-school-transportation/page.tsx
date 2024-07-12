import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Airport Transportation",
  description: "This is Blog details page for Solid Pro",
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
                      src={"/images/blog/school.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Private School Transportation
                </h2>

                <h4 className="mb-5 font-semibold dark:text-white">
                  Reliable Private School Transportation
                </h4>

                <div className="blog-details">
                  <p>
                    Our private school transportation service ensures that
                    students travel safely and comfortably to and from school.
                    We understand the importance of punctuality and reliability,
                    which is why our drivers are trained to provide consistent
                    and timely pick-ups and drop-offs. Parents can rest assured
                    knowing their children are in safe hands.
                  </p>

                  <p>
                    Safety is our top priority. Our vehicles undergo regular
                    maintenance and safety checks to ensure they are in
                    excellent condition. Additionally, all our drivers are
                    thoroughly vetted and trained to handle various
                    transportation needs, ensuring a secure and pleasant journey
                    for every student.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/school-1.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/school-2.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">Tailored to Your Needs</h3>

                  <p>
                    We work closely with schools and parents to develop
                    customized transportation plans. Whether it's a daily route
                    or transportation for special events and extracurricular
                    activities, we offer flexible solutions to meet the unique
                    needs of each student and institution.
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
