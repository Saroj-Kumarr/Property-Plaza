import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { uploadImages } from "../../services/upload.actions";
import { fetchListing, updateListing } from "../../services/listing.actions";

const UpdateListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");
  const [furnished, setFurnished] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [price, setPrice] = useState("1000");
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLS] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const { currentUser } = useSelector((store) => store.user);

  const handleRadioChange = (event) => {
    setType(event.target.value);
  };

  const handleImageDelete = (indexValue) => {
    const updatedImageURLS = [...imageURLS];
    updatedImageURLS.splice(indexValue, 1);
    setImageURLS(updatedImageURLS);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchListing(id);
      console.log(data);
      setTitle(data.listing.title);
      setDescription(data.listing.description);
      setType(data.listing.type);
      setParking(data.listing.parking);
      setFurnished(data.listing.furnished);
      setLocation(data.listing.location);
      setBedrooms(data.listing.bedrooms);
      setBathrooms(data.listing.bathrooms);
      setPrice(data.listing.price);
      setImageURLS(data.listing.imageURLS);
    };
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen pt-24 flex justify-center">
      <div className="w-8/12 mt-10 custom-shadow rounded-md p-2">
        <h3 className="text-center font-bold  my-4 uppercase tracking-widest">
          Enter your property details
        </h3>
        <div className="flex gap-5">
          <div className="w-6/12 p-5">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <input
                className="border tracking-widest border-[#1B2A80] px-2 py-[6px] rounded-md focus:outline-none w-full"
                placeholder="Enter title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                type="text"
                className="border tracking-widest border-[#1B2A80] px-2 py-[6px] rounded-md focus:outline-none w-full"
                placeholder="Enter description"
                value={description}
                rows="2"
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                className="border tracking-widest border-[#1B2A80] px-2 py-[6px] rounded-md focus:outline-none w-full"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                    checked={type === "sale"}
                    onChange={handleRadioChange}
                  />
                  <label className="tracking-widest uppercase">Sale</label>
                </div>

                <div className="flex gap-2">
                  <input
                    className=""
                    type="checkbox"
                    value="rent"
                    checked={type === "rent"}
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
                    onClick={(e) => setParking(e.target.value)}
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
                    onClick={(e) => setFurnished(e.target.value)}
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
                    Bathrooms :
                  </span>
                  <input
                    className="border text-center py-1 rounded-md border-[#1B2A80] focus:outline-none "
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
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
                className="border p-2 py-1 rounded-md "
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <button
                onClick={uploadImages}
                className="bg-[#1B2A80] px-5 py-1 custom-shadow rounded-md text-white font-semibold tracking-widest uppercase "
              >
                upload
              </button>
            </div>
            <div className="h-72 my-2 overflow-x-hidden image-container">
              {imageURLS &&
                imageURLS.map((url, index) => {
                  return (
                    <div className="flex mt-3 mx-2 rounded-sm  items-center justify-between custom-shadow">
                      <img
                        className="h-full w-40 rounded-l-sm"
                        src={url}
                        alt="image"
                      />
                      <button
                        onClick={() => {
                          handleImageDelete(index);
                        }}
                        className="bg-red-600 text-sm mr-2 px-5 py-1 custom-shadow rounded-md text-white font-semibold tracking-widest uppercase"
                      >
                        delete
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <button
          onClick={async () => {
            const response = await updateListing(id, {
              title,
              description,
              type,
              parking,
              furnished,
              location,
              bedrooms,
              bathrooms,
              price,
              imageURLS,
            });

            if (response.success) {
              toast.success("Listing created successfully.");
              navigate("/listings");
            }
          }}
          className="bg-[#1B2A80] px-5 py-2 custom-shadow rounded-md text-white font-semibold tracking-widest uppercase w-full "
        >
          update listing
        </button>
      </div>
    </div>
  );
};

export default UpdateListing;
