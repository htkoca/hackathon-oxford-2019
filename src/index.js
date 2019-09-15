// dependencies
import React from "react";
import ReactDOM from "react-dom";
import lunr from "elasticlunr";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import CreateProject from "./pages/CreateProject";
import CreateList from "./pages/CreateList";
import ViewList from "./pages/ViewList";
import SearchProducts from "./pages/SearchProducts";
import ProductPage from "./pages/ProductPage";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "CreateProject",
      projName: "",
      listName: "",
      materials: [],
      manufacturers: [],
      vendors: [],
      filtered: [],
      cart: [],
      currentProduct: {},
      lunrIndex: {}
    };
    this.renderPage = this.renderPage.bind(this);
    this.setProjName = this.setProjName.bind(this);
    this.setListName = this.setListName.bind(this);
    this.gotoSearch = this.gotoSearch.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setCurrentProduct = this.setCurrentProduct.bind(this);
    this.setPage = this.setPage.bind(this);
  }
  componentDidMount() {
    Promise.all([
      fetch("https://oxfordhackapi2019.herokuapp.com/materials").then(resp =>
        resp.json()
      ),
      fetch("https://oxfordhackapi2019.herokuapp.com/manufacturers").then(
        resp => resp.json()
      ),
      fetch("https://oxfordhackapi2019.herokuapp.com/vendors").then(resp =>
        resp.json()
      )
    ])
      .then(([materials, manufacturers, vendors]) => {
        let categories = [];
        materials.forEach(function(material) {
          material.Category.split(",").forEach(function(category) {
            if (!categories.includes(category)) {
              if(category !== '') {
                categories.push(category);
              }
            }
          });
        });
        materials = materials.map(function(el) {
          vendors.forEach(function(vendor) {
            if (vendor.id === el.vendor_source) {
              el.vendor = vendor;
            }
          });
          manufacturers.forEach(function(manufacturer) {
            if (manufacturer.id === el.manufacturer_source) {
              el.manufacturer = manufacturer.manufacturer;
              el.country = manufacturer.country;
            }
          });
          if (!el.manufacturer) {
            el.manufacturer = "";
          }
          if (!el.country) {
            el.country = "";
          }
          el.keywords = el.keywords.toLowerCase();
          el.Category = el.Category.toLowerCase();
          el.specifications = el.specifications.split(',');
          el.qty = 0;
          return el;
        });
        this.setState({ materials, categories, manufacturers, vendors });
        let lunrIndex = lunr(function() {
          this.addField("model_name");
          this.addField("keywords");
          this.addField("Category");
          this.addField("manufacturer");
          this.addField("colour_finish");
          this.addField("list_name");
        });
        materials.forEach(product => {
          lunrIndex.addDoc(product);
        });
        this.setState({ lunrIndex });
        console.log("materials", materials);
        console.log("manufacturers", manufacturers);
        console.log("vendors", vendors);
        console.log("categories", categories);
      })
      .catch(err => {
        console.log(err);
      });
  }
  setProjName(value) {
    this.setState({ projName: value, page: "CreateList" });
  }
  setListName(value) {
    this.setState({ listName: value, page: "ViewList" });
  }
  gotoSearch() {
    this.setState({ page: "SearchProducts" });
  }
  setPage(value) {
    console.log("Navigating to:", value)
    this.setState({ page: value });
  }
  filterSearch(value) {
    let rslt = [];
    if (value.length >= 3) {
      this.state.materials.forEach(function(el) {
        if (
          el.model_name.toLowerCase().includes(value.toLowerCase()) ||
          el.colour_finish.toLowerCase().includes(value.toLowerCase()) ||
          el.manufacturer.toLowerCase().includes(value.toLowerCase()) ||
          el.keywords.split(",").includes(value.toLowerCase()) ||
          el.Category.split(",").includes(value.toLowerCase())
        ) {
          rslt.push(el);
        }
      });
    }
    rslt = this.state.lunrIndex
      .search(value, { expand: true })
      .map(product => this.state.lunrIndex.documentStore.getDoc(product.ref));
    console.log(rslt);
    this.setState({ filtered: rslt });
  }
  addToCart(product, qty) {
    product.qty = qty || 0;
    this.setState({ cart: [...this.state.cart, product], page: "ViewList" });
  }
  setCurrentProduct(product) {
    this.setState({ currentProduct: product, page: "ProductPage" });
  }
  renderPage() {
    switch (this.state.page) {
      case "CreateProject":
        return <CreateProject setProjName={this.setProjName} setPage={this.setPage} />;
      case "CreateList":
        return <CreateList state={this.state} setListName={this.setListName} setPage={this.setPage} />;
      case "ViewList":
        return (
          <ViewList
            state={this.state}
            gotoSearch={this.gotoSearch}
            setCurrentProduct={this.setCurrentProduct}
            setPage={this.setPage} 
          />
        );
      case "SearchProducts":
        return (
          <SearchProducts
            state={this.state}
            filterSearch={this.filterSearch}
            addToCart={this.addToCart}
            setCurrentProduct={this.setCurrentProduct}
            setPage={this.setPage} 
          />
        );
      case "ProductPage":
        return (
          <ProductPage
            state={this.state}
            currentProduct={this.state.currentProduct}
            setPage={this.setPage}
          />
        );
      default:
        console.log(this.state.page);
        return "This page does not exist";
    }
  }
  render() {
    return (
      <div>
        <Header setPage={this.setPage} />
        <main className="my-4">{this.renderPage()}</main>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
