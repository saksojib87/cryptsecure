"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="md:pt-48 sm:pt-28 pt-12" id="portfolio">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-32"
          >
            <Image
              src="/images/portfolio/img-portfolio.png"
              alt="Crypto Portfolio"
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-28 text-18 text-muted mb-4">
              Wallet <span className="text-primary">Troubleshooting</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              Diagnose, fix, and recover your crypto wallet with confidence.
            </h2>
            <p className="text-muted/60 text-18">
              From lost access to corrupted files or stuck transactions, we’ve
              built a simple solution to get you back on track—fast and
              securely.
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className="border-b border-dark_border/10">
                    <td className="py-5">
                      <div className="bg-primary/20 p-4 rounded-full w-fit">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={35}
                          height={35}
                        />
                      </div>
                    </td>
                    <td className="py-5">
                      <h4 className="text-muted sm:text-28 text-22 ml-5">
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
