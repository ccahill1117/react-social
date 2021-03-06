import React from "react";




function NewsItem({image}) {
  var myStyledComponentStyles = {
    border: '1px lightgrey solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  var imgStyle = {
    borderRadius: '20px',
    border: '3px white solid',
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: 'lightblue',
    width: '40px'
  }
  var itemImage = {
    padding: '10px',

  }
  var itemContent = {
    padding: '10px',
  }

  return (
    <div style={myStyledComponentStyles}>
      <div style={itemImage}>
        <img style={imgStyle} src={image}></img>
      </div>
      <hr/>
      <div style={itemContent}>
        <p><em>Title</em></p>
          <hr/>
          <p>ContentContentContent</p>
      </div>
    </div>

  );
}

export default NewsItem;
