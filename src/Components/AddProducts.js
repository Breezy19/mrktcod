import React, { useState, useEffect } from 'react';
import { storage, db } from '../Config/Config';
import { Navbar } from './Navbar';
import { useHistory } from 'react-router-dom';
import { auth } from '../Config/Config';
import '../AddProducts.css'; // Import the CSS file

export const AddProducts = ({ user }) => {
    const history = useHistory();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        } else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or jpeg or png)');
        }
    };

    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            },
            (err) => setError(err.message),
            () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then((url) => {
                    db.collection('Products')
                        .add({
                            ProductName: productName,
                            ProductPrice: Number(productPrice),
                            ProductImg: url,
                        })
                        .then(() => {
                            setProductName('');
                            setProductPrice(0);
                            setProductImg('');
                            setError('');
                            document.getElementById('file').value = '';
                        })
                        .catch((err) => setError(err.message));
                });
            }
        );
    };

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged((user) => {
            if (!user) {
                history.push('/login');
            }
        });
    }, [history]);

    return (
        <div className="container">
            <Navbar user={user} />
            <h2>Add New Product</h2>
            <form autoComplete="off" onSubmit={addProduct} className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <label htmlFor="product-price">Product Price</label>
                <input
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <label htmlFor="product-img">Product Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="file"
                    required
                    onChange={productImgHandler}
                />
                <button type="submit" className="btn btn-success btn-md mybtn">
                    Add Product
                </button>
            </form>
            {error && <span className="error-msg">{error}</span>}
        </div>
    );
};
