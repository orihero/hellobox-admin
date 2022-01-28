import React, { useEffect, useRef, useState } from "react";
import { requests, url } from "../../../../api/requests";
import img from "../../../../assests/6595158_preview1.png";
import Dropdown from "../../../../components/navigation/Dropdown";
import {
  Botton,
  BottonBox, Button, ButtonContainer, Container, ContainerNew, Img, ImgBox, ImgBoxx, ImgContainer, NewsBox, Textarea, TextareBox
} from "./style";
function NewsPage() {
  const [state, setState] = useState({});
  const fileRef = useRef(null);

  let effect = async () => {
    let partnerRes = await requests.partners.getPartners();
    setState({ ...state, partners: partnerRes.data });
    console.log(partnerRes.data,"DATA");
  };

  useEffect(() => {
    effect();
  }, []);

  let getProducts = async () => {
    if (state.selectedPartner) {
      let productRes = await requests.products.getProducts(
        state.selectedPartner.id
      );
      setState({ ...state, products: productRes.data });
    }
  };

  useEffect(() => {
    getProducts();
  }, [state.selectedPartner]);

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
    let { image_url, description,  } = state;
    let res = await requests.news.createAndSend({
      image_url,
      description,
      partner_id: !!state.selectedPartner ? state.selectedPartner?.id : null,
      product_id: !!state.selectedProduct ? state.selectedProduct?.id : null,
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
                data={state.partners||[]}
                setSelected={(e)=>setState({...state,selectedPartner:e})}
                selected={state.selectedPartner?.id}
                placeholder={'Select Partner'}
                name={state.selectedPartner?state.selectedPartner.name:"Select Partner"}
              />
              <Dropdown
                data={state.products||[]}
                setSelected={(e)=>setState({...state,selectedProduct:e})}
                selected={state.selectedProduct?.id}
                placeholder={'Select Product'}
                name={state.selectedProduct?state.selectedProduct.name:"Select Product"}
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
