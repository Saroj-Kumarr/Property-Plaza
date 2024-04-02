import React, { useState } from "react";

const CreateListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div>
        <form>
          <input
            type="text"
            value={title}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-5 items-center">
            <label className="uppercase tracking-widest text-sm">
              <input
                className="p-2"
                type="radio"
                value="sale"
                checked={selectedValue === "sale"}
                onChange={handleRadioChange}
              />
              Sale
            </label>
            <label className="uppercase tracking-widest text-sm">
              <input
                type="radio"
                value="rent"
                checked={selectedValue === "rent"}
                onChange={handleRadioChange}
              />
              Rent
            </label>
          </div>
        </form>
      </div>

      <div></div>

      {/* <h2>Select a Radio Button:</h2>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
        />
        Option 3
      </label>
      <div>Selected Value: {selectedValue}</div> */}
    </div>
  );
};

export default CreateListing;
