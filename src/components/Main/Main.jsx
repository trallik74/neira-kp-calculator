import { Box, Button, Container } from "@mui/material";
import { servicesList } from "../../utils/constant";
import styles from "./Main.module.css";
import SelectArea from "../SelectArea/SelectArea";
import { useDispatch, useSelector } from "react-redux";
import { selectValuesAction, orderAction } from "../../store/slices";
import { useEffect } from "react";
import { hotelCost } from "../../utils/constant";
import Order from "../Order/Order";
import AdditionalServices from "../AdditionalServices/AdditionalServices";

function Main() {
  const selectValues = useSelector((state) => state.selectValues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectValues["select-city"] && selectValues["select-hotel"]) {
      dispatch(
        orderAction.setHotelCost({
          price:
            hotelCost[selectValues["select-city"]][
              selectValues["select-hotel"]
            ],
        })
      );
    }
  }, [selectValues["select-city"], selectValues["select-hotel"]]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (selectValues["select-city"] === "Другой город") {
      const input = document.getElementById("other-city");
      console.log(input.value === "");
      if (input.value === "") {
        dispatch(
          selectValuesAction.setError({
            name: "other-city",
            error: "Заполните это поле.",
          })
        );
        input.focus();
        return;
      }
    }
    console.log("success");
    console.log(selectValues);
  }

  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: 6,
        }}
      >
        <form
          className={styles.form}
          id="select-form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <SelectArea />

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
            mt="10px"
            width="100%"
            sx={
              selectValues["select-city"] &&
              selectValues["select-hotel"] &&
              selectValues["select-event"]
                ? {
                    visibility: "visible",
                    opacity: 1,
                    transition: "opacity 1s ease-in-out",
                  }
                : {
                    visibility: "hidden",
                    opacity: 0,
                  }
            }
          >
            {selectValues["select-city"] &&
              selectValues["select-hotel"] &&
              selectValues["select-event"] && (
                <>
                  <AdditionalServices data={servicesList} />
                  <Order />
                  <Button type="submit">Связаться с нами</Button>
                </>
              )}
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default Main;
