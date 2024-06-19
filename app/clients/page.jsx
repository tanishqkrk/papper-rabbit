import BackBar from "@/components/back/BackBar";
import ClientsContent from "@/components/clients/ClientsContent";
import React from "react";

function ClientsPage() {
  const clientsdata = [
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
    {
      companyname: "PaperRabbit",
      domain: "Tech",
      industry: "Advertising",
    },
  ];

  return (
    <div className="flex flex-col relative mt-[52px]">
      <BackBar name="Clients" />
      <div className="w-screen h-full flex flex-col items-center justify-center mt-10">
        <div className="lg:w-[88rem] w-screen grid lg:grid-cols-4 lg:grid-rows-1 mac:w-[77%] mac:grid-cols-4 mac:grid-rows-1 grid-cols-2 grid-rows-2 mac:gap-5">
          {clientsdata.map((item, index) => {
            return (
              <ClientsContent
                key={index}
                companyname={item?.companyname}
                domain={item?.domain}
                industry={item?.industry}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ClientsPage;
