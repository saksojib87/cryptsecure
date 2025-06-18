import { upgradeData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Upgrade = () => {
  return (
    <section className="md:py-40 py-20" id="upgrade">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
          <div>
            <p className="text-primary sm:text-28 text-18 mb-3">Upgrade</p>
            <h2 className="text-white sm:text-40 text-30 font-medium mb-5">
              Enhance Your Wallet Security & Performance
            </h2>
            <p className="text-muted/60 text-18 mb-7">
              Improve your wallet&apos;s reliability, restore lost
              functionality, and future-proof your crypto access with our
              advanced troubleshooting suite.
            </p>
            <div className="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-white group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="text-18 text-muted/60">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="/images/upgrade/img-upgrade.png"
              alt="Troubleshooting Upgrade Illustration"
              width={625}
              height={580}
              className="-mr-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
