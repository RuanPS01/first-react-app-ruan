import React, { Component } from 'react';
import api from "../../services/api";
import "./styles.scss";
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        const { page, productInfo } = this.state;
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber)
    }
    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1
        this.loadProducts(pageNumber);
    }


    render() {
        const { products, page, productInfo } = this.state;
        return (
                <div className="product-list">
                    {products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <img className="logoDetails" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1499336315816-097655dcfbda%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&f=1&nofb=1" alt="Nounvenn" />
                            <div className="div-line"></div>
                            <p>{product.description}</p>
                            <Link to={`/products/${product._id}`}>Acessar</Link>
                        </article>
                    ))}
                    <div className="actions">
                        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                    </div>
                </div>
        )
    }
}