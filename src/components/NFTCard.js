import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NFTCard({nft}) {
  console.log(nft.image_link)
  return (
    <Card
      className="nft-card"
      style={{ width: "16rem", backgroundColor: "black" }}
    >
      <Card.Img
        variant="top"
        src={nft.image_link}
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
