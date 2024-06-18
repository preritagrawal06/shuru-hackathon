import Button from "@/ui/Button";
import Input from "@/ui/Input";
import linkIcon from "/link.svg";
import { useState } from "react";
type optionsType = "Nutritionist" | "Fitness coach" | "Counsellor";
const Configuration = () => {
  const options: optionsType[] = [
    "Nutritionist",
    "Fitness coach",
    "Counsellor",
  ];
  const [selected, setSelected] = useState<optionsType>("Nutritionist");
  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="flex flex-col items-center gap-7 p-2">
        <img src="/configImage.png" alt="aiAvatar" className="max-w-20" />
        <div className="text-2xl font-bold">Create an personalized agent</div>
        <div className="text-md font-normal">
          Adjust the settings below as per your requirement
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">Select Persona</p>
          <div className="flex justify-between gap-5 rounded-full border-4 border-gray-200 p-2">
            {options.map((option) => {
              return (
                <div
                  onClick={() => setSelected(option)}
                  className={`rounded-full p-2 font-semibold transition-all duration-300 hover:bg-theme-500 hover:text-white ${selected === option ? "bg-theme-500 text-white" : "text-theme-500"}`}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full space-y-1">
          <p className="text-sm font-medium">Format response</p>
          <Input
            placeholder="Formal phrases"
            className="rounded-full border-4 border-gray-200 p-3 px-4"
          />
        </div>
        <Button className="w-max p-2 px-3">
          Submit <img src={linkIcon} alt="" className="w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Configuration;
