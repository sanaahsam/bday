import React from "react";

function page() {
  return (
    <div className="cardcontainer">
      <div class="card">
        <div class="outside">
          <div class="front">
            <p>Happy Birthday</p>
            <div class="cake">
              <div class="top-layer"></div>
              <div class="middle-layer"></div>
              <div class="bottom-layer"></div>
              <div class="candle"></div>
            </div>
          </div>
          <div class="back"></div>
        </div>
        <div class="inside">
          <p>HAPPY BDAY - BTICH U R NOT 21 ANYMORE WOMP WOMP</p>
          <div className="w-[200px] h-[200px] bg-[url('/img/asad.jpg')] bg-cover rounded-xl mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
