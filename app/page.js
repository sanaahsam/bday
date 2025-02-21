"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [div1Visible, setDiv1Visible] = useState(true);
  const [div2Visible, setDiv2Visible] = useState(true);
  const [div3Visible, setDiv3Visible] = useState(true);

  return (
    <div className="homecontainer">
      <div className="cardcontainer">
        {div1Visible && (
          <div className="home-card1">
            <div className="homecardcontainer">
              <p className="ml-10 pb-4 pt-3">HI ASAD MOFO</p>
              <img
                className="w-[150px] rounded-3xl"
                src="/img/iconn.png"
                alt="pic"
              />
              <p className="ml-7 pt-5">HBDAYYY BITCH</p>
            </div>
            <button onClick={() => setDiv1Visible(false)} className="btn1">
              <FaArrowRight size={22} />
            </button>
          </div>
        )}

        {div2Visible && (
          <div className="home-card2">
            <img
              src="/img/kirbyhbday.jpeg"
              alt="bdayfoto"
              className="w-[270px] rounded-xl mt-11"
            />
            <button onClick={() => setDiv2Visible(false)} className="btn1">
              <FaArrowRight size={22} />
            </button>
          </div>
        )}
        {div3Visible && (
          <div className="home-card3">
            <img
              src="/img/icon2.png"
              alt="pic"
              className="w-[150px] h-[150px]"
            />
            <p className="w-[250px] font-extrabold pt-6">
              Let's explore and see what we prepared for your useless ass—
              spoiler alert: awfull things
            </p>
            <a
              onClick={() => setDiv3Visible(false)}
              className="btn1"
              href="/lantern"
            >
              <FaArrowRight size={22} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/*





<div style={{ marginTop: "-10px" }} className="lan1"></div>
        <div style={{ marginTop: "50px" }} className="lan2"></div>
import Spline from "@splinetool/react-spline";
<div className="boxcontainer">
        <Spline scene="https://prod.spline.design/EIUudbktmpOoohQf/scene.splinecode" />
      </div>
*/
