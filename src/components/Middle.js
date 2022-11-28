import React, { useState } from "react";

import "../styles/middle.css";

import Loader from "./Loader";

const Middle = () => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  const [shortedUrls, setShortedUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleShort() {
    const findExist = shortedUrls.find((item) => item.provided === url);

    if (!!findExist) return;

    setLoading(true);

    const data = {
      domain: "bit.ly",
      long_url: url,
    };

    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer ab101a8c4d3d3a9b6fcbb4348282dc1cc268b6e6`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setShortedUrls({
          provided: url,
          shorted: res.link,
        });
      });
  }

  function copyUrl(url) {
    setCopied(true);
    navigator.clipboard.writeText(url);
  }

  let heightContainer;

  if (window.innerWidth > 800) {
    if (loading) {
      heightContainer = `${shortedUrls.length * 95 + 95}px`;
    } else {
      heightContainer = `${shortedUrls.length * 95}px`;
    }
  } else {
    if (loading) {
      heightContainer = `${shortedUrls.length * 180 + 180}px`;
    } else {
      heightContainer = `${shortedUrls.length * 180}px`;
    }
  }

  return (
    <main className="middle">
      <section className="middle__searchBox">
        <input
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            e.code === "Enter" && handleShort();
          }}
          type="text"
          name=""
          placeholder="Shorten a link here..."
          id="searchBar"
        />
        <button type="" onClick={handleShort}>
          Shorten It!
        </button>
      </section>
      <div
        className="middle__searchResult__container"
        style={{
          height: heightContainer,
        }}
      >
        {loading && <Loader />}
        {shortedUrls.length > 0 &&
          shortedUrls.map((item) => {
            return (
              <section className="middle__searchResult" key={item.provided}>
                <div>{item.provided}</div>
                <span>{item.shorted}</span>
                <button
                  onClick={() => {
                    copyUrl(item.shorted);
                  }}
                  style={{
                    backgroundColor:
                      copied !== true ? "hsl(180, 66%, 49%)" : "#3B2F53",
                  }}
                >
                  {copied !== true ? "copy" : "copied!"}
                </button>
              </section>
            );
          })}
      </div>
      <section className="middle__CenteredText">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>
      <section className="middle__boxArea">
        <section className="middle__boxArea__box1">
          <div></div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </section>

        <section className="middle__boxArea__box2">
          <div></div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </section>
        <section className="middle__boxArea__box3">
          <div></div>
          <h3>Fully Customizable</h3>
          <p>
            {" "}
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </section>
        <hr />
      </section>
    </main>
  );
};

export default Middle;
