import React, { useState, useEffect } from "react";
import axios from "axios";
import NFTCard from "./NFTCard";
import "../styles/NFTCarousel.css";

function NFTCarousel() {
  const BACKEND_URL = "https://nft-mint-api-824f9dc02cba.herokuapp.com/";
  const route = "NFT/";

  const [cards, setCards] = useState([]); // Initialize the cards state as an empty array

  // Fetch the NFT data when the component mounts
  useEffect(() => {
    // Define the function that fetches the data
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(BACKEND_URL + route);

        // Take the 10 most recent NFTs. This assumes that your API returns the NFTs
        // in chronological order. If not, you might have to sort them by date here.
        const recentNFTs = response.data.slice(0, 10);

        setCards(recentNFTs); // Update the state with the fetched NFTs
      } catch (error) {
        console.error("Failed to fetch NFTs", error);
      }
    };

    fetchData(); // Call the function
  }, []); // An empty dependency array ensures the data is fetched only once when the component mounts

  return (
    <div className="nft-carousel m-6 bg-gradient-to-r from-slate-900 to-purple">
      {cards.map((nft, i) => (
        // Pass the NFT data as a prop to the NFTCard component
        <NFTCard key={i} nft={nft} nftId={nft.id} />
      ))}
    </div>
  );
}

export default NFTCarousel;
