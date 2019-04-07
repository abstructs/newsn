import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NewsService, Article } from './services/NewsService';
import { Card, Theme, withStyles, CardHeader, CardContent, Avatar, IconButton, CardMedia, Typography, CardActions, Collapse } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import LinkIcon from '@material-ui/icons/Link';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = (theme: Theme) => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

interface State {
    expanded: boolean
}

interface Props {
  classes: {
    card: string,
    media: string,
    actions: string,
    expand: string,
    expandOpen: string,
    avatar: string
  },
  article: Article
}

class ArticleCard extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
        expanded: false
    }
  }

  handleExpandClick() {
    this.setState({ 
        expanded: !this.state.expanded 
    });
  }

  render() {
    const { classes, article } = this.props;
    
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                    {article.title.length == 0 ? "" : article.title[0]}
                </Avatar>
                }
                action={
                <IconButton>
                    {/* <MoreVertIcon /> */}
                </IconButton>
                }
                title={article.title}
                subheader={`By: ${article.author || "Unknown Author"}`}
            />
            <CardMedia
                className={classes.media}
                image={article.urlToImage}
                title="Article photo"
            />
            <CardContent>
                <Typography component="p">
                    {article.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton target='_blank' href={article.url} aria-label="Go to article">
                    <LinkIcon />
                </IconButton>
                <IconButton
                onClick={this.handleExpandClick.bind(this)}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    {article.content}
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
  }
}

export default withStyles(styles)(ArticleCard);
