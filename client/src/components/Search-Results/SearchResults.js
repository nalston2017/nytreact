import React from "react";
import "./Search.css";
import API from "../../utils/API";

class SearchResults extends React.Component {
handleFavorite = event => {
  const articleID = event.target.getAttribute("data-id");
  const articleObj = {
    headline: event.target.getAttribute("data-id"),
    pub_date: event.target.getAttribute("data-date"),
    web_url: event.target.getAttribute("data-url")
  }

API.saveArticle(articleObj)
.then((res) =>{
  console.log(res)
  document.getElementById(articleId).remove();
})
.catch(err => console.log(err));
}


  render() {
    return (
      <div className="card">
        <div className="card-header">Search Results</div>
        <div className="card-body" id="searchResults">
          {this.props.articles.length ? (
            <div>
              {this.props.articles.map((article, index) => (
                <div className="card resultCard" key={article._id} id={article._id}>
                  <div className="card-body">
                    <span className="badge badge-dark">{index + 1}</span>
                    <h4 className="card-title"><a href={article.web_url} target="_blank" className="card-link">{article.headline.main}</a></h4>
                    <h6 className="card-subtitle mb-2 text-muted">{article.pub_date}</h6>
                    <a href="#/" onClick={this.handleFavorite} data-id={article._id} data-title={article.headline.main} data-url={article.web_url} data-date={article.pub_date} className="btn btn-primary pull-right">Add to Favorites</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No Results to Display</p>
          )}
        </div>
      </div>
    )
  }
}

export default SearchResultCard;
