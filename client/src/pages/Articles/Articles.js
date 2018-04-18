import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { SearchBAR,  } from "../../components/Search-Results"

class Articles extends Component {
  constructor(){
    super();

  state = {
    articles: [],
    searchTerm: "",
    startYear: "",
    endYear: ""
  }
};

  componentDidMount() {
    this.loadArticles();
  }

  // Loads all books  and sets them to this.state.books
  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

// Submit button for article search
  handleSearchSubmit = event => {
    event.preventDefault();
    console.log("Submitted");

  API.searchArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
  .then(res => {
    this.setState({
      articles: res.data.response.docs
    })
    console.log(articles);
  })
  .catch(err => console.log(err));
};

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveArticle({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <SearchBar />
          </Col>
          <Col size="md-4">
          //   <Panel heading="Search">
          //     <Search
          //       value={this.state.search}
          //       handleInputChange={this.handleInputChange}
          //       handleFormSubmit={this.handleFormSubmit}
          //     />
          //   </Panel>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Favorite Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={"/books/" + article._id}>
                        <strong>
                          {article.title} by {article.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
