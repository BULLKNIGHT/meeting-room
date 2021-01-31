import React from "react";
import Button from "./Button";


const Slot = (props) => {
    const handleTime = (value) => {
        props.handleSlot(value);
        //console.log(value);
    }
  return (
    <>
      <figure className="text-center">
        <h5>Please select your preffed slot</h5>
      </figure>

      <div className="row row-cols-2 row-cols-lg-6 g-4 g-lg-3">
        <Button time="10.00 AM" handleTime={handleTime}/>
        <Button time="10.30 AM" handleTime={handleTime} />
        <Button time="11.00 AM" handleTime={handleTime} />
        <Button time="11.30 AM" handleTime={handleTime} />
        <Button time="12.00 AM" handleTime={handleTime} />
        <Button time="12.30 AM" handleTime={handleTime} />
        <Button time="01.00 PM" handleTime={handleTime} />
        <Button time="01.30 PM" handleTime={handleTime} />
        <Button time="02.00 PM" handleTime={handleTime} />
        <Button time="02.30 PM" handleTime={handleTime} />
        <Button time="03.00 PM" handleTime={handleTime} />
        <Button time="03.30 PM" handleTime={handleTime} />
        <Button time="04.00 PM" handleTime={handleTime} />
        <Button time="04.30 PM" handleTime={handleTime} />
        <Button time="05.00 PM" handleTime={handleTime} />
        <Button time="05.30 PM" handleTime={handleTime} />
        <Button time="06.00 PM" handleTime={handleTime} />
        <Button time="06.30 PM" handleTime={handleTime} />
      </div>
    </>
  );
};

export default Slot;
