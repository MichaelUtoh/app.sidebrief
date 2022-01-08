import React from "react";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";


export const notify = () => toast('Here is your toast.', {
    duration: 4000,
    position: 'top-center',
});