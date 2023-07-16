import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function NFTCard({nft}) {
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const navigate = useNavigate()

  function goToNFTInfoPage() {
    navigate('/nftinfo/'+nft.id)
  }
  
>>>>>>> feature/nft-info-page-cont
  console.log(nft.image_link)

  // Define a function to handle the click event
  const handleClick = () => {
    navigate("/nftinfo"); // Navigate to the sign-in page after sign out
  };

  return (
    <Card
      onClick={handleClick} // Add the onClick event here
      className="nft-card"
      style={{ width: "16rem", backgroundColor: "black" }}
    >
      <Card.Img
        variant="top"
        src={nft.image_link}
        onClick={goToNFTInfoPage}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ color: "white", fontSize: "1.2rem" }}>
          {nft.title}
        </Card.Title>
        <Card.Text style={{ color: "white", fontSize: "1rem" }}>
          1 ETH
        </Card.Text>
        <Button
          variant="light"
          style={{ width: "100%", color: "black", fontSize: "0.8rem" }}
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NFTCard;