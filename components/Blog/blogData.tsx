import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/blog/shuttle.png",
    title: "Shuttle Service",
    metadata:
      "Our shuttle service is designed to provide reliable and efficient transportation for various needs across Pennsylvania. Whether you're commuting to work, heading to a local event, or simply need a ride within the city, our professional drivers and well-maintained fleet ensure a comfortable and timely journey. We prioritize your convenience and aim to make your travel experience as smooth as possible.",
    slug: "/services/shuttle-service",
  },
  {
    _id: 2,
    mainImage: "/images/blog/school.png",
    title: "Private School Transportation",
    metadata:
      "Our private school transportation service ensures that students travel safely and comfortably to and from school. We understand the importance of punctuality and reliability, which is why our drivers are trained to provide consistent and timely pick-ups and drop-offs. Parents can rest assured knowing their children are in safe hands.",
    slug: "/services/private-school-transportation",
  },
  {
    _id: 3,
    mainImage: "/images/blog/worship.png",
    title: "House Of Worship Transportation",
    metadata:
      "Our place of worship transportation service is dedicated to providing safe and reliable rides for your congregation. We understand the importance of community and spiritual gatherings, and our goal is to make transportation to these events as convenient as possible. Our professional drivers are courteous and punctual, ensuring you arrive at your destination on time.",
    slug: "/services/house-of-worship-transportation",
  },
  {
    _id: 4,
    mainImage: "/images/blog/airport.png",
    title: "Airport Transportation",
    metadata:
      "Traveling can be stressful, but our airport transportation service is here to make your journey smoother. We offer reliable and punctual transfers to and from all major airports in Pennsylvania. Our professional drivers are knowledgeable about the best routes and traffic conditions, ensuring you reach your destination on time.",
    slug: "/services/airport-transportation",
  },
  {
    _id: 5,
    mainImage: "/images/blog/hotel.png",
    title: "Hotel Transportation",
    metadata:
      "Our hotel transportation service offers guests a smooth and comfortable ride to and from their accommodations. Whether you're arriving from the airport, attending a local event, or exploring the city, we ensure a hassle-free travel experience. Our professional drivers are dedicated to providing prompt and courteous service.",
    slug: "/services/hotel-transportation",
  },
];

export default BlogData;
