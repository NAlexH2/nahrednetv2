import { NRNButton } from "components/ui/nrnButtons";
import AnimateTx from "components/utils/animateTx";
import React from "react";

export const Contact = () => {
  return (
    <AnimateTx>
      <form action="https://submit-form.com/o5UvuVA5">
        <div className="text-black">
          <div className="flex flex-wrap justify-center mt-5 mx-[9px]">
            <div className="mx-2">
              <input
                className="pl-3 pr-3 py-3 rounded-lg text-xl outline-none mt-5"
                placeholder="Full Name"
                type="text"
                name="name"
              />
            </div>
            <div className="mx-2 mt-5">
              <input
                className="pl-3 pr-3 py-3 rounded-lg text-xl outline-none"
                placeholder="Email Address"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex justify-center mx-4">
            <textarea
              className="mt-5 w-[600px] rounded-lg p-3 outline-none"
              id=""
              rows={10}
              name="message"
              placeholder="What would you like to say?"
            />
          </div>
        </div>
        <span className="flex justify-center">
          <div className="mr-5 mt-5">
            <NRNButton
              type="submit"
              className=" text-black bg-[var(--honey)] rounded-lg border-solid
              border-2 border-black transition ease-in-out duration-300
              hover:bg-green-700 hover:text-white "
            >
              <div className="py-1 px-3">Submit</div>
            </NRNButton>
          </div>
          <div className="ml-5 mt-5">
            <NRNButton
              type="reset"
              className="text-[var(--honey)] bg-black rounded-lg border-solid 
              border-2 border-[var(--honey)] transition ease-in-out duration-300
               hover:bg-red-600 hover:text-black"
            >
              <div className="py-1 px-3">Reset</div>
            </NRNButton>
          </div>
        </span>
      </form>
    </AnimateTx>
  );
};

export default Contact;
