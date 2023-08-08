"use client";

import { useEffect, useState } from "react";
import useReservation from "../../hooks/useReservation";
import { CircularProgress } from "@mui/material";

const Form = ({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) => {
  const [day, time] = date.split("T");
  const [didBook, setDidBook] = useState(false);
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });
  const { error, loading, createReservation } = useReservation();
  const [disabled, setDisabled] = useState(true);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      time,
      day,
      bookerEmail: inputs.bookerEmail,
      bookerFirstName: inputs.bookerFirstName,
      bookerOccasion: inputs.bookerOccasion,
      bookerPhone: inputs.bookerPhone,
      bookerLastName: inputs.bookerLastName,
      bookerRequest: inputs.bookerRequest,
      setDidBook,
    });
  };

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    }
    setDisabled(true);
  }, [inputs]);

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      {didBook ? (
        <div>
          <h1>You are all booked up</h1>
          <p>Enjoy your reservation</p>
        </div>
      ) : (
        <>
          <input
            className="border rounded p-3 w-80 mb-4"
            placeholder="First Name"
            name="bookerFirstName"
            onChange={handleChangeInput}
            value={inputs.bookerFirstName}
          />
          <input
            className="border rounded p-3 w-80 mb-4"
            placeholder="Last Name"
            name="bookerLastName"
            onChange={handleChangeInput}
            value={inputs.bookerLastName}
          />
          <input
            className="border rounded p-3 w-80 mb-4"
            placeholder="Phone Number"
            name="bookerPhone"
            onChange={handleChangeInput}
            value={inputs.bookerPhone}
          />
          <input
            className="border rounded p-3 w-80 mb-4"
            placeholder="Email"
            name="bookerEmail"
            onChange={handleChangeInput}
            value={inputs.bookerEmail}
          />
          <input
            className="border rounded p-3 w-80 mb-4"
            placeholder="Occasion (optional)"
            name="bookerOccasion"
            onChange={handleChangeInput}
            value={inputs.bookerOccasion}
          />
          <input
            className="border rounded p-3 w-80 mb-4"
            placeholder="Requests (optional)"
            name="bookerRequest"
            onChange={handleChangeInput}
            value={inputs.bookerRequest}
          />
          <button
            disabled={disabled || loading}
            className="bg-red-600 w-full p-3 text-white font-bold rounder disabled:bg-gray-300"
            onClick={handleClick}
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Complete Reservation"
            )}
          </button>
          <p className="text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Message & data rates may apply. You can
            opt out of receiving text messages at any time in your account
            settings or by replying STOP.
          </p>
        </>
      )}
    </div>
  );
};

export default Form;
