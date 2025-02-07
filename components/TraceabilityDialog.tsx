import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDownCircle, FileSearch } from "lucide-react";

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
                      <strong>Creator:</strong> {item.creator} <br />
                      <strong>Creation Location:</strong> {item.creationLocation} <br />
                      <strong>Timestamp:</strong> {new Date(item.timestamp * 1000).toLocaleString()}
                    </>
                  ) : (
                    <>
                      <strong>Location:</strong> {item.location} <br />
                      <strong>Owner:</strong> {item.owner} <br />
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