import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../../../../components/navigation/Dropdown";
import {
  Container,
  NewsBox,
  ImgBox,
  ImgContainer,
  ButtonContainer,
  Img,
  Button,
  TextareBox,
  Textarea,
  Botton,
  BottonBox,
  ContainerNew,
  // Select,
  DropDownSlecet,
  ImgBoxx,
  // IconSelect,
} from "./style";
import img from "../../../../assests/6595158_preview1.png";
import { requests, url } from "../../../../api/requests";
function NewsPage() {
  const [state, setState] = useState({});
  const fileRef = useRef(null);

  let effect = async () => {
    let partnerRes = await requests.partners.getPartners();
    setState({ ...state, partners: partnerRes.data });
  };

  useEffect(() => {
    effect();
  }, []);

  let getProducts = async () => {
    if (state.selectedPartnerIndex) {
      let productRes = await requests.products.getProducts(
        state.partners[state.selectedPartnerIndex].id
      );
      setState({ ...state, products: productRes.data });
    }
  };

  useEffect(() => {
    getProducts();
  }, [state.selectedPartnerIndex]);

  let onImageChange = async (e) => {
    try {
      let form = new FormData();
      form.append("files", e.target.files[0]);
      let res = await requests.uploads.uploadImage(form);
      setState({
        ...state,
        [e.target.name]: `${url}/file-download/${res.data[0]}`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  let onChangeText = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let onChangeSelect = (e) => {
    setState({ ...state, [e.name]: e.value });
  };

  let onUpload = () => {
    fileRef.current.click();
  };

  let onReset = () => {
    setState({ ...state, image_url: null });
  };

  let onSend = async () => {
    console.log(state);
    let { image_url, description, selectedPartnerIndex } = state;
    let res = await requests.news.createAndSend({
      image_url,
      description,
      partner_id: state.partners[state.selectedPartnerIndex].id,
    });
  };

  return (
    <Container>
      <ContainerNew>
        <NewsBox>
          <ImgBoxx>
            <ImgContainer>
              <Img src={state.image_url ? state.image_url : img} />
              <input
                type={"file"}
                ref={fileRef}
                name="image_url"
                onChange={onImageChange}
                style={{
                  display: "none",
                }}
              />
            </ImgContainer>
            <ButtonContainer>
              <Button onClick={onReset}>Reset</Button>
              <Button onClick={onUpload}>Upload</Button>
            </ButtonContainer>
          </ImgBoxx>
          <ImgBox>
            <TextareBox>
              <Textarea onChange={onChangeText} name="description"></Textarea>
            </TextareBox>
            <BottonBox>
              <Dropdown
                data={state.partners?.map((e) => e.name)}
                selected={state.selectedPartnerIndex}
                setSelected={onChangeSelect}
                name="selectedPartnerIndex"
              />
              <Dropdown
                placeholder={"Select Partner first"}
                selected={state.selectedProductIndex}
                setSelected={onChangeSelect}
                name="selectedProductIndex"
              />
              <Botton onClick={onSend}>Send </Botton>
            </BottonBox>
          </ImgBox>
        </NewsBox>
      </ContainerNew>
    </Container>
  );
}

export default NewsPage;
