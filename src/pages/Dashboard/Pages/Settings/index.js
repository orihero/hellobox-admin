import React, { useRef, useState } from "react";
import {
  Botton,
  BottonContainer,
  Image,
  ImgBox,
  ImgContainer,
  InputContainer,
  Inputt,
} from "../Prodocts/Addnew/style";
import { Container } from "./style";
import Img from "../../../../assests/image_2021-11-08_19-42-30.png";
import { requests, url } from "../../../../api/requests";
import { useEffect } from "react";

function SettingsPage() {
  const [commission, setCommission] = useState("");

  let [image, setImage] = useState();
  let _imageInput = useRef();
  let onImageUpload = async (e, index) => {
    if (e.target.files.length > 0) {
      let form = new FormData();
      form.append("files", e.target.files[0]);
      try {
        let res = await requests.uploads.uploadImage(form);
        setImage({
          name: e.target.files[1],
          image_url: `${url}/file-download/${res.data[0]}`,
        });
      } catch (error) {
        alert(error);
      }
    }
  };
  let onUpload = async () => {
    if (!image) {
      alert("Please pick image");
      return;
    }
    try {
      let res = await requests.uploads.updatePresentImage({
        id: 1,
        image_url: image.image_url,
      });
    } catch (error) {
      alert("Could not upload image");
    }
  };

  const effect = async () => {
    try {
      let res = await requests.products.getProfitPercent();
      setCommission(res.data.percent);
    } catch (error) {}
  };

  useEffect(() => {
    effect();
  }, []);

  let onCommissionSave = async () => {
    try {
      let res = await requests.products.updateProfitPercent(
        parseFloat(commission)
      );
      await effect();
    } catch (error) {}
  };
  return (
    <Container>
      <ImgContainer>
        <ImgBox>
          <Image src={!!image ? image.image_url : Img} />
          <input
            ref={_imageInput}
            type={"file"}
            name="image"
            id="image-upload"
            onChange={onImageUpload}
          />
        </ImgBox>
        <BottonContainer>
          <Botton onClick={onUpload}>Save</Botton>
        </BottonContainer>
      </ImgContainer>
      <InputContainer>
        <Inputt
          placeholder="Commission"
          value={commission}
          onChange={(e) => setCommission(e.target.value)}
        />
      </InputContainer>
      <BottonContainer>
        <Botton onClick={onCommissionSave}>Save</Botton>
      </BottonContainer>
    </Container>
  );
}

export default SettingsPage;
