import { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDownCircle, FileSearch } from "lucide-react";
import axios from "axios";

export type TraceData = {
  identification: string;
  creationTimestamp: number;
  creator: string;
  creationLocation: string;
  location: string;
  owner: string;
  timestamp: number;
  data: string;
};

type TraceabilityDialogProps = {
  showTraceability: boolean;
  setShowTraceability: (open: boolean) => void;
  traceabilityData: TraceData[];
};

const TraceabilityDialog: React.FC<TraceabilityDialogProps> = ({
  showTraceability,
  setShowTraceability,
  traceabilityData,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [names, setNames] = useState<{ [key: string]: string }>({});
  const [locations, setLocations] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      const namePromises = traceabilityData.map(item => 
        axios.get(`http://localhost:4001/api/v1/business_actor/${item.creator}`)
          .then(response => ({ id: item.creator, name: response.data.businessActorName }))
      );

      const locationPromises = traceabilityData.map(item => 
        axios.get(`http://localhost:4001/api/v1/agence/${item.creationLocation}`)
          .then(response => ({ id: item.creationLocation, location: response.data.location }))
      );

      const namesArray = await Promise.all(namePromises);
      const locationsArray = await Promise.all(locationPromises);

      setNames(Object.fromEntries(namesArray.map(({ id, name }) => [id, name])));
      setLocations(Object.fromEntries(locationsArray.map(({ id, location }) => [id, location])));
    };

    fetchData();
  }, [traceabilityData]);

  return (
    <Dialog open={showTraceability} onOpenChange={setShowTraceability}>
      <DialogTrigger asChild>
        <button className="absolute top-2 left-2 bg-violet-900 hover:bg-purple-950 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-50">
          <FileSearch className="h-4 w-4 text-white-50" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-2xl ">
        <DialogHeader>
          <DialogTitle className="font-satoshi">Product Traceability</DialogTitle>
          <p className="text-gray-700 pt-2 font-inter text-paragraph-sm">Complete traceability history</p>
        </DialogHeader>
        <div className="mt-4 font-inter space-y-4">
          {/* Always visible sections */}
          <div>
            <ul className="text-gray-700 space-y-1">
              {traceabilityData.map((item, index) => (
                <li key={item.identification} className="border-b py-2">
                  {index === 0 ? (
                    <>
                      <strong>Creator:</strong> {names[item.creator] || 'Loading...'} <br />
                      <strong>Creation Location:</strong> {locations[item.creationLocation] || 'Loading...'} <br />
                      <strong>Timestamp:</strong> {new Date(item.timestamp * 1000).toLocaleString()}
                    </>
                  ) : (
                    <>
                      <strong>Location:</strong> {locations[item.location] || 'Loading...'} <br />
                      <strong>Owner:</strong> {names[item.owner] || 'Loading...'} <br />
                      <strong>Timestamp:</strong> {new Date(item.timestamp * 1000).toLocaleString()}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* See More button */}
          <button
            className="flex items-center mt-4 text-accent-600 bg-white-50 font-semibold hover:text-accent-700 transition duration-300"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More"}
            <ChevronDownCircle className={`ml-2 h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TraceabilityDialog;