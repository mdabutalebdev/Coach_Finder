import React from "react";
import GroupCard from "./shared/groupCard";
import Button from "./shared/button";

const PeerGroup = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h3 className="text-primaryColor font-extrabold text-[48px]">
            Top Peer Group
          </h3>
          <Button className="!px-14 h-[48px]">Browse All</Button>
        </div>
        <p className="text-primaryColor text-base font-medium w-[777px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
        <div className="flex justify-center mt-10">
          <Button className="!px-14 h-[48px]">Browse All</Button>
        </div>
      </div>
    </section>
  );
};

export default PeerGroup;
