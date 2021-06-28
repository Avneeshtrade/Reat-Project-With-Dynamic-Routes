import React from "react";
import { Button, Card, Image, Row } from "antd";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#383838",
        //backgroundColor:"#00001a"
      }}
    >
      <Card
        style={{
          width: "95%",
          height: "75%",
          marginTop: "5%",
          backgroundColor: "#D3D3D3",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Image
              src="https://media.istockphoto.com/vectors/vector-illustration-404-page-design-vector-id937239796?b=1&k=6&m=937239796&s=612x612&w=0&h=OWZxaKtFgkG3XUZO3wxNlBQ_ZwTeY4VfWJbJ-kIIJg4="
              style={{ width: "100%", marginTop: "3%" }}
              preview={false}
            />
          </Row>
          <Row
            style={{
              justifyContent: "center",
              marginTop: "3%",
              //color: "white",
              alignItems: "center",
            }}
          >
            <div>
              <h2>
                <b>The Page You Are Looking For Not Found!</b>
              </h2>
              <br />
              <Button
                type="primary"
                size="large"
                style={{ marginLeft: "150px" }}
                onClick={() => history.push("/controlroom/home")}
              >
                Go Home
              </Button>
            </div>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default PageNotFound;
