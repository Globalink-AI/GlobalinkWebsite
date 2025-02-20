const TimelineRow = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black grid grid-cols-2 lg:grid-cols-1 lg:grid-row-2 lg:flex-[1.25]">
        <div className="p-6 bg-gray-300">
          <h3 className="font-bold">
            Exec.
            <br />
            Briefing
          </h3>
        </div>
        <div className="p-6 flex-0">{"2 Hours"}</div>
      </div>
      <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black grid grid-cols-2 lg:grid-cols-1 lg:grid-row-2 lg:flex-[2]">
        <div className="p-6 bg-gray-200">
          <h3 className="font-bold">
            Technology
            <br />
            Assessment
          </h3>
        </div>
        <div className="p-6 flex-0">{"2-3 Days"}</div>
      </div>
      <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black grid grid-cols-2 lg:grid-cols-1 lg:grid-row-2 lg:flex-[4]">
        <div className="p-6 bg-gray-100">
          <h3 className="font-bold">
            Production
            <br />
            Trial
          </h3>
        </div>
        <div className="p-6">{"8-12 Weeks"}</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-row-2 lg:flex-[6]">
        <div className="p-6 bg-gray-50">
          <h3 className="font-bold">
            AI Application
            <br />
            Deployment in Production
          </h3>
        </div>
        <div className="p-6">{"3-6 Months"}</div>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <section className="px-4 mx-[3rem]">
      <div className="text-center mb-12">
        <h2 className="inline-block bg-green-700 text-white px-4 py-2 font-bold text-lg mb-4 font-mono">
          TIMELINE
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">
          Proven results in weeks, not years
        </h3>
      </div>

      <TimelineRow />
    </section>
  );
}
