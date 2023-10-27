import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import ParserType from "./stepper/parsertype";
import ParsingTemplate from "./stepper/parsingtemplate";
import Create from "./stepper/create";
const StepperBox = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  console.log(activeStep);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const components=[<ParserType />,<ParsingTemplate />, <Create />]

  return (
    <div className="w-full md:py-8 md:px-4  gap-4">
         <h4 className="font-bold text-2xl m-4">Create a mailbox</h4>
        <p className="text-grey-color m-4">A mailbox is where you will forward your documents for parsing. To keep things organized, we recommend creating a dedicated mailbox for each type of email or document (such as invoices, contracts, Amazon orders etc) Learn more about parser types</p>
      <Stepper
        className="text-blue-800"
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <div className="flex gap-2 md:scale-100 scale-75">
            <p
              className={`${
                activeStep === 0 ? "bg-blue-900" : "text-grey-color"
              } w-6 h-6  rounded-full flex justify-center`}
            >
              1
            </p>
            <p     className={`${
                activeStep === 0 ? "text-blue-900" : "text-grey-color"
              }`}>
            Parser type
            </p>
          </div>
        </Step>
        <Step>
        <div className="flex gap-2 md:scale-100 scale-75">
            <p
              className={`${
                activeStep === 1 ? "bg-blue-900" : "text-grey-color"
              } w-6 h-6 rounded-full flex justify-center`}
            >
              2
            </p>
            <p     className={`${
                activeStep === 1 ? "text-blue-900" : "text-grey-color"
              }`}>
            Template
            </p>
          </div>
        </Step>
        <Step>
        <div className="flex gap-2 md:scale-100 scale-75">
            <p
              className={`${
                activeStep === 2 ? "bg-blue-900" : "text-grey-color"
              } w-6 h-6 rounded-full flex justify-center`}
            >
              3
            </p>
            <p     className={`${
                activeStep === 2 ? "text-blue-900" : "text-grey-color"
              }`}>
            Mailbox Settings
            </p>
          </div>
        </Step>
      </Stepper>
      <div className="mt-16 flex flex-col items-center gap-6 w-full md:scale-100 scale-75">
       
        {
            components[activeStep]
        }
        
        <Button
          className="bg-blue-color text-white w-[150px]"
          onClick={handleNext}
          disabled={isLastStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepperBox;
