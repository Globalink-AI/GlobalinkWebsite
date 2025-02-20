import Image from "next/image";
import GLA from "../../public/Screenshot 2025-02-17 at 5.08.50 PM.png";

export default function AboutUs() {
  return (
    <section id="about" className="container mx-auto px-4 pt-16 md:pt-32">
      <div className="text-center mb-12">
        <h2 className="inline-block bg-green-700 text-white px-4 py-2 font-bold text-lg mb-4 font-mono">
          ABOUT US
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">
          Empowering Supply Chain with
          <span className="text-green-700"> AI Agents</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <p className="md:text-lg leading-relaxed text-justify">
            Globalink AI is an enterprise AI solutions provider dedicated to
            transforming the supply chain and global trade industries. Our
            comprehensive platform streamlines complex global trade compliance
            processes while integrating siloed data and systems, enabling
            businesses to enhance operational efficiency and decision-making. By
            leveraging advanced AI technologies, we empower enterprises to
            navigate regulatory challenges, optimize workflows, and drive
            seamless digital transformation in global trade.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full h-full">
          <Image
            src={GLA}
            alt="Globalink AI"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
