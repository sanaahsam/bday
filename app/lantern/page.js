"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function page() {
  const [div1Visible, setDiv1Visible] = useState(false);
  const [div2Visible, setDiv2Visible] = useState(false);

  const [div3Visible, setDiv3Visible] = useState(false);
  const [div4Visible, setDiv4Visible] = useState(false);
  const [div5Visible, setDiv5Visible] = useState(false);
  const [div6Visible, setDiv6Visible] = useState(false);
  const [div7Visible, setDiv7Visible] = useState(false);
  const [div8Visible, setDiv8Visible] = useState(false);
  const [div9Visible, setDiv9Visible] = useState(false);
  const [div10Visible, setDiv10Visible] = useState(false);
  const [div11Visible, setDiv11Visible] = useState(false);

  return (
    <div className="lanterncontainer">
      <div className="lanterndiv1">
        <div
          style={{ marginTop: "-10px" }}
          className="lan2"
          onClick={() => setDiv1Visible(true)}
        ></div>
        <div
          style={{ marginTop: "-30px" }}
          className="lan2"
          onClick={() => setDiv2Visible(true)}
        ></div>
        <div
          style={{ marginTop: "20px" }}
          className="lan1"
          onClick={() => setDiv3Visible(true)}
        ></div>
        <div
          style={{ marginTop: "-10px" }}
          className="lan2"
          onClick={() => setDiv4Visible(true)}
        ></div>
        <div
          style={{ marginTop: "30px" }}
          className="lan1"
          onClick={() => setDiv5Visible(true)}
        ></div>
      </div>

      <div className="lanterndiv3" style={{ marginTop: "-50px" }}>
        <div
          style={{ marginTop: "20px" }}
          className="lan2"
          onClick={() => setDiv6Visible(true)}
        ></div>
        <div
          style={{ marginTop: "-70px" }}
          className="lan2"
          onClick={() => setDiv7Visible(true)}
        ></div>
        <div
          style={{ marginTop: "10px" }}
          className="lan1"
          onClick={() => setDiv8Visible(true)}
        ></div>
        <div
          style={{ marginTop: "10px" }}
          className="lan2"
          onClick={() => setDiv9Visible(true)}
        ></div>
        <div
          style={{ marginTop: "-30px" }}
          className="lan2"
          onClick={() => setDiv10Visible(true)}
        ></div>
        <div
          style={{ marginTop: "20px" }}
          className="lan1"
          onClick={() => setDiv11Visible(true)}
        ></div>
      </div>
      {div1Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv1Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            Asad I never thought I would have friend like you honestly or any
            good friends which would become part of my family or at least second
            family for sure. Sometime I use think that I had no friends and I
            would never be invite in friend wedding but I guess I am part of
            your guest list maybe even the main bride full homo. You are also
            like my brother I love you for sure
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-SANAN</p>
        </div>
      )}
      {div2Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv2Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            I always the word technical but you are technical cunt but today
            your technical birthboy cunt lol
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-SANAN</p>
        </div>
      )}
      {div3Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv3Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            Its ur birthday but the real gift was u finally playing Roblox 
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">
            -ABDULLAH
          </p>
        </div>
      )}
      {div4Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv4Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            Dada abu, those deep scientific talks and random drama talks are so
            fun. Keep em on and happy birthday bro. Get your back pain checked.
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-DOC</p>
        </div>
      )}
      {div5Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv5Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            Yo ap itne talented kaise ho sakte ho. Saara talent le liya hai
            tumne. Heavyyyyy. Anywayssss biryani khala doun gi mein tumhein aur
            nahi janaze ki nahi hogi dw.
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-DOC</p>
        </div>
      )}
      {div6Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv6Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            durr se dekha to kharbujey ki kutai horahi thi pass jaa ke dekha tha
            asad ki pitai ho rahi thi
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-ALI</p>
        </div>
      )}
      {div7Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv7Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            Asad bhai you are the friend of all time and Quite goated
            in skribbl ngl
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-SHAYAN</p>
        </div>
      )}
      {div8Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv8Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            Asad bhai you are someone who is always ready to help no matter the
            situation, jaisey kai dusra apka sagga bha haii, Wallahi you are
            very unique in a special way and there is no one like you genuinely,
            Allah aapko humesha khush rakhain, and a very heartful and genuine
            happy birthday from me, mai ALLAH ki Kassam aapkey barey mai purey
            paraghraphs likhun liken Sana Baji won't allow that, once again
            Happy Birthday to my virtual Big Brother!!! (and hopefully irl as
            well once we meet In Sha Allah) sorry virtual AND IRL BHI. Happy
            Birthday Asad Day!!!!! ❤❤❤❤💩
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-ESSA</p>
        </div>
      )}
      {div9Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv9Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            I HAPPY THAT I MET U AND WE ARE FRENDS NOW, DONT WANNA SAY BUT U R
            GOD AT EVERYTHING (i said god) U R GOOD WERID GUY AND YOU ARE A
            FUCKING MEAN KNOW-IT ALL BITCH BUT STILL LY AND HBDAY
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">
            -guess who
          </p>
        </div>
      )}
      {div10Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv10Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            Asad you are Tatti
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">-ESSA</p>
        </div>
      )}
      {div11Visible && (
        <div className="message">
          <div
            className="w-[20px] h-[20px] bg-red-500 ml-[95%]"
            onClick={() => setDiv11Visible(false)}
          ></div>
          <p className="font-bold break-words w-[92%] mt-6 ml-3">
            HAPPY BIRTHDAY !!!!
          </p>
          <p className="font-extrabold ml-[50%] mt-3 cursor-pointer">
            -from everyone
          </p>
        </div>
      )}

      <a
        href="/card"
        className="w-[70px] h-[50px] rounded-3xl pt-4 pb-5 pl-6 bg-orange-500 mb-6 absolute top-[78%] left-[80%] border-none"
      >
        <FaArrowRight size={22} />
      </a>
    </div>
  );
}

/*
.lanterndiv2 {
  @apply h-[300px] w-full flex  justify-around  p-0;
}
*/

export default page;
