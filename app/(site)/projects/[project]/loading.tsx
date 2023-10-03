import Image from "next/image";
import Loader from "../../icons/loader.gif";

export default function Loading() {
    return (
      <div className="max-w-3xl mx-auto lg:px-0 px-8">
        <Image src={Loader} fill alt="Loader animation" />
      </div>
    );
  }