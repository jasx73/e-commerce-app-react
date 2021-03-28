import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

// import books from "../../assets/books.jpeg";
// import electronics from "../../assets/electronics.jpg";
// import furniture from "../../assets/furniture.jpg";
// import mensfashion from "../../assets/mensfashion.jpg";
// import womensfashion from "../../assets/womensfashion.jpg";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "BOOKS",
          imageUrl: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg',
          id: 1,
        },
        {
          title: "ELECTRONICS",
          imageUrl: 'https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/01/appliances.jpg?fit=600%2C360&ssl=1',
          id: 2,
        },
        {
          title: "FURNITURE",
          imageUrl: 'https://www.betterhomeindia.com/wp-content/uploads/2019/03/flora-bedroomset-betterhomeindia.jpg',
          id: 3,
        },
        {
          title: "WOMENS",
          imageUrl: "https://styleyesfashioncrate.com/wp-content/uploads/2019/07/Styleyes-Fashion-Crate-10-Womens-Fashion-Trends-Making-A-Comeback-In-2019.jpg",
          id: 4,
        },
        {
          title: "MENS",
          imageUrl: 'https://images.indianexpress.com/2018/01/men-fashion-759-filephoto.jpg',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
