import React from "react";\
import "./Seach.css";

class SearchBar extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">Search Parameters</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="searchTerm">Search Term:</label>
              <input type="text" className="form-control" name="searchTerm" id="searchTerm" placeholder="Search Term" value={this.props.searchTerm} onChange={this.props.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="startYear">Start Year: (Required)</label>
              <input type="text" className="form-control" name="startYear" id="startYear" value={this.props.startYear} onChange={this.props.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="endYear">End Year: (Required)</label>
              <input type="text" className="form-control" name="endYear" id="endYear" value={this.props.endYear} onChange={this.props.handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!(this.props.startYear && this.props.endYear)} onClick={this.props.handleSearchSubmit}>Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;
