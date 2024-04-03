import React, { useState } from "react";

const CreateListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [amenities, setAmenities] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="min-h-screen pt-24 flex  justify-center">
      <div className="w-8/12 mt-10 custom-shadow rounded-md p-2">
        <h3 className="text-center font-bold  my-4 uppercase tracking-widest">
          Enter your property details
        </h3>
        <div className="flex gap-5">
          <div className="w-6/12 p-5">
            <form className="flex flex-col gap-5">
              <input
                className="border tracking-widest border-[#1B2A80] px-2 py-[6px] rounded-md focus:outline-none w-full"
                placeholder="Enter title"
                type="text"
                value={title}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="border tracking-widest border-[#1B2A80] px-2 py-[6px] rounded-md focus:outline-none w-full"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex gap-5  items-center">
                <span className="font-bold text-sm tracking-widest uppercase">
                  Type :{" "}
                </span>
                <div className="flex gap-2">
                  <input
                    className=""
                    type="checkbox"
                    value="sale"
                    checked={selectedValue === "sale"}
                    onChange={handleRadioChange}
                  />
                  <label className="tracking-widest uppercase">Sale</label>
                </div>

                <div className="flex gap-2">
                  <input
                    className=""
                    type="checkbox"
                    value="rent"
                    checked={selectedValue === "rent"}
                    onChange={handleRadioChange}
                  />
                  <label className="tracking-widest uppercase">Rent</label>
                </div>
              </div>
              <div className="flex gap-5    items-center">
                <span className="font-bold text-sm tracking-widest uppercase">
                  amenities :{" "}
                </span>
                <div className="flex gap-2">
                  <input
                    className=""
                    type="checkbox"
                    value="parking"
                    onClick={(e) => setAmenities(e.target.value)}
                  />
                  <label className="tracking-widest uppercase">
                    Parking spot
                  </label>
                </div>

                <div className="flex gap-2">
                  <input
                    className=""
                    type="checkbox"
                    value="furnished"
                    onClick={(e) => setAmenities(e.target.value)}
                  />
                  <label className="tracking-widest uppercase">furnished</label>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-2 items-center">
                  <span className="tracking-widest uppercase text-sm font-bold">
                    Bedrooms :
                  </span>
                  <input
                    className="border text-center py-1 rounded-md border-[#1B2A80] focus:outline-none "
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    type="number"
                    min="1"
                    max="10"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <span className="tracking-widest uppercase text-sm font-bold">
                    Bedrooms :
                  </span>
                  <input
                    className="border text-center py-1 rounded-md border-[#1B2A80] focus:outline-none "
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    type="number"
                    min="1"
                    max="10"
                  />
                </div>
              </div>
              <div>
                <span className="font-bold text-sm tracking-widest uppercase">
                  price :{" "}
                </span>
                <input
                  className="border tracking-widest border-[#1B2A80] px-2 py-1 rounded-md focus:outline-none w-40"
                  placeholder="Enter price"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="w-6/12 flex flex-col gap-3">
            <h3 className="tracking-widest  font-bold text-sm text-center">
              Upload your property images
            </h3>
            <div className="flex gap-2 justify-center">
              <input
                type="file"
                className="border p-2 py-1 rounded-md "
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
              <button className="bg-[#1B2A80] px-5 py-1 custom-shadow rounded-md text-white font-semibold tracking-widest uppercase ">
                upload
              </button>
            </div>
            <div className="h-72 my-2 overflow-x-hidden image-container">
              {Array(6)
                .fill(null)
                .map((_, index) => {
                  return (
                    <div className="flex mt-3 mx-2 rounded-sm  items-center justify-between custom-shadow">
                      <img
                        className="h-20 w-40 rounded-l-sm"
                        src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg"
                        alt="image"
                      />
                      <button className="bg-red-600 text-sm mr-2 px-5 py-1 custom-shadow rounded-md text-white font-semibold tracking-widest uppercase">
                        delete
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <button className="bg-[#1B2A80] px-5 py-2 custom-shadow rounded-md text-white font-semibold tracking-widest uppercase w-full ">
          create listing
        </button>
      </div>
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
