import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import { BorderColor } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  borderRadius: "10px",
  border: "2px solid #e30062",
  boxShadow: 24,
  px: 4,
  pt: 4,
  pb: 2,
};

export default function WarningModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: any;
}) {
  const history = useRouter()
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: 25, fontWeight: 500, textAlign: "center" }}
          >
            Opps! You have no plan. <br /> Kindly purchase a plan first.
          </Typography>
          <hr />
          <Container sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
            <Button
              sx={{ backgroundColor: "#e30062" }}
              color="secondary"
              onClick={handleClose}
              variant="contained"
              size="small"
            >
              Close
            </Button>
            <Button
              sx={{
                backgroundImage:
                  "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                borderRadius: 3,
                // border: 0,
                color: "white",
                height: 40,
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              }}
              color="secondary"
              onClick={()=>history.push('/plan')}
              variant="contained"
              size="small"
            >
              Purchase Plan
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
