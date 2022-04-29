import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAuth } from "../../Context/authContext";
import { MenuEditDelete } from "./MenuEditDelete";
import { Zoom } from "./Zoom";
import { ViewerPDF } from "./ViewerPDF";
import { Comments } from "../Comments/Comments";
import { CatchLink } from "./CatchLink";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PostCard = ({
  publication,
  author,
  date,
  email,
  id,
  setPosts,
  file,
  avatar,
  hour,
  minute,
  link,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { user } = useAuth();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Diferenciador tipos de archivos
  let pdfPost;
  let imgPost;
  const checking = () => {
    //console.log(file)
    let regex = /pdf/;
    let result = regex.test(file);
    //console.log(result)
    if (result === true) {
      //console.log("eres pdf")
      pdfPost = file;
    } else {
      //console.log("eres imagen")
      imgPost = file;
    }
  };
  checking();
  //console.log(pdfPost)
  //console.log(imgPost)

  //Diferenciador input Link
  let regexLink = /^http/;
  let media;
  let publicText;
  const diferInput = () => {
    //console.log(publication)
    let resultMedia = regexLink.test(publication);
    //console.log(resultMedia)
    if (resultMedia === true) {
      media = publication;
    } else {
      publicText = publication;
    }
  };
  diferInput();
  //console.log(media)
  //console.log(publicText)

  return (
    <div>
      <Card
        sx={{
          width: "100%",
          display: "block",
          margin: "auto",
          padding: "2%",
          boxShadow: "0px 5px 7px -7px",
          marginBottom: "5%",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={avatar}
            ></Avatar>
          }
          action={
            user.email === email ? (
              <div>
                <IconButton aria-label="settings">
                  <MenuEditDelete
                    style={{ position: "relative" }}
                    id={id}
                    setPosts={setPosts}
                    avatar={avatar}
                  />
                </IconButton>
              </div>
            ) : null
          }
          title={author}
          subheader={date + " at " + hour + ":" + minute + " hrs."}
        />
        <CardContent>
          {publication === media ? <CatchLink media={media} /> : null}
          {publication === publicText ? (
            <Typography
              variant="body2"
              style={{ marginBottom: "1%", marginTop: "-1%" }}
            >
              {publication}
            </Typography>
          ) : null}
          {link ? (
            <a target="_blank" rel="noreferrer" href={link}>
              {link}
            </a>
          ) : null}
        </CardContent>
        {file === imgPost ? (
          <Zoom imgPost={imgPost} alt="img post"></Zoom>
        ) : null}
        {file === pdfPost ? <ViewerPDF pdfPost={pdfPost} /> : null}
        {!file ? <div></div> : null}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <Comments />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
