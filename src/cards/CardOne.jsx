import { LuMessagesSquare } from "react-icons/lu";

const CardOne = () => {
  const data = [
    { title: "Dedicated Support", icon: <LuMessagesSquare /> },
    { title: "24/7 Availability", icon: <LuMessagesSquare /> },
    { title: "Expert Consultation", icon: <LuMessagesSquare /> },
    { title: "Custom Solutions", icon: <LuMessagesSquare /> },
    { title: "Secure Infrastructure", icon: <LuMessagesSquare /> },
    { title: "Advanced Analytics", icon: <LuMessagesSquare /> },
    { title: "Scalable Solutions", icon: <LuMessagesSquare /> },
    { title: "Efficient Deployment", icon: <LuMessagesSquare /> },
    { title: "Continuous Monitoring", icon: <LuMessagesSquare /> },
    { title: "Regular Updates", icon: <LuMessagesSquare /> },
    { title: "Data Security", icon: <LuMessagesSquare /> },
    { title: "Performance Optimization", icon: <LuMessagesSquare /> },
    { title: "User Experience Enhancement", icon: <LuMessagesSquare /> },
    { title: "Cost Optimization", icon: <LuMessagesSquare /> },
    { title: "Automation Solutions", icon: <LuMessagesSquare /> },
    { title: "Data Analysis", icon: <LuMessagesSquare /> },
    { title: "Technical Support", icon: <LuMessagesSquare /> },
    { title: "System Integration", icon: <LuMessagesSquare /> },
  ];

  return (
    <div className="relative w-full md:max-w-[584px] h-[531px] overflow-hidden shadow-lg rounded-3xl">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent bg-no-repeat bg-right"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900/20 to-transparent bg-no-repeat bg-left"></div>
      </div>
      <div className="relative p-14">
        <h1 className="text-5xl font-bold mb-12 text-white">
          Focus on Your Business, Leave the Rest to Us
        </h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center  shadow-md rounded-full h-10 text-xs md:text-md bg-indigo-900 text-white p-4"
          >
            {item.icon}
            <span className="ml-2 ">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOne;
