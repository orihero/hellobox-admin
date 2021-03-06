import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { requests } from "../../../../api/requests";
import {
  Add,
  Addnew,
  Container,
  Icon,
  IconBox,
  Img,
  ImgBox,
  ProdoctsBox,
  Table,
  Td,
  Tr,
} from "./style";
import s from "sweetalert2";

function ProductsPage() {
  const link = "/dashboard/prodocts/edit/";
  const [products, setProducts] = useState([]);
  let effect = async () => {
    try {
      let res = await requests.products.getProducts();
      setProducts(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  }, []);

  let onDelete = async (id) => {
    try {
      let res = await s.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        dangerMode: true,
        showCancelButton: true,
        showConfirmButton: true,
      });
      console.log(res);
      if (!!res.isConfirmed) {
        s.showLoading();
        let deleteRes = await requests.products.deleteProduct(id);
        await effect();
        s.hideLoading();
      }
    } catch (error) {
      console.log(error);
    }
  };

  let onCheck = async (e, is_top) => {
    try {
      s.showLoading(s.getDenyButton());
      let { updated_at, created_at, deleted_at, category, ...rest } = e;
      if (rest.options) {
        rest.options = rest.options.map(
          ({ id, image_url, name, product_id }) => {
            return {
              id,
              image_url,
              name,
              product_id,
            };
          }
        );
      }
      let topRes = requests.products.editProduct({
        ...rest,
        is_top: is_top ? 1 : 0,
      });
      await effect();
      s.hideLoading();
      await s.fire("Success", `Topped up!🔥`, "success");
    } catch (error) {
      alert("Error in topping up the product");
    }
  };

  return (
    <Container>
      <Link
        style={{
          textDecoration: "none",
        }}
        to="/dashboard/prodocts/addnew"
      >
        <Addnew>
          <Add>
            Add new <i class="bx bx-plus"></i>
          </Add>
        </Addnew>
      </Link>
      {products?.map((e) => {
        console.log(e);
        return (
          <ProdoctsBox key={e.id}>
            <Table>
              <Tr>
                <Td>
                  <ImgBox>
                    <Img src={e.image_url} />
                  </ImgBox>
                </Td>
                <Td>{e.name}</Td>
                <Td>{e.price}</Td>
                <Td>{e.category.name}</Td>
                <Td>{e.expires_in}</Td>
                <Td>
                  <input
                    onChange={() => onCheck(e, !e.is_top)}
                    checked={e.is_top}
                    type={"checkbox"}
                    id={`${e.id}`}
                  />
                  <label htmlFor={`${e.id}`}>🔥</label>
                </Td>
              </Tr>
            </Table>
            <Icon>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={{
                  pathname: `${link}${e.id}`,
                  editProps: {
                    id: e.id,
                    img_url: e.image_url,
                    price: e.price,
                    categoryName: e.category.name,
                    expires: e.expires_in,
                    desc: e.description,
                    name: e.name,
                    profit: e.profit_percent,
                  },
                }}
              >
                <IconBox>
                  <i class="bx bxs-edit"></i>
                </IconBox>
              </Link>
              <IconBox onClick={() => onDelete(e.id)}>
                <i class="bx bx-trash-alt"></i>
              </IconBox>
            </Icon>
          </ProdoctsBox>
        );
      })}
    </Container>
  );
}

export default ProductsPage;
