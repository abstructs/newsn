import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NewsService, Article } from './services/NewsService';
import { MenuItem, Card, Theme, withStyles, CardHeader, CardContent, Avatar, IconButton, CardMedia, Typography, CardActions, Collapse, Grid, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import ArticleCard from './ArticleCard';

const styles = (theme: Theme) => ({
  title: {
    // display: "flex"
    marginTop: 50,
    marginBottom: 50
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 100,
    marginTop: 50
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  loadMoreButton: {
    marginTop: 50,
    marginBottom: 50
  }
});

enum Country {
 Canada = "ca",
 US = "us"
}

enum Category {
  news = "news"
}

interface State {
  country: string,
  category: string,
  articles: Article[],
  page: number,
  lastPage: boolean
}

interface Props {
  classes: {
    title: string,
    card: string,
    pos: string,
    button: string,
    formControl: string,
    loadMoreButton: string
  }
}

const countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      country: "ca",
      category: "technology",
      articles: [],
      page: 1,
      lastPage: false
    }
  }
  
  handleCountryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      country: event.target.value
    });
  }
  
  handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      category: event.target.value
    });
  }

  getArticles() {
    NewsService.getTopHeadlines(this.state.country, this.state.category, this.state.page)
    .then(articles => {
      this.setState({
        articles: this.state.articles.concat(articles),
        lastPage: articles.length == 0
      });
    });
  }

  handleSearch() {
    this.setState({
      articles: []
    }, this.getArticles);
  }
  
  handleNextPage() {
    this.setState({
      page: this.state.page + 1
    }, this.getArticles);
  }

  render() {
    const { articles, lastPage } = this.state;
    const { classes } = this.props;
    
    return (
      <div className="App">
          <div>
            <Typography className={classes.title} align="center" variant="h3">newsn</Typography>

            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  search for top news articles
                </Typography>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="country">country</InputLabel>
                  <Select
                    value={this.state.country}
                    onChange={this.handleCountryChange.bind(this)}
                    inputProps={{
                      name: 'country',
                      id: 'country',
                    }}
                  >
                    {countries.map(country => {
                      return (
                        <MenuItem value={country}>{country}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="country">category</InputLabel>
                  <Select
                    value={this.state.category}
                    onChange={this.handleCategoryChange.bind(this)}
                    inputProps={{
                      name: 'category',
                      id: 'category',
                    }}
                  >
                    {categories.map(category => {
                      return (
                        <MenuItem value={category}>{category}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>

              </CardContent>
              <CardActions>
                <Button onClick={this.handleSearch.bind(this)} className={classes.button} size="small">Search</Button>
              </CardActions>
            </Card>

            <Grid spacing={40} container direction="row" justify="center" alignItems="center">
              {articles.map((article, index) => {
                return (
                  <Grid item>
                    <ArticleCard key={index} article={article} />
                  </Grid>
                );
              })}
            </Grid>

            {!lastPage && articles.length != 0 && <Button className={classes.loadMoreButton} onClick={this.handleNextPage.bind(this)}>Load More</Button>}
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
