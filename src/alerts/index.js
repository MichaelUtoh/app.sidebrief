import React from "react";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";


export const notify = () => toast('You have logged in succesfully.', {
    duration: 4000,
    position: 'top-center',
    style: {
        background: "#5a5a5a",
        color: "#80deea",
        width: "100%"
    }
});