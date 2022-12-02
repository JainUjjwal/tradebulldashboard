import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Title from "./Title";
import NewsCard from "./NewsCard";
import * as Dayjs from "dayjs";
function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {
  console.log(props);
  return (
    <React.Fragment>
      <Title>Recent News</Title>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          {props.newsData ? (
            props.newsData.map((newsItem) => (
              <Grid item xs={4}>
                <NewsCard
                  img={newsItem.Images}
                  alt={newsItem.Author}
                  headline={newsItem.Headline}
                  summary={Dayjs(new Date(newsItem.UpdatedAt)).toString()}
                  url={newsItem.URL}
                  key={newsItem.URL}
                />
              </Grid>
            ))
          ) : (
            <div>Select a stock symbol to view recent news.</div>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
