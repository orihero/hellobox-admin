import React, { createRef, useEffect, useRef, useState } from "react";
import { requests, url } from "../../../../../api/requests";
import Img from "../../../../../assests/image_2021-11-08_19-42-30.png";
import Dropdown from "../../../../../components/navigation/Dropdown";
import {
  Container,
  Image,
  ImgContainer,
  ImgBox,
  BottonContainer,
  Botton,
  InputAreContainer,
  Input,
  Textarea,
  CategoriyaPatnerContainer,
  InputContainer,
  Inputt,
  NameImageContainer,
  AllContainer,
  ImageContainer,
  Imagee,
  InputName,
  Icon,
  IconBotton,
  AddNewContainer,
  Add,
  CanacelSaveContainer,
  Cancel,
  Iconn,
} from "./style";
import Swal from "sweetalert2";
import { NavLink, useHistory } from "react-router-dom";

function AddNewPage() {
  let _imageInput = useRef();
  let history = useHistory();
  let [multiImageInput, setMultiImageInput] = useState([]);

  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  let [categories, setCategories] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState();
  let [partners, setPartnets] = useState([]);
  let [selectedPartners, setSelectedPartners] = useState();
  let [image, setImage] = useState();
  let [images, setImages] = useState([]);
  let [price, setPrice] = useState(0);
  let [profit, setProfit] = useState(0);
  const [expire, setExpire] = useState(0);

  let effect = async () => {
    console.log("loading category");
    try {
      let resCategory = await requests.category.getCategories();
      setCategories(resCategory.data);
      let resPartner = await requests.partners.getPartners();
      setPartnets(resPartner.data);
    } catch (error) {
      console.log({ error });
    }
  };

  let onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  let onChangeDesc = (e) => {
    setDesc(e.target.value);
  };

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

  let onAddNewImage = () => {
    setImages([
      ...images,
      {
        image_url: "",
        name: "",
      },
    ]);
  };

  useEffect(() => {
    setMultiImageInput((elRefs) =>
      Array(images.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [images.length]);

  let onMultiImageUpload = async (e, index) => {
    if (e.target.files.length > 0) {
      let form = new FormData();
      form.append("files", e.target.files[0]);
      try {
        let res = await requests.uploads.uploadImage(form);

        let newImages = images;
        newImages[index] = {
          ...newImages[index],
          image_url: `${url}/file-download/${res.data[0]}`,
        };
        setImages(newImages);
      } catch (error) {
        alert(error);
      }
    }
  };

  let onUpload = () => {
    _imageInput.current.click();
  };

  let onMultiUpload = (index) => {
    multiImageInput[index].current.click();
  };

  useEffect(() => {
    effect();
  }, []);

  let onSave = async () => {
    try {
      Swal.showLoading(Swal.getDenyButton());
      let res = await requests.products.createProduct({
        category_id: selectedCategory?.id,
        price: parseFloat(price),
        name: title,
        description: desc,
        image_url: image.image_url,
        profit_percent: parseInt(profit),
        expires_in: parseInt(expire),
        options: images,
        partner_id: selectedPartners.id,
      });
      Swal.hideLoading();
      await Swal.fire(
        "Success",
        `${title} has been successfully added`,
        "success"
      );
      history.push("/dashboard/prodocts");
    } catch (error) {
      console.error(error);
      Swal.hideLoading();
    }
  };

  const onItemDelete = (index) => {
    setImages(images.filter((e, i) => i !== index));
  };

  return (
    <Container>
      <AllContainer>
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
            <Botton>Reset</Botton>
            <Botton onClick={onUpload}>Upload</Botton>
          </BottonContainer>
        </ImgContainer>
        <InputAreContainer>
          <Input placeholder="name" onChange={onChangeTitle} value={title} />
          <Textarea
            placeholder="Description"
            onChange={onChangeDesc}
            value={desc}
          ></Textarea>
          <CategoriyaPatnerContainer>
            <Dropdown
              data={categories?.length ? categories : []}
              setSelected={setSelectedCategory}
              selected={!!selectedCategory ? selectedCategory.id : -1}
              placeholder={"Select Category"}
              name={
                !!selectedCategory ? selectedCategory.name : "Select category"
              }
            />
            <Dropdown
              data={partners?.length ? partners : []}
              setSelected={setSelectedPartners}
              selected={!!selectedPartners ? selectedPartners.id : -1}
              placeholder={"Select Partner"}
              name={
                !!selectedPartners ? selectedPartners.name : "Select category"
              }
            />
          </CategoriyaPatnerContainer>
          <InputContainer>
            <Inputt
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Inputt
              value={expire}
              onChange={(e) => setExpire(e.target.value)}
              placeholder="expire"
            />
            <Inputt
              placeholder="profit"
              value={profit}
              onChange={(e) => setProfit(e.target.value)}
            />
          </InputContainer>
        </InputAreContainer>
      </AllContainer>
      <AddNewContainer onClick={onAddNewImage}>
        <Add>
          Addnew <i class="bx bx-plus"></i>{" "}
        </Add>
      </AddNewContainer>
      {images.map((img, index) => {
        return (
          <NameImageContainer>
            <ImageContainer>
              <Imagee src={!!image ? img.image_url : Img} />
              <input
                style={{
                  display: "none",
                }}
                ref={multiImageInput[index]}
                onChange={(e) => onMultiImageUpload(e, index)}
                type={"file"}
              />
            </ImageContainer>
            <IconBotton>
              <Icon onClick={() => onMultiUpload(index)}>
                <i class="bx bx-edit"></i>
              </Icon>
              <Icon>
                <i class="bx bx-trash"></i>
              </Icon>
            </IconBotton>
            <InputName
              placeholder="name"
              value={!!img ? img.name : ""}
              onChange={(e) => {
                let newImages = images.map((image, i) => {
                  if (i === index) {
                    return {
                      image_url: image?.image_url,
                      name: e.target.value,
                    };
                  }
                  return image;
                });
                setImages(newImages);
              }}
            />
            <Iconn onClick={() => onItemDelete(index)}>
              <i class="bx bx-trash"></i>
            </Iconn>
          </NameImageContainer>
        );
      })}
      <CanacelSaveContainer>
        <Cancel>
          <NavLink to="/dashboard/prodocts">Cancel</NavLink>
        </Cancel>
        <Cancel onClick={onSave}>Save</Cancel>
      </CanacelSaveContainer>
    </Container>
  );
}

export default AddNewPage;
