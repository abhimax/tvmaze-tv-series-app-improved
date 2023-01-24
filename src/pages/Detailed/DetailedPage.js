import classes from "./DetailedPage.module.css";
import { Col, Container, Row } from "react-grid-system";
import AppHeader from "../../layouts/common/AppHeader/AppHeader";
import { Button } from "../../components/Button";
import Back from "../../components/Icon/Back";
import { ShowList } from "../../layouts/showList";
import { DetailedMainView } from "../../layouts/detailed";

const listData = [
  {
    score: 0.90598404,
    show: {
      id: 139,
      url: "https://www.tvmaze.com/shows/139/girls",
      name: "Girls",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Romance"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2012-04-15",
      ended: "2017-04-16",
      officialSite: "http://www.hbo.com/girls",
      schedule: {
        time: "22:00",
        days: ["Sunday"],
      },
      rating: {
        average: 6.7,
      },
      weight: 97,
      network: {
        id: 8,
        name: "HBO",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.hbo.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
      },
      summary:
        "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      updated: 1611310521,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/139",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1079686",
        },
      },
    },
  },
  {
    score: 0.90598404,
    show: {
      id: 139,
      url: "https://www.tvmaze.com/shows/139/girls",
      name: "Test 234",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Romance"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2012-04-15",
      ended: "2017-04-16",
      officialSite: "http://www.hbo.com/girls",
      schedule: {
        time: "22:00",
        days: ["Sunday"],
      },
      rating: {
        average: 6.7,
      },
      weight: 97,
      network: {
        id: 8,
        name: "HBO",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.hbo.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
      },
      summary:
        "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      updated: 1611310521,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/139",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1079686",
        },
      },
    },
  },
  {
    score: 0.90598404,
    show: {
      id: 139,
      url: "https://www.tvmaze.com/shows/139/girls",
      name: "Girls 234",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Romance"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2012-04-15",
      ended: "2017-04-16",
      officialSite: "http://www.hbo.com/girls",
      schedule: {
        time: "22:00",
        days: ["Sunday"],
      },
      rating: {
        average: 6.7,
      },
      weight: 97,
      network: {
        id: 8,
        name: "HBO",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.hbo.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
      },
      summary:
        "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      updated: 1611310521,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/139",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1079686",
        },
      },
    },
  },
  {
    score: 0.90598404,
    show: {
      id: 139,
      url: "https://www.tvmaze.com/shows/139/girls",
      name: "Girls Blaa",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Romance"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2012-04-15",
      ended: "2017-04-16",
      officialSite: "http://www.hbo.com/girls",
      schedule: {
        time: "22:00",
        days: ["Sunday"],
      },
      rating: {
        average: 6.7,
      },
      weight: 97,
      network: {
        id: 8,
        name: "HBO",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.hbo.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
      },
      summary:
        "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      updated: 1611310521,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/139",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1079686",
        },
      },
    },
  },
  {
    score: 0.90598404,
    show: {
      id: 139,
      url: "https://www.tvmaze.com/shows/139/girls",
      name: "Girls",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Romance"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2012-04-15",
      ended: "2017-04-16",
      officialSite: "http://www.hbo.com/girls",
      schedule: {
        time: "22:00",
        days: ["Sunday"],
      },
      rating: {
        average: 6.7,
      },
      weight: 97,
      network: {
        id: 8,
        name: "HBO",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.hbo.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
      },
      summary:
        "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      updated: 1611310521,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/139",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1079686",
        },
      },
    },
  },
];
function DetailedPage() {
  return (
    <div className={classes["search-container"]}>
      <Container>
        <Row justify="center" align="center" >
          <Col  sm={10} md={10}  xxl={8} align="center" debug >
            <AppHeader />
          </Col>
          <Col sm={10} md={10} xxl={8} align="center" debug>
            <Button label={"Back to search Results"} icon={<Back />} darkMode />
          </Col>
          <Col  sm={10}  md={10}  xxl={8} align="center" className={classes["search-list-column"]} debug>
            <DetailedMainView name={listData[0].show.name} rating={listData[0].show.rating} genres={listData[0].show.genres} summary={listData[0].show.summary} imagePath={listData[0].show.image.original} actorList={[{name: "Jennifer Aniston", character: "Rachel Green", image:"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"},{name: "Matthew", character: "Chandler", image:"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"}]}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default DetailedPage;
