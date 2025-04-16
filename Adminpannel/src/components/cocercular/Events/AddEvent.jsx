import React, { useContext, useState } from "react";
import { CocirculerContext } from "../../../context/cocirculer";
import Editor from "../../App/MarkdownEditor/Editor";
import Preview from "../../App/MarkdownEditor/preview";

const AddEvent = () => {
  const { EventHandler } = useContext(CocirculerContext);

  const [eventName, setEventName] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [startdate, setStartdate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [isPrize, setIsPrize] = useState(false);
  const [PrizeHeading, setPrizeHeading] = useState("");
  const [PrizePara, setPrizePara] = useState("");
  const [IIIrdPrize, setIIIrdPrize] = useState("");
  const [IIndPrize, setIIndPrize] = useState("");
  const [IstPrize, setIstPrize] = useState("");
  const [isCertification, setIsCertification] = useState(false);
  const [desp, setDesp] = useState("");

  const handleonsubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", thumbnail);
    formdata.append("eventName", eventName);
    formdata.append("startdate", startdate);
    formdata.append("endDate", endDate);
    formdata.append("registrationOpen", registrationOpen);
    formdata.append("desp", desp);
    formdata.append("isPrize", isPrize);
    formdata.append("PrizeHeading", PrizeHeading);
    formdata.append("PrizePara", PrizePara);
    formdata.append("IIIrdPrize", IIIrdPrize);
    formdata.append("IIndPrize", IIndPrize);
    formdata.append("IstPrize", IstPrize);
    formdata.append("isCertification", isCertification);
    EventHandler(formdata);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Home Event</h2>
      <form onSubmit={handleonsubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Event Name</label>
          <input
            onChange={(e) => setEventName(e.target.value)}
            value={eventName}
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="text"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Upload Thumbnail</label>
          <input
            onChange={(e) => setThumbnail(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="file"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Start Date</label>
            <input
              onChange={(e) => setStartdate(e.target.value)}
              value={startdate}
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="date"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">End Date</label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="date"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={isPrize} onChange={(e) => setIsPrize(e.target.checked)} />
            <span>Prize</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={registrationOpen} onChange={(e) => setRegistrationOpen(e.target.checked)} />
            <span>Registration Open</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={isCertification} onChange={(e) => setIsCertification(e.target.checked)} />
            <span>Certification</span>
          </label>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Event Description</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
            <Editor markdown={desp} setMarkdown={setDesp} />
            <Preview markdown={desp} />
          </div>
        </div>

        {isPrize && (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Prize Heading</label>
              <input
                value={PrizeHeading}
                onChange={(e) => setPrizeHeading(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
              />
            </div>

            
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Prize Criteria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
                <Editor markdown={PrizePara} setMarkdown={setPrizePara} />
                <Preview markdown={PrizePara} />
              </div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label>First Prize</label>
                <input
                  value={IstPrize}
                  onChange={(e) => setIstPrize(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  type="text"
                />
              </div>
              <div>
                <label>Second Prize</label>
                <input
                  value={IIndPrize}
                  onChange={(e) => setIIndPrize(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  type="text"
                />
              </div>
              <div>
                <label>Third Prize</label>
                <input
                  value={IIIrdPrize}
                  onChange={(e) => setIIIrdPrize(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  type="text"
                />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
